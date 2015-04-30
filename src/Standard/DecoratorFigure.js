/**
 * Hotdraw.js : DecoratorFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DecoratorFigure can be used to decorate other figures with
 * decorations like borders. Decorator forwards all the
 * methods to their contained figure. Subclasses can selectively
 * override these methods to extend and filter their behavior.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2005
 * @package   websemantics/hotdraw/standard
 */

DecoratorFigure.prototype = new AttributeFigure();

function DecoratorFigure( /* Figure */ figure) { /* implements FigureChangeListener */
    var argv = DecoratorFigure.arguments;
    var argc = DecoratorFigure.length;
    this.className = "DecoratorFigure";
    /* Figure */
    this.fComponent = null;
    if (argv.length > 0) this.initDecoratorFigure(figure);
}
//*************
// Constructs a DecoratorFigure and decorates the passed in figure.
//*************
DecoratorFigure.prototype.initDecoratorFigure = function(figure) {
    this.initAbstractFigure();
    if (figure != undefined || figure != null) this.decorate(figure);
}
//*************
// Forwards the connection insets to its contained figure..
//*************
/* Insets */
DecoratorFigure.prototype.connectionInsets = function() {
    return this.connectionInsetsDecoratorFigure();
}
/* Insets */
DecoratorFigure.prototype.connectionInsetsDecoratorFigure = function() {
    return this.fComponent.connectionInsets();
}
//*************
// Forwards the canConnect to its contained figure..
//*************
/* boolean */
DecoratorFigure.prototype.canConnect = function() {
    return this.fComponent.canConnect();
}
//*************
// Forwards containsPoint to its contained figure.
//*************
/* boolean */
DecoratorFigure.prototype.containsPoint = function( /* int */ x, /* int */ y) {
    return this.fComponent.containsPoint(x, y);
}
//*************
// Decorates the given figure.
//*************
DecoratorFigure.prototype.decorate = function( /* Figure */ figure) {
    this.fComponent = figure;
    this.fComponent.addToContainer(this);
}
//*************
// Removes the decoration from the contained figure.
//*************
/* Figure */
DecoratorFigure.prototype.peelDecoration = function() {
    this.fComponent.removeFromContainer(this); //??? set the container to the listener()?
    return this.fComponent;
}
//*************
// Forwards displayBox to its contained figure.
//*************
/* gRectangle */
DecoratorFigure.prototype.displayBox = function() {
    return this.fComponent.displayBox();
}
//*************
// Forwards basicDisplayBox to its contained figure.
//*************
DecoratorFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fComponent.basicDisplayBox(origin, corner);
}
//*************
// Forwards draw to its contained figure.
//*************
DecoratorFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawDecoratorFigure(g);
}
//*************
// Forwards draw to its contained figure.
//*************
DecoratorFigure.prototype.drawDecoratorFigure = function( /* Graphics */ g) {
    this.fComponent.draw(g);
    this.drawAbstractFigure(g);
}
//*************
// Forwards findFigureInside to its contained figure.
//*************
/* Figure */
DecoratorFigure.prototype.findFigureInside = function( /* int */ x, /* int */ y) {
    return this;
    //return this.fComponent.findFigureInside(x, y); [OLD]
}
//*************
// Forwards handles to its contained figure.
//*************
/* Vector */
DecoratorFigure.prototype.handles = function() {
    return this.handlesDecoratorFigure();
}
//*************
// Forwards handles to its contained figure.
//*************
/* Vector */
DecoratorFigure.prototype.handlesDecoratorFigure = function() {
    //return this.fComponent.handles(this);
    return this.fComponent.handles();
}
//*************
// Forwards includes to its contained figure.
//*************
/* Boolean */
DecoratorFigure.prototype.includes = function( /* Figure */ figure) {
    return (this.includesAbstractFigure(figure) || this.fComponent.includes(figure));
}
//*************
// Forwards moveBy to its contained figure.
//*************
DecoratorFigure.prototype.moveBy = function( /* int */ x, /* int */ y) {
    this.fComponent.moveBy(x, y);
}
//*************
// Forwards basicMoveBy to its contained figure.
//*************
DecoratorFigure.prototype.basicMoveBy = function( /* int */ x, /* int */ y) {
    // this will never be called
}
//*************
// figureChanged
//*************
DecoratorFigure.prototype.figureChanged = function( /* FigureChangeEvent */ e) {}
//*************
// figureRemoved
//*************
DecoratorFigure.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {}
//*************
// Propagates figureRequestUpdate up the container chain.
//*************
DecoratorFigure.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestUpdate(e);
}
//*************
// Propagates the removeFromDrawing request up to the container.
//*************
DecoratorFigure.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestRemove(new FigureChangeEvent(this));
}
//*************
// Forwards figures to its contained figure.
//*************
/* FigureEnumeration */
DecoratorFigure.prototype.figures = function() {
    return this.fComponent.figures();
}
//*************
// Forwards decompose to its contained figure.
//*************
/* FigureEnumeration */
DecoratorFigure.prototype.decompose = function() {
    return this.fComponent.decompose();
}
//*************
// Forwards setAttribute to its contained figure.
//*************
DecoratorFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    this.fComponent.setAttribute(name, value);
}
//*************
// Forwards getAttribute to its contained figure.
//*************
/* Object */
DecoratorFigure.prototype.getAttribute = function( /* String */ name) {
    return this.fComponent.getAttribute(name);
}
//*************
// Returns the locator used to located connected text.
//*************
/* Locator */
DecoratorFigure.prototype.connectedTextLocator = function( /* Figure */ text) {
    return this.fComponent.connectedTextLocator(text);
}
//*************
// Returns the Connector for the given location.
//*************
/* Connector */
DecoratorFigure.prototype.connectorAt = function( /* int */ x, /*int */ y) {
    return this.fComponent.connectorAt(x, y);
}
//*************
// Forwards the connector visibility request to its component.
//*************
DecoratorFigure.prototype.connectorVisibility = function( /* boolean */ isVisible) {
    this.fComponent.connectorVisibility(isVisible);
}
//*************
// Delete a shape
//*************
DecoratorFigure.prototype.dispose = function() {
    this.disposeDecoratorFigure()
}
DecoratorFigure.prototype.disposeDecoratorFigure = function() {
    this.fComponent.dispose();
    this.disposeAbstractFigure();
}
//*************
// Releases itself and the contained figure.
//*************
DecoratorFigure.prototype.release = function() {
    this.fComponent.removeFromContainer(this);
    this.fComponent.release();
    this.abstractFigureRelease();
}
//*************
// Writes itself and the contained figure to the StorableOutput.
//*************
DecoratorFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// 
//*************
DecoratorFigure.prototype.read = function( /* StorableInput */ dr) {}