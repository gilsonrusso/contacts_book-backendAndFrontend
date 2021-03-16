import { http } from "../config/axiosConfig";

export default {
  list: () => {
    return http.get("/contacts");
  },
  create: (params) => {
    return http.post("/contacts", params);
  },
  delete: (params) => {
    return http.delete(`/contacts/${params}`);
  },
  // update: (id, params) => {
  //   return http.put(`/contacts/${id}`, params);
  // },
};
