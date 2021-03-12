import { http } from "../config/axiosConfig";

export default {
  listar: () => {
    return http.get("/contacts");
  },
  create: (params) => {
    return http.post("/contacts", params);
  },
};
