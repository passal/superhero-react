import { SHOP_TO_ID } from '../src/src/constants';

const axios = require("axios");
const urlBase = "http://localhost:5000";

let shopToId = {
    "SuperYoda": 1,
    "Shufersal Ramat Aviv": 2,
    "SuperYoda Tel-Aviv": 3,
    "SuperYoda East Tel-Aviv": 4,
    "Shufersal Ramat-Gan": 5,
    "SuperYoda South": 6,
    "Rami Levy TLV Center": 7
};

let zoneToId = {
    "Tel-Aviv North": 1,
    "Tel-Aviv East": 2,
    "Tel-Aviv South": 3,
    "Tel-Aviv West": 4,
    "Tel-Aviv Center": 5,
    "Ramat-Gan": 6
};

let productToId = {
    "Milk (1 Liter bottle)": 1,
    "Eggs": 2,
    "Ground Beef (Kilograms)": 3,
    "Water (1.5 Liter bottle)": 4,
    "Cream Cheese (250 Grams cup)": 5,
    "Bread (1 Loaf)": 6,
    "Potatoes (Kilograms)": 7,
    "Tomatoes (Kilograms)": 8,
    "Pasta (500 Grams pack)": 9,
    "Rice (400 Grams pack)": 10,
    "Apples (Kilograms)": 11,
    "Canned Tuna (4 pack)": 12,
    "Soy milk (1 Liter bottle)": 13,
    "Pringles (600 Grams can)": 14,
    "Bamba (70 Grams pack)": 15,
    "Bamba (200 Grams pack)": 16
};

/* ---------- register and sign in --------- */
//register new user
const registerUser = (username, password, email, area) => {
    let did = zoneToId[area];
    axios.post(urlBase + "/register", {
      username: username,
      password: password,
      email: email,
      did: area
  }, {
      headers:{
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
  }).then((response) => {
      console.log(response.status);
  }).catch((error) => {
      console.log((error.response.data)); //this will return a message from the server on the error
  })
};

//sign user in
const signUser = (username, password) => {
    let fullUrl = urlBase +  "/signin?username=" + username + "&password=" + password;
    axios.get(fullUrl).then((response) =>{
        response.data[0]["area"] = Object.keys(zoneToId).find(key => zoneToId[key] == response.data[0]["did"]);
        delete response.data[0]["did"];
        console.log(response.data);
        if((response.data).length===0){
            //wrong username\pass
            console.log("wrong username or password dudes!");
        }
    });
};

/* ----------- basket related --------------- */

//get the best basket!
const getBestBasket = (shops, products, maxSplits, uid) => {
    let shopsId = [];
    mapShopsToId(shops, shopsId);
    let productsId = {};
    mapProductToId(products, productsId);
    axios.post(urlBase + "/getBasket", {
        "maxSplits": maxSplits,
        "shops": shopsId,
        "products": productsId
    },{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        payCreds(uid);
    });
};

const getBasketResult = (uid) =>{
  axios.get(urlBase + "/getBasket").then((response) =>{
      let result = [];
      console.log(response.data);
      mapBasketResultToName(response.data, result);
      console.log(result);
  });
};



/* ------- upload receipt related ------- */

///THIS isn't working !!!!!!!!!!!!!!!!!!!!!!!!
const uploadImage = (file) => {
    axios.post("/uploadImage", {
        file: file
    }, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) =>{
        console.log(response.status);
    })
};

//upload receipt information, like the shop and the price (not the file itself)
const uploadReceipt = (shop, sum, uid) => {
    const shopId = shopToId[shop];

    axios.post("https://localhost:5000/uploadReceipt", {
        sid: shopId,
        sum: sum,
        id: uid
    } , {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        console.log(response.status);
    }).catch((error) => {
        console.log((error.response.data)); //this will return a message from the server on the error
    })
};


/* -------- fill receipt and OCR related ----- */

//get random unfilled receipt data (not file!)
const getUnfilledRec = () => {
    axios.get("http://localhost:5000/OCR").then((response) => {
        response.data[0]["shop"] = Object.keys(shopToId).find(key => shopToId[key] === response.data[0]["sid"]);
        delete response.data[0]["sid"];

        if((response.data).length===0){
            console.log("All out receipts are filled");
        }
    });
};

