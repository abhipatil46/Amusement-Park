import React, { useState, useEffect } from 'react'
import getOffersData from '../offers/OffersData';
import '../css/Offers.css';

function Offers() {
    const { offer, setOffer } = useState();
    return (
        <>
            <div className="container">
                <button className="btn btn-primary">Load Offers</button>
                <div className="offer-div">
                        <div className="card w-50 mt-3 m-1">
                            <div className="card-body">
                                <h5 className="card-title">Roller Coster</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                        <div className="card w-50 mt-3 m-1">
                            <div className="card-body">
                                <h5 className="card-title">Roller Coster</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                        <div className="card w-50 mt-3 m-1">
                            <div className="card-body">
                                <h5 className="card-title">Roller Coster</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                        </div>
              </div>          
        </>
    )
}

export default Offers
