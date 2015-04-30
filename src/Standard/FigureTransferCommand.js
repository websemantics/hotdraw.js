/**
 * Hotdraw.js : FigureTransferCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Common base clase for commands that transfer figures between 
 * a drawing and the clipboard.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

FigureTransferCommand.prototype = new Command();

function FigureTransferCommand( /* String */ name, /* DrawingView */ view) {
    var argv = FigureTransferCommand.arguments;
    var argc = FigureTransferCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initFigureTransferCommand(name, view);
}
//*************
// Constructs a drawing command.
//  @param name the command name
//  @param view the target view
//*************
FigureTransferCommand.prototype.initFigureTransferCommand = function(name, view) {
    this.initCommand(name);
    this.fView = view;
}
//*************
//  Deletes the selection from the drawing.
//*************
FigureTransferCommand.prototype.deleteSelection = function() {
    this.fView.removeAll(this.fView.selection());
    this.fView.clearSelection();
    this.fView.drawAll();
}
//*************
//  Copies the selection to the clipboard.
//*************
FigureTransferCommand.prototype.copySelection = function() {
    /* FigureSelection */
    var selection = this.fView.getFigureSelection();
    // Clipboard.getClipboard().setContents(selection);
}
//*************
// Inserts a vector of figures and translates them by the given offset.
//*************
FigureTransferCommand.prototype.insertFigures = function( /* Vector */ figures, /* int */ dx, /* int */ dy) {
    /* FigureEnumeration */
    var e = new FigureEnumerator(figures);
    while (e.hasMoreElements()) {
        /* Figure */
        var figure = e.nextFigure();
        figure.moveBy(dx, dy);
        figure = this.fView.add(figure);
        this.fView.addToSelection(figure);
    }
}