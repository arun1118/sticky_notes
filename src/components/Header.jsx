import React, { useEffect, useState } from "react";
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

function Header() {

  const [darkTheme,setDarkTheme]=useState(false);

  function handleTheme(){
    setDarkTheme((prevValue)=>{
      return !prevValue; 
    });
    // console.log(darkTheme);
  }

  useEffect(()=>{
    // console.log("called effect");
    if(darkTheme){
      document.getElementById("formTitle").className="form-dark";
      document.getElementById("formContent").className="form-dark";
      document.body.className="form-dark";
    }
    else{
      document.getElementById("formTitle").className="form-light";
      document.getElementById("formContent").className="form-light";
      document.body.className="form-light";
    }
  },[darkTheme])

  return (
    <header>
      <div className="app-title">
      <h1>Sticky Notes</h1>
      <TextSnippetRoundedIcon className="app-icon"/>
      </div>
      <button className="theme-btn" onClick={handleTheme}> {darkTheme ? <LightModeRoundedIcon/> : <DarkModeRoundedIcon/>} </button>
    </header>
  );
}

export default Header;
