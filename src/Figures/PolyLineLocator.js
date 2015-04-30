/**
 * Hotdraw.js : PolyLineLocator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A poly line figure consists of a list of points.
 * It has an optional line decoration at the start and end.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

PolyLineLocator.prototype = new AbstractLocator(); // implements Locator, Storable, Cloneable

function PolyLineLocator( /* int */ indx) {
    /* String */
    this.className = "PolyLineLocator";
    /* int */
    this.fIndex = 0;
    this.initPolyLineLocator(indx);
}
//*************
// initPolyLineLocator
//*************
PolyLineLocator.prototype.initPolyLineLocator = function(indx) {
    this.fIndex = indx;
}
//*************
// locate.
//*************
/* Point */
PolyLineLocator.prototype.locate = function( /* Figure */ owner) {
    /* PolyLineFigure */
    var plf = owner;
    // guard against changing PolyLineFigures -> temporary hack
    if (this.fIndex < plf.pointCount()) return owner.pointAt(this.fIndex);
    return new Point(0, 0);
}