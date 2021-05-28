<template>
  <component
    :is="tag"
    :class="{'mb-3': !withoutMarginBottom}"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h2',
    },
    withoutMarginBottom: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
