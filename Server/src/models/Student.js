const mongoose =require('mongoose')
const validator=require('validator')

const  StudentSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email :{
        type:String,
        required:true,
        unique:[true,"Email alredy present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        minlength:6,
        required:true,
    },
    phone:{
        type:Number,
        min:10,
        required:true


    },
    address: {
        type:String,
        required:true
    }
})

const StudentModel= mongoose.model("students",StudentSchema)
module.exports= StudentModel