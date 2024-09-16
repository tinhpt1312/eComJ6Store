import axiosClient from "./axiosClient";

const categoryApi = {
  getAll() {
    const url = `/category`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/category`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/category/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/category/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
