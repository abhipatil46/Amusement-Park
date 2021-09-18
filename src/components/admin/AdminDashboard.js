import React,{useState,useEffect} from 'react'
import '../css/Offers.css'
import Admin from '../images/admin3.jpg';
import {SaveOffers} from '../offers/OffersData';

function AdminDashboard() {
    let [offerState, cbOfferState]=useState({});
    let onChangeHandle=(event)=>{
        cbOfferState({...offerState,[event.target.name]:event.target.value});
        console.log(offerState);
    }
    let onCreateOffer=()=>{
        SaveOffers(offerState);
    }

    return (
        <div className="row main-admin ">
            <div className=" dashboard">
                <div id="col-3 ">
                    <ul className="nav dash-list flex-column text-center">
                        <li className="nav-item">
                            <h2>Admin</h2>
                            <img className="admin-img" src={Admin} alt="Admin" />
                        </li>
                        <li className="nav-item">
                            <a href="#bookings">Bookings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create Offers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log Out</a>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="col-9 m-1">
                <div className="row" id="bookings">
                    <div className="card revenue-card m-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4 className="card-title">Total revenue</h4>
                            <h2>20000$</h2>
                            <h6 className="">Todays revenue</h6>
                            <h6 >800$</h6>
                        </div>
                    </div>


                    <div className="card order-card m-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4 className="card-title">Total Orders</h4>
                            <h2>1400</h2>
                            <h6 className="">New Orders Today</h6>
                            <h6 >200</h6>
                        </div>
                    </div>

                    <div className="card sales-card m-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4 className="card-title">Daily Sales</h4>
                            <h2>42%</h2>
                            <h6 className="">New Sales Today</h6>
                            <h6 >20</h6>
                        </div>
                    </div>

                </div>
                <div className="create-offers border p-4">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputPassword4">ID</label>
                                <input type="number" className="form-control" onChange={onChangeHandle} name="id" id="inputPassword4" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Offer Name</label>
                                <input type="text" className="form-control" onChange={onChangeHandle} name="name" id="inputEmail4" />
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputPassword4">Price</label>
                                <input type="number" className="form-control" onChange={onChangeHandle} name="price" id="inputPassword4" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Offer info</label>
                            <input type="text" className="form-control" onChange={onChangeHandle} name="info" id="inputAddress" />
                        </div>
                        <button type="button" className="btn btn-success" onClick={onCreateOffer}>Create Offer</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
