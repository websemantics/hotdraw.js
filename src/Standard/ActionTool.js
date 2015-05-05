/**
 * Hotdraw.js : ActionTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A tool that performs an action when it is active and the mouse is clicked.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2005
 * @package   websemantics/hotdraw/standard
 */

ActionTool.prototype = new AbstractTool();

function ActionTool( /* DrawingView */ itsView) {
    var argv = ActionTool.arguments;
    var argc = ActionTool.length;
    this.className = "ActionTool";
    if (argv.length > 0) this.initActionTool(itsView);
}
//*************
// Constructs a tool for the given view.
//*************
ActionTool.prototype.initActionTool = function(itsView) {
    this.initAbstractTool(itsView);
}
//*************
// Add the touched figure to the selection an invoke action
//*************
ActionTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    /* Figure */
    var target = this.drawing().findFigure(x, y);
    if (target != null) {
        this.view().addToSelection(target);
        this.action(target);
    }
}
//*************
// Handles mouse up in the drawing view.
//*************
ActionTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.editor().toolDone();
}
//*************
// Performs an action with the touched figure.
//*************
ActionTool.prototype.action = function( /* Figure */ figure) {}