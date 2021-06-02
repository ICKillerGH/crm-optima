import { reactive, toRefs } from "@vue/reactivity";
import citiesAPI from '@/api/citiesAPI';
import { onBeforeMount } from "@vue/runtime-core";

export default ({manual = false, defaultPage = 1, defaultPerPage = 10} = {}) => {
  const data = reactive({
    data: null,
    error: null,
    loading: false,
  });

  const fetchCities = async ({page = defaultPage, perPage = defaultPerPage, stateId = null} = {}) => {
    data.data = null;
    data.error = null;
    data.loading = true;

    try {
      data.data = await citiesAPI.get({page, perPage, stateId});
    } catch(error) {
      data.error = error;
    } finally {
      data.loading = false;
    }
  };

  onBeforeMount(() => {
    if (!manual) {
      fetchCities();
    }
  });

  return {
    ...toRefs(data),
    fetchCities
  };
}
