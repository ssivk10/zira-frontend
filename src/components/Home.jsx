import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    var project = "Hello World";
    var id = 'P01';
    var lead = "John Doe";
    useEffect(() => {
        if (!localStorage.getItem('token'))
            navigate("/");
    }, []);
    return (
        <div className="app">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Lead</th>
                        <th>More actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="/board"><button className="btn btn-light">{id}</button></Link></td>
                        <td><p>{project}</p></td>
                        <td><p>{lead}</p></td>
                        <td><p>date</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Home;