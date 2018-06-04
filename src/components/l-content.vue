<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'l-content',
};
</script>

<style lang="scss" module>
@import '../styles/lib.scss';

.container {
  padding: $size-medium;
}
</style>
