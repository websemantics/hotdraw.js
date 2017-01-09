/**
 * Hotdraw.js : PolygonFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A scalable, rotatable polygon with an arbitrary number of points
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     4th August 2005
 * @package   websemantics/hotdraw/contrib
 */

var TOO_CLOSE = 2;

PolygonFigure.prototype = new AttributeFigure();

function PolygonFigure( /* int or gPolygon */ x, /* int */ y) {
    var argv = PolygonFigure.arguments;
    var argc = PolygonFigure.length;
    this.className = "PolygonFigure";

    /* gPolygon */
    this.fPoly = null;
    
    if (argv.length > 0) this.initPolygonFigure(x, y);
}
//*************
// initPolygonFigure
// 
// Forms:
// ======
// (1) PolygonFigure(gPolygon p);
// (2) PolygonFigure(int x,int y);
//*************
PolygonFigure.prototype.initPolygonFigure = function( /* int or gPolygon */ x, /* int */ y) {
    this.initAttributeFigure();
    if (x instanceof gPolygon) {
        var p = x;
        this.fPoly = new gPolygon(p.xpoints, p.ypoints, p.npoints);
        return;
    } else this.fPoly = new gPolygon(true);
    this.fPoly.addPoint(x, y);
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* gRectangle */
PolygonFigure.prototype.ret_displayBox = function() {
    return this.bounds(this.fPoly);
}
//*************
// isEmpty
//*************
/* boolean */
PolygonFigure.prototype.isEmpty = function() {
    return (this.fPoly.npoints < 3 || (this.size().width < TOO_CLOSE) && (this.size().height < TOO_CLOSE));
}
//*************
// handles 
//*************
/* Vector */
PolygonFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    /* Vector */
    var handles = new Vector(this.fPoly.npoints);
    for (var i = 0; i < this.fPoly.npoints; i++) handles.addElement(new PolygonHandle(owner, this.locator(i), i));
    //handles.addElement(new PolygonScaleHandle(this));
    //handles.addElement(new PolygonPointAddHandle(this));
    return handles;
}
//*************
// basicDisplayBox
//*************
PolygonFigure.prototype.basicDisplayBox = function( /* int */ origin, /* Point */ corner) {
    var r = this.displayBox();
    var dx = origin.x - r.x;
    var dy = origin.y - r.y;
    this.fPoly.translate(dx, dy);
    r = this.displayBox();
    var oldCorner = new Point(r.x + r.width, r.y + r.height);
    var p = this.getPolygon();
    this.scaleRotate(oldCorner, p, corner);
}
//*************
// return a copy of the raw polygon
//*************
/* gPolygon */
PolygonFigure.prototype.getPolygon = function() {
    return new gPolygon(this.fPoly.xpoints, this.fPoly.ypoints, this.fPoly.npoints);
}
//*************
// center
// 
// Forms:
// ======
// (1) center()
// (2) center(Polygon  p);
//*************
/* Point */
PolygonFigure.prototype.center = function( /* gPolygon */ p) {
    if (p == undefined) return this.center(this.fPoly);
    var sx = 0;
    var sy = 0;
    var n = p.npoints;
    for (var i = 0; i < n; i++) {
        sx += p.xpoints[i];
        sy += p.ypoints[i];
    }
    return new Point(parseInt(sx / n), parseInt(sy / n));
}
//*************
// points
//*************
/* Enumeration */
PolygonFigure.prototype.points = function() {
    var pts = new Vector(this.fPoly.npoints);
    for (var i = 0; i < this.fPoly.npoints; ++i) pts.addElement(new Point(this.fPoly.xpoints[i], this.fPoly.ypoints[i]));
    return pts.elements();
}
//*************
// pointCount
//*************
/* int */
PolygonFigure.prototype.pointCount = function() {
    return this.fPoly.npoints;
}
//*************
// basicMoveBy
//*************
PolygonFigure.prototype.basicMoveBy = function( /* int */ dx, /* int */ dy) {
    this.fPoly.translate(dx, dy);
}
//*************
// createSVGContent
//*************
PolygonFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    this.shape = g.drawPolygon(0, 0, this.fPoly.xpoints, this.fPoly.ypoints);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
PolygonFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawPolygonFigure(g);
}
//*************
// draw a polygon and its subclass.
//*************
PolygonFigure.prototype.drawPolygonFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    this.shape.setXYPoints(this.fPoly.xpoints, this.fPoly.ypoints);
    // Update the location and the size od the ellipse figure
    //this.shape.setRadius(rx,ry);
    //this.shape.translate(x,y);
}
//*************
// containsPoint
//*************
PolygonFigure.prototype.containsPoint = function( /* int */ x, /* int */ y) {
    return this.fPoly.contains(x, y);
}
//*************
// connectorAt
//*************
/* Connector */
PolygonFigure.prototype.connectorAt = function( /* int */ x, /* int */ y) {
    return new ChopPolygonConnector(this);
}
//*************
// Adds a node to the list of points.
//*************
PolygonFigure.prototype.addPoint = function( /* int */ x, /* int */ y) {
    this.fPoly.addPoint(x, y);
    this.changed();
}
//*************
// Changes the position of a node.
//*************
PolygonFigure.prototype.setPointAt = function( /* Point */ p, /* int */ i) {
    this.willChange();
    this.fPoly.xpoints[i] = p.x;
    this.fPoly.ypoints[i] = p.y;
    this.changed();
}
//*************
// Insert a node at the given point.
//*************
PolygonFigure.prototype.insertPointAt = function( /* Point */ p, /* int */ i) {
    this.willChange();
    var n = this.fPoly.npoints + 1;
    var xs = new Array();
    var ys = new Array();
    for (var j = 0; j < i; ++j) {
        xs[j] = this.fPoly.xpoints[j];
        ys[j] = this.fPoly.ypoints[j];
    }
    xs[i] = p.x;
    ys[i] = p.y;
    for (var j = i; j < this.fPoly.npoints; ++j) {
        xs[j + 1] = this.fPoly.xpoints[j];
        ys[j + 1] = this.fPoly.ypoints[j];
    }
    this.fPoly = new gPolygon(xs, ys, n);
    this.changed();
}
//*************
// Remove a node at the given point.
//*************
PolygonFigure.prototype.removePointAt = function( /* int */ i) {
    this.willChange();
    var n = this.fPoly.npoints - 1;
    var xs = new Array();
    var ys = new Array();
    for (var j = 0; j < i; ++j) {
        xs[j] = this.fPoly.xpoints[j];
        ys[j] = this.fPoly.ypoints[j];
    }
    for (var j = i; j < n; ++j) {
        xs[j] = this.fPoly.xpoints[j + 1];
        ys[j] = this.fPoly.ypoints[j + 1];
    }
    this.fPoly = new gPolygon(xs, ys, n);
    this.changed();
}
//*************
// Scale and rotate relative to anchor
//*************
PolygonFigure.prototype.scaleRotate = function( /* Point */ anchor, /* gPolygon */ originalPolygon, /* Point */ p) {
    this.willChange();
    // use center to determine relative angles and lengths
    var ctr = this.center(originalPolygon);
    var anchorLen = geom.length(ctr.x, ctr.y, anchor.x, anchor.y);
    if (anchorLen > 0.0) {
        var newLen = geom.length(ctr.x, ctr.y, p.x, p.y);
        var ratio = newLen / anchorLen;
        var anchorAngle = Math.atan2(anchor.y - ctr.y, anchor.x - ctr.x);
        var newAngle = Math.atan2(p.y - ctr.y, p.x - ctr.x);
        var rotation = newAngle - anchorAngle;
        var n = originalPolygon.npoints;
        var xs = new Array()
        var ys = new Array();
        for (var i = 0; i < n; ++i) {
            var x = originalPolygon.xpoints[i];
            var y = originalPolygon.ypoints[i];
            var l = geom.length(ctr.x, ctr.y, x, y) * ratio;
            var a = Math.atan2(y - ctr.y, x - ctr.x) + rotation;
            xs[i] = parseInt(ctr.x + l * Math.cos(a) + 0.5);
            ys[i] = parseInt(ctr.y + l * Math.sin(a) + 0.5);
        }
        this.fPoly = new gPolygon(xs, ys, n);
    }
    this.changed();
}
//*************
// Remove points that are nearly colinear with others
//*************
PolygonFigure.prototype.smoothPoints = function() {
    return; // Fix a bug: ,.. problem when delete a node
    this.willChange();
    var removed = false;
    var n = this.fPoly.npoints;
    do {
        removed = false;
        var i = 0;
        while (i < n && n >= 3) {
            var nxt = (i + 1) % n;
            var prv = (i - 1 + n) % n;
            if ((this.distanceFromLine(this.fPoly.xpoints[prv], this.fPoly.ypoints[prv], this.fPoly.xpoints[nxt], this.fPoly.ypoints[nxt], this.fPoly.xpoints[i], this.fPoly.ypoints[i]) < TOO_CLOSE)) {
                removed = true;
                --n;
                for (var j = i; j < n; ++j) {
                    this.fPoly.xpoints[j] = this.fPoly.xpoints[j + 1];
                    this.fPoly.ypoints[j] = this.fPoly.ypoints[j + 1];
                }
            } else ++i;
        }
    } while (removed);
    if (n != this.fPoly.npoints) this.fPoly = new gPolygon(this.fPoly.xpoints, this.fPoly.ypoints, n);
    this.changed();
}
//*************
// Splits the segment at the given point if a segment was hit.
// @return the index of the segment or -1 if no segment was hit.
//*************
/* int */
PolygonFigure.prototype.splitSegment = function( /* int */ x, /* int */ y) {
    var i = this.findSegment(x, y);
    if (i != -1) {
        this.insertPointAt(new Point(x, y), i + 1);
        return i + 1;
    } else return -1;
}
//*************
// pointAt
//*************
/* Point */
PolygonFigure.prototype.pointAt = function( /* int */ i) {
    return new Point(this.fPoly.xpoints[i], this.fPoly.ypoints[i]);
}
//*************
// Return the point on the polygon that is furthest from the center
//*************
/* Point */
PolygonFigure.prototype.outermostPoint = function() {
    var ctr = this.center();
    var outer = 0;
    var dist = 0;
    for (var i = 0; i < this.fPoly.npoints; ++i) {
        var d = geom.length2(ctr.x, ctr.y, this.fPoly.xpoints[i], this.fPoly.ypoints[i]);
        if (d > dist) {
            dist = d;
            outer = i;
        }
    }
    return new Point(this.fPoly.xpoints[outer], this.fPoly.ypoints[outer]);
}
//*************
// Gets the segment that is hit by the given point.
// @return the index of the segment or -1 if no segment was hit.
//*************
/* int */
PolygonFigure.prototype.findSegment = function( /* int */ x, /* int */ y) {
    /*
    double dist = TOO_CLOSE;
    int best = -1;

    for (int i = 0; i < fPoly.npoints; i++) {
      int n = (i + 1) % fPoly.npoints;
      double d =  distanceFromLine(fPoly.xpoints[i], fPoly.ypoints[i],
                                   fPoly.xpoints[n], fPoly.ypoints[n],
                                   x, y);
      if (d < dist) {
        dist = d;
        best = i;
      }
    }
    return best;
*/
}
//*************
// chop
//*************
/* Point */
PolygonFigure.prototype.chop = function( /* Point */ p) {
    return this.chop(this.fPoly, p);
}
//*************
// Creates a locator for the point with the given index.
//*************
/* Locator */
PolygonFigure.prototype.locator = function( /* int */ pointIndex) {
    return new PolygonFigureLocator(pointIndex);
}
//#########################################################################
// Class [used by method locator of PolygonFigure Class] : PolygonFigureLocator
//#########################################################################
PolygonFigureLocator.prototype = new AbstractLocator();

