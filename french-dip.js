
(function () {
  /**
   * 
   * A flexible, light-weight module for creating custom components
   *
   * @module french-dip
   *
   * @name FrenchDipJS
   * @version 0.1.4
   * @License MIT License
   * 
   */
  'use strict';

  var _Components = {};
  var errors = [];

  if (!Array.prototype.includes) {
    _includesPolyfill();
  }

  if (!Object.assign || typeof Object.assign != 'function') {
    _assignPolyfill();
  }

  window.FrenchDip = {
    register: register
  };

  _onDomReady(initializeComponents);

  /**
   * Constructs a new instance of the user's Classes for each instance of a Class's defined selector
   * @class
   * 
   * @param {String} selector Class name of the elements the user's Class needs to effect
   * @param {Object} options A set of default options that will be over-ridden by an data attribute options on the selector's element
   * @param {Object} Component Name of the user's Class
   */
  function FrenchDip(selector, options, Component) {
    var elements = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, initComponent);

    function initComponent(el) {
      var instanceOptions = Object.assign({}, options, _parseInstanceOptions(el, options));
      
      Component.prototype.root = el;
      Component.prototype.options = instanceOptions;
      
      new Component();
    }
  }

  /**
   * DOM-Ready function that envokes the user's Classes
   */
  function initializeComponents() {
    var components = _getComponents();
    // Initialize FrenchDip'ed Components
    components.forEach(function(name) {
      var selector = '[data-frenchdip="' + name + '"]';

      if (typeof _Components[name] !== 'function') {
        return errors.push(name);
      }
      
      new FrenchDip(selector, {}, _Components[name]);
    });
    _logErrors();
  }

  function register(Component, name) {
    if (!name && !Component.name) {
      return errors.push('Could not register unnamed Component');
    }
    if (!name) {
      name = Component.name;
    }
    _Components[name] = Component;
  }

  function _getComponents() {
    var fdEls = document.querySelectorAll('[data-frenchdip]');
    var fdComponents = [];
    Array.prototype.forEach.call(fdEls, _getComponentName);
    return fdComponents;

    function _getComponentName(fdEl) {
      var name = fdEl.getAttribute('data-frenchdip');
      if (!name || !name.length) {
        return errors.push(name);
      }
      if (!fdComponents.includes(name)) {
        fdComponents.push(name);
      }
    }
  }

  function _logErrors() {
    if (!errors.length) {
      return;
    }
    Array.prototype.forEach.call(errors, carpErrors);

    function carpErrors(err) {
      console.warn('%s Component failed to load.', err);
    }
  }

  function _onDomReady(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function _parseInstanceOptions(el, defaultOptions) {
    var instanceOptions = {};

    if (typeof el.dataset !== 'object') {
      return instanceOptions;
    }

    Object.keys(el.dataset).forEach(function(key) {
      if (key !== 'frenchdip') {
        instanceOptions[key] = el.dataset[key];
      }
    });
    return instanceOptions;
  }

  /**
   * Polyfills
   */
  function _assignPolyfill() {
    Object.assign = function(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  function _includesPolyfill() {
    Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
      'use strict';
      var O = Object(this);
      var len = parseInt(O.length, 10) || 0;
      if (len === 0) {
        return false;
      }
      var n = parseInt(arguments[1], 10) || 0;
      var k;
      if (n >= 0) {
        k = n;
      } else {
        k = len + n;
        if (k < 0) {
          k = 0;
        }
      }
      var currentElement;
      while (k < len) {
        currentElement = O[k];
        if (searchElement === currentElement) {
          // NaN !== NaN
          return true;
        }
        k++;
      }
      return false;
    };
  }
})();