//fill a receipt (OCR) - send prices and shit
const fillReceipt = (receipt, uid) => {
    const receiptIds = {
        sid: SHOP_TO_ID[receipt.shop],
        products: {}
    };
    receiptIds["sid"] = shopToId[receipt["shop"]];
    receiptIds["products"] = {};

    mapProductToId(receipt["products"], receiptIds["products"]);
    console.log(receiptIds);
    axios.post(urlBase + "/OCR", receiptIds, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        earnCreds(uid);
        markRec(receipt.rid);
        console.log(response.status);
    }).catch((error) => {
        console.log((error.response.data)); //this will return a message from the server on the error
    })
};

/* -------- general functions --------*/

//get all delivery zones
const getAllZones = () => {
    let fullUrl = urlBase +  "/allZones";
    axios.get(fullUrl).then((response) =>{
        console.log(response.data);
        if((response.data).length===0){
            //error
            console.log("No Zones inserted");
        }
    });
};

//get shops in give delivery zone
const getShops = (area) => {
    let did = zoneToId[area];
    let shop;
    let fullUrl = urlBase +  "/shopsByDev?did=" + did;
    axios.get(fullUrl).then((response) =>{
        let shops = [];
        for(let i=0; i<response.data.length; i++){
            shop = Object.keys(shopToId).find(key => shopToId[key] == response.data[i]["sid"]);
            shops.push(shop);
        }
        console.log(shops);
        if((response.data).length===0){
            //error or no shops found
            console.log("no shops in this area");
        }
    });
};

//get credits from user
const getCredits = (id) => {
    let fullUrl = urlBase +  "/checkCreds?id=" + id;
    axios.get(fullUrl).then((response) =>{
        console.log(response.data[0]["credits"]);  //this is the number of credits as int
        if((response.data).length===0){
            //error or no shops found
            console.log("user not found");
        }
    });
};

/* ------------- internal functions ------------------ */
//mark a receipt as full
const markRec = (id) => {
    axios.post(urlBase + "/markRec", {
        id: id
    }, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        console.log(response.status);
    }).catch((error) => {
        console.log((error.response.data)); //this will return a message from the server on the error
    })
};

//reduce 2 credits from user for building a new cart
const payCreds = (id) => {
    axios.post(urlBase + "/payCredits", {
        id: id
    }, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        console.log(response.status);
    }).catch((error) => {
        console.log((error.response.data)); //this will return a message from the server on the error
    })
};


//increase 1 credit to user for building uploading or filling a receipt
const earnCreds = (id) => {
    axios.post(urlBase + "/earnCredits", {
        id: id
    }, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        console.log(response.status);
    }).catch((error) => {
        console.log((error.response.data)); //this will return a message from the server on the error
    })
};

/* ---------mapping functions ------------------------- */
function mapShopsToId(shopsName, shopsId){
    let id;
    shopsName.forEach(name => {
        id = shopToId[name];
        shopsId.push(id);
    })
}

function mapProductToId(products, productsId){
    let id;
    for(let prod in products){
        if(products.hasOwnProperty(prod)){
            id = productToId[prod];
            productsId[id] = products[prod];
        }
    }
}

function mapBasketResultToName(idObj, result){
    let storeName,  prodId, prodName;
    let stores = Object.keys(idObj["basket"]);
    for(let i=0; i<stores.length; i++){
        if(idObj["shopPrice"][stores[i]]===0) continue;
        let shopObj = {
            "store": "",
            "price": 0,
            "products": []
        };
        storeName = Object.keys(shopToId).find(key => shopToId[key] == stores[i]);
        shopObj["store"] = storeName;
        shopObj["price"] = idObj["shopPrice"][stores[i]];
        for(let j=0; j<(idObj["basket"][stores[i]]).length; j++){
            prodId = idObj["basket"][stores[i]][j];
            prodName = Object.keys(productToId).find(key => productToId[key] == prodId);
            shopObj["products"].push(prodName);
        }
        result.push(shopObj);
    }
}

//get all prices for given shops and products
const getAllPrices = (shops, products) => {
    let shopsId = [];
    mapShopsToId(shops, shopsId);
    let productsId = {};
    mapProductToId(products, productsId);
    axios.post(urlBase + "/allPrices", {
        "shops": shopsId,
        "products": productsId
    },{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        for(let i=0; i<(response.data).length; i++){
            response.data[i]["store"] = Object.keys(shopToId).find(key => shopToId[key] == response.data[i]["store"]);
            for(let j=0; j<(response.data[i]["prods"]).length; j++){
                response.data[i]["prods"][j]["product"] = Object.keys(productToId).find(key => productToId[key] == response.data[i]["prods"][j]["product"]);
            }
        }
        //the object is response.data, but js can't print nested objects so for printing use the below line:
        //console.log(console.log(JSON.stringify(response.data, null, 4)));
    });
};







