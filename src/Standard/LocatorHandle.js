/**
 * Hotdraw.js : LocatorHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A LocatorHandle implements a Handle by delegating the location 
 * requests to a Locator object.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     16th February 2005 
 * @package   websemantics/hotdraw/standard
 */

LocatorHandle.prototype = new AbstractHandle();

function LocatorHandle( /* Figure */ owner, /* Locator */ l) {
    var argv = LocatorHandle.arguments;
    var argc = LocatorHandle.length;
    this.className = "LocatorHandle";
    /* Locator */
    this.fLocator = null;
    if (argv.length > 0) this.initLocatorHandle(owner, l);
}
//*************
// Initializes the LocatorHandle with the given Locator.
//*************
LocatorHandle.prototype.initLocatorHandle = function(owner, l) {
    this.initAbstractHandle(owner);
    this.fLocator = l;
}
//*************
// Locates the handle on the figure by forwarding the request to its figure.
//*************
/* Point */
LocatorHandle.prototype.locate = function() {
    return this.fLocator.locate(this.owner());
}