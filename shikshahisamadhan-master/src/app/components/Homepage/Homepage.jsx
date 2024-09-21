import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import "./homepage.css"
import { Button } from '@mui/material';
import { FaBookOpen, FaGraduationCap ,FaFileAlt, FaHeadset} from 'react-icons/fa';
import Highlights from '../Highlights';



function Homepage() {
  return (
    <div id='main'>
              
        <div id='toolbar3' >
        &quot; विद्याधनं सर्वधनप्रधानम्। &quot;
        </div>
        <div id='section1'>
            <div className='info' >
                <h3>LOOKING TO EXPLORE YOUR KNOWLEDGE</h3>
                <h1>Education Beyond Boundaries</h1>
                <p>Discover a world of limitless learning opportunities at <strong>Shiksha Hi Samadhan.</strong> 
                We believe in breaking down barriers to education by offering comprehensive, 
                free resources that not only prepare you for exams but also delve into 
                the ‘why’ behind every concept.</p>
                <Button variant="contained" >EXPLORE NOW</Button>
            </div>
        </div>
        <div id='section2' >
          <div className='cta-info'>
            <h2>Take Your First Step with Our Test Series</h2>
            <p>Prepare with confidence for your academic and competitive goals</p>
          </div>
          <div className='cta-btn'>
            <Button>Register Now</Button>
          </div>
        </div>
        <div className="section3">
        <div className="icon-section">
        <div className="icon-box">
          <img src="../Images/video-marketing.png" alt="Icon 1" className="icon-image"/>
          <h3 className="icon-heading">2500+ Online Courses</h3>
          <p className="icon-description">Enjoy a variety of fresh topics</p>
        </div>
        <div className="icon-box">
          <img src="../Images/engineering.png" alt="Icon 2" className="icon-image"/>
          <h3 className="icon-heading">Free Courses</h3>
          <p className="icon-description">Find the best Learning Materials for you</p>
        </div>
        <div className="icon-box">
          <img src="../Images/clock.png" alt="Icon 3" className="icon-image"/>
          <h3 className="icon-heading">Life time access</h3>
          <p className="icon-description">Learn on your schedule</p>
        </div>
</div>
</div>
<div className="section4">
  <div className="section4-content">
    <h1>Where Curiosity Meets Knowledge</h1>
    <p>Dive into a world where curiosity fuels learning and knowledge grows. Discover detailed answers to every ‘why’ and prepare thoroughly for academic and competitive exams with our comprehensive resources and test series.</p>
    <a href="#" className="cta-button">Sign Up Now</a>
  </div>
  <div className="section4-cards">
    <div className="card-section1">
      <div className="card">
      <FaBookOpen className="card-icon" />
      <h3>Free Courses</h3>
      <p>Access Free Learning Resources</p>
    </div>
    <div className="card">
    <FaGraduationCap className="card-icon" />
            <h3>Small Quizzes</h3>
      <p>Boost Learning with Short Quizzes</p>
    </div>
    </div>
    <div className="card-section1">
    <div className="card">
    <FaFileAlt className="card-icon" />
      <h3>Test Series</h3>
      <p>Experience real exam</p>
    </div>
    <div className="card">
    <FaHeadset className="card-icon" />
      <h3>Expert Guidance</h3>
      <p>Advice and support from experienced mentors</p>
    </div>
    </div>
  </div>
</div>

 <Highlights></Highlights>
 

       
       <div className="section6">
        <h1>Discover Our Comprehensive Learning Materials for All Educational Levels</h1>
        <p>From elementary to advanced, find resources that support every step of your educational journey.</p>
        <button>Explore Now</button>
       </div>
    </div>
  )
}

export default Homepage