/**
 * Hotdraw.js : FigureChangeEventMulticaster
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Manages a list of FigureChangeListeners to be notified of 
 * specific FigureChangeEvents.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005 
 * @package   websemantics/hotdraw/standard
 */

// FigureChangeEventMulticaster.prototype= new AWTEventMulticaster();  [NOT IMPLEMENTED]

function FigureChangeEventMulticaster( /* EventListener */ a, /* EventListener */ b) { /* implements FigureChangeListener  */
    var argv = FigureChangeEventMulticaster.arguments;
    var argc = FigureChangeEventMulticaster.length;
    this.className = "FigureChangeEventMulticaster";
    /* EventListener*/
    this.a = null;
    /* EventListener*/
    this.b = null;
    if (argv.length > 0) this.initFigureChangeEventMulticaster(a, b);
}
//*************
// initFigureChangeEventMulticaster
//*************
FigureChangeEventMulticaster.prototype.initFigureChangeEventMulticaster = function(a, b) {
    this.a = a;
    this.b = b;
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureInvalidated = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureInvalidated(e);
    /* cast(FigureChangeListener) */
    this.b.figureInvalidated(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureRequestRemove = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureRequestRemove(e);
    /* cast(FigureChangeListener) */
    this.b.figureRequestRemove(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureRequestUpdate = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureRequestUpdate(e);
    /* cast(FigureChangeListener) */
    this.b.figureRequestUpdate(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureChanged = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureChanged(e);
    /* cast(FigureChangeListener) */
    this.b.figureChanged(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureRemoved = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureRemoved(e);
    /* cast(FigureChangeListener) */
    this.b.figureRemoved(e);
}
//*************
// 
//*************
/* FigureChangeListener */
FigureChangeEventMulticaster.prototype.add = function( /*FigureChangeListener*/ a, /*FigureChangeListener*/ b) {
    return this.addInternal(a, b);
}
//*************
// 
//*************
/* EventListener */
FigureChangeEventMulticaster.prototype.addInternal = function( /*FigureChangeListener*/ a, /*FigureChangeListener*/ b) {
    if (a == null) return b;
    if (b == null) return a;
    return new FigureChangeEventMulticaster(a, b);
}
//*************
// 
//*************
/* FigureChangeListener */
FigureChangeEventMulticaster.prototype.remove = function( /*FigureChangeListener*/ l, /*FigureChangeListener*/ oldl) {
    if (l instanceof EventListener && !oldl) {
        oldl = l;
        if (oldl == this.a) return this.b;
        if (oldl == this.b) return this.a;
        /*EventListener*/
        var a2 = this.removeInternal( /*(FigureChangeListener)*/ a, oldl);
        /*EventListener*/
        var b2 = this.removeInternal( /*(FigureChangeListener)*/ b, oldl);
        if (a2 == this.a && b2 == this.b) return this;
        else return this.addInternal( /*(FigureChangeListener)*/ a2, /*(FigureChangeListener)*/ b2);
    }
    return this.removeInternal(l, oldl);
}
//*************
// 
//*************
/* EventListener */
FigureChangeEventMulticaster.prototype.removeInternal = function( /*FigureChangeListener*/ l, /*FigureChangeListener*/ oldl) {
    if (l == oldl || l == null) {
        return null;
    } else if (l instanceof FigureChangeEventMulticaster) {
        return ( /*(FigureChangeEventMulticaster)*/ l).remove(oldl);
    } else {
        return l; // it's not here
    }
}
/* FigureChangeEventMulticaster */
var figureChangeEventMulticaster = new FigureChangeEventMulticaster();