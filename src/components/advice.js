import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../utils/api";
import { weather_condition, temperature_clothing } from "../utils/weather-outcomes";
import "../App.css"

const Advice = () => {
  const [weather, setWeather] = useState("");
  const[loading, setLoading] = useState(true)
  const { city } = useParams();

  useEffect(() => {

    getWeather(city).then((weatherFromApi) => {
      setWeather(weatherFromApi);
    });
    setLoading(false)
  }, [city]);

  
    return (
    <>
      {loading ? null : weather ? (
         <>
      <div className="d-flex justify-content-center">
        <h1 className="weather_condition" id="hello">{weather_condition[weather.condition.text].concat(temperature_clothing[(Math.round(weather.temp_c).toString())])}</h1>
      </div>
      <div className="text-center">
                <a className="btn btn-dark btn-lg mt-2" href="/" role="button" id="button">Back</a>
            </div>
    </>
      ) : (
        <>
        <div className="d-flex justify-content-center">
        <h1 className="weather_condition" id="hello">Are you in a real city? Or did you just spell it wrong? Try again...</h1>
      </div>
      <div className="text-center">
                <a className="btn btn-dark btn-lg mt-2" href="/" role="button" id="button">Back</a>
            </div>
      </>
      )}
    </>
  );
};

export default Advice;
