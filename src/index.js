import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;  // onclick event is bind to the original printMe function

  element.appendChild(btn);

  return element;
}

  document.body.appendChild(component());
  let element = component(); // Store the element to re-render on print.js changes
  document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
      printMe();
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
  })
}

  // A logical next step from here is minifying and optimizing your images.
  // Check out the image-webpack-loader and url-loader for more on how you can enhance your image loading process.

  // This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making
  // an ajax request and parsing the data at runtime you can load it into your module during the build process so that the parsed
  // data is ready to go as soon as the module hits the browser.