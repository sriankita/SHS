
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {

  const[email, setEmail]=useState();
const[password, setPassword]=useState();
const [message, setMessage] = useState('');


const navigate=useNavigate() 


const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      if (response.data === "success") {
        setMessage("Login successful!");
        navigate('/');
      } else if (response.data === "incorrect password") {
        setMessage("Incorrect password. Please try again.");
      } else if (response.data === "no record existed") {
        setMessage("No account found with this email.");
      }
    } catch (error) {
      console.log(error);
      setMessage('An error occurred: ' + error.message);
    }
}
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
  <div className="bg-white p-3 rounded w-25">    
          <h2>login</h2>     
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" 
               name ="email"
               onChange={(e) => setEmail(e.target.value)}
               className="form-control" 
               id="email"
               placeholder="Enter your email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" 
               name="password" 
               className="form-control"
               id="password" 
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter your password"/>
            </div>
            <button type="submit" className="btn btn-primary  w-100 btn-block mt-2">Login</button>
            {message && <p className="mt-2 text-center text-danger">{message}</p>}
           
           </form>  
                
        </div>
        
      </div>

  )
}

export default Login