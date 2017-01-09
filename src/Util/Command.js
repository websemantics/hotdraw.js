/**
 * Hotdraw.js : Command
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Commands encapsulate an action to be executed. Commands have a name and can 
 * be used in conjunction with Command enabled ui components.
 * Command is a simple instance of the command pattern without undo support.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     19th February 2005
 * @package   websemantics/hotdraw/util
 */

function Command( /* String */ name) {
    var argv = Command.arguments;
    var argc = Command.length;
    this.className = "Command";
    /* String */
    this.fName = null;
    if (argv.length > 0) this.initCommand(name);
}
//*************
// Constructs a command with the given name.
//*************
Command.prototype.initCommand = function(name) {
    this.fName = name;
}
//*************
//  Executes the command.
//*************
Command.prototype.execute = function() {}
//*************
//  Tests if the command can be executed.
//*************
/* boolean */
Command.prototype.isExecutable = function() {
    return true;
}
//*************
//  Gets the command name.
//*************
/* String */
Command.prototype.name = function() {
    return this.fName;
}
//*************
// toString
//*************
/* String */
Command.prototype.toString = function() {
    return this.className + " [ name=" + this.fName + " ]";
}