/**
 * Hotdraw.js : Drawing {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Drawing is a container for figures.
 *
 * Drawing sends out DrawingChanged events to DrawingChangeListeners whenever 
 * a part of its area was invalidated.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Drawing() { /* extends Storable, FigureChangeListener, Serializable */
    var argv = Drawing.arguments;
    var argc = Drawing.length;
    this.className = "Drawing";
    if (argv.length > 0) this.initDrawing();
}
//*************
// initDrawing
//*************
Drawing.prototype.initDrawing = function() {}
//*************
// Releases the drawing and its contained figures.
//*************
Drawing.prototype.release = function() {}
//*************
// Returns an enumeration to iterate in Z-order back to front over the figures.
//*************
/* FigureEnumeration */
Drawing.prototype.figures = function() {}
//*************
// Returns an enumeration to iterate in Z-order front to back over the figures.
//*************
/* FigureEnumeration */
Drawing.prototype.figuresReverse = function() {}
//*************
// Finds a top level Figure. Use this call for hit detection that should not descend into the figure's children.
//
// Forms:
// ======
// (1) findFigure(x,y)
// (2) findFigure(Rectangle r)
//*************
/* Figure */
Drawing.prototype.findFigure = function(x, y) {}
//*************
// Finds a top level Figure, but supresses the passed in figure. Use this method to ignore a figure
// that is temporarily inserted into the drawing.
//
// Forms:
// ======
// (1) findFigureWithout(x,y,Figure without)
// (2) findFigureWithout(Rectangle r,Figure without)
//*************
/* Figure */
Drawing.prototype.findFigureWithout = function(x, y, /* Figure */ without) {}
//*************
// Finds a figure but descends into a figure's children. Use this method to implement click-through
// hit detection, that is, you want to detect the inner most figure containing the given point.
//*************
/* Figure */
Drawing.prototype.findFigureInside = function(x, y) {}
//*************
// Finds a figure but descends into a figure's children. It supresses the passed in figure.
// Use this method to ignore a figure that is temporarily inserted into the drawing.
//*************
Drawing.prototype.findFigureInsideWithout = function(x, y, /* Figure */ without) {}
//*************
// Adds a listener for this drawing.
//*************
Drawing.prototype.addDrawingChangeListener = function( /* DrawingChangeListener */ listener) {}
//*************
// Removes a listener from this drawing.
//*************
Drawing.prototype.removeDrawingChangeListener = function( /* DrawingChangeListener */ listener) {}
//*************
// Gets the listeners of a drawing.
//*************
/* Enumeration */
Drawing.prototype.drawingChangeListeners = function() {}
//*************
// Adds a figure and sets its container to refer to this drawing.
//*************
/* Figure */
Drawing.prototype.add = function( /* Figure */ figure) {}
//*************
// Adds a vector of figures.
//*************
Drawing.prototype.addAll = function( /* Vector */ newFigures) {}
//*************
// Removes the figure from the drawing and releases it.
//*************
/* Figure */
Drawing.prototype.remove = function( /* Figure */ figure) {}
//*************
// Removes a figure from the figure list, but doesn't release it. Use this method to temporarily
// manipulate a figure outside of the drawing.
//*************
/* Figure */
Drawing.prototype.orphan = function( /* Figure */ figure) {}
//*************
// Removes a vector of figures from the figure's list without releasing the figures.
//*************
Drawing.prototype.orphanAll = function( /* Vector */ newFigures) {}
//*************
// Removes a vector of figures .
//*************
Drawing.prototype.removeAll = function( /* Vector */ figures) {}
//*************
// Replaces a figure in the drawing without removing it from the drawing.
//*************
Drawing.prototype.replace = function( /* Figure */ figure, /* Figure */ replacement) {}
//*************
// Sends a figure to the back of the drawing.
//*************
Drawing.prototype.sendToBack = function( /* Figure */ figure) {}
//*************
// Brings a figure to the front.
//*************
Drawing.prototype.bringToFront = function( /* Figure */ figure) {}
//*************
// Draws all the figures back to front.
//*************
Drawing.prototype.draw = function( /* Graphics */ g) {}
//*************
// Invalidates a rectangle and merges it with the existing damaged area.
//*************
Drawing.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {}
//*************
// Forces an update of the drawing change listeners.
//*************
Drawing.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {}
//*************
// Handles a removeFrfigureRequestRemove request that is passed up the figure container hierarchy.
//*************
Drawing.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {}
//*************
// Acquires the drawing lock.
//*************
Drawing.prototype.lock = function() {}
//*************
// Releases the drawing lock.
//*************
Drawing.prototype.unlock = function() {}