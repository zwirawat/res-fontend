import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9000/api/test",
  headers: {
    "Content-type": "application/json"
  }
});