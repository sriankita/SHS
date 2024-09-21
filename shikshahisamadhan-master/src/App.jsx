
import Homepage from './app/components/Homepage/Homepage';
import About from './app/components/OtherPages/About';
import Contact from './app/components/OtherPages/Contact';
import Courses from './app/components/OtherPages/Courses';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import TestSeries from './app/components/OtherPages/TestSeries';
import Blog from './app/components/OtherPages/Blog';
import Toptoolbar from './app/components/Homepage/Toptoolbar';

import Signup from './app/components/Signup'
import Login from './app/components/Login'


function App() {
  const theme ={
    colors :{
      heading: "rgb(24 24 29)",
      text : "rgb(24 24 29)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"rgb(249 249 255 )",
      footer_bg:"#012749",
      btn:"#012749",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      Gradient:"",
      shadow:"",
      shadowSupport:"rgba(0,0,0,0.16)0px 1px 4px",
    },
    media :{ mobile:"768px" ,tab :"998px"}
  };
 

  return (
    <>
    <ThemeProvider theme={ theme}>
      <GlobalStyle/>
    <BrowserRouter>
    <Toptoolbar/>
    <Header/>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/test-series" element={<TestSeries />} />
    <Route path="/blog" element={<Blog />} />
    <Route path='/register' element={<Signup/>}></Route> 
    <Route path='/login' element={<Login/>}></Route>
    
   
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
   
  </>
  )
}

export default App
