import React from "react";
import './styles.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ACCESS_TOKEN_NAME } from "../utils/contants";
import { API_BASE_URL } from "../utils/contants";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    var myprofile = null;
    var statuscode;

    useEffect(() => { 
        if(localStorage.getItem('token'))
            navigate("/home");
      }, []);

    async function login(event) {
        event.preventDefault();
        try {
            if(email!=="" && password!==""){
            await axios.post(API_BASE_URL + "/api/v1/auth/authenticate", {
                email: email,
                password: password,
            }).then((res) => {
                //console.log("Bearer " + res.data.token);
                authenticate(res.data.token);
            }, fail => {
                console.log(fail.response.status+" ohno");
                statuscode=fail.response.status;
                toast.error("Invalid credentials.", {
                    theme: "dark"
                  });
            });
        }else{
            toast.error("Fields may not be filled.", {
                theme: "dark"
              });
        }
        } catch (err) {
            alert(err);
        }
    }

    async function authenticate(token) {
        try {
            await axios.get(API_BASE_URL + "/api/hello", {
                headers: {
                    'Authorization': "Bearer " + token
                }
            }).then((res) => {
                console.log(res);
                myprofile = res;
                localStorage.setItem('token', res.data.token);
                navigate("/home");
            }, fail => {
                console.log("Login failed, " + fail);
            });
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="wrapper">
            <div className="container-fluid">
                <form action="">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="email">Email ID:</label>
                        </div>
                        <div className="col">
                            <input type="email" name="email" id="email" placeholder="Email" className="form-control"
                                value={email} onChange={(event) => { setEmail(event.target.value); }} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password">Password: </label>
                        </div>
                        <div className="col">
                            <input type="password" name="password" placeholder="Password" id="password" className="form-control"
                                value={password} onChange={(event) => { setPassword(event.target.value); }} required />
                        </div></div>
                    <button type="submit" className="btn btn-dark" onClick={login}>Submit</button>
                    <ToastContainer pauseOnFocusLoss={false} autoClose={3000}/>
                </form>
            </div>
        </div>
    );
}
export default Login;