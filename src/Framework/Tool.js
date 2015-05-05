/**
 * Hotdraw.js : Tool {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A tool defines a mode of the drawing view. All input events targeted to the 
 * drawing view are forwarded to its current tool.
 * Tools inform their editor when they are done with an interaction by calling 
 * the editor's toolDone() method.
 * The Tools are created once and reused. They are initialized/deinitialized 
 * with activate()/deactivate().
 * Tool plays the role of the State. In encapsulates all state specific behavior.
 * DrawingView plays the role of the StateContext.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Tool() {
    this.className = "Tool";
}
//*************
// Activates the tool for the given view. This method is called whenever the 
// user switches to this tool. Use this method to reinitialize a tool.
//*************
Tool.prototype.activate = function() {;
}
//*************
// Deactivates the tool. This method is called whenever the user switches to 
// another tool. Use this method to do some clean-up when the tool is switched. 
//Subclassers should always call super.deactivate.
//*************
Tool.prototype.deactivate = function() {;
}
//*************
// Handles mouse down events in the drawing view.
//*************
Tool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse drag events in the drawing view.
//*************
Tool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse up in the drawing view.
//*************
Tool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse moves (if the mouse button is up).
//*************
Tool.prototype.mouseMove = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles key down events in the drawing view.
//*************
Tool.prototype.keyDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}