import _ from 'lodash';
import './style.css';
import WebpackIcon from './webpack.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to the existing div.
    const myIcon = new Image();
    myIcon.src = WebpackIcon;

    element.appendChild(myIcon);
    console.log(Data);
    

    return element;
  }
  
  document.body.appendChild(component());

  // A logical next step from here is minifying and optimizing your images.
  // Check out the image-webpack-loader and url-loader for more on how you can enhance your image loading process.

  // This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making
  // an ajax request and parsing the data at runtime you can load it into your module during the build process so that the parsed
  // data is ready to go as soon as the module hits the browser.