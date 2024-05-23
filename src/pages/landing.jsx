import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Landing(){
    const navigate = useNavigate();
    useEffect(() => { 
        if(localStorage.getItem('token'))
            navigate("/home");
      }, []);
    return(
        <div className="wrapper" >
            {/* style={{backgroundColor: `rgb(122, 43, 226)`}} */}
            <h2>ZIRA</h2>
            <p>The place for all your software development tracking needs.</p>
        </div>
    );
}