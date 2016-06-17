# FrenchDipJS

A flexible, light-weight module for creating custom components

## Docs & Demo

[http://nominalaeon.github.io/french-dip/](http://nominalaeon.github.io/french-dip/)

## Compatibility

<table>
    <thead>
        <th>IE11</th>
        <th>≥IE9</th>
        <th>≤IE8</th>
        <th>any other browser</th>
    </thead>
    <tr>
        <td>good</td>
        <td>so-so</td>
        <td>nope</td>
        <td>recommended</td>
    </tr>
</table>

Because of a crucial incompatibility, FrenchDipJS will not work below **IE9**.

Any IE below 11 will work with the caveat that passing settings through the markup on data attributes is impossible.

## Contributor Guidelines

### Submitting issues

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

## Acknowledgements

FrenchDipJS is named for [Caleb Kniffen](https://github.com/ckniffen), who accidentally spilled a tub of au jus on himself, covered the evidence with a buttoned overshirt, but was later found out because our dev cube smelled like a butcher shop. FrenchDipJS is based on the original implementation by Caleb for an enterprise-level project that used it to connect dozens of custom components created by a large development team. It has been largely rewritten and made into a stand-alone project to provide more flexibility and allow an easier point of entry. Thanks, Caleb, you make me a better developer.

The first person I was brave enough to show this project to was [Ken Wheeler](https://github.com/kenwheeler). His criticisms and encouragement are what got me to the finish line. Then I stole his [contributor guidelines](https://github.com/kenwheeler/slick/blob/master/CONTRIBUTING.markdown). Thanks, man!

## License

Copyright (c) 2016 Noah Rodenbeek  
Licensed under the MIT license.
