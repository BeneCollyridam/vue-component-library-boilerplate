---
to: "src/components/<%= 
  blocks.indexOf('component') !== -1 ? 'c-' :  
  blocks.indexOf('layout') !== -1 ? 'l-' : ''
%><%= name %>.unit.js"
---
<% const component = blocks.indexOf('component') !== -1;
const layout = blocks.indexOf('layout') !== -1;
const componentName = component ? 'c-' + name : layout ? 'l-' + name : name; 
const importName = componentName.split('-').map((item) => {
  return item.charAt(0).toUpperCase() + item.substring(1);
}).join('');%>import <%= importName %> from './<%= componentName %>.vue';

describe('@/components/<%= componentName %>.vue', () => {
  it('should export with name: "<%= componentName %>"', () => {
    expect(<%= importName %>.name).toBe('<%= componentName %>');
  });
});
