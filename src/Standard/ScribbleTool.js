/**
 * Hotdraw.js : ScribbleTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Tool to scribble a PolyLineFigure
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

ScribbleTool.prototype = new AbstractTool();

function ScribbleTool( /* DrawingView */ view) {
    var argv = ScribbleTool.arguments;
    var argc = ScribbleTool.length;
    this.className = "ScribbleTool";
    /* PolyLineFigure */
    this.fScribble = null;
    /* int */
    this.fLastX = null;
    /* int */
    this.fLastY = null;
    if (argv.length > 0) this.initScribbleTool(view);
}
//*************
// Initializes a ScribbleTool with the given prototype.
//*************
ScribbleTool.prototype.initScribbleTool = function(view) {
    this.initAbstractTool(view);
}
//*************
// Sets the cross hair cursor.
//*************
ScribbleTool.prototype.activate = function() {
    this.activateScribbleTool();
}
ScribbleTool.prototype.activateScribbleTool = function() {
    this.activateAbstractTool();
    this.view().setCursor("crosshair");
    this.view().clearSelection();
    this.fScribble = null;
}
//*************
// deactivate
//*************
ScribbleTool.prototype.deactivate = function() {
    this.deactivateScribbleTool();
}
ScribbleTool.prototype.deactivateScribbleTool = function() {
    this.deactivateAbstractTool();
    if (this.fScribble != null) {
        if (this.fScribble.size().width < 4 || this.fScribble.size().height < 4) this.drawing().remove(this.fScribble);
    }
}
//*************
// 
//*************
ScribbleTool.prototype.point = function(x, y) {
    if (this.fScribble == null) {
        this.fScribble = new PolyLineFigure(x, y);
        this.view().add(this.fScribble);
    } else if (this.fLastX != x || this.fLastY != y) this.fScribble.addPoint(x, y);
    this.fLastX = x;
    this.fLastY = y;
}
//*************
// Creates a new figure by cloning the prototype.
//*************
ScribbleTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (e.getClickCount() >= 2) {
        this.fScribble = null;
        this.editor().toolDone();
    } else {
        // use original event coordinates to avoid
        // supress that the scribble is constrained to
        // the grid
        this.point(e.getX(), e.getY());
    }
}
//*************
// Adjusts the extent of the created figure
//*************
ScribbleTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fScribble != null) this.point(e.getX(), e.getY());
    // Refresh the figure,...
    // if(this.fScribble.getShape()!=null){this.fScribble.draw();}
}
//*************
// 
//*************
ScribbleTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fireViewEvent(this.fScribble, "Create"); // <======================= [ Create View Event]
    this.editor().toolDone();
    this.fScribble = null;
}