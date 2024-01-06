import React, { Component, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getVideo } from '../auth/videohelper';
import vidmp4 from '../assets/a21la.mkv';
import { isAuthenticate } from '../auth/auth';
import Footer from './Footer';
import Header from './Header';

let linkvar = "https://vimeo.com/626832936"

export const Video = ({ match }) => {

    const [values, setValues] = useState({
        name: "",
        link: "",
        description: "",
        category: "",
        error: "",
    });

    const {
        name,
        link,
        description,
        category,
        error,
    } = values;

    const preload = videoId => {
        getVideo(videoId).then(data => {
            //console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    link: data.link,
                    description: data.description,
                    category: data.category.name,
                });
            }
        });
        console.log(videoId);
    };

    useEffect(() => {
        preload(match.params.videoId);
    }, []);



    return (
        <div>
            <div style={{ width: "101vw", marginLeft: "-17.5vh" }}><Header /></div>
            <center>
                <br></br>
                <br></br>
                <h2>{name}</h2>
                <br></br>
                <div className="container">
                    <ReactPlayer controls={true} url={link} />
                </div>


                {/* <div>
                <div className="container">
                    <ReactPlayer controls={true} url={linkvar} />
                </div>
                </div> */}
                <br></br>
                <h4>{description}</h4>
                <p>{category}</p>
            </center>
            <Footer/>
        </div>
    )
}