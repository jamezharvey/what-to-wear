import axios from "axios";

const weatherApi = axios.create({
  baseURL: `https://api.weatherapi.com/v1/current.json?key=b1ba7024fc8345b0ab1145732223009&q=`,
});

export const getWeather = (searchTerm) => {
  return weatherApi.get(`${searchTerm}&days=1`).then(({ data }) => {
    return data.current;
  });
};
