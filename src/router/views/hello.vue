<template>
  <div class="hello">
    <h1>Vue Component</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi lacus, efficitur quis ornare id, tempor et nisi. Proin maximus erat et risus congue, eu placerat odio feugiat. Nulla placerat at justo at rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, erat at luctus suscipit, risus est efficitur urna, in rutrum lorem tellus vitae risus. Vestibulum pharetra nunc non nisi sollicitudin, a ultrices velit ullamcorper. Phasellus ornare tellus diam, ac fermentum ante bibendum vel. In consectetur et lacus at accumsan.</p>
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
