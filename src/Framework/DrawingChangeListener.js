/**
 * Hotdraw.js : DrawingChangeListener {Interface}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Listener interested in Drawing changes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/framework
 */

DrawingChangeListener.prototype = new EventListener();

function DrawingChangeListener() {;
}

// Sent when an area is invalid
DrawingChangeListener.prototype.drawingInvalidated = function( /* DrawingChangeEvent */ e) {;
}

// Sent when the drawing wants to be refreshed 
DrawingChangeListener.prototype.drawingRequestUpdate = function( /* DrawingChangeEvent */ e) {;
}