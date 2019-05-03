import _ from 'lodash';
import Print from './print';

  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
  }

  document.body.appendChild(component());

// The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer 
// resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module.