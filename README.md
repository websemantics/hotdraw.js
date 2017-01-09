```
                                                                  ╭──╮_____╭──╮_____╭──╮
╭─────╮╭──╮               ╭────────╮                              ╰┬─╯     ╰──╯     ╰─┬╯
│     ││  │               │        ╰╮                              │                  │
│     ││  │╭──────╮ ╭───╮ │     ╭╮  │╭───┬──╮╭──────╮╭───╮╭──╮╭──╮ │   ╭───╮╭──────╮  │
│     ╰╯  ││   ╭╮ │╭╯   ╰╮│     ││  ││      │├────  ││   ││  ││  │ │   │   ││  ────┤  │
│         ││   ││ │╰╮   ╭╯│     ││  ││    ╭─╯│ ╭╮   ││   ╰╯  ╰╯  │ │  ╭╯   ││      │  │
│     ╭╮  ││   ╰╯ │ │ ──┤ │     ╰╯  ││    │  │ ╰╯   ││           │╭┴─╮│    │├────  │╭─┴╮
╰─────╯╰──╯╰──────╯ ╰───╯ ╰─────────╯╰────╯  ╰───┴──╯╰────┴───┴──╯╰┬─╯╰────╯╰──────╯╰─┬╯
┬ ╭┬╮,╭─╮    ┬ ┬ ╭─╮ ╭┬╮         ┬ ╭┬╮, ╭─╮    ┬ ┬ ╭─╮ ╭┬╮         │                  │
│  │  ╰─╮    ├─┤ │ │  │          │  │   ╰─╮    ├─┤ │ │  │         ╭┴─╮_____╭──╮_____╭─┴╮
┴  ┴  ╰─╯    ┴ ┴ ╰─╯  ┴   . . .  ┴  ┴   ╰─╯    ┴ ┴ ╰─╯  ┴         ╰──╯     ╰──╯     ╰──╯
```

> HotDraw.js is a JavaScript Graphical User Interface (GUI) framework for developing structured drawing editors.

[Live Demo](http://websemantics.github.io/hotdraw.js/)

## Introduction

This project is the JavaScript implementation of [HotDraw](http://wiki.c2.com/?HotDraw), a framework for developing 2-dimensional structured drawing editors. HotDraw was built in the late 80s by [Kent Beck](https://twitter.com/kentbeck) and [Ward Cunningham](https://twitter.com/wardcunningham).

HowDraw.js can be used to build all sorts of diagram software such as UML tools, schematic diagrams, blueprints and program design. Elements of drawings can be treated interdentally but they can also have constraints between them. Editing drawings is achieved using the mouse. The user selects the element of interest with the mouse and makes changes to it (resize, translate, etc). More figures and tools can be easily added to the framework.

![HotDraw.js](https://raw.githubusercontent.com/websemantics/hotdraw.js/master/img/hotdrawjs.png)

The main [aims](http://www.jhotdraw.org/) of making HotDraw.js an open-source project are:

- To learn HotDraw [Pattern Language](http://softarch.cis.strath.ac.uk/PLJHD/Patterns/JHDDomainOverview.html)
- To gain a wider audience for this framework among developers
- To build new applications based upon HotDraw.js
- To let application development influence the development of HotDraw.js
- To add new and advanced features
- To drive its further development
- To enhance and refactor the exisiting code
- To identify new design patterns and refactorings
- To make it an example for a well-designed and flexible framework
- To learn and to have fun

## Install

- Clone this repo
```
git clone https://github.com/websemantics/hotdraw.js
```

- Install Bower dependencies
```
cd hotdraw.js
bower install
```

- View `index.html` in your browser

- To generate a new release (owner)

```
npm install
grunt
```

This generates up-to-date library files for HotDraw.js are located in `dist` folder.

## Documentation

The original documentations of the HotDraw Framework are available [here](http://softarch.cis.strath.ac.uk/PLJHD/Patterns/JHDDomainOverview.html).

![Java HotDraw](http://softarch.cis.strath.ac.uk/PLJHD/Patterns/DrawApp.JPG)

There is also a great article on JHotDraw titled, [Become a programming Picasso with JHotDraw](http://www.javaworld.com/article/2074997/swing-gui-programming/become-a-programming-picasso-with-jhotdraw.html). This article goes into the theory of frameworks and design patterns which is what the open source community has been striving to achieve.

Recent talk was given by [Ken Auer](https://twitter.com/kauerrolemodel) addressing the relevance of HotDraw to modern Web applications development titled, [HotDraw Revisited: Object-Oriented JavaScript and Canvas - DevFest NC 2015](https://www.youtube.com/watch?v=R6EIdvICoQg)

## Background

This work was developed in 2005 as part of my PhD research titled: ["A Web-based Approach to Engineering Adaptive Collaborative Applications"](http://ethos.bl.uk/OrderDetails.do?uin=uk.bl.ethos.501964). Back then, native browser support for SVG was unheard-of and this application was built to run on [Adobe SVG Viewer](http://www.adobe.com/devnet/svg/adobe-svg-viewer-download-area.html) and [Apache Batik](https://xmlgraphics.apache.org/batik/).

I always thought HotDraw was a model example of what a framework should resemble; great code structure and true OOP styled programming. I had to make few changes to adapt legacy HotDraw.js code to work on modern browsers but I am impressed of the native browser support for SVG. The implementation of HotDraw.js has showed me the potential of porting other Java applications to JavaScript and SVG.

## Related Projects

HotDraw.js was built on the [Oea.svg Framework](http://oeasvg.com), a library that enables building GUI applications on SVG following Java GUI widget toolkit, [Swing](https://docs.oracle.com/javase/tutorial/uiswing/). There are few libraries that come with Oea.svg including `Java.js`, `Draw2D.svg` and `Swing.svg`. These libraries were "inspired by" Java and Java Graphics and Swing/AWT packages. Work might be required to upgrade to libraries such as, [Snap.svg](http://snapsvg.io/) or [svg.js](http://svgjs.com/).

The GUI components used in HotDraw.js have Microsoft Windows Look & Feel (ouch). However, it is easy to plugin other Look & Feel themes to the `AWT.js` widgets similarly as with Java applications.

You might also be interested in [Browser.js](https://github.com/websemantics/Browser.js), a browser implementation of `MathML`, `HTML` and `SVG` in JavaScript.

## Credits

HotDraw.js was originally implemented as a port of [JHotDraw version 5.1](http://www.jhotdraw.org) which is based on Erich Gamma's JHotDraw, which is copyright 1996, 1997 by IFA Informatik and Erich Gamma. A more recent release, [JHotDraw 7](http://www.randelshofer.ch/oop/jhotdraw/) is now available as a major rewrite.

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
Copyright (c) Web Semantics, Inc.
