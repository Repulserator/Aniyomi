const express = require("express");
const router = express.Router();

const {
  getVideoById,
  createVideo,
  getVideo,
  photo,
  updateVideo,
  deleteVideo,
  getAllVideos,
  getAllUniqueCategories
} = require("../controllers/videoadv");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("videoId", getVideoById);

//all of actual routes
//create route
router.post(
  "/video/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createVideo
);

// read routes
router.get("/video/:videoId", getVideo);
router.get("/video/photo/:videoId", photo);

//delete route
router.delete(
  "/video/:videoId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteVideo
);

//update route
router.put(
  "/video/:videoId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateVideo
);

//listing route
router.get("/videos", getAllVideos);

router.get("/videos/categories", getAllUniqueCategories);

module.exports = router;