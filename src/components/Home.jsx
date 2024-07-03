import React from "react";
import { useState } from "react";
import "./Styles/Style.css";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
  });

async function obtenerDatos(){
  try {
    let respuesta = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=eef165ef40f4fe4ecd97c931861f1a74&&units=metric")
    let datos = await respuesta.json();
    console.log(datos)
  } catch (error){
    console.error('Error:', error);
  }
}

  useEffect(()=> {
    obtenerDatos();  
  }, [])

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="Enter City Name" />
          <button>
            <img src="/images/search.png" alt="" />
          </button>
        </div>
        <div className="winfo">
          <img className="icon" src="/images/cloud.png" alt="" />
          <h2>{data.celcius}°c</h2>
          <h2>{data.name}</h2>
          <div className="details">
            <div className="col">
              <img src="/images/humidity.png" alt="" />
              <div className="humidity">
                <p>{data.humidity}%</p>
                <p>humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="/images/wind.png" alt="" />
              <div className="wind">
                <p>{data.speed}km/h</p>
                <p>wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
