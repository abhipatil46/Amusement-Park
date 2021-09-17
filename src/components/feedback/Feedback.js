import React from 'react'
import '../feedback/Feedback.css'
function Feedback() {
    return (
        <div className ="main">

            <h2>Feedback Form</h2>

            <form className="row g-3 m-3">
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationDefault01"  required/>
                </div>

                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02"  required/>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Email Id</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="email" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Mobile Number</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">91</span>
                        <input type="number" max ="10" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Pan Number</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
            </form>

            <form className="row g-3 m-3">    
                <div className="col-md-6">
                    <label for="validationDefault03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationDefault03" required/>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-md-3">
                    <label for="validationDefault05" className="form-label">Feedback</label>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>

        </div>
    )
}

export default Feedback
