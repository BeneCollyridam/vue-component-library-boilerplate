<template>
  <div :class="$style.container">
    <div :class="$style.sideMenu">
      <slot name="side-menu"></slot>
    </div>
    <div :class="$style.topNav">
      <slot name="top-nav"></slot>
    </div>
    <div :class="$style.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-dashboard',
  props: {
    navHeight: String,
  },
};
</script>

<style lang="scss" module>
@import '../styles/lib.scss';

.container {
  width: 100%;
}

.topNav {
  position: fixed;
  top: 0;
  left: 0;
  height: $top-nav-height;
  width: 100%;
  border-bottom: $wire-border;
  box-shadow: $wire-shadow;
  background-color: #fff;
}

.sideMenu {
  position: fixed;
  top: $top-nav-height;
  left: 0;
  width: $side-menu-width;
  height: calc(100vh - #{$top-nav-height});
  border-right: $wire-border;
  background-color: #fff;
}

.content {
  min-height: calc(100vh - #{$top-nav-height});
  width: calc(100vh-#{$side-menu-width});
  margin-top: $top-nav-height;
  margin-left: $side-menu-width;
  background: red;
}

</style>
