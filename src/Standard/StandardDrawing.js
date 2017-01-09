/**
 * Hotdraw.js : StandardDrawing
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The standard implementation of the Drawing interface.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     12th January 2005 
 * @package   websemantics/hotdraw/standard
 */

StandardDrawing.prototype = new CompositeFigure();

function StandardDrawing() { /* implements Drawing */
    var argv = StandardDrawing.arguments;
    var argc = StandardDrawing.length;
    this.className = "StandardDrawing";
    /* Vector */
    this.fListeners = null;
    /* Thread */
    this.fDrawingLockHolder = null; //boolean that serves as a condition variable to lock the access to the drawing. The lock is recursive and we keep track of the current lock holder.
    if (argv.length > 0) this.initStandardDrawing();
}
//*************
// initStandardDrawing
//*************
StandardDrawing.prototype.initStandardDrawing = function() {
    this.initCompositeFigure();
    this.fListeners = new Vector(2);
}
//*************
// Adds a listener for this drawing.
//*************
StandardDrawing.prototype.addDrawingChangeListener = function( /* DrawingChangeListener */ listener) {
    this.fListeners.addElement(listener);
}
//*************
// Removes a listener from this drawing.
//*************
StandardDrawing.prototype.removeDrawingChangeListener = function( /* DrawingChangeListener */ listener) {
    this.fListeners.removeElement(listener);
}
//*************
// Returns the listeners for this drawing.
//*************
/* Enumeration */
StandardDrawing.prototype.drawingChangeListeners = function() {
    return this.fListeners.elements();
}
//*************
// Removes the figure from the drawing and releases it.
//*************
/* Figure */
StandardDrawing.prototype.remove = function( /* Figure */ figure) {
    // ensure that we remove the top level figure in a drawing 
    if (figure.listener() != null) {
        figure.listener().figureRequestRemove(new FigureChangeEvent(figure, null));
        return figure;
    }
    return null;
}
//*************
// Handles a removeFromDrawing request that is passed up the figure container hierarchy.
//*************
StandardDrawing.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {
    /* Figure */
    var figure = e.getFigure();
    if (this.fFigures.contains(figure)) {
        this.fFigures.removeElement(figure);
        figure.removeFromContainer(this); // will invalidate figure
        figure.release();
    } else;
    //alert("Attempt to remove non-existing figure");
}
//*************
// Invalidates a rectangle and merges it with the existing damaged area.
//*************
StandardDrawing.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {
    if (this.fListeners != null) {
        for (var i = 0; i < this.fListeners.size(); i++) {
            /* DrawingChangeListener */
            var l = this.fListeners.elementAt(i);
            l.drawingInvalidated(new DrawingChangeEvent(this, e.getInvalidatedRectangle()));
        }
    }
}
//*************
// Forces an update
//*************
StandardDrawing.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {
    if (this.fListeners != null) {
        for (var i = 0; i < this.fListeners.size(); i++) {
            /* DrawingChangeListener */
            var l = this.fListeners.elementAt(i);
            l.drawingRequestUpdate(new DrawingChangeEvent(this, null));
        }
    }
}
//*************
// Return's the figure's handles. This is only used when a drawing is nested inside another drawing.
//*************
/* Vector */
StandardDrawing.prototype.handles = function() {
    /* <======================================================================[ Not Implemented ] 
        Vector handles = new Vector();
        handles.addElement(new NullHandle(this, RelativeLocator.northWest()));
        handles.addElement(new NullHandle(this, RelativeLocator.northEast()));
        handles.addElement(new NullHandle(this, RelativeLocator.southWest()));
        handles.addElement(new NullHandle(this, RelativeLocator.southEast()));
        return handles;
*/
}
//*************
// Gets the display box. This is the union of all figures.
//*************
/* Rectangle */
StandardDrawing.prototype.displayBox = function() {
    if (this.fFigures.size() > 0) {
        /* FigureEnumeration */
        var k = this.figures();
        /* gRectangle */
        var r = k.nextFigure().displayBox();
        while (k.hasMoreElements()) r.add(k.nextFigure().displayBox());
        return r;
    }
    return new gRectangle(0, 0, 0, 0);
}
//*************
// basicDisplayBox
//*************
StandardDrawing.prototype.basicDisplayBox = function( /* Point */ p1, /* Point */ p2) {}
//*************
// Acquires the drawing lock.
//*************
StandardDrawing.prototype.lock = function() {
    /* <======================================================================[ Not Implemented ]
   // recursive lock
   Thread current = Thread.currentThread();
   if (fDrawingLockHolder == current)
       return;
    while (fDrawingLockHolder != null) {
        try { wait(); } catch (InterruptedException ex) { }
     }
     fDrawingLockHolder = current;
     */
}
//*************
// Releases the drawing lock.
//*************
StandardDrawing.prototype.unlock = function() {
    /* <======================================================================[ Not Implemented ]
   if (fDrawingLockHolder != null) {
       fDrawingLockHolder = null;
       notifyAll();
   }
*/
}
//*************
// readObject
//*************
StandardDrawing.prototype.readObject = function( /* ObjectInputStream */ s) {
    // [ Not Implemented ]
}