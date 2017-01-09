/**
 * Hotdraw.js : PolyLineFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A poly line figure consists of a list of points.
 * It has an optional line decoration at the start and end.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     17th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

var ARROW_TIP_NONE = 0;
var ARROW_TIP_START = 1;
var ARROW_TIP_END = 2;
var ARROW_TIP_BOTH = 3;

PolyLineFigure.prototype = new AbstractFigure();

function PolyLineFigure( /* int */ x, /* int */ y) {
    var argv = PolyLineFigure.arguments;
    var argc = PolyLineFigure.length;
    this.className = "PolyLineFigure";
    /* String */
    this.d = "M -1 -1";
    /* Shape */
    this.shape = null;
    /* Vector */
    this.fPoints = null;
    /* LineDecoration */
    this.fStartDecoration = null;
    /* LineDecoration */
    this.fEndDecoration = null;
    /* Color */
    this.fFrameColor = "black";
    /* int */
    this.fFrameWidth = 1;
    /*  float */
    this.fOpacity = 1;
    /*  Boolean */
    this.pathChanged = false;
    if (argv.length > 0) this.initPolyLineFigure(x, y);
}
//*************
// initPolyLineFigure
// 
// Forms:
// ======
// (1) PolyLineFigure();
// (2) PolyLineFigure(int size);
// (2) PolyLineFigure(int x,int y);
//*************
PolyLineFigure.prototype.initPolyLineFigure = function(x, y) {
    this.initAbstractFigure();
    /* 1 */
    if (x == undefined && y == undefined) {
        this.initPolyLineFigure(4);
        return;
    }
    /* 2 */
    if (x != undefined && y == undefined) {
        var size = x;
        this.fPoints = new Vector(size);
        return;
    }
    /* 3 */
    this.fPoints = new Vector();
    this.fPoints.addElement(new Point(x, y));
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
PolyLineFigure.prototype.ret_displayBox = function() {
    /* Enumeration */
    var k = this.points();
    /* Rectangle */
    var r = new gRectangle(k.nextElement());
    while (k.hasMoreElements()) r.add(k.nextElement());
    return r;
}
//*************
// basicDisplayBox
//*************
PolyLineFigure.prototype.basicDisplayBox = function( /* int */ origin, /* Point */ corner) {}
//*************
// isEmpty
//*************
/* boolean */
PolyLineFigure.prototype.isEmpty = function() {
    return (this.size().width < 3) && (this.size().height < 3);
}
//*************
// handles 
//*************
/* Vector */
PolyLineFigure.prototype.handles = function() {
    /*
var handles = new Vector(this.fPoints.size());
 for (var i = 0; i < this.fPoints.size(); i++)
   handles.addElement(new PolyLineHandle(this, this.locator(i), i));
*/
    /* Vector */
    var handles = new Vector();
    handles.addElement(new NullHandle(this, relativeLocator.northWest()));
    handles.addElement(new NullHandle(this, relativeLocator.northEast()));
    handles.addElement(new NullHandle(this, relativeLocator.southEast()));
    handles.addElement(new NullHandle(this, relativeLocator.southWest()));
    return handles;
}
//*************
// Adds a node to the list of points. 
//*************
PolyLineFigure.prototype.addPoint = function(x, y) {
    this.fPoints.addElement(new Point(x, y));
    this.addNewPointToPath(x, y);
    this.changed();
}
//*************
// AddNewPointToPath 
//*************
PolyLineFigure.prototype.addNewPointToPath = function(x, y) {
    if (this.shape != null) {
        this.d = this.shape.getAttribute("d");
        if (this.d == "M -1 -1") this.d = " M " + x + " " + y;
        else this.d += " L " + x + " " + y;
        this.shape.setAttribute("d", this.d);
    }
}
//*************
//  updatePath
//*************
/* Enumeration */
PolyLineFigure.prototype.updatePath = function() {
    if (!this.pathChanged) {
        this.shape.setAttribute("d", this.d);
        return;
    }
    this.pathChanged = false;
    var k = this.fPoints.elements();
    var p = k.nextElement();
    this.d = " M " + (p.x - this.shape.x) + " " + (p.y - this.shape.y);
    while (k.hasMoreElements()) {
        p = k.nextElement();
        this.d += " L " + (p.x - this.shape.x) + " " + (p.y - this.shape.y);
    }
    this.shape.setAttribute("d", this.d);
}
//*************
//  points
//*************
/* Enumeration */
PolyLineFigure.prototype.points = function() {
    return this.fPoints.elements();
}
//*************
//  pointCount
//*************
/* int */
PolyLineFigure.prototype.pointCount = function() {
    return this.fPoints.size();
}
//*************
//  basicMoveBy
//*************
PolyLineFigure.prototype.basicMoveBy = function(dx, dy) {
    /* Enumeration */
    var k = this.fPoints.elements(); // [ Those lines slow the movement]
    while (k.hasMoreElements()) k.nextElement().translate(dx, dy);
    if (this.getShape() != null) this.getShape().moveBy(dx, dy); // [ ADDED ] 
}
//*************
//  Changes the position of a node.
//*************
PolyLineFigure.prototype.setPointAt = function( /* Point */ p, /* int */ i) {
    this.willChange();
    this.fPoints.setElementAt(p, i);
    this.pathChanged = true;
    this.changed();
}
//*************
//  Insert a node at the given point.
//*************
PolyLineFigure.prototype.insertPointAt = function( /* Point */ p, /* int */ i) {
    this.fPoints.insertElementAt(p, i);
    this.changed();
}
//*************
//  removePointAt
//*************
PolyLineFigure.prototype.removePointAt = function(i) {
    this.willChange();
    this.fPoints.removeElementAt(i);
    this.changed();
}
//*************
// Splits the segment at the given point if a segment was hit.
// @return the index of the segment or -1 if no segment was hit.
//*************
PolyLineFigure.prototype.splitSegment = function(x, y) {
    var i = this.findSegment(x, y);
    if (i != -1) this.insertPointAt(new Point(x, y), i + 1);
    return i + 1;
}
//*************
//  pointAt
//*************
/* Point */
PolyLineFigure.prototype.pointAt = function(i) {
    return this.fPoints.elementAt(i);
}
//*************
// Joins to segments into one if the given point hits a node of the polyline.
// @return true if the two segments were joined.
//*************
/* boolean */
PolyLineFigure.prototype.joinSegments = function(x, y) {
    for (var i = 1; i < this.fPoints.size() - 1; i++) {
        /* Point */
        var p = this.pointAt(i);
        if (Geom.length(x, y, p.x, p.y) < 3) { // <========================================= NOT IMPL. 
            this.removePointAt(i);
            return true;
        }
    }
    return false;
}
//*************
//  connectorAt
//*************
/* Connector */
PolyLineFigure.prototype.connectorAt = function(x, y) {
    return new PolyLineConnector(this);
}
//*************
// updatePolyLineAttributes
//*************
PolyLineFigure.prototype.updatePolyLineAttributes = function() {
    this.shape.setColor("none");
    this.shape.setStrokeWidth(this.getFrameWidth());
    this.shape.setStrokeColor(this.getFrameColor());
    this.shape.setOpacity(this.getOpacity());
}
//*************
// createSVGContent
//*************
PolyLineFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    this.shape = g.drawPath(0, 0, "M -1 -1");
    this.updatePolyLineAttributes();
}
//*************
// draw
//*************
PolyLineFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawPolyLineFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
PolyLineFigure.prototype.drawPolyLineFigure = function( /* Graphics */ g) {
    this.drawAbstractFigure(g);
    this.updatePath();
}
//*************
//  Creates a locator for the point with the given index.
//*************
/* Locator */
PolyLineFigure.prototype.locator = function( /* int */ pointIndex) {
    return new PolyLineLocator(pointIndex);
}
//*************
//  getAttribute
//*************
/* String */
PolyLineFigure.prototype.getAttribute = function( /* String */ name) {
    if (name == "FrameColor") return this.getFrameColor();
    if (name == "FillColor") return "none";
    if (name == "FrameWidth") return this.getFrameWidth();
    if (name == "Opacity") return this.getOpacity();
}
//*************
//  setAttribute
//*************
/* String */
PolyLineFigure.prototype.setAttribute = function( /* String */ name, /* String */ value) {
    if (name == "FrameColor") this.setFrameColor(value);
    if (name == "FillColor");
    if (name == "FrameWidth") this.setFrameWidth(value);
    if (name == "Opacity") this.setOpacity(value);
}
//*************
//  getFrameColor
//*************
/*Color */
PolyLineFigure.prototype.getFrameColor = function() {
    return this.fFrameColor;
}
//*************
// setFrameColor
//*************
PolyLineFigure.prototype.setFrameColor = function( /* Color */ c) {
    this.fFrameColor = c;
    if (this.shape != null) this.shape.setStrokeColor(c);
}
//*************
//  getFrameColor
//*************
/*Color */
PolyLineFigure.prototype.getFrameWidth = function() {
    return this.fFrameWidth;
}
//*************
// setFrameColor
//*************
PolyLineFigure.prototype.setFrameWidth = function( /* int */ w) {
    this.fFrameWidth = w;
    if (this.shape != null) this.shape.setStrokeWidth(w);
}
//*************
//  getFrameColor
//*************
/*Color */
PolyLineFigure.prototype.getOpacity = function() {
    return this.fOpacity;
}
//*************
// setFrameColor
//*************
PolyLineFigure.prototype.setOpacity = function( /* int */ o) {
    this.fOpacity = o;
    if (this.shape != null) this.shape.setOpacity(o);
}
//*************
// NOT IMPLEMENTED  
//*************
PolyLineFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
PolyLineFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// clone
//*************
PolyLineFigure.prototype.clone = function() {
    return new PolyLineFigure(0, 0);
}
//*************
//  containsPoint
//*************
/* boolean */
PolyLineFigure.prototype.containsPoint = function(x, y) {
    /* Rectangle */
    var bounds = this.displayBox();
    bounds.grow(4, 4);
    //if (!bounds.contains(x, y)) return false; [Original]
    if (bounds.contains(x, y)) return true;
    /* Point */
    var p1, p2;
    for (var i = 0; i < this.fPoints.size() - 1; i++) {
        p1 = this.fPoints.elementAt(i);
        p2 = this.fPoints.elementAt(i + 1);
        if (geom.lineContainsPoint(p1.x, p1.y, p2.x, p2.y, x, y)) return true;
    }
    return false;
}
//*************
// Gets the segment of the polyline that is hit by the given point.
// @return the index of the segment or -1 if no segment was hit.
//*************
/* int */
PolyLineFigure.prototype.findSegment = function(x, y) {
    /* Point */
    /*var p1, p2; <========================================= NOT IMPL.
for (var i = 0; i < this.fPoints.size()-1; i++) {
 p1 =  this.fPoints.elementAt(i);
 p2 =  this.fPoints.elementAt(i+1);
  if (geom.lineContainsPoint(p1.x, p1.y, p2.x, p2.y, x, y)) return i;
 }
return -1;*/
}
//*************
//  getPoints
//*************
/* Strning */
PolyLineFigure.prototype.getPoints = function() {
    var str = ""
    /* Enumeration */
    var k = this.fPoints.elements(); // [ Those lines slow the movement]
    while (k.hasMoreElements()) {
        var point = k.nextElement();
        str += point.x + "@" + point.y + ",";
    }
    return str;
}
//*************
//  setPoints
//*************
/* Strning */
PolyLineFigure.prototype.setPoints = function( /* String */ points) {
    this.pathChanged = true;
    this.fPoints = new Vector();
    var s = points.split(',');
    for (var i = 0; i < s.length; i++) {
        var m = s[i].split("@");
        if (m != undefined && m != null && m.length > 1) {
            var x = parseFloat(m[0]);
            var y = parseFloat(m[1]);
            if (!isNaN(x) && !isNaN(y)) this.addPoint(x, y);
        }
    }
}
//*************
// serialize
//*************
/* String */
PolyLineFigure.prototype.serialize = function() {
    return this.serializePolyLineFigure();
}
//*************
// serializePolyLineFigure
//*************
/* String */
PolyLineFigure.prototype.serializePolyLineFigure = function() {
    var ret = new Hashtable;
    ret.put("fillColor", this.getAttribute("FillColor"));
    ret.put("frameColor", this.getAttribute("FrameColor"));
    ret.put("frameWidth", this.getAttribute("FrameWidth"));
    ret.put("opacity", this.getAttribute("Opacity"));
    if (this instanceof PolyLineFigure) ret.put("points", this.getPoints());
    return this.serializeAbstractFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
PolyLineFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializePolyLineFigure(str);
}
//*************
// deserializePolyLineFigure
//*************
/* Hashtable */
PolyLineFigure.prototype.deserializePolyLineFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAbstractFigure(str);
    this.setAttribute("FillColor", inp.get("fillColor"));
    this.setAttribute("FrameColor", inp.get("frameColor"));
    this.setAttribute("FrameWidth", inp.get("frameWidth"));
    this.setAttribute("Opacity", inp.get("opacity"));
    if (this instanceof PolyLineFigure) this.setPoints(inp.get("points"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
PolyLineFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFPolyLineFigure(contextUri, command);
}
//*************
// serializeAsRDFPolyLineFigure [NEW: 17-3-2006]
//*************
/* String */
PolyLineFigure.prototype.serializeAsRDFPolyLineFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = '';
    content += history + " svg:fill \"" + this.getAttribute("FillColor") + "\" . ";
    content += history + " svg:stroke \"" + this.getAttribute("FrameColor") + "\" . ";
    content += history + " svg:stroke-width " + this.getAttribute("FrameWidth") + " . ";
    content += history + " svg:opacity " + this.getAttribute("Opacity") + " . ";
    // **************************************************************************************************************
    // ************** [ This is wrong!!! but I had to do it as a quick fix until I come up with a better way] *******
    // **************************************************************************************************************
    if (this.className == "PolyLineFigure" || this.className == "FireBoundaryFigure") content += history + " svg:points \"" + this.getPoints() + "\" . ";
    // **************************************************************************************************************
    content = this.serializeAsRDFAbstractFigure(contextUri, command) + content;
    return content;
}