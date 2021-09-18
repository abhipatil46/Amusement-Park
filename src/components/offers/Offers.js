import React, { useState, useEffect } from 'react'
import getOffersData from '../offers/OffersData';
import '../css/Offers.css';

function Offers() {
    let [costomerOffer, setOffer] = useState([]);
    useEffect(()=>{
        setOffer(getOffersData());
    },[]);
    // let loadOffer=()=>{
    //     setOffer(getOffersData());
    // }
    return (
        <>
            <div className="container">
            <h1 className="text-center mb-5">Letest Offers</h1>
            <div className="offer-data">
            <h1 className="text-center mb-5">Things to know Before You Bye</h1>
            <div className="row">
                <div className="col-6 p-4">
                    <h3>Visit a Few and Save</h3>
                    <p>The longer you play, the more you save per day. With three awesome parks, a multi-day ticket will let you see more.</p>
                </div>
                <div className="col-6 p-4">
                    <h3>Get Park-to-Park Access</h3>
                    <p>Access the HogwartsTM Express to ride between both lands of The Wizarding World of Harry PotterTM.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 p-4">
                    <h3>Experience Universal’s Hotels</h3>
                    <p>Walk or take complimentary transportation to the parks, as well as other great benefits, when you stay at our hotels.</p>
                </div>
                <div className="col-6 p-4">
                    <h3>Upgrade to Express Pass</h3>
                    <p>Skip the regular lines in Universal Studios and Islands of Adventure.  Valid theme park admission is required.</p>
                </div>
            </div>
            </div>
            {/* <button className="btn btn-primary" onClick={loadOffer}>Check Letest Offers</button> */}
            <div className="offer-div m-3 p-3 row">
                { costomerOffer.map((item)=>
                        <div className="card col-5 card-h m-2 ml-5 text-center border-dark">
                            <div className="card-body">
                                <h5 className="card-title">{item["name"]}</h5>
                                <p className="card-text">{item["info"]}</p>
                                <a href="#" className="btn btn-primary m-2">{item["price"]}</a>
                                <a href="#" className="btn btn-success m-2">Book Ticket</a>
                            </div>
                        </div>
                )}   
                </div>
            </div>
    </>
)
}

export default Offers;
