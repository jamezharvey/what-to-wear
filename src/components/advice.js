import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../utils/api";
import {
  weather_condition,
  temperature_clothing,
} from "../utils/weather-outcomes";
import "../App.css";

const Advice = () => {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(true);
  const { city } = useParams();

  useEffect(() => {
    getWeather(city).then((weatherFromApi) => {
      console.log(city);
      setWeather(weatherFromApi);
      setLoading(false);
    });
  }, [city]);

  if (!loading) {
    if (weather) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <h1 className="weather_condition" id="hello">
              {weather_condition[weather.condition.text].concat(
                temperature_clothing[Math.round(weather.temp_c).toString()]
              )}
            </h1>
          </div>
          <div className="text-center">
            <a
              className="btn btn-dark btn-lg mt-2"
              href="/"
              role="button"
              id="button"
            >
              Back
            </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="d-flex justify-content-center">
            <h1 className="weather_condition" id="hello">
              Are you in a real city? Or did you just spell it wrong? Try
              again...
            </h1>
          </div>
          <div className="text-center">
            <a
              className="btn btn-dark btn-lg mt-2"
              href="/"
              role="button"
              id="button"
            >
              Back
            </a>
          </div>
        </>
      );
    }
  } else {
    return <div>Loading...</div>;
  }
};

export default Advice;
