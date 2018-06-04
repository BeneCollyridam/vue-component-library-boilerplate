<template>
  <div class="c-avatar-mask">
    <div
      v-if="imgSrc"
      class="c-avatar-img"
    />

    <c-icon
      v-else
      icon="person"
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
  // border: $border-default;
  border-radius: 50%;
  
  &.small {
    height: $size-large;
    width: $size-large;

    .c-icon {
      font-size: $size-small;
    }
  }

  &.large {
    height: $size-xxlarge;
    width: $size-xxlarge;

    .c-icon {
      font-size: $size-large;
    }
  }
}
</style>
