import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../utils/api";
import { weather_condition, temperature_clothing } from "../utils/weather-outcomes";

const Advice = () => {
  const [weather, setWeather] = useState("");
  const { city } = useParams();
  console.log(Math.round(weather.temp_c).toString())

  useEffect(() => {
    getWeather(city).then((weatherFromApi) => {
      setWeather(weatherFromApi);
    });
  }, [city]);

  if (!weather) {
    return null;
  }
  return (
    <>
      <div className="advice_box">
        <h2 className="weather_condition">{weather_condition[weather.condition.text].concat(temperature_clothing[(Math.round(weather.temp_c).toString())])}</h2>
      </div>
    </>
  );
};

export default Advice;
