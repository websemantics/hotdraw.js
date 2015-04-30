/**
 * Hotdraw.js : RoundRectangleFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A round rectangle figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

RoundRectangleFigure.prototype = new AttributeFigure();

function RoundRectangleFigure( /* Point */ origin, /* Point */ corner) {
    var argv = RoundRectangleFigure.arguments;
    var argc = RoundRectangleFigure.length;
    this.className = "RoundRectangleFigure";
    /* Rectangle */
    this.fDisplayBox = null;
    /* int */
    this.DEFAULT_ARC = 15;
    /* int */
    this.fArcWidth = this.DEFAULT_ARC;
    /* int */
    this.fArcHeight = this.DEFAULT_ARC;
    if (argv.length > 0) this.initRoundRectangleFigure(origin, corner);
}
//*************
// initRoundRectangleFigure
// 
// Forms:
// ======
// (1) RoundRectangleFigure();
// (2) RoundRectangleFigure(Point origin,Point corner);
//*************
RoundRectangleFigure.prototype.initRoundRectangleFigure = function(origin, corner) {
    this.initAttributeFigure();
    if (!origin && !corner) {
        this.initRoundRectangleFigure(new Point(0, 0), new Point(0, 0));
        return;
    }
    this.basicDisplayBox(origin, corner);
}
//*************
// 
//*************
RoundRectangleFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fDisplayBox = new gRectangle(origin);
    this.fDisplayBox.add(corner);
}
//*************
// Sets the arc's witdh and height.
//*************
RoundRectangleFigure.prototype.setArc = function(width, height) {
    this.willChange();
    this.fArcWidth = width;
    this.fArcHeight = height;
    this.changed();
}
//*************
// Gets the arc's witdh and height.
//*************
/* Point */
RoundRectangleFigure.prototype.getArc = function() {
    return new Point(this.fArcWidth, this.fArcHeight);
}
//*************
// 
//*************
/* Vector */
RoundRectangleFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    var handles = new Vector();
    boxHandleKit.addHandles(owner, handles);
    handles.addElement(new RadiusHandle(this));
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
RoundRectangleFigure.prototype.ret_displayBox = function() {
    return new gRectangle(this.fDisplayBox.x, this.fDisplayBox.y, this.fDisplayBox.width, this.fDisplayBox.height);
}
//*************
// 
//*************
RoundRectangleFigure.prototype.basicMoveBy = function(x, y) {
    this.fDisplayBox.translate(x, y);
}
//*************
// createSVGContent
//*************
RoundRectangleFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawRoundRect(r.x, r.y, r.width, r.height, this.fArcWidth, this.fArcHeight);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
RoundRectangleFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawRoundRectangleFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
RoundRectangleFigure.prototype.drawRoundRectangleFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the rectangle figure
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
    this.shape.setRadius(this.fArcWidth, this.fArcHeight);
}
//*************
// connectionInsets
//*************
/* Insets */
RoundRectangleFigure.prototype.connectionInsets = function() {
    return new Insets(this.fArcHeight / 2, this.fArcWidth / 2, this.fArcHeight / 2, this.fArcWidth / 2);
}
//*************
// connectorAt
//*************
/* Connector */
RoundRectangleFigure.prototype.connectorAt = function(x, y) {
    return new ShortestDistanceConnector(this); // just for demo purposes
}
// NOT IMPLEMENTED  
//*************
RoundRectangleFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
RoundRectangleFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// NOT IMPLEMENTED  
//*************
RoundRectangleFigure.prototype.clone = function() {
    return new RoundRectangleFigure(new Point(0, 0), new Point(0, 0));
}
//*************
// serialize
//*************
/* String */
RoundRectangleFigure.prototype.serialize = function() {
    return this.serializeRoundRectangleFigure();
}
//*************
// serializeRoundRectangleFigure
//*************
/* String */
RoundRectangleFigure.prototype.serializeRoundRectangleFigure = function() {
    var ret = new Hashtable;
    ret.put("arcWidth", this.fArcWidth);
    ret.put("arcHeight", this.fArcHeight);
    return this.serializeAttributeFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
RoundRectangleFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeRoundRectangleFigure(str);
}
//*************
// deserializeRoundRectangleFigure
//*************
RoundRectangleFigure.prototype.deserializeRoundRectangleFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAttributeFigure(str);
    var arcWidth = parseFloat(inp.get("arcWidth"));
    var arcHeight = parseFloat(inp.get("arcHeight"));
    this.setArc(arcWidth, arcHeight);
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
RoundRectangleFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFRoundRectangleFigure(contextUri, command);
}
//*************
// serializeAsRDFRoundRectangleFigure [NEW: 17-3-2006]
//*************
/* String */
RoundRectangleFigure.prototype.serializeAsRDFRoundRectangleFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = '';
    content += history + " svg:rx " + this.fArcWidth + " . ";
    content += history + " svg:ry " + this.fArcHeight + " . ";
    content = this.serializeAsRDFAttributeFigure(contextUri, command) + content;
    return content;
}