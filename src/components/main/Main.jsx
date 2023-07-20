import React from 'react'
import Home from '../home/Home';
import Container from '../container/Container';
import "../../style.scss";
import "./main.scss"
const Main = () => {
  return (
    <div id='main'>
      <div className='home-div'> 
      <Home /> 
      </div>

      <div className='container-div'>
      <Container />
      </div>
    </div>
  )
}

export default Main