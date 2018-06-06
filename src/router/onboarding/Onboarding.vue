<template>
  <div>
    <router-link to="/onboarding/upload">Go to upload</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Onboarding',
};

</script>

<style lang="scss" scoped>
@import '../../styles/lib.scss';
</style>
