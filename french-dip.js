/**
 * FrenchDip.js v0.0.1
 *
 * Register your custom plug-ins, target plug-in elements, and create unique instances for each of all of them.
 * 
 * MIT License
 */

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(['_'], factory(root));
    } else if (typeof exports === 'object') {
        module.exports = factory(require('_'));
    } else {
        root.frenchDip = factory(root, root._);
    }

})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    'use strict';

    /*==================================
    =            Initializr            =
    ==================================*/
    
    (function (window, undefined) {

        var _handler = {};

        var Initializr = function () {
            this.init.apply(this, arguments);
        };

        // Methods
        Object.assign(Initializr.prototype, getMethods());
        // Properties
        Object.defineProperties(Initializr.prototype, getProperties());

        root.Initializr = Initializr;

        function getMethods() {
            return {
                init: function (namespace, name) {

                    _handler = this;
                    this._init = {};


                    if (typeof namespace === 'object') {
                        this.namespace = namespace;
                    } else {
                        throw new Error('no namespace specified');
                    }

                    this.name = name;

                    return this;
                },

                component: function (name, args) {
                    if (!namespace) {
                        return _handler._errors.push(name);
                    }

                    var component = namespace[name];
                    var namespace = _handler.namespace;

                    args = args || [];
                    if (Array.isArray(args)) {
                        args = [args];
                    }

                    if (typeof component.init !== 'function') {
                        return _handler._errors.push(name);
                    }

                    component.init.apply(component, args);
                },

                logErrors: function () {
                    if (!_handler._errors.length) {
                    }

                    Array.prototype.forEach.call(_handler._errors, carpErrors);

                    function carpErrors(err) {
                        console.error('%s Component %s failed to load.', _handler.name, err);
                    }
                }
            };
        }

        function getProperties() {
            return {
                _errors: {
                    get: function () {
                        return this._init._errors || [];
                    },
                    set: function (_errors) {
                        this._init._errors = _errors;
                    }
                },
                name: {
                    get: function () {
                        return this._init.name || '';
                    },
                    set: function (name) {
                        this._init.name = name;
                    }
                },
                namespace: {
                    get: function () {
                        return this._init.namespace || {};
                    },
                    set: function (namespace) {
                        this._init.namespace = namespace;
                    }
                }
            };
        }

    })(this);
    
    /*==============================
    =            InitJS            =
    ==============================*/
    
    (function () {

        var Site = new Initializr({}, 'Initializr');
        var FrenchDipComponent = Site.component.bind(Site);

        // Collect FrenchDip elements
        var components = getComponentNames();

        // Initialize FrenchDip Components
        Array.prototype.forEach.call(components, FrenchDipComponent);

        // LOG ERRORS
        Site.logErrors();

        root.Site = Site;

        ////////

        function getComponentNames() {
            var fdEls = document.querySelectorAll('[fdjs]');
            var fdComponents = [];
            
            Array.prototype.forEach.call(fdEls, _getComponentName);
            
            return fdComponents;

            function _getComponentName(fdEl) {
                var component = fdEl.getAttribute('fdjs');

                if (!fdComponents.includes(component)) {
                    fdComponents.push(component);
                }
            }
        }

    })();
    
    /*=================================================
    =            Component Wrapper Factory            =
    =================================================*/
    
    (function (Site) {

        var frenchDip = {}

        var ComponentWrapperFactory = function () {
            this.init.apply(this, arguments);
        }

        // Methods
        Object.assign(ComponentWrapperFactory.prototype, getMethods());

        root.FrenchDip = ComponentWrapperFactory;

        function getMethods() {
            return {
                init: function (selector, defaultOptions, instanceObject) {
                    frenchDip = this;


                    var fdEls = document.querySelectorAll(selector);

                    Array.prototype.forEach.call(fdEls, dip);
                    
                    function dip(fdEl) {
                        var instanceOptions = Object.assign({}, defaultOptions, _parseOptions(fdEl, defaultOptions));
                        new instanceObject(fdEl, instanceOptions);
                    }
                }
            }
        }

        function _parseOptions(fdEl, defaultOptions) {
            var instanceOptions = {};

            for (var key in fdEl.dataset) {
                if (!hasOwnProperty.call(fdEl.dataset, key)) {
                    return;
                }

                instanceOptions[key] = fdEl.dataset[key];
            }


            return instanceOptions;
        }

    })(Site);

});
