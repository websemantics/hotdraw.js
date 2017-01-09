/**
 * Hotdraw.js : BorderDecorator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * BorderDecorator decorates an arbitrary Figure with a border.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th August 2005 
 * @package   websemantics/hotdraw/figures
 */

BorderDecorator.prototype = new DecoratorFigure();

function BorderDecorator( /* Figure */ figure) {
    var argv = BorderDecorator.arguments;
    var argc = BorderDecorator.length;
    this.className = "BorderDecorator";
    if (argv.length > 0) this.initBorderDecorator(figure);
}
//*************
// Constructs a BorderDecorator and decorates the passed in figure.
//*************
BorderDecorator.prototype.initBorderDecorator = function(figure) {
    this.initDecoratorFigure(figure);
}
//*************
// border
//*************
/* Point */
BorderDecorator.prototype.border = function() {
    return new Point(3, 3);
}
//*************
// createSVGContent
//*************
BorderDecorator.prototype.createSVGContent = function( /* Graphics */ g) {
    /* gRectangle */
    var r = this.displayBox();
    this.shape = g.drawStepBorder(r.x, r.y, r.width, r.height);
}
//*************
// Forwards draw to its contained figure.
//*************
BorderDecorator.prototype.draw = function( /* Graphics */ g) {
    this.drawBorderDecorator(g);
}
//*************
// Forwards draw to its contained figure.
//*************
BorderDecorator.prototype.drawBorderDecorator = function( /* Graphics */ g) {
    this.drawDecoratorFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the rectangle figure
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
}
//*************
// Forwards the connection insets to its contained figure..
//*************
/* Insets */
BorderDecorator.prototype.connectionInsets = function() {
    return this.connectionInsetsBorderDecorator();
}
/* Insets */
BorderDecorator.prototype.connectionInsetsBorderDecorator = function() {
    /* Insets */
    var i = this.connectionInsetsDecoratorFigure();
    i.top -= 3;
    i.bottom -= 3;
    i.left -= 3;
    i.right -= 3;
    return i;
}
//*************
// Forwards displayBox to its contained figure.
//*************
/* gRectangle */
BorderDecorator.prototype.displayBox = function() {
    /* gRectangle */
    var r = this.fComponent.displayBox();
    r.grow(this.border().x, this.border().y);
    return r;
}
//*************
// Forwards draw to its contained figure.
//*************
BorderDecorator.prototype.clone = function() {
    return new BorderDecorator();
}