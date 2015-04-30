/**
 * Hotdraw.js : ImageFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Figure that shows an Image.
 * Images shown by an image figure are shared by using the Iconkit.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */

ImageFigure.prototype = new RectangleFigure();

function ImageFigure( /* Point */ origin, /* Point */ corner, /* String */ fileName) {
    var argv = ImageFigure.arguments;
    var argc = ImageFigure.length;
    this.className = "ImageFigure";
    /* String */
    this.fFileName = null;
    /* String */
    this.preserveAspectRatio = "none";
    if (argv.length > 0) this.initImageFigure(origin, corner, fileName);
}
//*************
// initImageFigure
// 
// Forms:
// ======
// (1) ImageFigure();
// (2) ImageFigure(Point origin,Point corner);
//*************
ImageFigure.prototype.initImageFigure = function(origin, corner, fileName) {
    this.initRectangleFigure(origin, corner);
    if (fileName == undefined) this.fFileName = hdImageURL;
    else this.fFileName = fileName;
}
//*************
// createSVGContent
//*************
ImageFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawImage(r.x, r.y, r.width, r.height, this.fFileName);
    this.shape.setAttribute("preserveAspectRatio", this.preserveAspectRatio);
}
//*************
// getURL
//*************
ImageFigure.prototype.getURL = function() {
    return this.fFileName;
}
//*************
// getURL
//*************
ImageFigure.prototype.setURL = function( /* String */ url) {
    this.fFileName = url;
    if (this.shape != null) this.shape.changeHref(this.fFileName);
}
//*************
// clone  
//*************
ImageFigure.prototype.clone = function() {
    return new ImageFigure(new Point(0, 0), new Point(0, 0), this.fFileName);
}
//*************
// serialize
//*************
/* String */
ImageFigure.prototype.serialize = function() {
    return this.serializeImageFigure();
}
//*************
// serializeImageFigure
//*************
/* String */
ImageFigure.prototype.serializeImageFigure = function() {
    var ret = new Hashtable;
    ret.put("url", this.getURL());
    ret.put("opacity", this.getAttribute("Opacity"));
    return this.serializeAbstractFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
ImageFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeImageFigure(str);
}
//*************
// deserializeImageFigure
//*************
/* Hashtable */
ImageFigure.prototype.deserializeImageFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAbstractFigure(str);
    this.setURL(inp.get("url"));
    this.setAttribute("Opacity", inp.get("opacity"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
ImageFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFImageFigure(contextUri, command);
}
//*************
// serializeAsRDFImageFigure [NEW: 17-3-2006]
//*************
/* String */
ImageFigure.prototype.serializeAsRDFImageFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = history + " xlink:href \"" + this.getURL() + "\" . ";
    content += history + " svg:opacity " + this.getAttribute("Opacity") + " . ";
    content = this.serializeAsRDFAbstractFigure(contextUri, command) + content;
    return content;
}