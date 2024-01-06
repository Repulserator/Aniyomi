import React, { Component, useState, useEffect } from 'react';
import { getAllVideos } from '../auth/videohelper';
import './AllVideo.css';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import Card2 from './Card2';


const AllVideo = () => {

    document.body.style.overflowY = "scroll";
    

    const [video, setVideos] = useState([])
    const [erorr, setErorr] = useState(false)

    const loadAllVideos = () => {
        getAllVideos().then(data => {
            if (data.error) {
                setErorr(data.error)
            } else {
                setVideos(data)
            }
        });
    }

    useEffect(() => {
        loadAllVideos();
    }, [])

    return (
        <div>
            <div style={{width: "101vw", marginLeft: "-17.5vh" }}><Header/></div>
            <div className="cont">
                {video.map((video, index) => {
                    return (
                        <div>
                            <div className="row">
                                <div key={index} className="main-card">
                                    <Card2
                                        video={video}>
                                    </Card2>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <Footer style={{ position: "inherit" }} />
            </div>
        </div>
    )
}


export default AllVideo;

