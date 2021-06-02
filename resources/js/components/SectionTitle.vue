<template>
  <div class="section-title mb-4">
    <h2 class="m-0"><slot /></h2>

    <div>
      <slot name="right-section" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
