/**
 * Hotdraw.js : SelectionTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Tool to select and manipulate figures.
 * A selection tool is in one of three states, e.g., background selection, 
 * figure selection, handle manipulation. 
 * The different states are handled by different child tools.
 * SelectionTool is the StateContext and child is the State.
 * The SelectionTool delegates state specific behavior to its current child tool.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

SelectionTool.prototype = new AbstractTool();

function SelectionTool( /* DrawingView */ view) {
    var argv = SelectionTool.arguments;
    var argc = SelectionTool.length;
    this.className = "SelectionTool";
    /* Tool */
    this.fChild = null;
    if (argv.length > 0) this.initSelectionTool(view);
}
//*************
// Constructs a tool for the given view.
//*************
SelectionTool.prototype.initSelectionTool = function(view) {
    this.initAbstractTool(view);
}
//*************
// Handles mouse down events and starts the corresponding tracker.
//*************
SelectionTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fChild != null) return;
    /* Handle */
    var handle = this.view().findHandle(e.getX(), e.getY());
    if (handle != null) {
        this.fChild = this.createHandleTracker(this.view(), handle);
    } else {
        /* Figure */
        var figure = this.drawing().findFigure(e.getX(), e.getY());
        if (figure != null) {
            this.fChild = this.createDragTracker(this.view(), figure);
        } else {
            if (!e.isShiftDown()) {
                this.view().clearSelection();
            }
            this.fChild = this.createAreaTracker(this.view());
        }
    }
    this.fChild.mouseDown(e, x, y);
}
//*************
// Handles mouse move events. 
//*************
SelectionTool.prototype.mouseMove = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    // Change the cursor shape of the mouse when hovers on Hondles
    /* Handle */
    var handle = this.view().findHandle(x, y);
    if (handle != null) {
        this.view().setCursor(handle.getCursorName());
    } else this.view().setCursor("default");
}
//*************
// Handles mouse drag events. The events are forwarded to the current tracker.
//*************
SelectionTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fChild != null) this.fChild.mouseDrag(e, x, y);
}
//*************
// Handles mouse up events. The events are forwarded to the current tracker.
//*************
SelectionTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    // this.view().unfreezeView();  <================================= [NOT IMPLEMENTED,....no need]
    if (this.fChild != null) this.fChild.mouseUp(e, x, y);
    this.fChild = null;
}
//*************
// Factory method to create a Handle tracker. It is used to track a handle.
//*************
/* Tool */
SelectionTool.prototype.createHandleTracker = function( /* DrawingView */ view, /* Handle */ handle) {
    return new HandleTracker(view, handle);
}
//*************
// Factory method to create a Drag tracker. It is used to drag a figure.
//*************
/* Tool */
SelectionTool.prototype.createDragTracker = function( /* DrawingView */ view, /* Figure */ f) {
    return new DragTracker(view, f);
}
//*************
// Factory method to create an area tracker. It is used to select an area.
//*************
/* Tool */
SelectionTool.prototype.createAreaTracker = function( /* DrawingView */ view) {
    return new SelectAreaTracker(view);
}