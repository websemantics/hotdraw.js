/**
 * Hotdraw.js : HandleTracker
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * HandleTracker implements interactions with the handles of a Figure.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

HandleTracker.prototype = new AbstractTool();

function HandleTracker( /* DrawingView */ view, /* Handle */ anchorHandle) {
    var argv = HandleTracker.arguments;
    var argc = HandleTracker.length;
    this.className = "HandleTracker";
    /* Handle */
    this.fAnchorHandle = null;
    if (argv.length > 0) this.initHandleTracker(view, anchorHandle);
}
//*************
// Constructs a tool for the given view.
//*************
HandleTracker.prototype.initHandleTracker = function(view, anchorHandle) {
    this.initAbstractTool(view);
    this.fAnchorHandle = anchorHandle;
}
//*************
// Handles mouse down events in the drawing view.
//*************
HandleTracker.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorX = x;
    this.fAnchorY = y;
    this.fAnchorHandle.invokeStart(x, y, this.view());
    this.view().setCursor(this.fAnchorHandle.getCursorName());
    this.fAnchorHandle.shape.setVisibility(true);
}
//*************
// Handles mouse drag events in the drawing view.
//*************
HandleTracker.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorHandle.invokeStep(x, y, this.fAnchorX, this.fAnchorY, this.view());
    this.fAnchorHandle.owner().draw();
    this.fAnchorHandle.shape.setVisibility(true);
    this.fAnchorHandle.draw();
}
//*************
// Handles mouse up in the drawing view.
//*************
HandleTracker.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorHandle.invokeEnd(x, y, this.fAnchorX, this.fAnchorY, this.view());
    this.view().setCursor("default");
    this.fireViewEvent(this.fAnchorHandle.fOwner, "Update"); // <======================= [ Update View Event]
}