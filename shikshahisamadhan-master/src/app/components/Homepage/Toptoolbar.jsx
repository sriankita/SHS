import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import "./homepage.css"
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material';

const Toptoolbar = () => {
  return (
    <div id='toolbar'>
            <div className='contact' >Contact us:  
                <PhoneIcon style={{ position: 'relative', top: '7px', marginLeft: '1em', marginRight: '5px' }} /> +918574602677  
                <MarkEmailReadIcon style={{ position: 'relative', top: '7px', marginLeft: '1em', marginRight: '5px' }} /> info@shikshahisamadhan.com
            </div>
            <div className='register' >
            <NavLink  className ="navbar-link " to ='/register'>Register</NavLink>
            <NavLink  className ="navbar-link " to ='/Login'>Login</NavLink>
            </div>
        </div>
  )
}

export default Toptoolbar