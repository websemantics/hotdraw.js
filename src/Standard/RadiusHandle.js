/**
 * Hotdraw.js : RadiusHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Handle to manipulate the radius of a round corner rectangle.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     16th February 2005 
 * @package   websemantics/hotdraw/standard
 */

RadiusHandle.prototype = new AbstractHandle();

function RadiusHandle( /* RoundRectangleFigure */ owner) {
    var argv = RadiusHandle.arguments;
    var argc = RadiusHandle.length;
    this.className = "RadiusHandle";
    /* Point */
    this.fRadius = null;
    /* RoundRectangleFigure */
    this.fOwner = null;
    /* int */
    this.OFFSET = 4;
    if (argv.length > 0) this.initRadiusHandle(owner);
}
//*************
// Initializes the RadiusHandle 
//*************
RadiusHandle.prototype.initRadiusHandle = function(owner) {
    this.initAbstractHandle(owner);
    this.fOwner = owner;
    this.color = "red";
}
//*************
// Create SVG Content
//*************
RadiusHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor(this.color);
    this.shape = g.drawOval(r.x + r.width / 2, r.y + r.height / 2, r.width, r.height);
    this.shape.setStrokeWidth(0.5);
    this.shape.setStrokeColor("black");
    this.shape.setCursor(this.getCursorName());
}
//*************
// Locates the handle on the figure by forwarding the request to its figure.
//*************
/* Point */
RadiusHandle.prototype.locate = function() {
    /* Point */
    var radius = this.fOwner.getArc();
    /* Rectangle */
    var r = this.fOwner.displayBox();
    return new Point(r.x + radius.x / 2 + this.OFFSET, r.y + radius.y / 2 + this.OFFSET);
}
//*************
// Tracks the start of the interaction. The default implementation does nothing.
//*************
RadiusHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    this.fRadius = this.fOwner.getArc();
    this.fRadius.x = this.fRadius.x / 2;
    this.fRadius.y = this.fRadius.y / 2;
}
//*************
// Tracks a step of the interaction.
//*************
RadiusHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    var dx = x - anchorX;
    var dy = y - anchorY;
    /* Rectangle */
    r = this.fOwner.displayBox();
    var rx = geom.range(0, r.width, 2 * (this.fRadius.x + dx));
    var ry = geom.range(0, r.height, 2 * (this.fRadius.y + dy));
    this.fOwner.setArc(rx, ry);
}