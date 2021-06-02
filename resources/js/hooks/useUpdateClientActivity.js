import { reactive, toRefs } from "@vue/reactivity"
import clientsAPI from '@/api/clientsAPI';

export default () => {
  const data = reactive({
    data: null,
    error: null,
    loading: false,
  });

  const updateActivity = async ({clientId, id, data: formData}) => {
    data.data = null;
    data.error = null;
    data.loading = true;

    try {
      data.data = await clientsAPI.updateActivity({clientId, id, data: formData});
    } catch(error) {
      data.error = error;
    } finally {
      data.loading = false;
    }
  };

  return {
    ...toRefs(data),
    updateActivity,
  };
}
