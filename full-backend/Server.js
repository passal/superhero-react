const express = require('express');
const sqlConnection = require("./database");
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const OCR = require("./products");
const getBasket = require("./getBasket");
const server = express();
const port = 5000;
const FOLDER_PATH = 'C:\\Users';
let basketResult;

server.use(express.static('public'));
server.use( bodyParser.json() );
server.use(bodyParser.urlencoded({extended:false}))
server.get("/", (req, res) => {  res.sendFile(__dirname + "/public/index.html"); });
/* code for image handling, not tested
//for image upload and save
const storage = multer.diskStorage({
    destination: FOLDER_PATH,
    filename: function(req, file, cb){
        cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
}).single("myImage");
*/

server.listen(port, () => console.log("Server listening to port 3000"));
/*
server.post("postOCRProducts", (req, res) =>{
    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        /*Now do where ever you want to do*/
  /*      if(!err) {
            return res.sendStatus(200);
        }
    });
});

   */




//sign in (query for name\password, return result)
server.post("/signIn", (req,res) => {
    let sql = "SELECT * FROM User WHERE User.username = ? AND User.password = ?;";
    let get = [req.body.username, req.body.password];
    sqlConnection.query(sql, get,  (err, rows) => {
        if(err){
            console.log(err);
        }
        res.status(200).send(rows);
    });
});


//register new user, returns status 400 if already exists or 200 if registering correctly
server.post("/signUp", (req, res) => {
    let checkIfExists = "SELECT * FROM User WHERE User.email = ?;";
    let post = req.body.email;
    sqlConnection.query(checkIfExists, post, (err, rows) => {
        if (err) {
            console.log(err)
        } else if (rows.length) {
            res.status(400).send("That email address is already registered");
        } else { //register user
            let sql = "INSERT INTO User (username,password,email,credits,did) VALUES(?,?,?,2,?);";
            let params = [req.body.username, req.body.password, req.body.email,req.body.did];
            sqlConnection.query(sql, params, (err) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(400);
                }
                res.sendStatus(200);
            });
        }
    });
});

//save products information from a receipt to DB
server.post("/OCR" , (req,res) => {
    OCR.postOCRProducts(req.body);
    res.sendStatus(200);
});

//get the cheapest basket!
server.post("/getBasket", (req, res) => {
    let products = Object.keys(req.body.products);
    let pid, sid, index, sidIndex;
    products = products.map(v => parseInt(v)); //parse to ints
    let shops = req.body.shops;
    getBasket.createPriceMatrix(shops, products, (priceMatrix) => {
        getBasket.findBestBasket(shops, products, req.body.maxSplits, priceMatrix, (bestBasket, bestBasketPrice) => {
            //make the basket into a json
            let resultObject = {};
            resultObject["basket"] = {};
            //for each sid, create an array  in the object
            for (let shopIndex = 0; shopIndex < shops.length; shopIndex++) {
                resultObject["basket"][shops[shopIndex]] = [];
            }

            for (let basketIndex = 0; basketIndex < bestBasket.length; basketIndex++) {
                pid = products[basketIndex]; //get product pid
                index = shops[bestBasket[basketIndex]].toString();
                resultObject["basket"][index].push(pid); //insert pid to the relevant shop
            }
            //now lets sum the price in each shop (not including amounts)
            resultObject["shopPrice"] = {};
            for (let shopIndex = 0; shopIndex < shops.length; shopIndex++) {
                resultObject["shopPrice"][shops[shopIndex]] = 0;
            }
            for(let i=0;  i<bestBasket.length; i++){
                pid = products[i];
                sidIndex = bestBasket[i];
                sid = shops[sidIndex];
                resultObject["shopPrice"][sid.toString()] += req.body.products[pid]*priceMatrix[i][sidIndex];
            }
            //Now to add prices if product's amount is >1.
            resultObject["price"] = bestBasketPrice;
            for (let i = 0; i < products.length; i++) {
                pid = products[i];
                sid = bestBasket[i];
                if (req.body.products.hasOwnProperty(pid)) {
                    if (req.body.products[pid] > 1) {
                        resultObject["price"] += ((req.body.products[pid] - 1) * priceMatrix[i][sid]);
                    }
                }
            }
            basketResult = resultObject;
            res.sendStatus(200);
        });

    });
});

