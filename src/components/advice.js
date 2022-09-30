import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../utils/api";

const Advice = () => {
  const [weather, setWeather] = useState("");
  const { city } = useParams();

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
        <h2 className="weather_temperature">{weather.temp_c}</h2>
        <h2 className="weather_condition">{weather.condition.text}</h2>
      </div>
    </>
  );
};

export default Advice;
