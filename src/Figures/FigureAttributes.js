/**
 * Hotdraw.js : FigureAttributes
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */

function FigureAttributes() { /* extend Object and implements Cloneable, Serializable  */
    var argv = FigureAttributes.arguments;
    var argc = FigureAttributes.length;
    this.className = "FigureAttributes";
    this.fMap = new Hashtable();
    if (argv.length > 0) this.initFigureAttributes();
}
//*************
// initFigureAttributes
//*************
FigureAttributes.prototype.initFigureAttributes = function() {}
//*************
// Gets the attribute with the given name.
//*************
/* Object */
FigureAttributes.prototype.get = function( /* String */ name) {
    return this.fMap.get(name);
}
//*************
// Sets the attribute with the given name and overwrites its previous value.
//*************
FigureAttributes.prototype.set = function( /* String */ name, /* Object */ value) {
    this.fMap.put(name, value);
}
//*************
// Tests if an attribute is defined.
//*************
/* boolean */
FigureAttributes.prototype.hasDefined = function( /* String */ name) {
    return this.fMap.containsKey(name);
}
//*************
// Clones the attributes.
//*************
/* FigureAttributes */
FigureAttributes.prototype.clone = function() {
    var ret = new FigureAttributes();
    ret.fMap = this.fMap.clone();
    return ret;
}
//*************
// Read : NOT IMPLEMENTED 
//*************
FigureAttributes.prototype.read = function( /* StorableInput */ dr) {}
//*************
// WRITE : NOT IMPLEMENTED 
//*************
FigureAttributes.prototype.write = function( /* StorableOutput */ dw) {}