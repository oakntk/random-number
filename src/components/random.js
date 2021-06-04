import React, {useState} from 'react'

import './App.css';

function randomNum(){
  return Math.ceil(Math.random()*9)
}

function Random(){
  const[number,setNumber] = useState([0,0,0])
  const Random = () => {
    setNumber([randomNum(),randomNum(),randomNum()])
  }

  return(
    <>
    <h1 className = "lottery-title">สุ่มเลข 3 ตัว</h1>
    <div className = "lottery-container">
      <div className = "lottery-number">{number[0]}</div>
      <div className = "lottery-number">{number[1]}</div>
      <div className = "lottery-number">{number[2]}</div>
      </div>
      <button className = "lottery-random-button" onClick = {Random}>Random</button>
      </>
  )
}

export default Random;