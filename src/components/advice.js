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
  const [error, setError] = useState("");
  const { city } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { current } = await getWeather(city); // Instead of await getWeather(city).then((weatherFromApi) =>  setWeather(weatherFromApi). I destructured {current} which is the useful block of information from the API
        setWeather(current);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getData();
  }, [city]);

  if (!loading) {
    if (!error) {
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
    return (
      <div className="d-flex justify-content-center">
        <h1 className="weather_condition" id="hello">
          loading...
        </h1>
      </div>
    );
  }
};

export default Advice;
