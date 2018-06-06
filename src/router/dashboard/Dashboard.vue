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
          route: { name: 'Data' },
        },
        {
          title: 'Profile',
          icon: 'account_circle',
          route: { name: 'Profile' },
        },
        {
          title: 'Messages',
          icon: 'forum',
          route: { name: 'Messages' },
        },
        {
          title: 'People',
          icon: 'people',
          route: { name: 'People' },
        },
        {
          title: 'Notifications',
          icon: 'notifications',
          route: { name: 'Notifications' },
        },
        {
          title: 'Settings',
          icon: 'settings',
          route: { name: 'Settings' },
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
