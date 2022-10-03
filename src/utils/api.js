import axios from "axios";
import { useState } from "react";

const weatherApi = axios.create({
  baseURL: `https://api.weatherapi.com/v1/current.json?key=e6a9f41a8abc4043922184923220210&q=`,
});

export const getWeather = (searchTerm) => {
  try {
    return weatherApi.get(`${searchTerm}&days=1`).then(({ data }) => {
      console.log(data.current);
      return data.current;
    });
  } catch (e) {
    console.error(e);
  }
};
