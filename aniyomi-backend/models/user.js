var mongoose = require("mongoose");
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');
const _ = require("lodash");

var userSchema=new mongoose.Schema(
        {
        
                name:{
                        type:String,
                        required:true,
                        maxlength:50,
                        trim:true
                },
                email:{
                        type:String,
                        required:true,
                        maxlength:50,
                        trim:true,
                        unique:true
                },
                encry_password:{
                        type:String,
                        required:true,
                },
                salt:String,
                role:{
                        type:Number,
                        default:0
                },
                username:{
                        type:String,
                        unique:true,
                        required:true
                },
                
        },
        {timestamps:true})
        ;

userSchema
.virtual("password")
.set(function(password) {
        this._password=password;
        this.salt=uuidv1();
        this.encry_password=this.securePassword(password);
})
.get(function() {
        return this._password;
});

userSchema.methods={
        authenticate:function(plainpassword) {
                return this.securePassword(plainpassword)===this.encry_password;
        },

        securePassword:function(plainpassword) {
                if(!plainpassword) return "";
                try{
                return crypto.createHash('sha256',this.salt).update(plainpassword).digest('hex');
        }catch(err){
                return "";
        }
}};       

module.exports=mongoose.model("User",userSchema);