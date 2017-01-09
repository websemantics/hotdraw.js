/**
 * Hotdraw.js : DrawingView {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DrawingView renders a Drawing and listens to its changes.
 * It receives user input and delegates it to the current tool.
 * DrawingView observes drawing for changes via the DrawingListener interface.
 * DrawingView plays the role of the StateContext in the State pattern.
 * Tool is the State. DrawingView is the StrategyContext in the Strategy pattern
 * with regard to the UpdateStrategy.  DrawingView is the StrategyContext 
 * for the PointConstrainer.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005
 * @package   websemantics/hotdraw/framework
 */

DrawingView.prototype = new DrawingChangeListener(); // extends ImageObserver, DrawingChangeListener
function DrawingView() {
    this.className = "DrawingView";
}
//*************
// Sets the view's editor.
//*************
DrawingView.prototype.setEditor = function( /* DrawingEditor */ editor) {;
}
//*************
// Gets the current tool.
//*************
/* Tool */
DrawingView.prototype.tool = function() {;
}
//*************
// Gets the drawing.
//*************
/* Drawing */
DrawingView.prototype.drawing = function() {;
}
//*************
// Sets and installs another drawing in the view.
//*************
DrawingView.prototype.setDrawing = function( /* Drawing */ d) {;
}
//*************
// Gets the editor.
//*************
/* DrawingEditor */
DrawingView.prototype.editor = function() {;
}
//*************
// Adds a figure to the drawing. Return the added figure.
//*************
/* Figure */
DrawingView.prototype.add = function( /* Figure */ figure) {;
}
//*************
// Removes a figure from the drawing. Return the removed figure
//*************
/* Figure */
DrawingView.prototype.remove = function( /* Figure */ figure) {;
}
//*************
// Adds a vector of figures to the drawing.
//*************
DrawingView.prototype.addAll = function( /* Vector */ figures) {;
}
//*************
// Gets the size of the drawing.
//*************
/* Dimension */
DrawingView.prototype.getSize = function() {;
}
//*************
// Gets the minimum dimension of the drawing.
//*************
/* Dimension */
DrawingView.prototype.getMinimumSize = function() {;
}
//*************
// Gets the preferred dimension of the drawing..
//*************
/* Dimension */
DrawingView.prototype.getPreferredSize = function() {;
}
//*************
// Sets the current display update strategy.
//*************
DrawingView.prototype.setDisplayUpdate = function( /* Painter */ updateStrategy) {;
}
//*************
// Gets the currently selected figures. 
// Return a vector with the selected figures. The vector is a copy of the current selection.
//*************
/* Vector */
DrawingView.prototype.selection = function() {;
}
//*************
// Gets an enumeration over the currently selected figures.
//*************
/* FigureEnumeration */
DrawingView.prototype.selectionElements = function() {;
}
//*************
// Gets the currently selected figures in Z order.
//*************
/* Vector */
DrawingView.prototype.selectionZOrdered = function() {;
}
//*************
// Gets the number of selected figures.
//*************
/* int */
DrawingView.prototype.selectionCount = function() {;
}
//*************
// Adds a figure to the current selection.
//*************
DrawingView.prototype.addToSelection = function( /* Figure */ figure) {;
}
//*************
// Adds a vector of figures to the current selection.
//*************
DrawingView.prototype.addToSelectionAll = function( /* Vector */ figures) {;
}
//*************
// Removes a figure from the selection.
//*************
DrawingView.prototype.removeFromSelection = function( /* Figure */ figure) {;
}
//*************
// If a figure isn't selected it is added to the selection. Otherwise it is removed from the selection.
//*************
DrawingView.prototype.toggleSelection = function( /* Figure */ figure) {;
}
//*************
// Clears the current selection.
//*************
DrawingView.prototype.clearSelection = function() {;
}
//*************
// Gets the current selection as a FigureSelection. A FigureSelection can be cut, copied, pasted.
//*************
/* FigureSelection */
DrawingView.prototype.getFigureSelection = function() {;
}
//*************
// Finds a handle at the given coordinates.Return the hit handle, null if no handle is found.
//*************
/* Handle */
DrawingView.prototype.findHandle = function(x, y) {;
}
//*************
// Gets the position of the last click inside the view.
//*************
/* Point */
DrawingView.prototype.lastClick = function() {;
}
//*************
// Sets the current point constrainer.
//*************
DrawingView.prototype.setConstrainer = function( /* PointConstrainer */ p) {;
}
//*************
// Gets the current grid setting.
//*************
/* PointConstrainer */
DrawingView.prototype.getConstrainer = function() {;
}
//*************
// Checks whether the drawing has some accumulated damage
//*************
DrawingView.prototype.checkDamage = function() {;
}
//*************
// Repair the damaged area
//*************
DrawingView.prototype.repairDamage = function() {;
}
//*************
// Paints the drawing view. The actual drawing is delegated to the current update strategy.
//*************
DrawingView.prototype.paint = function( /* Graphics */ g) {;
}
//*************
// Creates an image with the given dimensions
//*************
/* Image */
DrawingView.prototype.createImage = function(width, height) {;
}
//*************
// Gets a graphic to draw into
//*************
/* Graphics */
DrawingView.prototype.getGraphics = function() {;
}
//*************
// Gets the background color of the DrawingView
//*************
/* Color */
DrawingView.prototype.getBackground = function() {;
}
//*************
// Sets the background color of the DrawingView
//*************
DrawingView.prototype.setBackground = function( /* Color */ c) {;
}
//*************
// Draws the contents of the drawing view. The view has three layers:
// background, drawing, handles.
// The layers are drawn in back to front order.
//*************
DrawingView.prototype.drawAll = function( /* Graphics */ g) {;
}
//*************
// Draws the currently active handles.
//*************
DrawingView.prototype.drawHandles = function( /* Graphics */ g) {;
}
//*************
// Draws the drawing.
//*************
DrawingView.prototype.drawDrawing = function( /* Graphics */ g) {;
}
//*************
// Draws the background. If a background pattern is set it is used to fill the 
// background. Otherwise the background is filled in the background color.
//*************
DrawingView.prototype.drawBackground = function( /* Graphics */ g) {;
}
//*************
// Sets the cursor of the DrawingView 
//*************
DrawingView.prototype.setCursor = function( /* Cursor */ c) {;
}
//*************
// Freezes the view by acquiring the drawing lock.
//*************
DrawingView.prototype.freezeView = function() {;
}
//*************
// Unfreezes the view by releasing the drawing lock.
//*************
DrawingView.prototype.unfreezeView = function() {;
}