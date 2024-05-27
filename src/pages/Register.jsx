import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_NAME } from "../utils/contants";
import { API_BASE_URL } from "../utils/contants";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    var [emailErr, setEmailErr] = useState(false);
    var [pwdError, setPwdError] = useState(false);
    const validEmail = new RegExp('^[a-z][a-z0-9\S]{4,}[@][a-z]{2,}.[a-z]{2,}$');
    const validPassword = new RegExp('^(?=.*?[A-Z])(?=.*\S+)(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
    const validate = () => {
        if (!validEmail.test(email)) {
            setEmailErr = true;
        }
        if (!validPassword.test(password)) {
            setPwdError = true;
        }

    }
    const navigate = useNavigate();
    let body = {
        firstName: firstName,
        email: email,
        password: password,
    }

    useEffect(() => {
        if (localStorage.getItem('token'))
            navigate("/home");
    }, []);

    async function register(event) {

        event.preventDefault();
        try {
            validate();
            if (body.email !== "" && body.password !== "" && (!emailErr && !pwdError)) {
                await axios.post(API_BASE_URL + "/api/v1/auth/register", body).then((res) => {
                    console.log(res);
                    console.log(body);
                    localStorage.setItem('token', res.data.token);
                    navigate("/home");
                }, fail => {
                    console.error(fail);
                    toast.error("Invalid credentials.", {
                        theme: "dark"
                    });
                });
            }
            else if (emailErr || pwdError) {
                toast.error("Invalid username or password.", {
                    theme: "dark"
                });
            }
            else {
                toast.error("Enter some data.", {
                    theme: "dark"
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="wrapper">
            <h3>Register</h3>
            <div className="container">

                <form action="">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name:</label>
                        </div>
                        <div className="col">
                            <input type="text" name="firstName" id="firstName" className="form-control" placeholder="Name"
                                value={firstName} onChange={(event) => { setFirstName(event.target.value); }} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="email">Email ID*:</label>
                        </div>
                        <div className="col">
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email"
                                value={email} onChange={(event) => { setEmail(event.target.value); }} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password">Password*:</label>
                        </div>
                        <div className="col">
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password"
                                value={password} onChange={(event) => { setPassword(event.target.value); }} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={register}>Submit</button>
                    <ToastContainer />
                </form>

            </div>
        </div>
    );
}

export default Register;