import Issue from '../components/Issue';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Board() {
    var name1 = "testing"
    var objects = [1,2,3];
    const navigate = useNavigate();
    useEffect(() => { 
        if(!localStorage.getItem('token'))
            navigate("/");
      }, []);
    return (
        <div className="wrap">
            {/* style={{backgroundColor: `rgb(122, 43, 226)`}} */}
            <p>project/{name1}</p>
            <p>hello</p>
            <div className="container board-container">
                
                {/* <tbody>
                    {objects.map(function (object, i) {
                        return <Login obj={object} key={i} />;
                    })}
                </tbody> */}
                <Issue></Issue>
                <Issue></Issue>
                <Issue></Issue>
            </div>
        </div>
    );
}