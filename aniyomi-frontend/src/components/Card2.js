import { Button } from "bootstrap";
import React from "react";
import './AllVideo.css';
import ImageHelper from "./ImageHelper";
import {Link,useHistory} from 'react-router-dom';

const Card2 = ({ video }) => {

    const history = useHistory();

    const doThis = () => {
        history.push(`/video/${videoId}`);
    }

    const cardTitle = video ? video.name : "video Photo";
    const cardDescription = video ? video.description : "Default Description";
    console.log(cardTitle, cardDescription);
    const videoId = video ? video._id : "Default Id";

    return (

        <div className="card" style={{width: "18rem"}} onClick={()=> doThis()}>

            <ImageHelper video={video} ></ImageHelper>

            <div class="card-body">
                <div className="card-title font-weight-bold text-wrap"><h5>{cardTitle}</h5></div>
                <div className="card-text">
                    <p>
                        {cardDescription}
                    </p>
                </div>
            </div>
        </div>
    )

}


export default Card2;