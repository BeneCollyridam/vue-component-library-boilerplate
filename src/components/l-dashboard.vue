<template>
  <div :class="$style.container">
    <div :class="$style.sideMenu">
      <slot name="side-menu"></slot>
    </div>
    <div :class="$style.topBar">
      <slot name="top-bar"></slot>
    </div>
    <div :class="$style.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-dashboard',
};
</script>

<style lang="scss" module>
@import '../styles/lib.scss';

.container {
  width: 100%;
}

.topBar {
  position: fixed;
  top: 0;
  left: 0;
  height: $top-bar-height;
  width: 100%;
  border-bottom: $border-default;
  box-shadow: $shadow-default;
  background-color: #fff;
}

.sideMenu {
  position: fixed;
  top: $top-bar-height;
  left: 0;
  width: $side-menu-width;
  height: calc(100vh - #{$top-bar-height});
  border-right: $border-default;
  background-color: $color-white;
}

.content {
  min-height: calc(100vh - #{$top-bar-height});
  width: calc(100vh-#{$side-menu-width});
  margin-top: $top-bar-height;
  margin-left: $side-menu-width;
}

</style>
