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
            <h1 className="text-center">Letest Offers</h1>
            {/* <button className="btn btn-primary" onClick={loadOffer}>Check Letest Offers</button> */}
            <div className="offer-div m-3 p-3 row">
                { costomerOffer.map((item)=>
                        <div className="card col-5 card-h m-2 ml-5 text-center">
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
