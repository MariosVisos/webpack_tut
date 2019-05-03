async function getComponent() {

  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
 
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
     
}

getComponent().then(component => {
  document.body.appendChild(component);
})

// The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer 
// resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module.