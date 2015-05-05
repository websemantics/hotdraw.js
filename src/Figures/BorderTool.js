/**
 * Hotdraw.js : BorderTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * BorderTool decorates the clicked figure with a BorderDecorator.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2005 
 * @package   websemantics/hotdraw/figures
 */

BorderTool.prototype = new ActionTool();

function BorderTool( /* DrawingView */ itsView) {
    var argv = BorderTool.arguments;
    var argc = BorderTool.length;
    this.className = "BorderTool";
    if (argv.length > 0) this.initBorderTool(itsView);
}
//*************
// Constructs a tool for the given view.
//*************
BorderTool.prototype.initBorderTool = function(itsView) {
    this.initActionTool(itsView);
}
//*************
// Performs an action with the touched figure.
//*************
BorderTool.prototype.action = function( /* Figure */ figure) {
    var border = new BorderDecorator(figure);
    this.drawing().replace(figure, border);
}