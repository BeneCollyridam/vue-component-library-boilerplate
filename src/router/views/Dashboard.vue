<template>
  <l-dashboard>
    <template slot="top-bar">
      <div id="top-bar">
        <h3>Dashboard</h3>
        <c-avatar></c-avatar>
      </div>
    </template>
    <template slot="side-menu"></template>
    <template slot="content">
      <l-content>
        <h1>Dashboard</h1>
        <h4>Dashboard component</h4>
        <br>
        <p>
          Welcome to the Dashboard view of the docs!
        </p>
      </l-content> 
    </template>
  </l-dashboard>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '../../styles/lib.scss';

#top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 $size-medium;
}

</style>
