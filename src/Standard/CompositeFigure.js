/**
 * Hotdraw.js : CompositeFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Figure that is composed of several figures
 *
 * A CompositeFigure doesn't define any layout behavior. It is up to subclassers to
 * arrange the contained figures.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     12th January 2005
 * @package   websemantics/hotdraw/standard
 */

// Global Variables

var common_composite_figure_id = "composite_figure_id_";
var cocomposite_figure_counter = 0;

//=============================================================================
// (1) Internal Only : getCompositeFigureId: returns a unique Id for a Composite Figure
//=============================================================================
function getCompositeFigureId() {
    return (common_composite_figure_id + (cocomposite_figure_counter++));
}

CompositeFigure.prototype = new AbstractFigure();

function CompositeFigure() { /*  extends AbstractFigure & implements FigureChangeListener */
    var argv = CompositeFigure.arguments;
    var argc = CompositeFigure.length;
    /* String */
    this.className = "CompositeFigure";
    /* Vector */
    this.fFigures = null;
    /* Graphics */
    this.g = null;
    if (argv.length > 0) this.initCompositeFigure();
}
//*************
// initCompositeFigure
//*************
CompositeFigure.prototype.initCompositeFigure = function() {
    this.fFigures = new Vector(100);
    this.g = new Graphics(0, 0, 0, 0, getCompositeFigureId());
}
//*************
// Adds a figure to the list of figures. Initializes the the figure's container.
//*************
/* Figure */
CompositeFigure.prototype.add = function( /* Figure */ figure) {
    if (!this.fFigures.contains(figure)) {
        this.fFigures.addElement(figure);
        figure.addToContainer(this);
    }
    return figure;
}
//*************
// Add a vector of figures.
//*************
CompositeFigure.prototype.addAll = function( /* Vector */ newFigures) {
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) this.add(k.nextElement());
}
//*************
// Removes a figure from the composite.
//*************
/* Figure */
CompositeFigure.prototype.remove = function( /* Figure */ figure) {
    this.removeCompositeFigure(figure);
}
//*************
// Removes a figure from the composite.
//*************
/* Figure */
CompositeFigure.prototype.removeCompositeFigure = function( /* Figure */ figure) {
    if (this.fFigures.contains(figure)) {
        figure.removeFromContainer(this);
        figure.dispose();
        this.fFigures.removeElement(figure);
    }
    return figure;
}
//*************
// Removes a vector of figures. OR Removes all children.
//
// Forms:
// ======
// (1) removeAll()
// (2) removeAll(Vector newFigures)
//*************
CompositeFigure.prototype.removeAll = function( /* Vector */ newFigures) {
    this.removeAllCompositeFigure(newFigures);
}
//*************
// removeAllCompositeFigure
//*************
CompositeFigure.prototype.removeAllCompositeFigure = function( /* Vector */ newFigures) {
    if (newFigures == undefined) {
        /* FigureEnumeration */
        var k = this.figures();
        while (k.hasMoreElements()) this.remove(k.nextFigure());
        this.fFigures.removeAllElements();
        return;
    }
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) {
        this.remove(k.nextElement());
    }
}
//*************
// Removes a figure from the figure list, but doesn't release it. Use this method to temporarily
// manipulate a figure outside of the drawing.
//*************
/* Figure */
CompositeFigure.prototype.orphan = function( /* Figure */ figure) {
    this.fFigures.removeElement(figure);
    return figure;
}
//*************
// Removes a vector of figures from the figure's list without releasing the figures.
//*************
CompositeFigure.prototype.orphanAll = function( /* Vector */ newFigures) {
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) this.orphan(k.nextElement());
}
//*************
// Replaces a figure in the drawing without removing it from the drawing.
//*************
CompositeFigure.prototype.replace = function( /* Figure */ figure, /* Figure */ replacement) {
    var i = this.fFigures.indexOf(figure);
    if (i != -1) {
        replacement.addToContainer(this); // will invalidate figure
        figure.changed();
        this.fFigures.setElementAt(replacement, i);
    }
}
//*************
// Sends a figure to the back of the drawing.
//*************
CompositeFigure.prototype.sendToBack = function( /* Figure */ figure) {
    if (this.fFigures.size() == 1) return;
    if (this.fFigures.contains(figure)) {
        this.fFigures.removeElement(figure);
        this.fFigures.insertElementAt(figure, 0);
        figure.changed();
    }
}
//*************
// Brings a figure to the front.
//*************
CompositeFigure.prototype.bringToFront = function( /* Figure */ figure) {
    if (this.fFigures.contains(figure)) {
        this.fFigures.removeElement(figure);
        this.fFigures.addElement(figure);
        figure.changed();
    }
}
//*************
// Draws all the contained figures
//
// Since this implementation of HotDraw is in JavaScript for SVG, the draw functionality
// here is to update the SVG content (not to redraw),..I use g element to group the figures.
//*************
CompositeFigure.prototype.draw = function( /* Graphics */ g) {
    if (this.g != null) this.g.clear(); // Free all svg nodes from the CompositeFigure 'g' group element    [******( SVG )*****]
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) {
        var fig = k.nextFigure();
        fig.draw(this.g);
    }
    if (g != undefined) g.addGraphics(this.g);
}
//*************
// Gets a figure at the given index.
//*************
/* Figure */
CompositeFigure.prototype.figureAt = function(i) {
    return this.fFigures.elementAt(i);
}
//*************
// Returns an Enumeration for accessing the contained figures. The figures are returned in the drawing order.
//*************
/* FigureEnumeration */
CompositeFigure.prototype.figures = function() {
    return new FigureEnumerator(this.fFigures);
}
//*************
// Gets number of child figures.
//*************
/* int */
CompositeFigure.prototype.figureCount = function() {
    return this.fFigures.size();
}
//*************
// Returns an Enumeration for accessing the contained figures in the reverse drawing order.
//*************
/* FigureEnumeration */
CompositeFigure.prototype.figuresReverse = function() {
    return new ReverseFigureEnumerator(this.fFigures);
}
//*************
// Finds a top level Figure. Use this call for hit detection that should not descend into the figure's children.
//
// Forms:
// ======
// (1) findFigure(Rectangle r)
// (2) findFigure(int x,int y)
//*************
/* Figure */
CompositeFigure.prototype.findFigure = function(x, y) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    // Form (1)
    if (x instanceof gRectangle) {
        var r = x;
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            /* Rectangle */
            var fr = figure.displayBox();
            if (r.intersects(fr)) return figure;
        }
        return null;
    }
    // Form (2)
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        if (figure.containsPoint(x, y)) return figure;
    }
    return null;
}
//*************
// Finds a top level Figure, but supresses the passed in figure. Use this method to ignore a figure
// that is temporarily inserted into the drawing. OR Finds a top level Figure that intersects the given rectangle.
//
// Forms:
// ======
// (1) findFigureWithout(Rectangle r, Figure without)
// (2) findFigureWithout(int x, int y, Figure without)
//*************
/* Figure */
CompositeFigure.prototype.findFigureWithout = function(x, y, /* Figure */ without) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    // Form (1)
    if (x instanceof gRectangle) {
        var r = x;
        without = y;
        if (without == null) return this.findFigure(r);
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            /* Rectangle */
            var fr = figure.displayBox();
            if (r.intersects(fr) && !figure.includes(without)) return figure;
        }
        return null;
    }
    // Form (2)
    if (without == null) return this.findFigure(x, y);
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        if (figure.containsPoint(x, y) && !figure.includes(without)) return figure;
    }
    return null;
}
//*************
// Finds a figure but descends into a figure's children. Use this method to implement click-through
// hit detection, that is, you want to detect the inner most figure containing the given point.
//*************
/* Figure */
CompositeFigure.prototype.findFigureInside = function(x, y) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure().findFigureInside(x, y);
        if (figure != null) return figure;
    }
    return null;
}
//*************
// Finds a figure but descends into a figure's children. It supresses the passed in figure.
// Use this method to ignore a figure that is temporarily inserted into the drawing.
//*************
/* Figure */
CompositeFigure.prototype.findFigureInsideWithout = function(x, y, /* Figure */ without) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        if (figure != without) {
            /* Figure */
            var found = figure.findFigureInside(x, y);
            if (found != null) return found;
        }
    }
    return null;
}
//*************
// Checks if the composite figure has the argument as one of its children.
//*************
/* boolean */
CompositeFigure.prototype.includes = function( /* Figure */ figure) {
    //  if (super.includes(figure)) return true;   <================================ [ Can not be implemeneted! ]
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) {
        /* Figure */
        var f = k.nextFigure();
        if (f.includes(figure)) return true;
    }
    return false;
}
//*************
// Moves all the given figures by x and y. Doesn't announce any changes. Subclassers override
// basicMoveBy. Clients usually call moveBy.
//*************
CompositeFigure.prototype.basicMoveBy = function(x, y) {
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) k.nextFigure().moveBy(x, y);
}
//*************
// Releases the figure and all its children.
//*************
CompositeFigure.prototype.release = function() {
    this.abstractFigureRelease();
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        figure.release();
    }
}
//*************
// Propagates the figureInvalidated event to my listener.
//*************
CompositeFigure.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureInvalidated(e);
}
//*************
// Propagates the removeFromDrawing request up to the container.
//*************
CompositeFigure.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestRemove(new FigureChangeEvent(this));
}
//*************
// Propagates the requestUpdate request up to the container.
//*************
CompositeFigure.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestUpdate(e);
}
//*************
// 
//*************
CompositeFigure.prototype.figureChanged = function( /* FigureChangeEvent */ e) {}
//*************
// 
//*************
CompositeFigure.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {}
//*************
// Writes the contained figures to the StorableOutput.
//*************
CompositeFigure.prototype.write = function( /* StorableOutput */ dw) {
    // NOT IMPLEMENTED 
}
//*************
// 
//*************
CompositeFigure.prototype.read = function( /* StorableOutput */ dr) {
    // NOT IMPLEMENTED 
}