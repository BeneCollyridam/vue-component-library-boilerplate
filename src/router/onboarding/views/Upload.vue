<template>
  <div>
    <c-upload-excel @upload="handleExcelData" />
    <c-hands-table :table-data="tableData" />
  </div>
</template>

<script>
export default {
  name: 'Upload',
  methods: {
    handleExcelData: function onExcelData(data) {
      this.tableData = data;
    },
  },
  data() {
    return {
      tableData: [[]],
    };
  },
};
</script>

<style scoped>

</style>
