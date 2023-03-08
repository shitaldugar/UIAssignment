import React, {useState}from "react";
import Dropdown from "./components/Dropdown";
//import MonthPicker from "./components/MonthPicker";
import Button from "./components/Button";
import './App.scss';





function App() {
  const[value,setValue]=useState("");
  const[startmonth,setStartmonth]=useState("");
  const[endmonth,setEndmonth]=useState("");

  const object={
    value:value,
    setValue:setValue,
    startmonth:startmonth,
    setStartmonth:setStartmonth,
    endmonth:endmonth,
    setEndmonth:setEndmonth
  }
  
  return (
    <div className="App">
      <div>
        
        <h1 className="heading">MONTHLY</h1>
        <h2 className="heading2">Recurrence</h2><hr></hr>
        < Dropdown object={object} />
       
        <p>Files available monthly starting jan 2023 until dec 2023</p>
        <p ><span>Note:</span>Data files require 24 hours to process.</p>
        </div>
        < Button object={object}/>
       
     
     
      
    </div>
  );
}

export default App;
