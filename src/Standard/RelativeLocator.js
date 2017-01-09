/**
 * Hotdraw.js : RelativeLocator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A locator that specfies a point that is relative to the bounds of a figure.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     16th February 2005 
 * @package   websemantics/hotdraw/standard
 */

RelativeLocator.prototype = new AbstractLocator();

function RelativeLocator( /* double */ relativeX, /* double */ relativeY) {
    var argv = RelativeLocator.arguments;
    var argc = RelativeLocator.length;
    this.className = "RelativeLocator";
    /* double */
    this.fRelativeX = 0.0;
    /* double */
    this.fRelativeY = 0.0;
    if (argv.length > 0) this.initRelativeLocator(relativeX, relativeY);
}
//*************
// Initializes 
//*************
RelativeLocator.prototype.initRelativeLocator = function(relativeX, relativeY) {
    this.fRelativeX = relativeX;
    this.fRelativeY = relativeY;
}
//*************
// locate
//*************
/* Point */
RelativeLocator.prototype.locate = function( /* Figure */ owner) {
    /* Rectangle */
    var r = owner.displayBox();
    return new Point(r.x + (r.width * this.fRelativeX), r.y + (r.height * this.fRelativeY));
}
//*************
// east
//*************
/* Locator */
RelativeLocator.prototype.east = function() {
    return new RelativeLocator(1.0, 0.5);
}
//*************
// north
//*************
/* Locator */
RelativeLocator.prototype.north = function() {
    return new RelativeLocator(0.5, 0.0);
}
//*************
// west
//*************
/* Locator */
RelativeLocator.prototype.west = function() {
    return new RelativeLocator(0.0, 0.5);
}
//*************
// northEast
//*************
/* Locator */
RelativeLocator.prototype.northEast = function() {
    return new RelativeLocator(1.0, 0.0);
}
//*************
// northWest
//*************
/* Locator */
RelativeLocator.prototype.northWest = function() {
    return new RelativeLocator(0.0, 0.0);
}
//*************
// south
//*************
/* Locator */
RelativeLocator.prototype.south = function() {
    return new RelativeLocator(0.5, 1.0);
}
//*************
// southEast
//*************
/* Locator */
RelativeLocator.prototype.southEast = function() {
    return new RelativeLocator(1.0, 1.0);
}
//*************
// southWest
//*************
/* Locator */
RelativeLocator.prototype.southWest = function() {
    return new RelativeLocator(0.0, 1.0);
}
//*************
// center
//*************
/* Locator */
RelativeLocator.prototype.center = function() {
    return new RelativeLocator(0.5, 0.5);
}
//**************************************************************************************
// An instance of the class RelativeLocator called relativeLocator to be used by JHotdraw [static]
//**************************************************************************************
var relativeLocator = new RelativeLocator();
//**************************************************************************************