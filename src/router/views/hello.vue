<template>
  <div class="hello">
    <h1>Vue Component</h1>
    <c-input
      id="form-input"
      v-model="inputData"
      label="input"
      placeholder="Email"
      @focus="focusEvent"
    />
    <p>{{ inputData }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      inputData: '',
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    focusEvent: () => {
      console.log('It focused!');
    },
  },
};
</script>

<style lang="scss" scoped>

.hello {
  max-width: 600px;
}

</style>
