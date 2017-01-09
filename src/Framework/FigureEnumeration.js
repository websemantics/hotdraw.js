/**
 * Hotdraw.js : FigureEnumeration
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Interface for FigureEnumerations that access Figures.
 * It provides a method nextFigure, that hides the down casting from client code.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

FigureEnumeration.prototype = new Enumeration();

function FigureEnumeration() {
    var argv = FigureEnumeration.arguments;
    var argc = FigureEnumeration.length;
    this.className = "FigureEnumeration";
    if (argv.length > 0) this.initFigureEnumeration();
}
//*************
// initFigureEnumeration
//*************
FigureEnumeration.prototype.initFigureEnumeration = function() {}
/* Figure */
FigureEnumeration.prototype.nextFigure = function() {}