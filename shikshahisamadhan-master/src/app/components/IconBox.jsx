import React from 'react'
import styled from 'styled-components';

const IconBox = ({icon, heading, description}) => {
  return (
    <MainIcon>
    <div className="icon-box">
      <div className="icon">  {icon}  </div>
      <h3 className="heading">{heading}</h3>
      <p className="description">{description}</p>
    </div>
    </MainIcon>


  )
}
const MainIcon = styled.div`


 
    width: 30%;
    border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }



.icon-box {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .icon-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .icon-box .icon {
    font-size: 40px;
    margin-bottom: 10px;
  }
  
  .icon-box .heading {
    font-size: 24px;
    margin: 10px 0;
  }
  
  .icon-box .description {
    font-size: 16px;
    color: #666;
  }
  `;

export default IconBox