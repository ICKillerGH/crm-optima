import { reactive, toRefs } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import clientsAPI from "../api/clientsAPI";

export default ({manual = false, defaultId = null} = {}) => {
  const data = reactive({
    data: null,
    error: null,
    loading: false,
  });

  const fetchClient = async ({id = defaultId} = {}) => {
    if (!id) {
      return;
    };

    data.data = null;
    data.error = null;
    data.loading = true;

    try {
      data.data = await clientsAPI.getOne({id});
    } catch(error) {
      data.error = error;
    } finally {
      data.loading = false;
    }
  };

  onBeforeMount(() => {
    if (!manual) {
      fetchClient();
    }
  });

  return {...toRefs(data), fetchClient};
};
