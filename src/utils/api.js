import axios from "axios";

const weatherApi = axios.create({
  baseURL: `https://api.weatherapi.com/v1/current.json?key=72a7b41878da429fb3d221652220310&q=`,
});

export const getWeather = (searchTerm) => {
  return weatherApi.get(`${searchTerm}&days=1`).then(({ data }) => {
    return data;
  });
};
