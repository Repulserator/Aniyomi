import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Footer from "./Footer";
import "./home.css";
import Background from './Background';
import Header from './Header';
import "../header.css";
import { signout, isAuthenticate } from '../auth/auth';


const Home = ({history}) => {
    
    return (
        <div>
            
            <div style={{width: "101vw", marginLeft: "-17.5vh" }}><Header/></div>
            <div className="ovh">
                
                <Background />
                <div className="cardtr">
                    <br></br>
                    <br></br>

                    <center>
                        <div>
                            <h5>
                                This Website Is Still Under Development,&nbsp; &nbsp;In the mean time
                            </h5>
                        </div>
                        <br></br>
                        <div>
                            <h4 style={{ color: "rgb(200,200,0)", position: "relative" }}>
                                <Link to='/allvideo'>Click here to see entire repository</Link>
                            </h4>
                        </div>
                    </center>

                </div>
                <button onClick={()=> {
                    signout(()=>{
                        history.push("/");
                    })
                }}  style={{ position: "absolute", height: "35px", left: "90%", bottom: "3%", margin: "1px"}} className="btn btn-primary btn-block">Logout</button>
            </div>
            
        </div>



    )
}


export default Home;