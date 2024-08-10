import axiosClient from "./axiosClient";

const productApi = {
  getAll() {
    const url = `/api/product`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/api/product/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/product`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/product/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/api/product/${id}`;
    return axiosClient.delete(url);
  },
  getByCategoryId(caId) {
    const url = `/api/product/filter/${caId}`;
    return axiosClient.get(url);
  },
};

export default productApi;
