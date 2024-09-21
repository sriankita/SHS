import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const Signup = () => {
const[email, setEmail]=useState();
const[password, setPassword]=useState();
const[name , setName]=useState();
const[phone , setPhone]=useState();
const[address , setAddress]=useState();
const [message, setMessage] = useState('');

const navigate=useNavigate() 

const handleSubmit =async (e) =>{
    e.preventDefault()
    try{
    const response = await axios.post('http://localhost:8000/register',{name, email, password,phone,address})
    if (response.data === 201) {
      setMessage("Registration successful! Please log in");
      navigate('/login');
    } else  {
      setMessage("An unexpected error occurred.");
    } 
       }catch (error) {
        if (error.response && error.response.data.message) {
          setMessage(error.response.data.message);
        } 
}
}


  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center bg-secondary vh-100 ">
  <div className="bg-white p-3 rounded w-555">    
          <h2>Signup</h2>     
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" 
              id="name" name="name"
              onChange={(e) => setName(e.target.value)}
               placeholder="Enter your name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email"  name ="email"
              onChange={(e) => setEmail(e.target.value)}
               className="form-control" 
              id="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" 
              name="password" className="form-control"
               id="password" 
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter your password"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="number" 
              name="phone" className="form-control"
               id="phone" 
               onChange={(e) => setPhone(e.target.value)}
               placeholder="Enter your Phone Number"/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="string" 
              name="address" className="form-control"
               id="address" 
               onChange={(e) => setAddress(e.target.value)}
               placeholder="Enter your Address"/>
            </div>
            <button type="submit" className="btn btn-primary  w-100 btn-block mt-2">Signup</button>
            {message && <p className="mt-2 text-center text-danger">{message}</p>}
            </form><br/>
            <p>Already Have a account
             <Link to="/login"  className="btn btn-default btn-block  w-100">Login </Link></p>


          
        </div>
      </div>

 
  )
}

export default Signup