/**
 * Hotdraw.js : AbstractHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * AbstractHandle provides defaulf implementation for the Handle interface.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     16th February 2005
 * @package   websemantics/hotdraw/standard
 */

AbstractHandle.prototype = new Handle();

function AbstractHandle( /* Figure */ owner) {
    var argv = AbstractHandle.arguments;
    var argc = AbstractHandle.length;
    this.className = "AbstractHandle";
    /* Color */
    this.color = "yellow";
    /* Figure */
    this.fOwner = null;
    /* Shape */
    this.shape = null;
    /* Boolean */
    this.created = false; // Turn to true once the svg content of this figure has been created.
    /* int */
    this.HANDLESIZE = 8;
    if (argv.length > 0) this.initAbstractHandle(owner);
}
//*************
// AbstractHandle
//*************
AbstractHandle.prototype.initAbstractHandle = function(owner) {
    this.fOwner = owner;
}
//*************
// Locates the handle on the figure. The handle is drawn centered around the returned point.
//*************
/* Point */
AbstractHandle.prototype.locate = function() {;
}
//*************
// Tracks the start of the interaction. The default implementation does nothing.
//*************
AbstractHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    var drawing = view.drawing();
}
//*************
// Tracks a step of the interaction.
//*************
AbstractHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    var drawing = view.drawing();
    var dx = x - anchorX;
    var dy = y - anchorY;
}
//*************
// Tracks the end of the interaction.
//*************
AbstractHandle.prototype.invokeEnd = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    var drawing = view.drawing();
    var dx = x - anchorX;
    var dy = y - anchorY;
}
//*************
// Gets the handle's owner.
//*************
/* Figure */
AbstractHandle.prototype.owner = function() {
    return this.fOwner;
}
//*************
// Gets the display box of the handle.
//*************
/* gRectangle */
AbstractHandle.prototype.displayBox = function() {
    /* Point */
    var p = this.locate();
    return new gRectangle(p.x - this.HANDLESIZE / 2, p.y - this.HANDLESIZE / 2, this.HANDLESIZE, this.HANDLESIZE);
}
//*************
// Tests if a point is contained in the handle.
//*************
/* boolean */
AbstractHandle.prototype.containsPoint = function(x, y) {
    return this.displayBox().contains(x, y);
}
//*************
// createSVGContent
//*************
AbstractHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor(this.color);
    g.setStrokeWidth(1);
    g.setStrokeColor("black");
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.shape.setAttribute('shape-rendering', 'optimizeSpeed');
    this.shape.setCursor(this.getCursorName());
}
//*************
// draw
//*************
AbstractHandle.prototype.draw = function( /* Graphics */ g) {
    this.drawAbstractHandle(g);
}
//*************
// draw a handle and its subclass.
//*************
AbstractHandle.prototype.drawAbstractHandle = function( /* Graphics */ g) {
    if (!this.created) {
        this.created = true;
        this.createSVGContent(g);
    }
    // It's assumed that the figure content (svg content,..this.shape),..has been created before this point
    // So no checks were performed to ensure that this.shape is not null (for performance)
    /* Rectangle */
    var r = this.displayBox();
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
    if (g != undefined) g.addChild(this.shape.getNode());
}
//*************
// get Shape
//*************
/* Shape */
AbstractHandle.prototype.getShape = function() {
    return this.shape;
}
//*************
// Dispose this handle.
//*************
AbstractHandle.prototype.dispose = function() {
    if (this.shape != null) this.shape.dispose();
    this.shape = null;
}
//*************
// Get Cursor Name
//*************
AbstractHandle.prototype.getCursorName = function() {
    var ret = null;
    switch (this.className) {
        case "NorthEastHandle":
            ret = "ne-resize";
            break;
        case "EastHandle":
            ret = "e-resize";
            break;
        case "NorthHandle":
            ret = "n-resize";
            break;
        case "NorthWestHandle":
            ret = "nw-resize";
            break;
        case "SouthEastHandle":
            ret = "se-resize";
            break;
        case "SouthHandle":
            ret = "s-resize";
            break;
        case "SouthWestHandle":
            ret = "sw-resize";
            break;
        case "WestHandle":
            ret = "w-resize";
            break;
        default:
            ret = "default";
            break;
    }
    return ret;
}