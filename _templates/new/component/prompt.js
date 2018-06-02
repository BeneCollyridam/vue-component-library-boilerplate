module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
  },
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [
      {
        name: 'component',
        value: 'component',
        default: true,
      },
      {
        name: 'layout',
        value: 'layout',
        default: false,
      },
    ],
    validate(value) {
      if (
        value.indexOf('component') === -1 && 
        value.indexOf('layout') === -1
      ) {
        return 'Please select a component or layout type';
      }
      if (
        value.indexOf('component') !== -1 && 
        value.indexOf('layout') !== -1
      ) {
        return 'Please select one of the choices';
      }
      return true;
    },
  },
]
