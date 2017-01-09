/**
 * Hotdraw.js : UngroupCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to ungroup the selection.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

UngroupCommand.prototype = new FigureTransferCommand();

function UngroupCommand( /* String */ name, /* DrawingView */ view) {
    var argv = UngroupCommand.arguments;
    var argc = UngroupCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initUngroupCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
UngroupCommand.prototype.initUngroupCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
UngroupCommand.prototype.execute = function() {
    /* FigureEnumeration */
    var selection = this.fView.selectionElements();
    this.fView.clearSelection();
    while (selection.hasMoreElements()) {
        /* Figure */
        var selected = selection.nextFigure();
        /* Figure */
        var group = this.fView.drawing().orphan(selected);
        /* FigureEnumeration */
        var k = group.decompose();
        while (k.hasMoreElements()) {
            var f = k.nextFigure();
            this.fView.addToSelection(this.fView.add(f));
        }
    }
}
//*************
//  isExecutable
//*************
UngroupCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}