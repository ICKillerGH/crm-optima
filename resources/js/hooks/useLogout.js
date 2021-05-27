import { ref } from 'vue';

const useLogout = () => {
  const loading = ref(false);

  const logout = async () => {
    if (loading.value) return;

    await axios.post('/logout');
  }

  return {loading, logout};
}

export default useLogout;
