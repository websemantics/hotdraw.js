/**
 * Hotdraw.js : RectangleFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A figure that can keep track of an open ended set of attributes.
 * The attributes are stored in a dictionary implemented by FigureAttributes.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

RectangleFigure.prototype = new AttributeFigure();

function RectangleFigure( /* Point */ origin, /* Point */ corner) {
    var argv = RectangleFigure.arguments;
    var argc = RectangleFigure.length;
    this.className = "RectangleFigure";
    /* Rectangle */
    this.fDisplayBox = null;
    if (argv.length > 0) this.initRectangleFigure(origin, corner);
}
//*************
// initRectangleFigure
// 
// Forms:
// ======
// (1) RectangleFigure();
// (2) RectangleFigure(Point origin,Point corner);
//*************
RectangleFigure.prototype.initRectangleFigure = function( /* Point */ origin, /* Point */ corner) {
    this.initAttributeFigure();
    if (origin == undefined && corner == undefined) {
        this.initRectangleFigure(new Point(0, 0), new Point(0, 0));
        return;
    }
    this.basicDisplayBox(origin, corner);
}
//*************
// 
//*************
RectangleFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fDisplayBox = new gRectangle(origin);
    this.fDisplayBox.add(corner);
}
//*************
// 
//*************
/* Vector */
RectangleFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    var handles = new Vector();
    boxHandleKit.addHandles(owner, handles);
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
RectangleFigure.prototype.ret_displayBox = function() {
    return new gRectangle(this.fDisplayBox.x, this.fDisplayBox.y, this.fDisplayBox.width, this.fDisplayBox.height);
}
//*************
// 
//*************
RectangleFigure.prototype.basicMoveBy = function(x, y) {
    this.fDisplayBox.translate(x, y);
}
//*************
// createSVGContent
//*************
RectangleFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
RectangleFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawRectangleFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
RectangleFigure.prototype.drawRectangleFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the rectangle figure
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
}
//*************
// NOT IMPLEMENTED  
//*************
RectangleFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
RectangleFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// clone
//*************
RectangleFigure.prototype.clone = function() {
    return new RectangleFigure(new Point(0, 0), new Point(0, 0));
}