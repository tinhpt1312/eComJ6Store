import axiosClient from "./axiosClient";

const orderApi = {
  getAll() {
    const url = `/api/order`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/api/order/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/order`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/order/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/api/order/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderApi;
