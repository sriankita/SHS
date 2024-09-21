const express= require("express")
const cors =require("cors");
const bcrypt = require('bcrypt');
require("./db/conn");
const StudentModel=require("./models/Student");
const Course= require("./models/course");

const app= express()
const port=process.env.PORT || 8000;

app.use(express.json());
app.use(cors());


//for login

app.post("/login",(req,res)=>{
    const{email,password}= req.body;
   StudentModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }
        }else{
            res.json("no record existed")
        }
    })
})


//register user

app.post('/register',async(req,res)=>{
    try {
        const newStudent = await StudentModel.create(req.body);
        res.status(201).json({ message: "Registration successful!", student: newStudent });
      } catch (err) {
        if (err.code === 11000) {
          // Handle duplicate email error
          res.status(400).json({ message: "Email already exists." });
        } else if (err.errors) {
          // Handle validation errors
          const errorMessages = Object.values(err.errors).map(e => e.message);
          res.status(400).json({ message: errorMessages.join(", ") });
        } else {
          // Handle any other errors
          res.status(500).json({ message: "An internal error occurred. Please try again later." });
        }
      }
})

//courses 

app.post("/courses", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).send(course);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get all courses
app.get("/courses", async (req, res) => {
    try {
        const courses = await Course.find();
        res.send(courses);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/courses/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).send();
        }
        res.send(course);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Update a course by ID
app.patch("/courses/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!course) {
            return res.status(404).send();
        }
        res.send(course);
    } catch (e) {       
        res.status(400).send(e);
    }
});

// Delete a course by ID
app.delete("/courses/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).send();
        }
        res.send(course);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`)

})