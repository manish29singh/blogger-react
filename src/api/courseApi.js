import { baseUrl } from "./index";
import axios from "axios";

export const createCourse = payload => {
  return axios
    .post(`${baseUrl}/course`, {
      name: payload.name,
      email: payload.email,
      password: payload.password
    })
    .then(res => res.data);
};

export const createVideo = payload => {
  return axios
    .post(`${baseUrl}/video`, {
      name: payload.name,
      email: payload.email,
      password: payload.password
    })
    .then(res => res.data);
};

export const fetchCourses = () => {
  return axios.get(`${baseUrl}/courses`).then(res => res.data);
};
