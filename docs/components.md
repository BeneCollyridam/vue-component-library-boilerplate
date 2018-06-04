# Components

* [Component types](#component-types)
  * [Pure components](#pure-components)
  * [Layout components](#layout-components)
* [Generating new components](#generating-new-components)
  * [Styling components](#styling-components)
* [Pre-configured components](#pre-configured-components)

## Component types

Components are divided into 'pure' and 'layout' components. 

**Pure components** can be thought of as a single element, like a button or an input. They can also contain other components and act as a container, such as card and menu components.

**Layout components** wrap components and its contents to affect the position and size of its children. Examples are grid and column layouts, but they can also be more complex, like a dashboard layouts with defined slots for navigation, menu and contents.

### Pure components

`c-**.vue`

'Pure' components have a single designated task. Components can contain other components.

### Layout components

`l-**.vue`

Layout components wrap other components and are purely concerned with the layout of its contents.

## Generating new components

This project includes component generators to reinforce consistency and speed up development time. See the [Hygen docs](http://www.hygen.io/) for more generator documentation.

### Styling components

This project uses `scss` as the default style language in `.vue` files. Since `scss` is also valid `css` it makes sense to include this as a default. To use another style preprocesser, see the vue-loader docs on [using preprocessers](https://vue-loader.vuejs.org/guide/pre-processors.html#sass).

#### Using modules

New components have the `module` style setting as default in all component files, ie.e `<style lang="scss" module>` to enforce [css modules](https://github.com/css-modules/css-modules).

> A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules).

**To opt-out of the `module` setting simply delete it in the `<style>` tag or replace it with `scoped` if you want scope the styles without using modules.**

By using modules, all styles will be suffixed with a hash (e.g. `class="selector-abc123"`) to prevent any styling clashes with other styles. 

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

Details on vue-loader configuration can be found in the [vue-loader docs](https://vue-loader.vuejs.org/guide/css-modules.html#usage) on css modules.

## Pre-configured components

This project comes with 