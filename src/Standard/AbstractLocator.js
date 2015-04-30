/**
 * Hotdraw.js : AbstractLocator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * AbstractLocator provides default implementations for the Locator interface.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005
 * @package   websemantics/hotdraw/standard
 */

AbstractLocator.prototype = new Locator(); // implements Locator, Storable, Cloneable

function AbstractLocator() {
    this.className = "AbstractLocator";
}
//*************
// clone.
//*************
/* Object */
AbstractLocator.prototype.clone = function() {
    return null;
}
//*************
// Stores the arrow tip to a StorableOutput.
//*************
/* Object */
AbstractLocator.prototype.write = function( /* StorableOutput */ dw) {
    return null;
}
//*************
// Stores the arrow tip to a StorableOutput.
//*************
/* Object */
AbstractLocator.prototype.read = function( /* StorableInput */ dr) {
    return null;
}