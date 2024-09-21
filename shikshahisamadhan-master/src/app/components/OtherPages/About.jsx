
import Highlights from '../Highlights';
import styled from 'styled-components';


const About = () => {
  return (
    <Aboutus>
      <div className="aboutshs">
        <img src="../Images/LOGO.png" alt="about us" width="530px" height="auto"/>
        <div className="description">
          <h1>About Us</h1>
          <p>Shiksha Hi Samadhan, where education meets enlightenment. We are dedicated to providing free, high-quality educational content and comprehensive test series for learners of all ages and backgrounds. Our unique approach goes beyond traditional teaching methods, delving into the ‘why’ behind 
            every topic to foster a deeper understanding and intellectual curiosity.</p>
        </div>
      </div>
      <div className="aboutshs">
      <div className="description">
          <h1>Mission</h1>
          <p>Shiksha Hi Samadhan, where education meets enlightenment. We are dedicated to providing free, high-quality educational content and comprehensive test series for learners of all ages and backgrounds. Our unique approach goes beyond traditional teaching methods, delving into the ‘why’ behind 
            every topic to foster a deeper understanding and intellectual curiosity.</p>
           
        </div>
        <img src="../Images/mission.jpg" alt="about us" width="530px" height="auto"/>
      </div>
      <div className="aboutshs">
      <img src="../Images/vision.jpg" alt="about us" width="530px" height="auto"/>
      <div className="description">
      
          <h1>Vision</h1>
          <p>Shiksha Hi Samadhan, where education meets enlightenment. We are dedicated to providing free, high-quality educational content and comprehensive test series for learners of all ages and backgrounds. Our unique approach goes beyond traditional teaching methods, delving into the ‘why’ behind 
            every topic to foster a deeper understanding and intellectual curiosity.</p>
        </div>
      </div>
      <Highlights></Highlights>
    </Aboutus>
  )
}
const Aboutus = styled.div`

width: 100%;
display: flex;
flex-direction: column;
justify-content:left;
align-items: center;

 
  .aboutshs{
    padding:80px 50px 80px 50px;
   width: 80%;
  display: flex;
  flex-direction: row;
  gap:30px;
   justify-content: left;
  align-items: center;
  text-align: left;

}
.description{
  width: 50%;
 
}
h1{
  font-size: 28px;
  font-weight: 600;
  line-height:27px;
  color:#012749;
  margin-bottom: 15px;
}
p{
  font-size: 15px;
  font-weight: 400;
  line-height:27px;
}

`;


export default About