function PolygonFigureLocator( /* int */ pointIndex) {
    this.className = "PolygonFigureLocator";
    this.pointIndex = pointIndex;
}
/* Point */
PolygonFigureLocator.prototype.locate = function( /* Figure */ owner) {
    /* PolygonFigure */
    var plf = owner;
    // guard against changing PolygonFigures -> temporary hack
    if (this.pointIndex < plf.pointCount()) return owner.pointAt(this.pointIndex);
    return new Point(-1, -1);
}
/* String */
PolygonFigureLocator.prototype.toString = function() {
    return this.className;
}
//####################[End Of PolygonFigureLocator]############################
//*************
// compute distance of point from line segment, or
// Double.MAX_VALUE if perpendicular projection is outside segment; or
// If pts on line are same, return distance from point
//*************
/* double */
PolygonFigure.prototype.distanceFromLine = function( /* int */ xa, ya, xb, yb, xc, yc) {
    // source:http://vision.dai.ed.ac.uk/andrewfg/c-g-a-faq.html#q7
    //Let the point be C (XC,YC) and the line be AB (XA,YA) to (XB,YB).
    //The length of the
    //      line segment AB is L:
    //
    //                    ___________________
    //                   |        2         2
    //              L = \| (XB-XA) + (YB-YA)
    //and
    //
    //                  (YA-YC)(YA-YB)-(XA-XC)(XB-XA)
    //              r = -----------------------------
    //                              L**2
    //
    //                  (YA-YC)(XB-XA)-(XA-XC)(YB-YA)
    //              s = -----------------------------
    //                              L**2
    //
    //      Let I be the point of perpendicular projection of C onto AB, the
    //
    //              XI=XA+r(XB-XA)
    //              YI=YA+r(YB-YA)
    //
    //      Distance from A to I = r*L
    //      Distance from C to I = s*L
    //
    //      If r < 0 I is on backward extension of AB
    //      If r>1 I is on ahead extension of AB
    //      If 0<=r<=1 I is on AB
    //
    //      If s < 0 C is left of AB (you can just check the numerator)
    //      If s>0 C is right of AB
    //      If s=0 C is on AB
    var xdiff = xb - xa;
    var ydiff = yb - ya;
    var l2 = xdiff * xdiff + ydiff * ydiff;
    if (l2 == 0) return Geom.length(xa, ya, xc, yc);
    var rnum = (ya - yc) * (ya - yb) - (xa - xc) * (xb - xa);
    var r = rnum / l2;
    if (r < 0.0 || r > 1.0) return Number.MAX_VALUE;
    var xi = xa + r * xdiff;
    var yi = ya + r * ydiff;
    var xd = xc - xi;
    var yd = yc - yi;
    return Math.sqrt(xd * xd + yd * yd);
    /*  ================= [Original: Keep this ] ============================
      for directional version, instead use
      double snum =  (ya-yc) * (xb-xa) - (xa-xc) * (yb-ya);
      double s = snum / l2;

      double l = Math.sqrt((double)l2);
      return = s * l;
      */
}
//*************
// replacement for builtin gPolygon.getBounds that doesn't always update?
//*************
/* gRectangle */
PolygonFigure.prototype.bounds = function( /* gPolygon */ p) {
    var minx = Number.MAX_VALUE; // 0x80000000;//Integer.MIN_VALUE;
    var miny = Number.MAX_VALUE; // 0x80000000;//Integer.MIN_VALUE;
    var maxx = Number.MIN_VALUE; // 0x7fffffff;// Integer.MAX_VALUE;
    var maxy = Number.MIN_VALUE; // 0x7fffffff;// Integer.MAX_VALUE;
    var n = p.npoints;
    for (var i = 0; i < n; i++) {
        var x = p.xpoints[i];
        var y = p.ypoints[i];
        if (x > maxx) maxx = x;
        if (x < minx) minx = x;
        if (y > maxy) maxy = y;
        if (y < miny) miny = y;
    }
    return new gRectangle(minx, miny, maxx - minx, maxy - miny);
}
//*************
// 
//*************
/* Point */
PolygonFigure.prototype.chop = function( /* gPolygon */ poly, /* Point */ p) {
    /*
   Point ctr = center(poly);
    int cx = -1;
    int cy = -1;
    long len = Long.MAX_VALUE;

    // Try for points along edge

    for (int i = 0; i < poly.npoints; ++i) {
      int nxt = (i + 1) % poly.npoints;
      Point chop = Geom.intersect(poly.xpoints[i],
                             poly.ypoints[i],
                             poly.xpoints[nxt],
                             poly.ypoints[nxt],
                             p.x,
                             p.y,
                             ctr.x,
                             ctr.y);
      if (chop != null) {
        long cl = Geom.length2(chop.x, chop.y, p.x, p.y);
        if (cl < len) {
          len = cl;
          cx = chop.x;
          cy = chop.y;
        }
      }
    }
    // if none found, pick closest vertex
    //if (len ==  Long.MAX_VALUE) {
    { // try anyway
      for (int i = 0; i < poly.npoints; ++i) {
        long l = Geom.length2(poly.xpoints[i], poly.ypoints[i], p.x, p.y);
        if (l < len) {
          len = l;
          cx = poly.xpoints[i];
          cy = poly.ypoints[i];
        }
      }
    }
    return new Point(cx, cy);
*/
}
//*************
// NOT IMPLEMENTED  
//*************
PolygonFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
PolygonFigure.prototype.read = function( /* StorableInput */ dr) {}
//*************
// NOT IMPLEMENTED  
//*************
PolygonFigure.prototype.clone = function() {
    return new PolygonFigure(0, 0);
}
//*************
// serialize
//*************
/* String */
PolygonFigure.prototype.serialize = function() {
    return this.serializePolygonFigure();
}
//*************
// serializePolygonFigure
//*************
/* String */
PolygonFigure.prototype.serializePolygonFigure = function() {
    var ret = new Hashtable;
    ret.put("points", this.fPoly.serialize());
    return this.serializeAttributeFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
PolygonFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializePolygonFigure(str);
}
//*************
// deserializePolygonFigure
//*************
/* Hashtable */
PolygonFigure.prototype.deserializePolygonFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAttributeFigure(str);
    this.fPoly = new gPolygon(true);
    this.fPoly.deserialize(inp.get("points"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
PolygonFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFPolygonFigure(contextUri, command);
}
//*************
// serializeAsRDFPolygonFigure [NEW: 17-3-2006]
//*************
/* String */
PolygonFigure.prototype.serializeAsRDFPolygonFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = history + " svg:points \"" + this.fPoly.serialize() + "\" . ";
    content = this.serializeAsRDFAttributeFigure(contextUri, command) + content;
    return content;
}