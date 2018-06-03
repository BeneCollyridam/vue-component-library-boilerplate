# Components

* [Component types](#component-types)
  * [Pure components](#pure-components)
  * [Layout components](#layout-components)
* [Generating new components](#generating-new-components)
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

## Pre-configured componenents