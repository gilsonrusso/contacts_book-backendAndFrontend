import { http } from "../config/axiosConfig";

export default {
  listar: () => {
    return http.get("/contacts");
  },
  create: (params) => {
    console.log(params)
    return http.post("/contacts", params);
  },
};
