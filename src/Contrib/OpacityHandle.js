/**
 * Hotdraw.js : OpacityHandle
 *
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     9th August 2005
 * @package   websemantics/hotdraw/contrib
 */

OpacityHandle.prototype = new LocatorHandle();

function OpacityHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = OpacityHandle.arguments;
    var argc = OpacityHandle.length;
    this.className = "OpacityHandle";
    
    /* int */
    this.opacity = 0;
    /* int */
    this.min = -100;
    /* int */
    this.max = 100;
    if (argv.length > 0) this.initOpacityHandle(owner, locator);
}
//*************
// Initializes 
//*************
OpacityHandle.prototype.initOpacityHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
    this.color = "Teal";
}
//*************
// invokeStart
//*************
OpacityHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    /* TextFigure */
    var owner = this.owner();
    this.opacity = 0;
}
//*************
// Tracks a step of the interaction.
//*************
OpacityHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* TextFigure */
    var owner = this.owner();
    /* int */
    var newOpacity = this.opacity + y - anchorY;
    if (newOpacity > this.max) newOpacity = this.max;
    if (newOpacity < this.min) newOpacity = this.min;
    newOpacity = (newOpacity - this.min) / (this.max - this.min)
    owner.setOpacity(newOpacity);
}