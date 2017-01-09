/**
 * Hotdraw.js : AbstractLocator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * AbstractLocator provides default implementations for the Locator interface.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
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