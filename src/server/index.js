import axios from "axios";

const request = axios.create({
  baseURL: "https://newsapi.org/v2/",
  timeout: 10000,
});

export default request;
