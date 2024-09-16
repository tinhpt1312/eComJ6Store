import axiosClient from "./axiosClient";

const productApi = {
  getAll() {
    const url = `/product`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/product`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/product/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
  getByCategoryId(caId) {
    const url = `/product/filter/${caId}`;
    return axiosClient.get(url);
  },
};

export default productApi;
