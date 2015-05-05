/**
 * Hotdraw.js : Locator {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Locators can be used to locate a position on a figure.Locator encapsulates 
 * the strategy to locate a handle on a figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Locator() { // extends Storable, Serializable, Cloneable
    this.className = "Locator";
}
//*************
// Locates a position on the passed figure.
//*************
/* Point */
Locator.prototype.locate = function( /* Figure */ owner) {;
}