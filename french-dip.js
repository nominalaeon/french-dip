(function (root, factory) {

  return factory(root);

})(this, function (root) {

  /**
   * 
   * A flexible, light-weight framework for creating components
   *
   * @module french-dip
   *
   * @name FrenchDipJS
   * @version 0.0.2
   * @License MIT License
   * 
   */

  'use strict';

  var errors = [];

  root.FrenchDip = FrenchDip;

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
    var components = _getFrenchDipComponents();

    // Initialize FrenchDip'ed Components
    Object.keys(components).forEach(function (name) {
      let selector = components[name];

      if (typeof FrenchDip[name] !== 'function') {
        return errors.push(name);
      }

      new FrenchDip(selector, {}, FrenchDip[name]);
    });

    _logErrors();
  }

  function _getFrenchDipComponents() {
    var fdEls = document.querySelectorAll('[frenchdip]');
    var fdComponents = {};

    Array.prototype.forEach.call(fdEls, _getComponentAttrs);

    return fdComponents;

    function _getComponentAttrs(fdEl) {
      var attrs = fdEl.getAttribute('frenchdip').split(' ');
      var name = attrs[0];
      var selector = attrs[1];

      if (!name || !selector) {
        return errors.push(name);
      }

      fdComponents[name] = '.' + selector;
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

    Object.keys(el.dataset).forEach(function (key) {
      instanceOptions[key] = el.dataset[key];
    });

    return instanceOptions;
  }

});