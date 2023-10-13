import axios from 'axios'; 
import { BASEURL } from '../BasicUrl/Url';
// import { API_BASE_ENDPOINT } from '../BasicUrl'; 

export default axios.create({
  baseURL: BASEURL.URL
})