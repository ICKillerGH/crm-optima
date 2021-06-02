import axios from "axios";

const BASE_URI = '/api/cities';

export default {
  async get({page = 1, perPage = 10, stateId = null} = {}) {
    const {data} = await axios.get(BASE_URI, {
      params: {page, perPage, stateId},
    });

    return data;
  }
}
