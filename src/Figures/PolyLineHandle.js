/**
 * Hotdraw.js : PolyLineHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A handle for a node on the polyline.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

PolyLineHandle.prototype = new LocatorHandle();

function PolyLineHandle( /* PolyLineFigure */ owner, /* Locator */ locator, /* int */ indx) {
    var argv = PolyLineHandle.arguments;
    var argc = PolyLineHandle.length;
    this.className = "PolyLineHandle";
    /* Point */
    this.fAnchor = null;
    /* int */
    this.fIndex = 0;
    if (argv.length > 0) this.initPolyLineHandle(owner, locator, indx);
}
//*************
// Initializes 
//*************
PolyLineHandle.prototype.initPolyLineHandle = function(owner, locator, indx) {
    this.initLocatorHandle(owner, locator);
    this.fIndex = indx;
}
//*************
// invokeStart
//*************
PolyLineHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    this.fAnchor = new Point(x, y);
}
//*************
// Tracks a step of the interaction.
//*************
PolyLineHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    this.myOwner().setPointAt(new Point(x, y), this.fIndex);
    //this.myOwner().draw();
}
//*************
// myOwner
//*************
PolyLineHandle.prototype.myOwner = function() {
    return this.owner();
}