/**
 * Hotdraw.js : GroupFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Figure that groups a collection of figures.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/figures
 */

GroupFigure.prototype = new CompositeFigure();

function GroupFigure() {
    var argv = GroupFigure.arguments;
    var argc = GroupFigure.length;
    this.className = "GroupFigure";
    if (argv.length >= 0) this.initGroupFigure();
}
//*************
// initGroupFigure
//*************
GroupFigure.prototype.initGroupFigure = function() {
    this.initCompositeFigure();
}
//*************
// GroupFigures cannot be connected
//*************
GroupFigure.prototype.canConnect = function() {
    return false;
}
//*************
// 
//*************
GroupFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    // do nothing
    // we could transform all components proportionally
}
//*************
// 
//*************
/* FigureEnumeration */
GroupFigure.prototype.decompose = function() {
    return new FigureEnumerator(this.fFigures);
}
//*************
// Sets the attribute of all the contained figures.
//*************
GroupFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    var k = this.figures();
    while (k.hasMoreElements()) k.nextFigure().setAttribute(name, value);
}
//*************
// Gets the handles for the GroupFigure. 
//*************
/* Vector */
GroupFigure.prototype.handles = function() {
    var handles = new Vector();
    handles.addElement(new GroupHandle(this, relativeLocator.northWest()));
    handles.addElement(new GroupHandle(this, relativeLocator.northEast()));
    handles.addElement(new GroupHandle(this, relativeLocator.southWest()));
    handles.addElement(new GroupHandle(this, relativeLocator.southEast()));
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
// Gets the display box. The display box is defined as the union of the contained figures.
//*************
/* Rectangle */
GroupFigure.prototype.ret_displayBox = function() {
    /* FigureEnumeration */
    var k = this.figures();
    /* gRectangle */
    var r = k.nextFigure().displayBox();
    while (k.hasMoreElements()) r.add(k.nextFigure().displayBox());
    return r;
}