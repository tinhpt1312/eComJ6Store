import axiosClient from "./axiosClient";

const categoryApi = {
  getAll() {
    const url = `/api/category`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/api/category/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/category`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/category/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/api/category/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
