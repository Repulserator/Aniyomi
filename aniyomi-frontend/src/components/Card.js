import { Button } from "bootstrap";
import React from "react";
import './AllVideo.css';
import ImageHelper from "./ImageHelper";
import {Link,useHistory} from 'react-router-dom';





const Card = ({video}) => {

    const history = useHistory();

    const doThis = () => {
        history.push(`/video/${videoId}`);
    }


    const cardTitle = video ? video.name : "video Photo";
    const cardDescription = video ? video.description : "Default Description";
    console.log(cardTitle, cardDescription);
    const videoId = video ? video._id : "Default Id";
    return (
        <div>
        <div className="card text-white bg-dark border border-info"  onClick={()=> doThis()}>
            <div className="card-header lead card-title">{cardTitle}</div>
            <div className="card-body">
                <div className="vid-img">
                    <div className="imgcon">
                <ImageHelper video={video}></ImageHelper>
                </div>
                </div>
                <p className="lead bg-success font-weight-normal text-wrap">
                    {cardDescription}
                </p>
                <div className="row">
                </div>
            </div>
        </div>
        </div>
    )

}


export default Card;