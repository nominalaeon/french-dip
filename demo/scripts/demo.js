'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*=========================================
=            YourClass Example            =
=========================================*/

(function () {

    'use strict';

    function YourClass() {
        this.root.innerHTML = Math.random();
    }

    FrenchDip.register(YourClass, 'YourClass');
})();

/*==========================================
=            Vanilla JS Example            =
==========================================*/

(function () {

    'use strict';

    var DemoJS = function DemoJS() {
        var heading = this.root.querySelectorAll('.heading')[0],
            img = this.root.querySelectorAll('img')[0],
            newHead = this.options.heading,
            newSrc = this.options.newSrc,
            oldHead,
            oldSrc;

        if (this.options.interval) {
            runInterval(this.options.interval);
        } else {
            runTimeout();
        }

        function runInterval(interval) {
            setInterval(swapAssets, interval);
        }

        function runTimeout() {
            setTimeout(swapAssets, 1000);
        }

        function swapAssets() {
            oldHead = heading.innerHTML;
            oldSrc = img.getAttribute('src');
            heading.innerHTML = newHead;
            img.setAttribute('src', newSrc);
            newHead = oldHead;
            newSrc = oldSrc;
        }
    };

    DemoJS.prototype.name = 'DemoJS';

    FrenchDip.register(DemoJS); // Register DemoJS Class with FrenchDip
})();

/*===================================
=            ES2015 Example            =
===================================*/

(function () {

    'use strict';

    var DemoES2015 = function () {
        function DemoES2015() {
            var _this = this;

            _classCallCheck(this, DemoES2015);

            this.name = 'DemoES2015'; //publically provides the name of the Class

            this.heading = this.root.querySelectorAll('.heading')[0];
            this.img = this.root.querySelectorAll('img')[0];
            this.options = this.options;

            setTimeout(function () {
                _this.swapAssets();
            }, 1000);
        }

        _createClass(DemoES2015, [{
            key: 'swapAssets',
            value: function swapAssets() {
                this.heading.innerHTML = this.options.heading;
                this.img.setAttribute('src', this.options.newSrc);
            }
        }]);

        return DemoES2015;
    }();

    FrenchDip.register(DemoES2015); // Register DemoES2015 Class with FrenchDip
})();

/*======================================
=            jQuery Example            =
======================================*/

(function () {

    'use strict';

    var DemoJQ = DemoJQ;

    $.extend(DemoJQ.prototype, {
        heading: 'Batman via $.onClick'
    });

    FrenchDip.register(DemoJQ, 'DemoJQ'); // Register DemoJQ Class with FrenchDip

    function DemoJQ() {
        this.$root = $(this.root);
        this.$heading = $(this.$root.find('.heading').get(0));
        this.$img = $(this.$root.find('img').get(0));

        this.$root.on('click', $.proxy(swapAssets, this));
    }

    function swapAssets() {
        this.$heading.html(this.heading);
        this.$img.attr('src', this.options.newSrc);
        this.$root.off();
    }
})();