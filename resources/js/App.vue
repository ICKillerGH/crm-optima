<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout';

export default {
  components: {
    AppLayout,
  }
}
</script>
