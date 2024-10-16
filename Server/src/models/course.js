const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    instructor: String,
    
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;