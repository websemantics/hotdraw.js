/**
 * Hotdraw.js : GroupCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to delete the selection.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     19th February 2005
 * @package   websemantics/hotdraw/figures
 */

GroupCommand.prototype = new FigureTransferCommand();

function GroupCommand( /* String */ name, /* DrawingView */ view) {
    var argv = GroupCommand.arguments;
    var argc = GroupCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initGroupCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
GroupCommand.prototype.initGroupCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
GroupCommand.prototype.execute = function() {
    /* Vector */
    var selected = this.fView.selectionZOrdered();
    /* Drawing */
    var drawing = this.fView.drawing();
    if (selected.size() > 0) {
        this.fView.clearSelection();
        drawing.orphanAll(selected);
        /* GroupFigure */
        var group = new GroupFigure();
        group.addAll(selected);
        this.fView.addToSelection(drawing.add(group));
    }
}
//*************
//  isExecutable
//*************
GroupCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}