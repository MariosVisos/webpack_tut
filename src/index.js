import _ from 'lodash';
import './style.css';
import WebpackIcon from './webpack.png';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to the existing div.
    const myIcon = new Image();
    myIcon.src = WebpackIcon;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());

  // A logical next step from here is minifying and optimizing your images.
  // Check out the image-webpack-loader and url-loader for more on how you can enhance your image loading process.