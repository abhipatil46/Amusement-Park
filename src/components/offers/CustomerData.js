let CustomerData=[
    {
        "id":0,
        "fname":"Pooja Ajay Shinde",
        "panCard":"DJOPM1234G",
        "selectedOffer":"3000",
        "price":"1000",
        "address":"Sai Appartment,Vishrambag sangli",
        "city":"sangli",
        "zip":"415416"
    }
]
let SaveCustomer = (Customer) =>{
    try {
        console.clear();
        console.log("Data = " + JSON.stringify(Customer, null, 3));
        CustomerData.push(Customer);
    }
    catch (exception) {
        console.log("rootURL is not correct");
    }
}

function getCustomerData(){
    return CustomerData;
}

export {getCustomerData , SaveCustomer};