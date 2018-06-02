# Vue Component Library Boilerplate

A boilerplate for creating Vue component libraries.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Component Types
Component types are divided into the following the categories:

### Pure Components 'c-**.vue'
'Pure' components have a single designated task.

### Layout Components 'l-**.vue'
Layout components wrap other components and contents. Layout components can contain other layout components.

Layout components are further divided into page layouts and section layouts:

#### Page Layouts 'l-page-**.vue'
Page layouts take up the entire screen and there should only be one page layout per view. Page layouts typically wrap section 

#### Section Layouts l-section-**.vue'
Section layounts take up a part of the