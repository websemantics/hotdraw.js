/**
 * Hotdraw.js : CreationTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A tool to create new figures. The figure to be created is specified by a prototype.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th February 2005
 * @package   websemantics/hotdraw/standard
 */

CreationTool.prototype = new AbstractTool();

function CreationTool( /* DrawingView */ view, /* Figure */ prototypeFig) {
    var argv = CreationTool.arguments;
    var argc = CreationTool.length;
    this.className = "CreationTool";
    /* Point */
    this.fAnchorPoint = null; // the anchor point of the interaction
    /* Figure */
    this.fCreatedFigure = null; // the currently created figure
    /* Figure */
    this.fPrototype = null; //the prototypical figure that is used to create new figures.
    if (argv.length > 0) this.initCreationTool(view, prototypeFig);
}
//*************
// Initializes a CreationTool with the given prototype.
//*************
CreationTool.prototype.initCreationTool = function(view, prototypeFig) {
    this.initAbstractTool(view);
    if (prototypeFig != undefined) this.fPrototype = prototypeFig;
}
//*************
// Sets the cross hair cursor.
//*************
CreationTool.prototype.activate = function() {
    this.activateCreationTool();
}
CreationTool.prototype.activateCreationTool = function() {
    this.activateAbstractTool();
    this.view().setCursor("crosshair");
}
//*************
// deactivate
//*************
CreationTool.prototype.deactivate = function() {
    this.deactivateCreationTool();
}
CreationTool.prototype.deactivateCreationTool = function() {
    this.deactivateAbstractTool();
}
//*************
// Creates a new figure by cloning the prototype.
//*************
/* Figure */
CreationTool.prototype.createFigure = function(p) {
    if (this.fPrototype == null) {
        alert("No protoype defined");
        return;
    }
    return this.fPrototype.clone();
}
//*************
// Gets the currently created figure
//*************
/* Figure */
CreationTool.prototype.createdFigure = function() {
    return this.fCreatedFigure;
}
//*************
// Creates a new figure by cloning the prototype.
//*************
CreationTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.creationToolMouseDown(e, x, y);
}
//*************
// Creates a new figure by cloning the prototype.
//*************
CreationTool.prototype.creationToolMouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorPoint = new Point(x, y);
    this.fCreatedFigure = this.createFigure();
    this.fCreatedFigure.displayBox(this.fAnchorPoint, new Point(x + 1, y + 1));
    this.view().add(this.fCreatedFigure);
    this.view().drawDrawing();
}
//*************
// Adjusts the extent of the created figure
//*************
CreationTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fCreatedFigure.displayBox(this.fAnchorPoint, new Point(x, y));
    // Refresh the figure,...
    if (this.fCreatedFigure.getShape()) {
        this.fCreatedFigure.draw();
    }
}
//*************
// Checks if the created figure is empty. If it is, the figure is removed from the drawing.
//*************
CreationTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fCreatedFigure == null) return;
    var create = true;
    if (this.fCreatedFigure.isEmpty()) {
        this.drawing().remove(this.fCreatedFigure);
        create = false;
    }
    this.view().drawDrawing();
    this.editor().toolDone();
    if (create) this.fireViewEvent(this.fCreatedFigure, "Create"); // <======================= [ Create View Event]
    this.fCreatedFigure = null;
}