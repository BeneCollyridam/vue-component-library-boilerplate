<template>
  <l-dashboard :menu-items="menuItems">
    <template slot="dashboard-bar">
      <div class="dashboard-bar">
        <h4>Acme</h4>
        <c-avatar/>
      </div>
    </template>

    <template slot="dashboard-drawer">
      <div class="l-drawer-menu-item">
        <c-icon icon="exit_to_app"/>
        <span class="l-drawer-menu-item-title">Logout</span>
      </div>
    </template>

    <template slot="dashboard-content">
      <router-view></router-view>
      <l-content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a tristique tellus. Nunc sit amet tellus a ante luctus venenatis quis at felis. Duis consectetur erat enim, non placerat ligula luctus nec. Aenean tempor urna augue, vel cursus ligula facilisis in. Quisque ut magna eu nulla finibus dignissim quis ac nisl. Etiam sodales congue porta. Nam consequat dolor elit, elementum cursus sem tempor id. Quisque quis nunc eu ligula vulputate pellentesque ut quis arcu.</p>
      </l-content> 
    </template>
  </l-dashboard>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      menuItems: [
        {
          title: 'Data',
          icon: 'timeline',
          route: 'dashboard',
        },
        {
          title: 'Profile',
          icon: 'account_circle',
          route: 'profile',
        },
        {
          title: 'Settings',
          icon: 'settings',
          route: 'settings',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/lib.scss';

.dashboard-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 $size-medium;
}



</style>
