/*=========================================
=            YourClass Example            =
=========================================*/

(function () {
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

    var DemoJS = function () {
        var heading = this.root.querySelectorAll('.heading')[0],
        img = this.root.querySelectorAll('img')[0],
        newHead = this.options.heading,
        newSrc = this.options.newSrc,
        oldHead, oldSrc;

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

    class DemoES2015 {
        constructor() {
            this.name = 'DemoES2015'; //publically provides the name of the Class

            this.heading = this.root.querySelectorAll('.heading')[0];
            this.img = this.root.querySelectorAll('img')[0];
            this.options = this.options;

            setTimeout(() => {
                this.swapAssets();
            }, 1000);
        }

        swapAssets() {
            this.heading.innerHTML = this.options.heading;
            this.img.setAttribute('src', this.options.newSrc);
        }
    }

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