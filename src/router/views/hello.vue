<template>
  <div class="hello">
    <h1>Vue Component</h1>
    <c-upload-excel
      id="form-input"
      label="input"
      placeholder="Email"
      @upload="logData"
    />
    <div>
      <c-table
        :table-data="tableData"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      tableData: [[1, 2, 3]],
      msg: 'Welcome to Your Vue.js App',
      test: 'asd',
    };
  },
  methods: {
    logData: function logData(data) {
      this.tableData = data;
    },
  },
};
</script>

<style lang="scss" scoped>

.hello {
  max-width: 600px;
}

</style>
