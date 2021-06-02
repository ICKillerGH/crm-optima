import { reactive, toRefs } from "@vue/reactivity";
import clientsAPI from '@/api/clientsAPI';
import { onBeforeMount } from "@vue/runtime-core";

export default ({manual = false, defaultPerPage = 10, defaultPage = 1} = {}) => {
  const data = reactive({
    data: null,
    error: null,
    loading: false,
  });

  const fetchClients = async ({page = defaultPage, perPage = defaultPerPage} = {}) => {
    data.data = null;
    data.error = null;
    data.loading = true;

    try {
      data.data = await clientsAPI.get({page, perPage});
    } catch(error) {
      data.error = error;
    } finally {
      data.loading = false;
    }
  };

  onBeforeMount(() => {
    if (!manual) {
      fetchClients();
    }
  });

  return {
    ...toRefs(data),
    fetchClients
  };
}
