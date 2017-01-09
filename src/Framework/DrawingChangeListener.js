/**
 * Hotdraw.js : DrawingChangeListener {Interface}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Listener interested in Drawing changes.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
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