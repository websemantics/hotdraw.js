/**
 * Hotdraw.js : FigureChangeListener {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Listener interested in Figure changes.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

FigureChangeListener.prototype = new EventListener();

function FigureChangeListener() {;
}
// Sent when a figure is invalid 
FigureChangeListener.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {;
}
// Sent when a figure changed
FigureChangeListener.prototype.figureChanged = function( /* FigureChangeEvent */ e) {;
}
// Sent when a figure was removed
FigureChangeListener.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {;
}
// Sent when requesting to remove a figure.
FigureChangeListener.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {;
}
// Sent when an update should happen.
FigureChangeListener.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {}