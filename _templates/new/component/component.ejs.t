---
to: "src/components/<%= 
  blocks.indexOf('component') !== -1 ? 'c-' :  
  blocks.indexOf('layout') !== -1 ? 'l-' : ''
%><%= name %>.vue"
---
<% const component = blocks.indexOf('component') !== -1;
const layout = blocks.indexOf('layout') !== -1;
const componentName = component ? 'c-' + name : layout ? 'l-' + name : name; %><template>
  <div><% if (layout) { %>
    <slot></slot>
  <% } %></div>
</template>

<script>
export default {
  name: '<%= componentName %>',
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '../styles/lib.scss';
</style>