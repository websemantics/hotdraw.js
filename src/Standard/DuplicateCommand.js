/**
 * Hotdraw.js : DuplicateCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to duplicate the selection
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

DuplicateCommand.prototype = new FigureTransferCommand();

function DuplicateCommand( /* String */ name, /* DrawingView */ view) {
    var argv = DuplicateCommand.arguments;
    var argc = DuplicateCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initDuplicateCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
DuplicateCommand.prototype.initDuplicateCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
DuplicateCommand.prototype.execute = function() {
    alert("Not Implemented");
    /*
        var selection = this.fView.getFigureSelection();
        this.fView.clearSelection();
        var figures = selection.getData(FigureSelection.TYPE);
        insertFigures(figures, 10, 10);
        fView.checkDamage();*/
}
//*************
//  isExecutable
//*************
DuplicateCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}