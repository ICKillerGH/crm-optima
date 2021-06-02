import { reactive, toRefs } from "@vue/reactivity";
import statesAPI from '@/api/statesAPI';
import { onBeforeMount } from "@vue/runtime-core";

export default ({manual = false, defaultPage = 1, defaultPerPage = 10} = {}) => {
  const data = reactive({
    data: null,
    error: null,
    loading: false,
  });

  const fetchStates = async ({page = defaultPage, perPage = defaultPerPage} = {}) => {
    data.data = null;
    data.error = null;
    data.loading = true;

    try {
      data.data = await statesAPI.get({page, perPage});
    } catch(error) {
      data.error = error;
    } finally {
      data.loading = false;
    }
  };

  onBeforeMount(() => {
    if (!manual) {
      fetchStates();
    }
  });

  return {
    ...toRefs(data),
    fetchStates
  };
}
