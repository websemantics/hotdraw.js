/**
 * Hotdraw.js : GroupHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Handle to change the font size by direct manipulation.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     3rd August 2005
 * @package   websemantics/hotdraw/figures
 */

GroupHandle.prototype = new NullHandle();

function GroupHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = GroupHandle.arguments;
    var argc = GroupHandle.length;
    this.className = "GroupHandle";
    if (argv.length > 0) this.initGroupHandle(owner, locator);
}
//*************
// Initializes 
//*************
GroupHandle.prototype.initGroupHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
}
//*************
// Create SVG Content
//*************
GroupHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor("none");
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.shape.setStrokeWidth(1);
    this.shape.setStrokeColor("white");
    this.shape.setAttribute('shape-rendering', 'optimizeSpeed'); //shape-rendering( auto | optimizeSpeed | crispEdges | geometricPrecision | inherit )
    this.shape.setCursor(this.getCursorName());
}