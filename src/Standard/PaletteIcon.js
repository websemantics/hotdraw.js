/**
 * Hotdraw.js : PaletteIcon
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A three state icon that can be used in Palettes.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     11th February 2005 
 * @package   websemantics/hotdraw/standard
 */

// PaletteIcon.prototype= new Object();  

function PaletteIcon( /* Dimension */ size, /* Image */ normal, /* Image */ pressed, /* Image */ selected) {
    var argv = PaletteIcon.arguments;
    var argc = PaletteIcon.length;
    this.className = "PaletteIcon";
    /*Image */
    this.fNormal = null;
    /*Image */
    this.fPressed = null;
    /*Image */
    this.fSelected = null;
    /*Dimension */
    this.fName = null;
    if (argv.length > 0) this.initPaletteIcon(size, normal, pressed, selected);
}
//*************
// Constructs a tool for the given view.
//*************
PaletteIcon.prototype.initPaletteIcon = function(size, normal, pressed, selected) {
    this.fSize = size;
    this.fNormal = normal;
    this.fPressed = pressed;
    this.fSelected = selected;
}
//*************
// normal
//*************
/* Image */
PaletteIcon.prototype.normal = function() {
    return this.fNormal;
}
//*************
// pressed
//*************
/* Image */
PaletteIcon.prototype.pressed = function() {
    return this.fPressed;
}
//*************
// selected
//*************
/* Image */
PaletteIcon.prototype.selected = function() {
    return this.fSelected;
}
//*************
// getWidth
//*************
/* int */
PaletteIcon.prototype.getWidth = function() {
    return this.fSize.width;
}
//*************
// getHeight
//*************
/* int */
PaletteIcon.prototype.getHeight = function() {
    return this.fSize.height;
}