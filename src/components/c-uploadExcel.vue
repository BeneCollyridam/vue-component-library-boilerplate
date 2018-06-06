<template>
  <div><!--
    Bind the parent's id attribute to the label's "for" attribute.
    The id attribute from the parent will be added to the input,
    ensuring that the label specifies which input it is bound to.
    -->
    <label :for="$attrs.id" >{{ label }}</label>
    <!--
    Bind attributes from parent to the input using v-bind="$attr",
    e.g. <c-input placerholder="Email"> will set the input's
    placeholder property to "Email".

    v-on="listeners" ensures that all native events from the input
    propagate to the parent, allowing native events to be called
    from the parent, e.g. <c-input @focus="focusEvent" />
    -->
    <input
      type="file"
      v-bind="$attrs"
      @change="handleFileUpload"
      :value="value"
    >
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  name: 'c-upload-excel',
  inheritAttrs: false,
  props: {
    value: String,
    label: String,
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
  methods: {
    handleFileUpload: function handleFileUpload(e) {
      const files = e.target.files;
      const f = files[0];
      const reader = new FileReader();
      reader.onload = (ev) => {
        const data = ev.target.result;
        const workbook = XLSX.read(data, { type: 'binary' }); // eslint-disable-next-line
        console.log('Triggered');
        this.$emit('upload', XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1, { header: 1, sheetStubs: true }));
      };
      reader.readAsBinaryString(f);
    },
  },
};
</script>

<style lang="scss" module>
@import '../styles/lib.scss';
</style>
