/**
 * Hotdraw.js : Handle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Handles are used to change a figure by direct manipulation. Handles know their 
 * owning figure and they provide methods to locate the handle on the figure and 
 * to track changes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Handle() {
    this.className = "Handle";
    this.HANDLESIZE = 8;
}
//*************
// Locates the handle on the figure. The handle is drawn centered around the returned point.
//*************
/* Point */
Handle.prototype.locate = function() {;
}
//*************
// Tracks the start of the interaction. The default implementation does nothing.
//*************
Handle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {;
}
//*************
// Tracks a step of the interaction.
//*************
Handle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {;
}
//*************
// Tracks the end of the interaction.
//*************
Handle.prototype.invokeEnd = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {;
}
//*************
// Gets the handle's owner.
//*************
/* Figure */
Handle.prototype.owner = function() {;
}
//*************
// Gets the display box of the handle.
//*************
/* gRectangle */
Handle.prototype.displayBox = function() {;
}
//*************
// Tests if a point is contained in the handle.
//*************
/* boolean */
Handle.prototype.containsPoint = function(x, y) {;
}
//*************
// Draws this handle.
//*************
Handle.prototype.draw = function( /* Graphics */ g) {;
}