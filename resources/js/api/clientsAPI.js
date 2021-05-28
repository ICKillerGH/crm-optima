import axios from "axios"

const BASE_URI = '/api/clients';

export default {
  async get({page = 1, perPage = 10} = {}) {
    return await axios.get(BASE_URI, {
      params: {page, perPage},
    });
  },
  async create({data}) {
    return await axios.post(BASE_URI, data);
  },
  async getOne({id}) {
    const {data} = await axios.get(`${BASE_URI}/${id}`);

    return data;
  }
}
