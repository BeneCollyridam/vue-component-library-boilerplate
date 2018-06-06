<template>
  <div>
    <HotTable root="test-hot" :data="tableData" :settings="hotSettings"></HotTable>
  </div>
</template>

<script>
import HotTable from '@handsontable/vue';

export default {
  name: 'c-hands-table',
  components: { HotTable },
  inheritAttrs: false,
  data: function data() {
    return {
      hotSettings: {
        colHeaders: true,
      },
      root: 'test-hot',
    };
  },
  props: {
    tableData: Array,
  },
  computed: {
    /*
    The "listeners()" computed property is responsible
    for emitting all events from an inner element to the parent.
    The input method ensures that v-model works with the parent.
    */
    // listeners() {
    //   return {
    //     ...this.$listeners,
    //     input: event => this.$emit('input', event.target.value),
    //   };
    // },
  },
  methods: {},
};
</script>

<style src='../../node_modules/handsontable/dist/handsontable.full.css'></style>
<style lang="scss">
@import '../styles/lib.scss';
  #test-hot {
    width: 600px;
    height: 400px;
    overflow: hidden;
  }
</style>
