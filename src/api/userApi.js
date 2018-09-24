import { baseUrl } from "./index";
import axios from "axios";

export const createUser = payload => {
  return axios
    .post(`${baseUrl}/auth/signup`, {
      name: payload.name,
      email: payload.email,
      password: payload.password
    })
    .then(res => res.data);
};
