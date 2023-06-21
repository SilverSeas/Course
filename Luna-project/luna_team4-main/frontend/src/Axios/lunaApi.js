import axios from "axios";

const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
const baseURL = isDev ? 'http://localhost:8001/backend/api' : 'https://luna-team4.propulsion-learn.ch/backend/api'


const lunaAPI = axios.create({
  baseURL: baseURL
})


export default lunaAPI;


