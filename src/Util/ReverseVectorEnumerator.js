/**
 * Hotdraw.js : ReverseVectorEnumerator [implementation of Enumeration interface]
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An Enumeration that enumerates a vector back (size-1) to front (0).
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005
 * @package   websemantics/hotdraw/util
 */

ReverseVectorEnumerator.prototype = new Enumeration();

function ReverseVectorEnumerator( /* Vector */ v) { /* implements Enumeration */
    var argv = ReverseVectorEnumerator.arguments;
    var argc = ReverseVectorEnumerator.length;
    this.className = "ReverseVectorEnumerator";
    this.vector = new Vector();
    this.count = 0;
    if (argv.length > 0) this.initReverseVectorEnumerator(v);
}
//*************
// initReverseVectorEnumerator
//*************
ReverseVectorEnumerator.prototype.initReverseVectorEnumerator = function(v) {
    this.vector = v;
    this.count = this.vector.size() - 1;
}
//*************
// Returns true if the Renumeration contains more elements; false if its empty.
//*************
/* boolean */
ReverseVectorEnumerator.prototype.hasMoreElements = function() {
    return this.count >= 0;
}
//*************
// Returns the next element of the Renumeration.
//*************
/* Object */
ReverseVectorEnumerator.prototype.nextElement = function() {
    if (this.count >= 0) {
        return this.vector.elementAt(this.count--);
    }
}