/**
 * Hotdraw.js : DrawingEditor {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DrawingEditor defines the interface for coordinating the different objects 
 * that participate in a drawing editor.
 * DrawingEditor is the mediator. It decouples the participants of a drawing editor.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th February 2005
 * @package   websemantics/hotdraw/framework
 */

function DrawingEditor() {
    this.className = "DrawingEditor";
}
//*************
// Gets the editor's drawing view.
//*************
/* DrawingView */
DrawingEditor.prototype.view = function() {;
}
//*************
// Gets the editor's drawing.
//*************
/* Drawing */
DrawingEditor.prototype.drawing = function() {;
}
//*************
// Gets the editor's current tool.
//*************
/* Tool */
DrawingEditor.prototype.tool = function() {;
}
//*************
// Informs the editor that a tool has done its interaction.
// This method can be used to switch back to the default tool.
//*************
DrawingEditor.prototype.toolDone = function() {;
}
//*************
// Informs that the current selection has changed. Override this method to handle selection changes.
//*************
DrawingEditor.prototype.selectionChanged = function( /* DrawingView */ view) {;
}
//*************
// Shows a status message in the editor's user interface
//*************
DrawingEditor.prototype.showStatus = function( /* String */ str) {;
}