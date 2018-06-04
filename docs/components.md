# Components

* [Component types](#component-types)
  * [Pure components](#pure-components)
  * [Layout components](#layout-components)
* [Generating new components](#generating-new-components)
* [Styling components](#styling-components)
    * [Using modules](#using-modules)
    * [Styling modules](#styling-modules)
* [Pre-configured components](#pre-configured-components)

## Component types

Components are divided into "pure" and "layout" components.

**Pure components** can be thought of as a single element, like a button or an input. They can also contain other components and act as a container, such as card and menu components.

**Layout components** wrap components and its contents to affect the position and size of its children. Examples are grid and column layouts, but they can also be more complex, like a dashboard layouts with defined slots for navigation, menu and contents.

### Pure components

`c-**.vue`

Pure components have a single designated task. Components can contain other components.

**TODO: add examples**

### Layout components

`l-**.vue`

Layout components wrap other components and are purely concerned with the layout of its contents.

**TODO: add examples**

## Generating new components

This project includes component generators to reinforce consistency and speed up development time. See the [Hygen docs](http://www.hygen.io/) for more generator documentation. You can update existing generators and their templates in the `_templates` folder or create new generators by adding a new folder in the `_templates/new` folder.

When you generate a new component, you will be prompted to choose a component type (i.e. "component" or "layout"). See the section on [component types](#component-types) for more info on which component type is the most appropriate.

```bash
# Generate a new component with adjacent unit test
yarn new component
```

All generated components come with an adjacent unit test that lives next to your component file in the `src/components` folder.

## Styling components

This project uses `scss` as the default style language in `.vue` files. Since `css` is also valid `scss` it makes sense to include this as a default. To use another style preprocesser see the vue-loader docs on [using preprocessers](https://vue-loader.vuejs.org/guide/pre-processors.html#sass).

### Using modules

New components have the `module` style setting as default in all component files, ie.e `<style lang="scss" module>` to enforce [css modules](https://github.com/css-modules/css-modules). By using modules, all styles will be suffixed with a hash (e.g. `class="selector-abc123"`) to prevent any styling clashes with other styles.

**To opt-out of the `module` setting simply delete it in the `<style>` tag or replace it with `scoped` if you want scope the styles without using modules.**

For more details on the vue-loader configuration for css modules, see the [vue-loader docs](https://vue-loader.vuejs.org/guide/css-modules.html#usage).

### Styling modules

Styles are included in the `<template>` tag by using `$style.` in an element's `:class` binding. For example:

```html
<template>
  <div>
    <!-- Apply '.red' class based on the truthiness of 'isRed' -->
    <p :class="{ [$style.red]: isRed }">
      Am I red?
    </p>

    <!-- Apply the '.red' and '.bold' classes -->
    <p :class="[$style.red, $style.bold]">
      Red and bold
    </p>
  </div>
</template>

<style lang="scss" module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

## Pre-configured components

This project comes with pre-configured components in the `src/components` folder to speed up development time. A list of each component can be found below:

**TODO: add components list...**