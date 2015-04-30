/**
 * Hotdraw.js : DeleteCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to delete the selection.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005
 * @package   websemantics/hotdraw/standard
 */

DeleteCommand.prototype = new FigureTransferCommand();

function DeleteCommand( /* String */ name, /* DrawingView */ view) {
    var argv = DeleteCommand.arguments;
    var argc = DeleteCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initDeleteCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
DeleteCommand.prototype.initDeleteCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
DeleteCommand.prototype.execute = function() {
    this.deleteSelection();
}
//*************
//  isExecutable
//*************
DeleteCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}