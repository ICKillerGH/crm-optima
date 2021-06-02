import axios from "axios"

const BASE_URI = '/api/states';

export default {
  async get({page = 1, perPage = 10} = {}) {
    const {data} = await axios.get(BASE_URI, {
      params: {page, perPage},
    });

    return data;
  }
}
