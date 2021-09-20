let offersData=[
    {   
        "id":0,
        "name":"Roller Coster",
        "price":"3000",
        "info":"Roller coster info will come over Here"
    },
    {   "id":1,
        "name":"Adventure Park",
        "price":"2999",
        "info":"Adventure Park info will come over Here"
    },
    {   "id":2,
        "name":"Water Park",
        "price":"1999",
        "info":"Water info will come over Here"
    }
];

let SaveOffers = (offer) =>{
    try {
        console.clear();
        console.log("Data = " + JSON.stringify(offer, null, 3));
        offersData.push(offer);
    }
    catch (exception) {
        console.log("rootURL is not correct");
    }
}

function getOffersData(){
    return offersData;
}

export {getOffersData , SaveOffers};