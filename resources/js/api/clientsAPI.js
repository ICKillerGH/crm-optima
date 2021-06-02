import axios from "axios";

const BASE_URI = '/api/clients';

export default {
  async get({page = 1, perPage = 10} = {}) {
    const {data} = await axios.get(BASE_URI, {
      params: {page, perPage},
    });

    return data;
  },
  async create({data}) {
    const {data: axiosData} = await axios.post(BASE_URI, data);

    return axiosData;
  },
  async getOne({id}) {
    const {data} = await axios.get(`${BASE_URI}/${id}`);

    return data;
  },
  async update({id, data}) {
    const {data: axiosData} = await axios.put(`${BASE_URI}/${id}`, data);

    return axiosData;
  },
  async delete({id}) {
    const {data: axiosData} = await axios.delete(`${BASE_URI}/${id}`);

    return axiosData;
  },
  async createActivity({id, data}) {
    const {data: axiosData} = await axios.post(`${BASE_URI}/${id}/activities`, data);

    return axiosData;
  },
  async updateActivity({clientId, id, data}) {
    const {data: axiosData} = await axios.put(`${BASE_URI}/${clientId}/activities/${id}`, data);

    return axiosData;
  },
  async deleteActivity({clientId, id}) {
    const {data: axiosData} = await axios.delete(`${BASE_URI}/${clientId}/activities/${id}`);

    return axiosData;
  }
}
