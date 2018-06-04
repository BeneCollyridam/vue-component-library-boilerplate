<template>
  <i class="material-icons c-icon">{{ icon }}</i>
</template>

<script>
export default {
  name: 'c-icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/lib.scss';

.c-icon {
  &.small {
    font-size: $size-small;
  }

  &.medium {
    font-size: $size-medium;
  }

  &.large {
    font-size: $size-large;
  }
}
</style>
