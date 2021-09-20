let FeedbackData=[
    {   
        "fname":"Revati",
        "lname":"Joshi",
        "email":"revati1234@gmail.com",
        "mobile":"1234567890",
        "panNumber":"df1368gh777",
        "city":"Pune",
        "feedback": "offers are good",

    }
];

let SaveFeedback = (feedback) =>{
    try {
        console.clear();
        console.log("Data = " + JSON.stringify(feedback, null, 3));
        FeedbackData.push(feedback);
    }
    catch (exception) {
        console.log("rootURL is not correct");
    }
}

function getFeedbackData(){
    return FeedbackData;
}

export {getFeedbackData , SaveFeedback};