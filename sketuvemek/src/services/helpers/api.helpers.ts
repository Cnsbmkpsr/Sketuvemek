import axios from 'axios';
import { BACK_URI } from "../../constants/constant";

const axiosConfig = axios.create({
  baseURL: BACK_URI,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*"
  },
  proxy: {
    host: BACK_URI,
    port: 44394
  }
});

export default axiosConfig;