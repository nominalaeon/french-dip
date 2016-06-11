(function () {

	'use strict';

	FrenchDip.Demo = Demo;

	function Demo() {

		/**
		 * This is the specific DOM element tied to the instance of this script
		 * @type {String}
		 */
		this.root;

		/**
		 * Any data-set options defined on this instance's DOM element are passed in here
		 * @type {Object}
		 */
		this.options;

		if (!this.options.test) {
			this.options.test = 'No option defined'
		}

		var number = 
			'<p>' +
				this.options.test + ': ' +
				Math.ceil(Math.random() * 100) +
			'</p>';

		this.root.innerHTML = this.root.innerHTML + number;
	}

})();