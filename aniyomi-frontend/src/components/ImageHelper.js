import React from "react";
import { API } from "../backend";
import "./AllVideo.css";

const ImageHelper = ({ video }) => {
    const imageUrl = video ? `${API}/video/photo/${video._id}` : null;
    return (

        <div className="vid-img rounded card-img-top" style={{width: "18rem"}} >
            <img
                // height= "200rem"
                src={imageUrl}
                alt="photo"
                style={{maxWidth: "100%", maxHeight: "100%"}}
            ></img>
        </div>
    );
};

export default ImageHelper;