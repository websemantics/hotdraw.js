/**
 * Hotdraw.js : DragTracker
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DragTracker implements the dragging of the clicked figure.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

DragTracker.prototype = new AbstractTool();

function DragTracker( /* DrawingView */ view, /* Figure */ anchor) {
    var argv = DragTracker.arguments;
    var argc = DragTracker.length;
    this.className = "DragTracker";
    /* Figure */
    this.fAnchorFigure = null;
    /* int */
    this.fLastX = null; // previous mouse position
    /* int */
    this.fLastY = null; // previous mouse position
    /* boolean */
    this.fMoved = null;
    if (argv.length > 0) this.initDragTracker(view, anchor);
}
//*************
// Constructs a tool for the given view.
//*************
DragTracker.prototype.initDragTracker = function(view, anchor) {
    this.initAbstractTool(view);
    this.fAnchorFigure = anchor;
}
//*************
// mouseDown
//*************
DragTracker.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorX = x;
    this.fAnchorY = y;
    this.fLastX = x;
    this.fLastY = y;
    if (e.isShiftDown()) {
        this.view().toggleSelection(this.fAnchorFigure);
        this.fAnchorFigure = null;
    } else if (!this.view().selection().contains(this.fAnchorFigure)) {
        this.view().clearSelection();
        this.view().addToSelection(this.fAnchorFigure);
    }
    this.view().setCursor("move");
}
//*************
// mouseDrag
//*************
DragTracker.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fView.selectionCount() < 2) {
        this.fAnchorFigure.moveBy(x - this.fLastX, y - this.fLastY);
        this.fAnchorFigure.draw();
    } else {
        /* FigureEnumeration */
        var figures = this.view().selectionElements();
        while (figures.hasMoreElements()) {
            /* Figure */
            var f = figures.nextFigure();
            f.moveBy(x - this.fLastX, y - this.fLastY);
            f.draw();
        }
    }
    this.fLastX = x;
    this.fLastY = y;
}
//*************
// OLD mouseDrag
//*************
/*
DragTracker.prototype.mouseDrag = function( e,  x,  y){
this.fMoved = (Math.abs(x - this.fAnchorX) > 4) || (Math.abs(y - this.fAnchorY) > 4);
 if (this.fMoved) {
      var figures = this.view().selectionElements();
     while (figures.hasMoreElements()){
         var f=figures.nextFigure();
        f.moveBy(x - this.fLastX, y - this.fLastY);
        f.draw();
        }
        }
  this.fLastX = x;
  this.fLastY = y;
}
*/
//*************
// mouseUp
//*************
DragTracker.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fMoved = (Math.abs(x - this.fAnchorX) > 4) || (Math.abs(y - this.fAnchorY) > 4);
    if (this.fMoved) {
        /* FigureEnumeration */
        var figures = this.view().selectionElements();
        while (figures.hasMoreElements()) this.fireViewEvent(figures.nextFigure(), "Move"); // <======================= [ Move View Event]
    }
    this.view().setCursor("default");
}