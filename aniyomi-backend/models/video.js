var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


var vidSchema=new mongoose.Schema(
        {
        
                name:{
                        type:String,
                        required:true,
                        maxlength:50,
                        trim:true
                },
                link:{
                        type:String,
                        required:true,
                        maxlength:1100,
                        trim:true,
                        unique:true
                },
                category:{
                        type:ObjectId,
                        ref:"Category",
                        required:true
                },

                description:{
                        type:String,
                        maxlength:200,
                        default:"just a vid"
                },

                photo: {
                    data: Buffer,
                    contentType: String
                  }
              
                
        },
        {timestamps:true})
        ;


module.exports=mongoose.model("Video",vidSchema);