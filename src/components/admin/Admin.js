import React from 'react'
import '../admin/Admin.css';
function Admin() {
    let onLogin=()=>{
        let AD=document.getElementById("alertDiv");
        let LF=document.getElementById("login-form");
        LF.style.display="block";
        AD.style.display="none";
        let submit=document.getElementById("Submit");
        console.log(AD);
        let email=document.getElementById("exampleInputEmail1").value;
        let pass=document.getElementById("exampleInputPassword1").value;
            if(email.length==0 && pass.length==0){
                alert("Invalid Input , You Must add appropriate email & Password");
                    AD.style.display="block";
                }
                else{
                    AD.style.display="none";
                    LF.style.display="none";
                }
            }

    return (
        <div classNameNameName="container m-5 ">
        <center>
        <form className="m-5 admin-login border rounded border-dark p-4" id="login-form" >
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="button" className="btn btn-primary" onClick={onLogin} id="Submit">Submit</button>
  <div class=" text-center alert alert-danger m-4" id="alertDiv" role="alert">
  Invaid Input
</div>
</form>
</center>
        </div>
    )
}

export default Admin
