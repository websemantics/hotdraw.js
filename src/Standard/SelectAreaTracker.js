/**
 * Hotdraw.js : SelectAreaTracker
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * SelectAreaTracker implements a rubberband selection of an area
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

SelectAreaTracker.prototype = new AbstractTool();

function SelectAreaTracker( /* DrawingView */ view) {
    var argv = SelectAreaTracker.arguments;
    var argc = SelectAreaTracker.length;
    this.className = "SelectAreaTracker";
    /* gRectangle */
    this.fSelectGroup = null;
    /* Shape */
    this.shape = null;
    if (argv.length > 0) this.initSelectAreaTracker(view);
}
//*************
// Constructs a tool for the given view.
//*************
SelectAreaTracker.prototype.initSelectAreaTracker = function(view) {
    this.initAbstractTool(view);
}
//*************
// mouseDown
//*************
SelectAreaTracker.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    // use event coordinates to supress any kind of
    // transformations like constraining points to a grid
    this.fAnchorX = e.getX();
    this.fAnchorY = e.getY();
    this.rubberBand(this.fAnchorX, this.fAnchorY, this.fAnchorX, this.fAnchorY);
}
//*************
// mouseDrag
//*************
SelectAreaTracker.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.rubberBand(this.fAnchorX, this.fAnchorY, x, y);
}
//*************
// mouseUp
//*************
SelectAreaTracker.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.eraseRubberBand();
    this.selectGroup(e.isShiftDown());
}
//*************
// rubberBand
//*************
SelectAreaTracker.prototype.rubberBand = function(x1, y1, x2, y2) {
    this.fSelectGroup = new gRectangle(new Point(x1, y1));
    this.fSelectGroup.add(new Point(x2, y2));
    this.drawXORRect(this.fSelectGroup);
}
//*************
// eraseRubberBand
//*************
SelectAreaTracker.prototype.eraseRubberBand = function() {
    this.shape.dispose();
    this.shape = null;
}
//*************
// drawXORRect
//*************
SelectAreaTracker.prototype.drawXORRect = function( /* gRectangle */ r) {
    if (this.shape == null) {
        /* Graphics */
        var g = this.view().selectiong;
        g.setColor("none");
        g.setStrokeColor("black");
        g.setStrokeWidth(1);
        this.shape = g.drawRect(r.x, r.y, r.width, r.height);
        this.shape.setAttribute('style', hdSelectionRectStyle); // hdSelectionRectStyle is defined in InitiliseHotdraw.js
    } else {
        this.shape.setSize(r.width, r.height);
        this.shape.translate(r.x, r.y);
    }
}
//*************
// selectGroup
//*************
SelectAreaTracker.prototype.selectGroup = function( /* boolean */ toggle) {
    /* FigureEnumeration */
    var k = this.drawing().figuresReverse();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        /* gRectangle */
        var r2 = figure.displayBox();
        if (this.fSelectGroup.contains(r2.x, r2.y) && this.fSelectGroup.contains(r2.x + r2.width, r2.y + r2.height)) {
            if (toggle) this.view().toggleSelection(figure);
            else this.view().addToSelection(figure);
        }
    }
}