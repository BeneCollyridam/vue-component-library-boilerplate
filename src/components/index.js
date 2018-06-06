import Vue from 'vue';

// Look for component files ("c-") in the current directory
const requireComponent = require.context('.', false, /c-[\w-]+\.vue$/);
// Look for layout files ("l-") in the current directory
const requireLayout = require.context('.', false, /l-[\w-]+\.vue$/);

const registerComponents = (
  // Set default selected param so user can select
  // only the desired components and layouts from the library
  // ie. registerComponents({ components: [...], layouts: [...] })
  selected = {
    components: [],
    layouts: [],
  },
) => {
  let componentFiles;
  let layoutFiles;
  // If the user has not specified any components
  // Get all components
  if (selected.components.length === 0) {
    componentFiles = requireComponent.keys().map(file => file);
  }
  // If the user has specified components
  // Get specified components
  if (selected.components.length !== 0) {
    componentFiles = selected.components
      .map(component => `./c-${component}.vue`);
  }
  // If the user has not specified layouts
  // Get all layouts
  if (selected.layouts.length === 0) {
    layoutFiles = requireLayout.keys().map(file => file);
  }
  // If the user has specified layouts
  // Get specified layouts
  if (selected.layouts.length !== 0) {
    layoutFiles = selected.layouts
      .map(layout => `./l-${layout}.vue`);
  }

  // Register each component globally
  componentFiles.forEach((file) => {
    const componentConfig = requireComponent(file);
    Vue.component(componentConfig.name, componentConfig);
  });

  // Register each layout globally
  layoutFiles.forEach((file) => {
    const layoutConfig = requireLayout(file);
    Vue.component(layoutConfig.name, layoutConfig);
  });
};

export default registerComponents;
