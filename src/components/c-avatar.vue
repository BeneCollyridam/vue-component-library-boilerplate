<template>
  <div class="c-avatar-mask">
    <div
      v-if="imgSrc"
      class="c-avatar-img"
    />

    <c-icon
      v-else
      icon="face"
    />
  </div>
</template>

<script>
export default {
  name: 'c-avatar',
  props: {
    imgSrc: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/lib.scss';

.c-avatar-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $size-xlarge;
  width: $size-xlarge;
  background: $color-grey;
  border: $border-default;
  border-radius: 50%;

  &.xsmall {
    height: $size-medium;
    width: $size-medium;
  }
  
  &.small {
    height: $size-large;
    width: $size-large;
  }
}
</style>
