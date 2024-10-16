

import IconBox from '../IconBox';
import ContactForm from './ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-us">
         <div className="contact-icon">   
            <IconBox 
        icon={<FaMapMarkerAlt />} 
        heading="Address" 
        description="1234 Street Name, City, State, ZIP Code" 
      />
      <IconBox 
        icon={<FaPhone/>} 
        heading="Phone" 
        description="+91 8574602677" 
      />
      <IconBox 
        icon={<FaEnvelope />} 
        heading="Email" 
        description="info@shikshahisamadhan.com" 
      />
      
      </div>
     <div><br></br><br></br></div>
      <div>
            <ContactForm/>
            <br></br><br></br>
        </div>
        </div>
  )
}

export default Contact