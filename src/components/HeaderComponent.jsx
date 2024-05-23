import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './HeaderComponent.css';
import { ACCESS_TOKEN_NAME } from "../utils/contants";
import Dropdown from 'react-bootstrap/Dropdown';


function HeaderComponent() {
    const navigate = useNavigate();
    var access = localStorage.getItem('token');
    async function logout() {
        localStorage.removeItem('token');
        navigate("/");
        //window.location.reload();
    }


    return (
        /* <div className="no">
            <h1>This is a header</h1>
            <Link to="/"><button className="btn btn-dark">h o m e</button></Link>
        </div> */
        /* <div className="header">
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h3 className="navbar-brand">Zira</h3>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li> <Link to="/"><button className="btn btn-primary">Login</button></Link></li>
                        <li><button className="btn btn-primary">Sign-up</button></li>
                    </ul>
                </div>
            </nav>
        </div> */
        <nav className="navbar navbar-inverse ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/home"> <button className="btn" style={{ color: 'white' }}><h3>Zira</h3></button> </Link>

                </div>
                {access == null ? (
                    <div className="buttons">
                        <Link to="/register"> <button className="btn" style={{ color: 'white' }} > Sign Up</button></Link>
                        <Link to="/login"><button className="btn" style={{ color: 'white' }}> Login</button></Link>
                    </div>
                ) : (

                    <div className="buttons">
                        <button className="btn" style={{padding: '0px'}}>
                            <Dropdown data-bs-theme="light">
                                <Dropdown.Toggle id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/board">Board</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </button>

                        <Link to="/profile" style={{ color: 'white' }}><button className="btn">My Profile</button></Link>
                        <button className="btn" onClick={logout}> Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default HeaderComponent;