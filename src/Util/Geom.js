/**
 * Hotdraw.js : Geom
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Some geometric utilities.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th August 2005
 * @package   websemantics/hotdraw/util
 */

function Geom() {
    var argv = Geom.arguments;
    var argc = Geom.length;
    this.className = "Geom";
    /* int */
    this.NORTH = 1;
    /* int */
    this.SOUTH = 2;
    /* int */
    this.WEST = 3;
    /* int */
    this.EAST = 4;
    if (argv.length > 0) this.initGeom();
}
//*************
// Constructer
//*************
Geom.prototype.initGeom = function() {}
//*************
// Tests if a point is on a line.
//*************
/* boolean */
Geom.prototype.lineContainsPoint = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2, /* int */ px, /* int */ py) {
    /* gRectangle */
    var r = new gRectangle(new Point(x1, y1));
    r.add(x2, y2);
    r.grow(2, 2);
    if (!r.contains(px, py)) return false;
    var a, b, x, y;
    if (x1 == x2) return (Math.abs(px - x1) < 3);
    if (y1 == y2) return (Math.abs(py - y1) < 3);
    a = (y1 - y2) / (x1 - x2);
    b = y1 - a * x1;
    x = (py - b) / a;
    y = a * px + b;
    return (Math.min(Math.abs(x - px), Math.abs(y - py)) < 4);
}
//*************
// Returns the direction NORTH, SOUTH, WEST, EAST from one point to another one.
//*************
/* int */
Geom.prototype.direction = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2) {
    var direction = 0;
    var vx = x2 - x1;
    var vy = y2 - y1;
    if (vy < vx && vx > -vy) direction = EAST;
    else if (vy > vx && vy > -vx) direction = NORTH;
    else if (vx < vy && vx < -vy) direction = WEST;
    else direction = SOUTH;
    return direction;
}
//*************
// south
//*************
/* Point */
Geom.prototype.south = function( /* gRectangle */ r) {
    return new Point(r.x + r.width / 2, r.y + r.height);
}
//*************
// center
//*************
/* Point */
Geom.prototype.center = function( /* gRectangle */ r) {
    return new Point(r.x + r.width / 2, r.y + r.height / 2);
}
//*************
// west
//*************
/* Point */
Geom.prototype.west = function( /* gRectangle */ r) {
    return new Point(r.x, r.y + r.height / 2);
}
//*************
// east
//*************
/* Point */
Geom.prototype.east = function( /* gRectangle */ r) {
    return new Point(r.x + r.width, r.y + r.height / 2);
}
//*************
// north
//*************
/* Point */
Geom.prototype.north = function( /* gRectangle */ r) {
    return new Point(r.x + r.width / 2, r.y);
}
//*************
// Constains a value to the given range.
//*************
/* int */
Geom.prototype.range = function( /* int */ min, /* int */ max, /* int */ value) {
    if (value < min) value = min;
    if (value > max) value = max;
    return value;
}
//*************
// Gets the square distance between two points.
//*************
/* long */
Geom.prototype.length2 = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2) {
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}
//*************
// Gets the distance between to points
//*************
/* long */
Geom.prototype.length = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2) {
    return Math.sqrt(this.length2(x1, y1, x2, y2));
}
//*************
// Gets the angle of a point relative to a rectangle.
//*************
/* double */
Geom.prototype.pointToAngle = function( /* gRectangle */ r, /* Point */ p) {
    var px = p.x - (r.x + r.width / 2);
    var py = p.y - (r.y + r.height / 2);
    return Math.atan2(py * r.width, px * r.height);
}
//*************
// Gets the point on a rectangle that corresponds to the given angle.
//*************
/* Point */
Geom.prototype.angleToPoint = function( /* gRectangle */ r, /* double */ angle) {
    /*
double si = Math.sin(angle);
        double co = Math.cos(angle);
        double e = 0.0001;

        int x= 0, y= 0;
        if (Math.abs(si) > e) {
            x= (int) ((1.0 + co/Math.abs(si))/2.0 * r.width);
            x= range(0, r.width, x);
        } else if (co >= 0.0)
            x= r.width;
        if (Math.abs(co) > e) {
            y= (int) ((1.0 + si/Math.abs(co))/2.0 * r.height);
            y= range(0, r.height, y);
        } else if (si >= 0.0)
            y= r.height;
        return new Point(r.x + x, r.y + y);
*/
}
//*************
// Converts a polar to a point
//*************
/* Point */
Geom.prototype.polarToPoint = function( /* double */ angle, /* double */ fx, /* double */ fy) {
    var si = Math.sin(angle);
    var co = Math.cos(angle);
    return new Point(parseInt(fx * co + 0.5), parseInt(fy * si + 0.5));
}
//*************
// Gets the point on an oval that corresponds to the given angle.
//*************
/* Point */
Geom.prototype.ovalAngleToPoint = function( /* gRectangle */ r, /* double */ angle) {
    var center = this.center(r);
    var p = this.polarToPoint(angle, r.width / 2, r.height / 2);
    return new Point(center.x + p.x, center.y + p.y);
}
//*************
// Standard line intersection algorithm. Return the point of intersection if it exists, else null
// from Doug Lea's PolygonFigure
//*************
/* Point */
Geom.prototype.intersect = function(
    /* int */
    xa, // line 1 point 1 x
    /* int */
    ya, // line 1 point 1 y
    /* int */
    xb, // line 1 point 2 x
    /* int */
    yb, // line 1 point 2 y
    /* int */
    xc, // line 2 point 1 x
    /* int */
    yc, // line 2 point 1 y
    /* int */
    xd, // line 2 point 2 x
    /* int */
    yd) { // line 2 point 2 y
    // source: http://vision.dai.ed.ac.uk/andrewfg/c-g-a-faq.html
    // eq: for lines AB and CD
    //     (YA-YC)(XD-XC)-(XA-XC)(YD-YC)
    // r = -----------------------------  (eqn 1)
    //     (XB-XA)(YD-YC)-(YB-YA)(XD-XC)
    //
    //     (YA-YC)(XB-XA)-(XA-XC)(YB-YA)
    // s = -----------------------------  (eqn 2)
    //     (XB-XA)(YD-YC)-(YB-YA)(XD-XC)
    //  XI = XA + r(XB-XA)
    //  YI = YA + r(YB-YA)
    var denom = ((xb - xa) * (yd - yc) - (yb - ya) * (xd - xc));
    var rnum = ((ya - yc) * (xd - xc) - (xa - xc) * (yd - yc));
    if (denom == 0.0) { // parallel
        if (rnum == 0.0) { // coincident; pick one end of first line
            if ((xa < xb && (xb < xc || xb < xd)) || (xa > xb && (xb > xc || xb > xd))) return new Point(xb, yb);
            else return new Point(xa, ya);
        } else return null;
    }
    var r = rnum / denom;
    var snum = ((ya - yc) * (xb - xa) - (xa - xc) * (yb - ya));
    var s = snum / denom;
    if (0.0 <= r && r <= 1.0 && 0.0 <= s && s <= 1.0) {
        var px = parseInt((xa + (xb - xa) * r));
        var py = parseInt((ya + (yb - ya) * r));
        return new Point(px, py);
    } else return null;
}
var geom = new Geom();