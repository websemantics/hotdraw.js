# Hotdraw.js

Hotdraw.js is a port of [JHotDraw version 5.1](http://www.jhotdraw.org).  It is based on Erich Gamma's JHotDraw, which is copyright 1996, 1997 by IFA Informatik and Erich Gamma.The implementation of Hotdraw.js has showed us the possibilities of porting Java applications to Javascript and SVG. I hope that this will open the doors to recruit ideas and port applications from Java to SVG.

Hotdraw is a framework for developing 2-dimensional structured drawing editors. It is used to develop editors for various 2D drawings such as UML tools, schematic diagrams, blueprints and program design. Elements of drawings can be treated interdentally but they can also have constraints between them. Editing drawings is achieved using the mouse. The user selects the element of interest with the mouse and makes changes to it (resize, translate, etc). More figures and tools can be easily added to the framework.

![Hotdrawjs](https://raw.githubusercontent.com/websemantics/Hotdraw.js/master/img/hotdrawjs.png)

Hotdraw.js has been built with the [Oea.svg Framework](http://oeasvg.com). Oea.svg is a library that enables building GUI applications on SVG following Java Abstract Window Toolkit (AWT) model.

## Aims

The [aim](http://www.jhotdraw.org) of making Hotdraw.js an open-source project is:

- To learn Hotdraw [Pattern Language](http://softarch.cis.strath.ac.uk/PLJHD/Patterns/JHDDomainOverview.html)
- To gain a wider audience for this framework among developers
- To build new applications based upon Hotdraw.js
- To let application development influence the development of Hotdraw.js
- To add new and advanced features
- To drive its further development
- To enhance and refactor the exisiting code
- To identify new design patterns and refactorings
- To make it an example for a well-designed and flexible framework
- To learn and to have fun

## Documentation

The original documentation of the Hotdraw Framework is avilable [here](http://softarch.cis.strath.ac.uk/PLJHD/Patterns/JHDDomainOverview.html). Hotdraw.js is purely a Javascript port of Hotdraw Framework and Pattern Language, built on [Oea.svg Framework](http://oeasvg.com).

![Java Hotdraw](http://softarch.cis.strath.ac.uk/PLJHD/Patterns/DrawApp.JPG)

There is also a great article about JHotdraw titled, [Become a programming Picasso with JHotDraw](http://www.javaworld.com/article/2074997/swing-gui-programming/become-a-programming-picasso-with-jhotdraw.html). This artcile goes into the theory of frameworks and design patterns which is what the open source community has been striving to achive.

## History

This work was developed in 2005 as part of my PhD studies titled: ["A Web-based Approach to Engineering Adaptive Collaborative Applications"](http://ethos.bl.uk/OrderDetails.do?uin=uk.bl.ethos.501964). Back then, native browser support for SVG was unheard-of and this application was built to run on [Adobe SVG Viewer](http://www.adobe.com/devnet/svg/adobe-svg-viewer-download-area.html) and [Apache Batik](https://xmlgraphics.apache.org/batik/). 

I always thought Hotdraw was a model examble of what a Framework should look-like. Great code structure and true OOP styled programming. I had to make few changes to adapt the old Hotdraw.js code to work on modern browsers but I am impressed of the built-in SVG support one gets these days natively. 

Hotdraw.js is built on (Oea.svg Framework)[http://oeasvg.com] which provides two libraries, Draw2D.svg and Swing.svg. These libraries were inspired by Java Graphics and AWT packages. Work might be required to upgrade to libraries such as, (Snap.svg)[http://snapsvg.io/] or (svg.js)[http://svgjs.com/].

## TODO

Upgrade to [JHotdraw 7](http://www.randelshofer.ch/oop/jhotdraw/Documentation/index.html), which looks great. Possibly more implementations of other Hotdraw apps would be nice.
