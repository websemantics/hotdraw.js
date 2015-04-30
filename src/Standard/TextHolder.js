/**
 * Hotdraw.js : TextHolder
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The interface of a figure that has some editable text contents
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     28th February 2005 
 * @package   websemantics/hotdraw/standard
 */

function TextHolder() {
    this.className = "TextHolder";
}
//*************
// textDisplayBox
//*************
/* Rectangle */
TextHolder.prototype.textDisplayBox = function() {;
}
//*************
//  Gets the text shown by the text figure.
//*************
/* String */
TextHolder.prototype.getText = function() {;
}
//*************
// Sets the text shown by the text figure.
//*************
TextHolder.prototype.setText = function( /* String */ newText) {;
}
//*************
// Tests whether the figure accepts typing.
//*************
/* boolean */
TextHolder.prototype.acceptsTyping = function() {;
}
//*************
// Gets the number of columns to be overlaid when the figure is edited.
//*************
/* int */
TextHolder.prototype.overlayColumns = function() {;
}
//*************
// Connects a figure to another figure.
//*************
TextHolder.prototype.connect = function( /* Figure */ connectedFigure) {;
}
//*************
// Gets the font.
//*************
/* Font */
TextHolder.prototype.getFont = function() {;
}