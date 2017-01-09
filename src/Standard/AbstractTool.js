/**
 * Hotdraw.js : AbstractTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Default implementation support for Tools.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     16th February 2005
 * @package   websemantics/hotdraw/standard
 */

// AbstractTool.prototype= new Tool(); [Implements Tool interface] 

function AbstractTool( /* DrawingView */ itsView) {
    var argv = AbstractTool.arguments;
    var argc = AbstractTool.length;
    this.className = "AbstractTool";
    /* DrawingView */
    this.fView = null;
    // The position of the initial mouse down.
    /* int */
    this.fAnchorX = 0;
    /* int */
    this.fAnchorY = 0;
    if (argv.length > 0) this.initAbstractTool(itsView);
}
//*************
// Constructs a tool for the given view.
//*************
AbstractTool.prototype.initAbstractTool = function(itsView) {
    this.fView = itsView;
}
//*************
// Activates the tool for the given view. This method is called whenever the 
// user switches to this tool. Use this method to reinitialize a tool.
//*************
AbstractTool.prototype.activate = function() {
    this.activateAbstractTool();
}
AbstractTool.prototype.activateAbstractTool = function() {
    this.fView.clearSelection();
}
//*************
// Deactivates the tool. This method is called whenever the user switches to 
// another tool. Use this method to do some clean-up when the tool is switched. 
//Subclassers should always call super.deactivate.
//*************
AbstractTool.prototype.deactivate = function() {
    this.deactivateAbstractTool();
}
AbstractTool.prototype.deactivateAbstractTool = function() {
    this.view().setCursor("default");
}
//*************
// Handles mouse down events in the drawing view.
//*************
AbstractTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorX = x;
    this.fAnchorY = y;
}
//*************
// Handles mouse drag events in the drawing view.
//*************
AbstractTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse up in the drawing view.
//*************
AbstractTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse moves (if the mouse button is up).
//*************
AbstractTool.prototype.mouseMove = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles key down events in the drawing view.
//*************
AbstractTool.prototype.keyDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Gets the tool's drawing.
//*************
/* Drawing */
AbstractTool.prototype.drawing = function() {
    return this.fView.drawing();
}
//*************
// Gets the tool's editor.
//*************
/* DrawingEditor */
AbstractTool.prototype.editor = function() {
    return this.fView.editor();
}
//*************
// Gets the tool's view.
//*************
/* DrawingView */
AbstractTool.prototype.view = function() {
    return this.fView;
}
//*************
// Gets the tool's view.
//*************
/* DrawingView */
AbstractTool.prototype.toString = function() {
    return this.className;
}
//*************
// fireViewEvent: this extra event monitoring code is used to report changes on the view,...
//*************
/* DrawingView */
AbstractTool.prototype.fireViewEvent = function( /* Figure */ fig, /* String */ type) {
    if (this.fView.changed != undefined) this.fView.changed(fig, type); // <============================== [Generate View Event]
}