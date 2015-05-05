/**
 * Hotdraw.js : EllipseFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An ellipse figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */

EllipseFigure.prototype = new AttributeFigure();

function EllipseFigure( /* Point */ origin, /* Point */ corner) {
    var argv = EllipseFigure.arguments;
    var argc = EllipseFigure.length;
    this.className = "EllipseFigure";
    /* Rectangle */
    this.fDisplayBox = null;
    if (argv.length > 0) this.initEllipseFigure(origin, corner);
}
//*************
// initEllipseFigure
// 
// Forms:
// ======
// (1) EllipseFigure();
// (2) EllipseFigure(Point origin,Point corner);
//*************
EllipseFigure.prototype.initEllipseFigure = function(origin, corner) {
    this.initAttributeFigure();
    if (!origin && !corner) {
        this.initEllipseFigure(new Point(0, 0), new Point(0, 0));
        return;
    }
    this.basicDisplayBox(origin, corner);
}
//*************
// basicDisplayBox
//*************
EllipseFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fDisplayBox = new gRectangle(origin);
    this.fDisplayBox.add(corner);
}
//*************
// handles 
//*************
/* Vector */
EllipseFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    var handles = new Vector();
    boxHandleKit.addHandles(owner, handles);
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
EllipseFigure.prototype.ret_displayBox = function() {
    return new gRectangle(this.fDisplayBox.x, this.fDisplayBox.y, this.fDisplayBox.width, this.fDisplayBox.height);
}
//*************
// basicMoveBy
//*************
EllipseFigure.prototype.basicMoveBy = function(x, y) {
    this.fDisplayBox.translate(x, y);
    var r = this.displayBox();
}
//*************
// createSVGContent
//*************
EllipseFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawOval(r.x, r.y, r.width / 2, r.height / 2);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
EllipseFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawEllipseFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
EllipseFigure.prototype.drawEllipseFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the ellipse figure
    this.shape.setRadius(r.width / 2, r.height / 2);
    this.shape.translate(r.x, r.y);
}
//*************
// NOT IMPLEMENTED  
//*************
EllipseFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
EllipseFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// 
//*************
EllipseFigure.prototype.clone = function() {
    return new EllipseFigure(new Point(0, 0), new Point(0, 0));
}