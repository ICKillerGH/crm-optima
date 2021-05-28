import axios from "axios";

const BASE_URI = '/api/cities';

export default {
  async get({page = 1, perPage = 10} = {}) {
    return await axios.get(BASE_URI, {
      params: {page, perPage},
    });
  }
}
