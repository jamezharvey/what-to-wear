import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../utils/api";
import { weather_condition, temperature_clothing } from "../utils/weather-outcomes";
import "../App.css"

const Advice = () => {
  const [weather, setWeather] = useState("");
  const[loading, setLoading] = useState("")
  const { city } = useParams();

  useEffect(() => {
    setLoading(true)
    getWeather(city).then((weatherFromApi) => {
      setWeather(weatherFromApi);
    });
    setLoading(false)
  }, [city]);

  if(loading){
    return null
  }
  if(!weather){
    return (
    <>
      <div className="d-flex justify-content-center">
        <h1 className="weather_condition" id="hello">Are you in a real city? Or did you just spell it wrong? Try again...</h1>
      </div>
    </>
  );
  }
  return (
      <>
      <div className="d-flex justify-content-center">
        <h1 className="weather_condition" id="hello">{weather_condition[weather.condition.text].concat(temperature_clothing[(Math.round(weather.temp_c).toString())])}</h1>
      </div>
    </>
    );
};

export default Advice;
