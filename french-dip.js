(function (root, factory) {

    return factory(root);

})(this, function (root) {

    /**
     * 
     * A flexible, light-weight module for creating custom components
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

    if (!Array.prototype.includes) {
        _includesPolyfill();
    }

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
        components.forEach(function (name) {
            let selector = '[data-frenchdip="' + name + '"]';

            if (typeof FrenchDip[name] !== 'function') {
                return errors.push(name);
            }

            new FrenchDip(selector, {}, FrenchDip[name]);
        });

        _logErrors();
    }

    function _getFrenchDipComponents() {
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

        Object.keys(el.dataset).forEach(function (key) {
            instanceOptions[key] = el.dataset[key];
        });

        return instanceOptions;
    }

    function _includesPolyfill() {
        Array.prototype.includes = function (searchElement /*, fromIndex*/ ) {
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
                if (searchElement === currentElement) { // NaN !== NaN
                    return true;
                }
                k++;
            }
            return false;
        };
    }

});