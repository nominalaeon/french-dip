(function () {
	
	var instanceOptions = {
		test: 'DEFAULT'
	}

	var DemoInstance = function () {
		this.init.apply(this, arguments);
	};

	Object.assign(DemoInstance.prototype, {
		init: init
	});

	Site.Demo = new Site.FrenchDip('.demo', instanceOptions, DemoInstance);

	function init(root, options) {
		this.root = root;
		this.options = options;

		console.log('DemoInstance', this.root, '\n* * ', this.options);

		var number = 
			'<p>' +
				this.options.test + ': ' +
				Math.ceil(Math.random() * 100) +
			'</p>';

		this.root.innerHTML = this.root.innerHTML + number;
	}

})();