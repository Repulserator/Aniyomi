const express=require("express");
const router=express.Router();
const {getVideo,getVideoById,createVideo,updateVideo,removeVideo}=require("../controllers/video");
const {isAuthenticated,isSignedIn,isAdmin}=require("../controllers/auth");

const{getUserById}=require("../controllers/user");


//params
router.param("userId", getUserById);
router.param("videoId", getVideoById);

//create
router.post(  
        "/video/create/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        createVideo
      );

//remove
router.delete(
        "/video/:videoId/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        removeVideo
);

//update
router.put(
        "/video/:videoId/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        updateVideo
);

module.exports = router;