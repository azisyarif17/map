
/*!
 * Minimal LayerSwitcher mock untuk OpenLayers
 * Ini hanya untuk keperluan offline testing
 */
ol.control.LayerSwitcher = function(opt_options) {
  var options = opt_options || {};
  var button = document.createElement('button');
  button.innerHTML = '☰';
  var element = document.createElement('div');
  element.className = 'layer-switcher ol-unselectable ol-control';
  element.style.top = '5px';
  element.style.left = '5px';
  element.style.position = 'absolute';
  element.style.zIndex = '1000';
  element.appendChild(button);
  ol.control.Control.call(this, {
    element: element,
    target: options.target
  });
};
ol.inherits(ol.control.LayerSwitcher, ol.control.Control);
