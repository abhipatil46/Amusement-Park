import React from 'react'
import '../admin/Admin.css';
function Admin() {
        let loginFrom=document.getElementById("login-from");
        let submit=document.getElementById("Submit");
        let onLogin=()=>{
            loginFrom.style="display:none";
        }

    return (
        <div classNameNameName="container m-5">
        <form className="m-5 admin-login" id="login-from" >
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={onLogin} id="Submit">Submit</button>
</form>
        </div>
    )
}

export default Admin
