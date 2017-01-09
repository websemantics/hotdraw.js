/**
 * Hotdraw.js : NullHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A handle that doesn't change the owned figure. 
 * Its only purpose is to show feedback that a figure is selected.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     3rd August 2005 
 * @package   websemantics/hotdraw/standard
 */

NullHandle.prototype = new LocatorHandle();

function NullHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = NullHandle.arguments;
    var argc = NullHandle.length;
    this.className = "NullHandle";
    if (argv.length > 0) this.initNullHandle(owner, locator);
}
//*************
// Initializes 
//*************
NullHandle.prototype.initNullHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
}
//*************
// Create SVG Content
//*************
NullHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor("none");
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.shape.setStrokeWidth(1);
    this.shape.setStrokeColor("black");
    this.shape.setAttribute('shape-rendering', 'optimizeSpeed'); //shape-rendering( auto | optimizeSpeed | crispEdges | geometricPrecision | inherit )
    this.shape.setCursor(this.getCursorName());
}