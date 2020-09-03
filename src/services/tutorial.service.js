import http from "../http-common";
import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:8080/api/test/';
class TutorialDataService {
  getAll() {
    // return http.get(API_URL +"tutorials");
    return axios.get(API_URL +"tutorials" , { headers: authHeader() })
  }

  get(id) {
    return http.get(`tutorials/${id}`);
  }

  create(data) {
    return http.post("tutorials", data);
  }

  update(id, data) {
    return http.put(API_URL+`tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(API_URL+`tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(API_URL+`tutorials`);
  }

  findByTitle(title) {
    return http.get(API_URL+`user?title=${title}`);
  }
}

export default new TutorialDataService();