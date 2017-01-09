/**
 * Hotdraw.js : DrawingChangeEvent
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The event passed to DrawingChangeListeners.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     3rd February 2005
 * @package   websemantics/hotdraw/framework
 */

DrawingChangeEvent.prototype = new EventObject();

function DrawingChangeEvent( /* Figure */ source, /* Rectangle */ r) { /* extends EventObject */
    var argv = DrawingChangeEvent.arguments;
    var argc = DrawingChangeEvent.length;
    this.className = "DrawingChangeEvent";
    /* gRectangle */
    this.fRectangle = null;
    /* gRectangle */
    this.fgEmptyRectangle = new gRectangle(0, 0, 0, 0);;
    if (argv.length > 0) this.initDrawingChangeEvent(source, r);
}
//*************
// initDrawingChangeEvent
//
// Constructs a drawing change event.
//
// Forms:
// ======
// (1) initDrawingChangeEvent(Figure source)
// (2) initDrawingChangeEvent(Figure source, Rectangle r)
//*************
DrawingChangeEvent.prototype.initDrawingChangeEvent = function(source, r) {
    this.initEventObject(source);
    if (r == undefined) this.fRectangle = this.fgEmptyRectangle;
    else this.fRectangle = r;
}
//*************
// Gets the changed drawing 
//*************
/* Drawing */
DrawingChangeEvent.prototype.getDrawing = function() {
    return this.getSource();
}
//*************
// Gets the changed rectangle 
//*************
/* Rectangle */
DrawingChangeEvent.prototype.getInvalidatedRectangle = function() {
    return this.fRectangle;
}