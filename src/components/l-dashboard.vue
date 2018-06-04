<template>
  <div class="l-dashboard-wrapper">
    <div class="l-dashboard-drawer-wrapper">
      <div class="l-drawer-menu">
        <router-link
          v-for="(item, index) in menuItems"
          v-bind:key="index"
          tag="div"
          :to="item.route"
          class="l-drawer-menu-item"
          active-class="active"
        >
          <c-icon 
            v-if="item.icon"
            :icon="item.icon"
          />
          <span class="l-drawer-menu-item-title">{{ item.title }}</span>
        </router-link>
      </div>
      
      <slot name="dashboard-drawer"></slot>
    </div>
    <div class="l-dashboard-bar-wrapper">
      <slot name="dashboard-bar"></slot>
    </div>
    <div class="l-dashboard-content-wrapper">
      <slot name="dashboard-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-dashboard',
  props: {
    menuItems: Array,
  },
};
</script>

<style lang="scss">
@import '../styles/lib.scss';

$dashboard-bar-height: 64px;
$dashboard-drawer-width: 200px;

.l-dashboard-wrapper {
  width: 100%;
}

.l-dashboard-bar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: $dashboard-bar-height;
  width: 100%;
  border-bottom: $border-default;
  box-shadow: $shadow-default;
  background-color: #fff;
}

.l-dashboard-drawer-wrapper {
  position: fixed;
  top: $dashboard-bar-height;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: $dashboard-drawer-width;
  height: calc(100vh - #{$dashboard-bar-height});
  padding: $size-medium 0;
  border-right: $border-default;
  background-color: $color-off-white;
}

.l-drawer-menu {
  width: 100%;
}

.l-drawer-menu-item {
  display: flex;
  align-items: center;
  height: $size-xxlarge;
  width: 100%;
  padding: 0 $size-medium;

  &:hover {
    cursor: pointer;
    background-color: $color-grey-light;
  }

  &.active {
    background-color: $color-grey;
  }
}

.l-drawer-menu-item .c-icon {
  margin-right: $size-medium;
}

.l-drawer-menu-item-title {
  font-size: 14px;
  font-family: $heading-font-family;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}

.l-dashboard-content-wrapper {
  min-height: calc(100vh - #{$dashboard-bar-height});
  width: calc(100vw-#{$dashboard-drawer-width});
  margin-top: $dashboard-bar-height;
  margin-left: $dashboard-drawer-width;
}

@media screen and (max-width: $breakpoint-mobile) {
  .l-dashboard-drawer-wrapper {
    display: none;
  }

  .l-dashboard-content-wrapper {
    width: 100vw;
    margin-left: 0;
  }
}

</style>
