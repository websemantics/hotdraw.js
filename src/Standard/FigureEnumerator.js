/**
 * Hotdraw.js : FigureEnumerator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An Enumeration for a Vector of Figures.
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005 
 * @package   websemantics/hotdraw/standard
 */

FigureEnumerator.prototype = new FigureEnumeration();

function FigureEnumerator( /* Vector */ v) { /* implements FigureEnumeration */
    var argv = FigureEnumerator.arguments;
    var argc = FigureEnumerator.length;
    this.className = "FigureEnumerator";
    /* Vector -Instead of -Enumeration */
    this.fEnumeration = null;;
    if (argv.length > 0) this.initFigureEnumerator(v);
}
//*************
// initFigureEnumerator
//*************
FigureEnumerator.prototype.initFigureEnumerator = function(v) {
    this.fEnumeration = v.elements();
}
//*************
// Returns true if the enumeration contains more elements; false if its empty.
//*************
/* boolean */
FigureEnumerator.prototype.hasMoreElements = function() {
    return this.fEnumeration.hasMoreElements();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Object */
FigureEnumerator.prototype.nextElement = function() {
    return this.fEnumeration.nextElement();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Figure */
FigureEnumerator.prototype.nextFigure = function() {
    return this.fEnumeration.nextElement();
}