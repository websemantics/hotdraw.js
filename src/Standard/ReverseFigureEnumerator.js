/**
 * Hotdraw.js : ReverseFigureEnumerator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An Enumeration that enumerates a vector of figures back (size-1) to front (0).
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005 
 * @package   websemantics/hotdraw/standard
 */

ReverseFigureEnumerator.prototype = new FigureEnumeration();

function ReverseFigureEnumerator( /* Vector */ v) { /* implements FigureEnumeration */
    var argv = ReverseFigureEnumerator.arguments;
    var argc = ReverseFigureEnumerator.length;
    this.className = "ReverseFigureEnumerator";
    /* ReverseVectorEnumerator */
    this.fEnumeration = null;;
    if (argv.length > 0) this.initReverseFigureEnumerator(v);
}
//*************
// initReverseFigureEnumerator
//*************
ReverseFigureEnumerator.prototype.initReverseFigureEnumerator = function(v) {
    this.fEnumeration = new ReverseVectorEnumerator(v);
}
//*************
// Returns true if the enumeration contains more elements; false if its empty.
//*************
/* boolean */
ReverseFigureEnumerator.prototype.hasMoreElements = function() {
    return this.fEnumeration.hasMoreElements();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Object */
ReverseFigureEnumerator.prototype.nextElement = function() {
    return this.fEnumeration.nextElement();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Figure */
ReverseFigureEnumerator.prototype.nextFigure = function() {
    return this.fEnumeration.nextElement();
}