/**
 * Hotdraw.js : ToolButton
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A PaletteButton that is associated with a tool.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     11th February 2005 
 * @package   websemantics/hotdraw/standard
 */

ToolButton.prototype = new PaletteButton();

function ToolButton( /* PaletteListener */ listener, /* String */ iconName, /* String */ name, /* Tool */ tool) {
    var argv = ToolButton.arguments;
    var argc = ToolButton.length;
    this.className = "ToolButton";
    /*String */
    this.fName = null;
    /* Tool */
    this.fTool = null;
    /* PaletteIcon */
    this.fIcon = null;
    if (argv.length > 0) this.initToolButton(listener, iconName, name, tool);
}
//*************
// Constructs a tool for the given view.
//*************
ToolButton.prototype.initToolButton = function(listener, iconName, name, tool) {
    this.initPaletteButton(listener);
    this.fTool = tool;
    this.fName = name;
    this.fIconName = iconName;
    this.created = false;
}
//****************
// createSVGContent 
//****************
ToolButton.prototype.createSVGContent = function() {
    this.createSVGContentToolButton();
}
//****************
// createSVGContent 
//****************
ToolButton.prototype.createSVGContentToolButton = function() {
    this.createSVGContentPaletteButton()
    var w = 24;
    var h = 24;
    this.contentg = this.getGraphics();
    var m1 = this.contentg.drawImage(0, 0, w, h, this.fIconName + "1.gif");
    var m2 = this.contentg.drawImage(0, 0, w, h, this.fIconName + "2.gif");
    var m3 = this.contentg.drawImage(0, 0, w, h, this.fIconName + "3.gif");
    m1.setVisibility(true);
    m2.setVisibility(false);
    m3.setVisibility(false);
    this.fIcon = new PaletteIcon(new Dimension(w, h), m1, m2, m3);
}
//*************
// tool
//*************
/* Tool */
ToolButton.prototype.tool = function() {
    return this.fTool;
}
//*************
// name
//*************
/* String */
ToolButton.prototype.name = function() {
    return this.fName;
}
//*************
// attributeValue
//*************
/* Object */
ToolButton.prototype.attributeValue = function() {
    return this.tool();
}
//*************
// getMinimumSize
//*************
/* Dimension */
ToolButton.prototype.getMinimumSize = function() {
    return new Dimension(this.fIcon.getWidth(), this.fIcon.getHeight());
}
//*************
// getPreferredSize
//*************
/* Dimension */
ToolButton.prototype.getPreferredSize = function() {
    return new Dimension(this.fIcon.getWidth(), this.fIcon.getHeight());
}
//*************
// paintBackground
//*************
ToolButton.prototype.paintBackground = function( /* Graphics */ g) {}
//*************
// paintBackground
//*************
ToolButton.prototype.paintNormal = function( /* Graphics */ g) {
    this.fIcon.normal().setVisibility(true);
    this.fIcon.pressed().setVisibility(false);
    this.fIcon.selected().setVisibility(false);
}
//*************
// paintBackground
//*************
ToolButton.prototype.paintPressed = function( /* Graphics */ g) {
    this.fIcon.normal().setVisibility(false);
    this.fIcon.pressed().setVisibility(true);
    this.fIcon.selected().setVisibility(false);
}
//*************
// paintBackground
//*************
ToolButton.prototype.paintSelected = function( /* Graphics */ g) {
    this.fIcon.selected().setVisibility(true);
    this.fIcon.normal().setVisibility(false);
    this.fIcon.pressed().setVisibility(false);
}