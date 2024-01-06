const express=require("express");
const router=express.Router();
const {getCategory,getCategoryById,createCategory,updateCategory,removeCategory,getAllCategory}=require("../controllers/category");
const {isAuthenticated,isSignedIn,isAdmin}=require("../controllers/auth");

const{getUserById}=require("../controllers/user");
const { remove } = require("../models/user");

//read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);
//create
router.post(  
        "/category/create/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        createCategory
      );

//remove
router.delete(
        "/category/:categoryId/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        removeCategory
);

//update
router.put(
        "/category/:categoryId/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        updateCategory
);


module.exports = router;