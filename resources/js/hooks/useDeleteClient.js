import { reactive, toRefs } from "@vue/reactivity";
import clientsAPI from "../api/clientsAPI";

export default () => {
  const data = reactive({
    data: null,
    error: null,
    loading: false,
  });

  const deleteClient = async ({id}) => {
    data.data = null;
    data.error = null;
    data.loading = true;

    try {
      data.data = await clientsAPI.delete({id});
    } catch(error) {
      data.error = error;
    } finally {
      data.loading = false;
    }
  };

  return {
    ...toRefs(data),
    deleteClient
  }
};
