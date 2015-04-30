/**
 * Hotdraw.js : FontSizeHandle
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

FontSizeHandle.prototype = new LocatorHandle();

function FontSizeHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = FontSizeHandle.arguments;
    var argc = FontSizeHandle.length;
    this.className = "FontSizeHandle";
    /* Font */
    this.fFont = null;
    /* int */
    this.fSize = 0;
    /* Color */
    this.color = "yellow";
    if (argv.length > 0) this.initFontSizeHandle(owner, locator);
}
//*************
// Initializes 
//*************
FontSizeHandle.prototype.initFontSizeHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
}
//*************
// Create SVG Content
//*************
FontSizeHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor(this.color);
    this.shape = g.drawOval(r.x + r.width / 2, r.y + r.height / 2, r.width, r.height);
    this.shape.setStrokeWidth(0.5);
    this.shape.setStrokeColor("black");
    this.shape.setCursor(this.getCursorName());
}
//*************
// invokeStart
//*************
FontSizeHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    /* TextFigure */
    var textOwner = this.owner();
    this.fFont = textOwner.getFont();
    this.fSize = this.fFont.getSizeValue();
}
//*************
// Tracks a step of the interaction.
//*************
FontSizeHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* TextFigure */
    var textOwner = this.owner();
    /* int */
    var newSize = this.fSize + y - anchorY;
    if (newSize > 5) textOwner.setFont(new Font(this.fFont.getName(), this.fFont.getStyle(), newSize + "pt"));
}