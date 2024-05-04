// import logo from './logo.svg';
// import React, {useState}from "react";
import './App.css';
import weatherapp from './componets/weather app/weatherapp';
import search_icon from "./componets/assets/search.png";
import clear_icon from "./componets/assets/clear.png";
import cloud_icon from "./componets/assets/cloud.png";
import drizzle_icon from "./componets/assets/drizzle.png";
import humidity_icon from "./componets/assets/humidity.png";
import rain_icon from "./componets/assets/rain.png";
import snow_icon from "./componets/assets/snow.png";
import wind_icon from "./componets/assets/wind.png";
import { useState } from 'react';

function App() {

  let api_key ="5abb22ce1462f468f59c6119bc1a1258";
  const[wicon,setwicon]= useState(cloud_icon);



    const search = async()=>{
 const element= document.getElementsByClassName("cityinput");
    if(element[0].value==="")
      {
        return 0;
      }
      // eslint-disable-next-line no-template-curly-in-string
      let url=' https://api.openweathermap.org/data/2.5/weather?q= ${element[0].value}&units=metric&appid= ${api_key}';

let response =await fetch(url);
let data = response.json();
const humidity =document.getElementsByClassName("humidty-percent");
const wind = document.getElementsByClassName("wind-rate");
const temprature=document.getElementsByClassName("weather-temp");
 const location=document.getElementsByClassName("weather-location")

 humidity[0].innerHTML=data.main.humidity;
 wind[0].innerHTML=Math.floor(data.wind.speed);
 temprature[0].innerHTML=Math.floor(data.main.temp);
 location[0].innerHTML=data.name;
 if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n")
  {
    setwicon(clear_icon);
  }
  else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n")
 {
  setwicon(cloud_icon);
 }
 else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n")
  {
   setwicon(drizzle_icon);
  }else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n")
    {
     setwicon(drizzle_icon);
    }else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n")
      {
       setwicon(rain_icon);
      }
      else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n")
        {
         setwicon(rain_icon);
        }else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n")
          {
           setwicon(snow_icon);
          }
          else{
            setwicon(clear_icon);
          }




}
  return (
    <div className="container">
     <div className="top-bar">
<input type="text" className="cityinput"  placeholder='search'/>
        <div className="search-icon" onClick={()=>{ search()}}>
          <img src={search_icon} alt="" /> 
        </div>  
           </div>
           <div className="weather-image">
            <img src={wicon} alt="" />
           </div>
           <div className="weather-temp">24c</div>
           <div className="weather-location">London</div>
            <div className="data-container">
              <div className="element">
                <img src= {humidity_icon} alt=""  className='icon'/>
                <div className="data">
                  <div className="humidty-percent">64%</div>
                  <div className="text">humidity</div>
                </div>
              </div>
              <div className="element">
                <img src={wind_icon} alt=""  className='icon'/>
                <div className="data">
                  <div className="wind-rate">18 km/h</div>
                  <div className="text">wind speed</div>
                </div>
              </div>
            </div>
    </div>
  );
}

export default App;