server.get("/getBasket", (req, res) => {
  res.status(200).send(basketResult);
});

//insert new receipt to the DB
server.post("/uploadReceipt", (req, res) => {
    let sql = "INSERT INTO Receipt (sid,sum,filled) VALUES(?,?,FALSE);";
    let params = [req.body.sid, req.body.sum];
    sqlConnection.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }
        let maxId = 0;
        let sql1 = "SELECT MAX(id) FROM Receipt;";
        sqlConnection.query(sql1, (err1, ans) => {
            if(err1){
                console.log(err1);
            }
            maxId = (JSON.parse(JSON.stringify(ans)))[0]["MAX(id)"];
            let newPath = FOLDER_PATH+maxId+'.jpg';
            let sql2 = "UPDATE Receipt SET img = ? WHERE id = ?;";
            let params2 = [newPath, maxId];
            sqlConnection.query(sql2, params2, (err2, rows2) => {
                if (err2) {
                    console.log(err2);
                }
                let sql3 = "UPDATE User SET credits = credits+1 WHERE id = ?;";
                let params3 = [req.body.id];
                sqlConnection.query(sql3, params3, (err, rows3) => {
                    res.sendStatus(200);
                });
            });
        });
    });
});

//get a random unfilled receipt from db, pass to client
server.get("/OCR", (req,res) => {
    let sql = "SELECT * FROM Receipt WHERE Receipt.filled <> TRUE ORDER BY RAND() LIMIT 1;";
    sqlConnection.query(sql,  (err, rows) => {
        if(err){
            console.log(err);
        }
        res.send(rows);
    });
});


//get shops by deliverzone
server.get("/shopsByDev", (req,res) => {
    let sql = "SELECT sid FROM shopzone WHERE shopzone.did = ?;";
    let get = [req.query.did];
    sqlConnection.query(sql, get,  (err, rows) => {
        if(err){
            console.log(err);
        }
        res.status(200).send(rows);
    });
});

//get credits for given user
server.get("/checkCreds", (req,res) => {
    let sql = "SELECT credits FROM User WHERE User.id = ?;";
    let get = [req.query.id];
    sqlConnection.query(sql, get,  (err, rows) => {
        if(err){
            console.log(err);
        }
        res.status(200).send(rows);
    });
});

//mark receipt as filled
server.post("/markRec", (req, res) => {
    let sql = "UPDATE Receipt SET filled = TRUE WHERE id = ?;";
    let params = [req.body.id];
    sqlConnection.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }
        res.sendStatus(200);
    });
});



//add 1 credit to given user
server.post("/earnCredits", (req, res) => {
    let addCreds = "UPDATE User SET credits = credits+1 WHERE id = ?";
    let post = req.body.id;
    sqlConnection.query(addCreds, post, (err, rows) => {
        if (err) {
            console.log(err)
        }
        else{
            res.status(200).send(rows);
        }
    });
});

//reduce 2 credit from given user
server.post("/payCredits", (req, res) => {
    let payCreds = "UPDATE User SET credits = credits-2 WHERE id = ?";
    let post = req.body.id;
    sqlConnection.query(payCreds, post, (err, rows) => {
        if (err) {
            console.log(err)
        }
        else{
            res.status(200).send(rows);
        }
    });
});

//get all delivery Zones
server.get("/allZones", (req,res) => {
    let sql = "SELECT * FROM deliveryzone;";
    sqlConnection.query(sql,  (err, rows) => {
        if(err){
            console.log(err);
        }
        res.status(200).send(rows);
    });
});



//get all prices for given products and shops
server.post("/allPrices", (req, res) => {
    let products = Object.keys(req.body.products);
    let pid, sid, index, sidIndex;
    products = products.map(v => parseInt(v)); //parse to ints
    let shops = req.body.shops;
    getBasket.createPriceMatrix(shops, products, (priceMatrix) => {
        let ans = new Array(shops.length);
        for(let i = 0; i < shops.length; i++){
            let prods = new Array(products.length);
            for(let j = 0; j < products.length;j++){
                let midItem = {
                    "product":products[j],
                    "price":priceMatrix[j][i]
                };
                prods[j] = midItem;
            }
            let item = { "store":shops[i],
                prods:prods
            };
            ans[i]=item;
        }
        res.send(ans);
    })
});

