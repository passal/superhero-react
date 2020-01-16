const axios = require("axios");
const urlBase = "http://localhost:3000";


//register new user
const registerUser = (username, password, email) => {
  axios.post(urlBase + "/register", {
      username: username,
      password: password,
      email: email
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
        console.log(response.data);
        if((response.data).length===0){
            //wrong username\pass
            console.log("wrong username or password dudes!");
        }
    });
};


//get the best basket!
const getBestBasket = (shops, products, maxSplits) => {
  axios.post(urlBase + "/getBasket", {
      "maxSplits": maxSplits,
      "shops": shops,
      "products": products
  },{
      headers:{
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
  }).then( (response) => {
    console.log(response.data);
    });
};

//get random unfilled receipt
const getUnfilledRec = () => {
    let fullUrl = urlBase +  "/OCR";
    axios.get(fullUrl).then((response) =>{
        console.log(response.data);
        if((response.data).length===0){
            //error
            console.log("All receipts are currently full");
        }
    });
};

//fill a receipt (OCR)
const fillReceipt = (receipt) => {
    axios.post(urlBase + "/OCR", receipt, {
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

//get shops in give delivery zone
const getShops = (did) => {
    let fullUrl = urlBase +  "/shopsByDev?did=" + did;
    axios.get(fullUrl).then((response) =>{
        console.log(response.data);
        if((response.data).length===0){
            //error or no shops found
            console.log("no shops in this area");
        }
    });
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

//for testing

//registerUser("itaiz6", 1234, "myemail6@superherio");
//signUser("itaiz1", 1234);


/*
let receipt = {
    "sid": 1,
    "products": {      //pid: price user entered
        1:10,
        2:6
    }
};
fillReceipt(receipt); */


/*
let prods = {
    "1": 2,
    "2": 1,
    "3": 1
};
getBestBasket([1,2,3],  prods, 2);

example response for that:
{
  basket: { '1': [ 2 ], '2': [ 1, 3 ], '3': [] },  //sid: [pid1, pid2]
  shopPrice: { '1': 13, '2': 34, '3': 0 },          //sid: total price in that sid
  price: 47
}

 */

