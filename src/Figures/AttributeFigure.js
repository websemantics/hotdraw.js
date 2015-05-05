/**
 * Hotdraw.js : AttributeFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A figure that can keep track of an open ended set of attributes.
 * The attributes are stored in a dictionary implemented by FigureAttributes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     10th January 2005
 * @package   websemantics/hotdraw/figures
 */

AttributeFigure.prototype = new AbstractFigure();

function AttributeFigure() { /* implements Figure */
    var argv = AttributeFigure.arguments;
    var argc = AttributeFigure.length;
    this.className = "AttributeFigure";
    // The default attributes associated with a figure. 
    // If a figure doesn't have an attribute set, a default value from this shared attribute set is returned.
    /* FigureAttributes */
    this.fgDefaultAttributes = null;
    /* FigureAttributes */
    this.fAttributes = null;
    if (argv.length > 0) this.initAttributeFigure();
}
//*************
// initAttributeFigure
//*************
AttributeFigure.prototype.initAttributeFigure = function() {
    this.initAbstractFigure();
}
//*************
// draw
//*************
AttributeFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
AttributeFigure.prototype.drawAttributeFigure = function( /* Graphics */ g) {
    this.drawAbstractFigure(g);
}
//*************
// Gets the fill color of a figure. This is a convenience method.
//*************
/* Color */
AttributeFigure.prototype.getFillColor = function() {
    return this.getAttribute("FillColor");
}
//*************
// Gets the frame color of a figure. This is a convenience method.
//*************
/* Color */
AttributeFigure.prototype.getFrameColor = function() {
    return this.getAttribute("FrameColor");
}
//*************
// figure attributes
//*************
AttributeFigure.prototype.initializeAttributes = function() {
    this.fgDefaultAttributes = new FigureAttributes();
    this.fgDefaultAttributes.set("Opacity", 1);
    this.fgDefaultAttributes.set("FrameWidth", 1);
    this.fgDefaultAttributes.set("FrameColor", "black");
    this.fgDefaultAttributes.set("FillColor", (new Color(0x70DB93)).getRGBAsString()); // returns => rgb(112,219,147)
    this.fgDefaultAttributes.set("TextColor", "black");
    this.fgDefaultAttributes.set("ArrowMode", 0);
    this.fgDefaultAttributes.set("FontName", "Helvetica");
    this.fgDefaultAttributes.set("FontSize", 12);
    this.fgDefaultAttributes.set("FontStyle", (new Font()).PLAIN);
}
//*************
// Gets a the default value for a named attribute
//*************
/* Object */
AttributeFigure.prototype.getDefaultAttribute = function( /* String */ name) {
    if (this.fgDefaultAttributes == null) this.initializeAttributes();
    return this.fgDefaultAttributes.get(name);
}
//*************
// Returns the named attribute or null if a a figure doesn't have an attribute.
//
// All figures support the attribute names FillColor and FrameColor
//*************
/* Object */
AttributeFigure.prototype.getAttribute = function( /* String */ name) {
    return this.getAttributeAttributeFigure(name);
}
//*************
// Returns the named attribute or null if a a figure doesn't have an attribute.
//
// All figures support the attribute names FillColor and FrameColor
//*************
/* Object */
AttributeFigure.prototype.getAttributeAttributeFigure = function( /* String */ name) {
    if (this.fAttributes != null) {
        if (this.fAttributes.hasDefined(name)) return this.fAttributes.get(name);
    }
    return this.getDefaultAttribute(name);
}
//*************
// Sets the named attribute to the new value
//*************
AttributeFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    this.setAttributeAttributeFigure(name, value);
}
//*************
// Sets the named attribute to the new value
//*************
AttributeFigure.prototype.setAttributeAttributeFigure = function( /* String */ name, /* Object */ value) {
    if (this.fAttributes == null) this.fAttributes = new FigureAttributes();
    this.fAttributes.set(name, value);
    this.updateShapeAttributes();
    this.changed();
}
//*************
// Update the figure attributes (i.e. color, strokeWidth, etc)
//*************
AttributeFigure.prototype.updateShapeAttributes = function() {
    this.updateShapeAttributesAttributeFigure();
}
//*************
// updateShapeAttributesAttributeFigure
//*************
AttributeFigure.prototype.updateShapeAttributesAttributeFigure = function() {
    if (this.isCreated()) this.shape.setColor(this.getAttribute("FillColor"));
    if (this.isCreated()) this.shape.setStrokeColor(this.getAttribute("FrameColor"));
    if (this.isCreated()) this.shape.setOpacity(this.getAttribute("Opacity"));
    if (this.isCreated()) this.shape.setStrokeWidth(this.getAttribute("FrameWidth"));
}
//*************
// Stores the Figure to a StorableOutput.
//*************
AttributeFigure.prototype.write = function( /* StorableOutput */ dw) {
    // Not Implemented
}
//*************
// Reads the Figure from a StorableInput.
//*************
AttributeFigure.prototype.read = function( /* StorableInput */ dr) {
    // Not Implemented
}
//*************
// serialize
//*************
/* String */
AttributeFigure.prototype.serialize = function() {
    return this.serializeAttributeFigure();
}
//*************
// serializeAttributeFigure
//*************
/* String */
AttributeFigure.prototype.serializeAttributeFigure = function() {
    var ret = new Hashtable;
    ret.put("fillColor", this.getAttribute("FillColor"));
    ret.put("frameColor", this.getAttribute("FrameColor"));
    ret.put("frameWidth", this.getAttribute("FrameWidth"));
    ret.put("opacity", this.getAttribute("Opacity"));
    return this.serializeAbstractFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
AttributeFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeAttributeFigure(str);
}
//*************
// deserializeAttributeFigure
//*************
/* Hashtable */
AttributeFigure.prototype.deserializeAttributeFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAbstractFigure(str);
    this.setAttribute("FillColor", inp.get("fillColor"));
    this.setAttribute("FrameColor", inp.get("frameColor"));
    this.setAttribute("FrameWidth", inp.get("frameWidth"));
    this.setAttribute("Opacity", inp.get("opacity"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
AttributeFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFAttributeFigure(contextUri, command);
}
//*************
// serializeAsRDFAttributeFigure [NEW: 17-3-2006]
//*************
/* String */
AttributeFigure.prototype.serializeAsRDFAttributeFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = '';
    content += history + " svg:fill \"" + this.getAttribute("FillColor") + "\" . ";
    content += history + " svg:stroke \"" + this.getAttribute("FrameColor") + "\" . ";
    content += history + " svg:stroke-width " + this.getAttribute("FrameWidth") + " . ";
    content += history + " svg:opacity " + this.getAttribute("Opacity") + " . ";
    content = this.serializeAsRDFAbstractFigure(contextUri, command) + content;
    return content;
}