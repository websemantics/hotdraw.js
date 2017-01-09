/**
 * Hotdraw.js : FigureChangeEvent
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * FigureChange event passed to FigureChangeListeners.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     13th January 2005
 * @package   websemantics/hotdraw/framework
 */

FigureChangeEvent.prototype = new EventObject();

function FigureChangeEvent( /* Figure */ source, /* Rectangle */ r) { /* extends EventObject */
    var argv = FigureChangeEvent.arguments;
    var argc = FigureChangeEvent.length;
    this.className = "FigureChangeEvent";
    /* gRectangle */
    this.fRectangle = null;
    /* gRectangle */
    this.fgEmptyRectangle = new gRectangle(0, 0, 0, 0);;
    if (argv.length > 0) this.initFigureChangeEvent(source, r);
}
//*************
// initFigureChangeEvent
//
// Constructs an event for the given source Figure. The rectangle is the area to be invalvidated.
//
// Forms:
// ======
// (1) initFigureChangeEvent(Figure source)
// (2) initFigureChangeEvent(Figure source, Rectangle r)
//*************
FigureChangeEvent.prototype.initFigureChangeEvent = function(source, r) {
    this.initEventObject(source);
    if (r == undefined) this.fRectangle = this.fgEmptyRectangle;
    else this.fRectangle = r;
}
//*************
// Gets the changed figure
//*************
/* Figure */
FigureChangeEvent.prototype.getFigure = function() {
    return this.getSource();
}
//*************
// Gets the changed rectangle
//*************
/* Rectangle */
FigureChangeEvent.prototype.getInvalidatedRectangle = function() {
    return this.fRectangle;
}