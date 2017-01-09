/**
 * Hotdraw.js : LineFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A line figure.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     4th August 2005
 * @package   websemantics/hotdraw/figures
 */

LineFigure.prototype = new PolyLineFigure();

function LineFigure() {
    var argv = LineFigure.arguments;
    var argc = LineFigure.length;
    this.className = "LineFigure";
    if (argv.length > 0) this.initLineFigure();
}
//*************
// initLineFigure: Constructs a LineFigure with both start and end set to Point(0,0).
//*************
LineFigure.prototype.initLineFigure = function() {
    this.initPolyLineFigure(0, 0);
    this.addPoint(0, 0);
}
//*************
// Gets a copy of the start point. OR .  Sets the start point.
//
// Forms:
//======
// (1) Point startPoint();
// (2) startPoint(10,10);
//*************
/* Point */
LineFigure.prototype.startPoint = function( /* int */ x, /* int */ y) {
    if (x != undefined && y != undefined) this.setPointAt(new Point(x, y), 0);
    else return this.pointAt(0);
}
//*************
// Gets a copy of the end point. OR . Sets the end point.
//
// Forms:
//======
// (1) Point endPoint();
// (2) endPoint(10,10);
//*************
LineFigure.prototype.endPoint = function( /* int */ x, /* int */ y) {
    if (x != undefined && y != undefined) this.setPointAt(new Point(x, y), 1);
    else return this.pointAt(1);
}
//*************
// Sets the start and end point.
//*************
LineFigure.prototype.setPoints = function( /* Point */ start, /* Point */ end) {
    this.setPointAt(start, 0);
    this.setPointAt(end, 1);
}
//*************
// basicDisplayBox
//*************
LineFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.setPoints(origin, corner);
}
//*************
// createSVGContent
//*************
LineFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    this.shape = g.drawLine(this.startPoint().x, this.startPoint().y, this.startPoint().x + 100, this.startPoint().y + 100);
    this.updatePolyLineAttributes();
    //this.shape.setAttribute("marker-end","url(#Tail)");
    //this.shape.setAttribute("marker-start","url(#Arrow1Lstart)");
}
//*************
// draw
//*************
LineFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawLineFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
LineFigure.prototype.drawLineFigure = function( /* Graphics */ g) {
    this.drawAbstractFigure(g);
    var p1 = this.startPoint();
    var p2 = this.endPoint();
    this.shape.x = p1.x;
    this.shape.y = p1.y;
    this.shape.x2 = p2.x;
    this.shape.y2 = p2.y;
    this.shape.update();
}
//*************
// handles 
//*************
/* Vector */
LineFigure.prototype.handles = function() {
    var handles = new Vector(this.fPoints.size());
    for (var i = 0; i < this.fPoints.size(); i++) handles.addElement(new PolyLineHandle(this, this.locator(i), i));
    return handles;
}
//*************
//   clone
//*************
LineFigure.prototype.clone = function() {
    return new LineFigure(true);
}
//*************
// serialize
//*************
/* String */
LineFigure.prototype.serialize = function() {
    return this.serializeLineFigure();
}
//*************
// serializeLineFigure
//*************
/* String */
LineFigure.prototype.serializeLineFigure = function() {
    var ret = new Hashtable;
    var sPoint = this.startPoint();
    var ePoint = this.endPoint();
    ret.put("x1", sPoint.getX());
    ret.put("y1", sPoint.getY());
    ret.put("x2", ePoint.getX());
    ret.put("y2", ePoint.getY());
    return this.serializePolyLineFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
LineFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeLineFigure(str);
}
//*************
// deserializeLineFigure
//*************
/* Hashtable */
LineFigure.prototype.deserializeLineFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializePolyLineFigure(str);
    var x1 = parseFloat(inp.get("x1"));
    var y1 = parseFloat(inp.get("y1"));
    var x2 = parseFloat(inp.get("x2"));
    var y2 = parseFloat(inp.get("y2"));
    this.startPoint(x1, y1);
    this.endPoint(x2, y2);
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
LineFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFLineFigure(contextUri, command);
}
//*************
// serializeAsRDFLineFigure [NEW: 17-3-2006]
//*************
/* String */
LineFigure.prototype.serializeAsRDFLineFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var sPoint = this.startPoint();
    var ePoint = this.endPoint();
    var content = '';
    content += history + " svg:x1 " + sPoint.getX() + " . ";
    content += history + " svg:y1 " + sPoint.getY() + " . ";
    content += history + " svg:x2 " + ePoint.getX() + " . ";
    content += history + " svg:y2 " + ePoint.getY() + " . ";
    content = this.serializeAsRDFPolyLineFigure(contextUri, command) + content;
    return content;
}