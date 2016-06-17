# FrenchDipJS

A flexible, light-weight module for creating custom components

## Docs & Demo

[http://nominalaeon.github.io/french-dip/](http://nominalaeon.github.io/french-dip/)

## Contributor Guidelines

### Submitting issues

### Test case required

**All bug reports and problem issues require a jsFiddle**.   
[Please fork this JSFiddle as a baseline](https://jsfiddle.net/NoahRodenbeek/m0fr5jsm/).

+ A test case clearly demonstrates the bug or issue.
+ It contains the bare minimum HTML, CSS, and JavaScript required to demonstrate the bug.
+ Assets are not minified (we cannot debug .min.js files).
+ A link to your production site is **not** a reduced test case.

Providing a test case is the best way to get your issue addressed. Without a test case; your issue may be closed.
You must provide a clear and simple way to reproduce the issue with the provided fiddle.

### Pull requests

**Contributions are welcome**! That said, please *be prepared to edit* your pull request at request, and provide a jsFiddle of your fork working. Failure to do so will result in your pull request being closed.

*Please note that while FrenchDip is open source, this is still my baby, and by submitting a pull request you are authorizing me to edit or modify it in any way shape or form. You will be listed in Github as a contributor, but I have and will continue to steer the direction of this project.*

## Compatibility Caveats

Some crucial Array and Object prototype incompatabilities mean *FrenchDip will not work below IE9*.

Because the HTMLElement.dataset polyfill is as large as FrenchDip itself, any IE below 11 won't be able to pass data attribute settings to components.

tl;dr: IE11 good, IE9 meh, IE8 nope.

## Acknowledgements

FrenchDipJS is named for [Caleb Kniffen](https://github.com/ckniffen), who accidentally spilled a tub of au jus on his shirt, covered it with a buttoned overshirt, but was later found out because our dev cube smelled like beef. FrenchDipJS is based on an original implementation by Caleb for an enterprise project that used it to connect dozens of custom components being written by our large development team. It has been largely rewritten and made into a stand-alone project to provide more flexibility and allow an easier point of entry. Thanks, Caleb, you make me a better developer.

The first person I was brave enough to show this project to was [Ken Wheeler](https://github.com/kenwheeler). His criticisms and encouragement are what got me to the finish line. Then I stole his [contributor guidelines](https://github.com/kenwheeler/slick/blob/master/CONTRIBUTING.markdown). Thanks, man!

## License

Copyright (c) 2016 Noah Rodenbeek  
Licensed under the MIT license.
