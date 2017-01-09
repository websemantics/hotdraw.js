/**
 * Hotdraw.js : PaletteButton
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A palette button is a three state button. The states are normal
 * pressed and selected. It uses to the palette listener interface
 * to notify about state changes.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     11th February 2005
 * @package   websemantics/hotdraw/util
 */

var NORMAL = 1;
var PRESSED = 2;
var SELECTED = 3;

PaletteButton.prototype = new Canvas(); //  implements MouseListener, MouseMotionListener 

function PaletteButton( /* PaletteListener */ listener) {
    var argv = PaletteButton.arguments;
    var argc = PaletteButton.length;
    this.className = "PaletteButton";
    /* PaletteListener */
    this.fListener = null;
    /* int */
    this.fState = 0;
    /* int */
    this.fOldState = 0;
    if (argv.length > 0) this.initPaletteButton(listener);
}
//*************
// Constructs a tool for the given view.
//*************
PaletteButton.prototype.initPaletteButton = function(listener) {
    this.initCanvas(0, 0, 24, 24);
    this.fListener = listener;
    this.fState = NORMAL;
    this.fOldState = NORMAL;
    this.addMouseMotionListener(this);
    this.addMouseListener(this);
}
//****************
// createSVGContent 
//****************
PaletteButton.prototype.createSVGContent = function() {
    this.createSVGContentPaletteButton(g);
}
//****************
// createSVGContentPaletteButton 
//****************
PaletteButton.prototype.createSVGContentPaletteButton = function() {
    this.createSVGContentCanvas();
}
//*************
// mouseDragged 
//*************
PaletteButton.prototype.mouseDragged = function( /* MouseEvent */ e) {
    //if (this.contains(e.getX(),e.getY()))
    this.fState = PRESSED;
    //   else
    //  this.fState = this.fOldState;
    this.refresh();
}
//*************
// mouseMoved 
//*************
PaletteButton.prototype.mouseMoved = function( /* MouseEvent */ e) {
    this.fListener.paletteUserOver(this, true);
}
//*************
// mouseClicked 
//*************
PaletteButton.prototype.mouseClicked = function( /* MouseEvent */ e) {}
//*************
// mousePressed 
//*************
PaletteButton.prototype.mousePressed = function( /* MouseEvent */ e) {
    this.fOldState = this.fState;
    this.fState = PRESSED;
    this.refresh();
}
//*************
// mouseReleased 
//*************
PaletteButton.prototype.mouseReleased = function( /* MouseEvent */ e) {
    this.fState = this.fOldState;
    //if (this.contains(e.getX(),e.getY()))  [NO NEED!]
    this.fListener.paletteUserSelected(this);
    this.refresh();
}
//*************
// mouseEndDragged 
//*************
PaletteButton.prototype.mouseEndDragged = function( /* MouseEvent */ e) {
    this.fState = PRESSED;
    this.mouseReleased();
}
//*************
// mouseEntered 
//*************
PaletteButton.prototype.mouseEntered = function( /* MouseEvent */ e) {}
//*************
// mouseExited 
//*************
PaletteButton.prototype.mouseExited = function( /* MouseEvent */ e) {
    if (this.fState == PRESSED) this.mouseDragged(e);
    this.fListener.paletteUserOver(this, false);
}
PaletteButton.prototype.paintBackground = function( /* Graphics */ g) {;
}
PaletteButton.prototype.paintNormal = function( /* Graphics */ g) {;
}
PaletteButton.prototype.paintPressed = function( /* Graphics */ g) {;
}
PaletteButton.prototype.paintSelected = function( /* Graphics */ g) {;
}
//*************
// value 
//*************
/* Object */
PaletteButton.prototype.value = function() {
    return null;
}
//*************
// name 
//*************
/* String */
PaletteButton.prototype.name = function() {
    return "";
}
//*************
// reset 
//*************
PaletteButton.prototype.reset = function() {
    this.fState = NORMAL;
    this.refresh();
}
//*************
// select 
//*************
PaletteButton.prototype.select = function() {
    this.fState = SELECTED;
    this.refresh();
}
//*************
// update 
//*************
PaletteButton.prototype.update = function( /* Graphics */ g) {
    this.refresh(g);
}
//*************
// update 
//*************
PaletteButton.prototype.refresh = function( /* Graphics */ g) {
    this.paintBackground(g);
    switch (this.fState) {
        case PRESSED:
            this.paintPressed(g);
            break;
        case SELECTED:
            this.paintSelected(g);
            break;
        case NORMAL:
        default:
            this.paintNormal(g);
            break;
    }
}