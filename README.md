# Vue Component Library Boilerplate

:wave: This is a boilerplate for developing vue component libraries. This project aims to be the love-child of [prograhammer's vue-library-template](https://github.com/prograhammer/vue-library-template) and [chrisvfritz's vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate), to create an opinionated vue component library setup with side-by-side library/docs development, publish hooks, generators, pre-configured components, base styles, unit tests and more.

## Credits and inspiration

:heart: This project is built on top of the versatile [vue-library-template](https://github.com/prograhammer/vue-library-template) by [prograhammer](https://github.com/prograhammer), which is great for quickly prototyping and publishing a vue library on [npm](https://www.npmjs.com/).

:heart: This project is heavily inspired by [Chris Fritz's](https://github.com/chrisvfritz) 'must-read' [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate) which is the gold-standard for Vue SPA projects. [This talk](https://youtu.be/7lpemgMhi0k) by Chris Fritz explains many of the patterns used and advocated in this project, and comes highly recommended - his energy is amazing!

:heart: Icons and fonts from Google's [material icon](https://material.io/icons/) and [font libraries](https://fonts.google.com/) are used in this project. Special shout out to the incredible [Vue Material](https://vuematerial.io/) project by [marcosmoura](https://github.com/marcosmoura) for providing the inspiration for many of the pre-configured components in this project.

:heart: [Vue Awesome](https://github.com/vuejs/awesome-vue) deserves a mention for the sheer amout of inspirational links!

## Project features

* **Side-by-side component and documentation development** with hot-reload, lint-on-save.
* **Generators** to reinforce consistency and speed up development time.
* **Pre-configured components** with the bare minimum styling and functionality so you don't have to start from scratch, otherwise BYOS (bring your own styles).
* **Tests with jest** and auto-generated unit test files when creating new components using generators.
* **Easily publish to npm** with publish hooks and incorporate your new library in other projects.

## Getting started

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

## Documentation

This project includes a `docs` folder with more details on:

1. [Setup and development](docs/development.md)
1. [Architecture](docs/architecture.md)
1. [Languages and technologies](docs/tech.md)
1. [Components](docs/components.md)
1. [Documentation](docs/documentation.md)
1. [Publishing your library and docs](docs/publishing.md)