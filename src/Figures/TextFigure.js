/**
 * Hotdraw.js : TextFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A text figure.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

TextFigure.prototype = new AttributeFigure(); // implements FigureChangeListener, TextHolder 

function TextFigure() {
    var argv = TextFigure.arguments;
    var argc = TextFigure.length;
    this.className = "TextFigure";
    /* int */
    this.fOriginX = 0;
    /* int */
    this.fOriginY = 0;
    // cache of the TextFigure's size
    /* boolean */
    this.fSizeIsDirty = true;
    /* int */
    this.fWidth = 0;
    /* int */
    this.fHeight = 0;
    /* String */
    this.fText = "";
    /* boolean */
    this.fIsReadOnly = false;
    /* Figure */
    this.fObservedFigure = null;
    /* OffsetLocator */
    this.fLocator = null;
    /* String */
    this.fgCurrentFontName = "Helvetica";
    /* int */
    this.fgCurrentFontSize = 10;
    /* int */
    this.fgCurrentFontStyle = "Normal";
    /* Font */
    this.fFont = this.createCurrentFont();
    if (argv.length > 0) this.initTextFigure();
}
//*************
// initTextFigure
//*************
TextFigure.prototype.initTextFigure = function() {
    this.initAttributeFigure();
    this.setAttribute("FrameColor", "none");
    this.setAttribute("FillColor", "black");
}
//*************
// moveBy
//*************
TextFigure.prototype.moveBy = function(x, y) {
    this.willChange();
    this.basicMoveBy(x, y);
    if (this.fLocator != null) this.fLocator.moveBy(x, y);
    this.changed();
}
//*************
// basicMoveBy
//*************
TextFigure.prototype.basicMoveBy = function(x, y) {
    this.fOriginX += x;
    this.fOriginY += y;
}
//*************
// basicDisplayBox
//*************
TextFigure.prototype.basicDisplayBox = function( /* Point */ newOrigin, /* Point */ newCorner) {
    this.fOriginX = newOrigin.x;
    this.fOriginY = newOrigin.y;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* gRectangle */
TextFigure.prototype.ret_displayBox = function() {
    /* Dimension */
    var extent = this.textExtent();
    return new gRectangle(this.fOriginX, this.fOriginY, extent.width, extent.height);
}
//*************
// textDisplayBox
//*************
/* Rectangle */
TextFigure.prototype.textDisplayBox = function() {
    return this.displayBox();
}
//*************
// Tests whether this figure is read only.
//*************
/* boolean */
TextFigure.prototype.readOnly = function() {
    return this.fIsReadOnly;
}
//*************
// Sets the read only status of the text figure.
//*************
TextFigure.prototype.setReadOnly = function( /* boolean */ isReadOnly) {
    this.fIsReadOnly = isReadOnly;
}
//*************
// Gets the font.
//*************
/* Font */
TextFigure.prototype.getFont = function() {
    return this.fFont;
}
//*************
// Sets the font.
//*************
TextFigure.prototype.setFont = function( /* Font */ newFont) {
    this.willChange();
    this.fFont = newFont;
    if (this.shape != null) this.shape.setFont(this.fFont);
    this.changed();
}
//*************
// Updates the location whenever the figure changes itself.
//*************
TextFigure.prototype.changed = function() {
    // super.changed(); // <======================================================= [ Not Impl.] 
    this.updateLocation();
}
//*************
// Creates the current font to be used for new text figures.
//*************
/* Font */
TextFigure.prototype.createCurrentFont = function() {
    return new Font(this.fgCurrentFontName, this.fgCurrentFontStyle, this.fgCurrentFontSize + "pt");
}
//*************
// Sets the current font name
//*************
TextFigure.prototype.setCurrentFontName = function( /* String */ name) {
    this.fgCurrentFontName = name;
}
//*************
// Sets the current font size.
//*************
TextFigure.prototype.setCurrentFontSize = function( /* int */ size) {
    this.fgCurrentFontSize = size;
}
//*************
// Sets the current font style.
//*************
TextFigure.prototype.setCurrentFontStyle = function( /* int */ style) {
    this.fgCurrentFontStyle = style;
}
//*************
// A text figure understands the "FontSize", "FontStyle", and "FontName" attributes.
//*************
/* Object! or not */
TextFigure.prototype.getAttribute = function( /* String */ name) {
    /* Font */
    var font = this.getFont();
    if (name == "FontSize") return font.getSize();
    if (name == "FontStyle") return font.getNamedStyle();
    if (name == "FontName") return font.getName();
    return this.getAttributeAttributeFigure(name);
}
//*************
// A text figure understands the "FontSize", "FontStyle", and "FontName" attributes.
//*************
TextFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    /* Font */
    var font = this.getFont();
    if (name == "FontSize") this.setFont(new Font(font.getName(), font.getNamedStyle(), parseInt(value)));
    else if (name == "FontStyle") {
        font.setStyle(parseInt(value));
        this.setFont(new Font(font.getName(), font.getNamedStyle(), font.getSize()));
    } else if (name == "FontName") this.setFont(new Font(value, font.getNamedStyle(), font.getSize()));
    else this.setAttributeAttributeFigure(name, value);
}
//*************
// Gets the text shown by the text figure.
//*************
/* String */
TextFigure.prototype.getText = function() {
    return this.fText;
}
//*************
// Sets the text shown by the text figure.
//*************
TextFigure.prototype.setText = function( /* String */ newText) {
    if (newText == undefined || newText == null) return;
    if (newText != this.fText) {
        this.willChange();
        this.fText = newText;
        if (this.shape != null) this.shape.setText(newText);
        this.changed();
    }
}
//*************
// Tests whether the figure accepts typing.
//*************
TextFigure.prototype.acceptsTyping = function() {
    return !this.fIsReadOnly;
}
//*************
// createSVGContent
//*************
TextFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawText(r.x, r.y, this.fText);
    this.shape.setToBaseLine();
    this.updateShapeAttributes();
}
//*************
// draw
//*************
TextFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawTextFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
TextFigure.prototype.drawTextFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the text figure
    this.shape.setFont(this.getFont());
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
}
//*************
// textExtent
//*************
/* Dimension */
TextFigure.prototype.textExtent = function() {
    if (this.shape == null) return new Dimension(0, 0);
    this.fWidth = this.shape.getStringWidth();
    this.fHeight = this.shape.getStringHeight();
    return new Dimension(this.fWidth, this.fHeight);
}
//*************
// markDirty
//*************
TextFigure.prototype.markDirty = function() {
    this.fSizeIsDirty = true;
}
//*************
// Gets the number of columns to be overlaid when the figure is edited.
//*************
/* int */
TextFigure.prototype.overlayColumns = function() {
    /* int */
    var len = this.getText().length;
    var columns = 20;
    if (len != 0) columns = this.getText().length + 3;
    return columns;
}
//*************
// handles
//*************
/* Vector */
TextFigure.prototype.handles = function() {
    /* Vector */
    var handles = new Vector();
    handles.addElement(new NullHandle(this, relativeLocator.northWest()));
    handles.addElement(new NullHandle(this, relativeLocator.northEast()));
    handles.addElement(new NullHandle(this, relativeLocator.southEast()));
    handles.addElement(new FontSizeHandle(this, relativeLocator.southWest()));
    return handles;
}
//*************
// connect
//*************
TextFigure.prototype.connect = function( /* Figure */ figure) {
    /*  <==============================================================[ NOT IMPL]
        if (fObservedFigure != null)
            fObservedFigure.removeFigureChangeListener(this);

        fObservedFigure = figure;
        fLocator = new OffsetLocator(figure.connectedTextLocator(this));
        fObservedFigure.addFigureChangeListener(this);
        updateLocation();
 
*/
}
//*************
// figureChanged
//*************
TextFigure.prototype.figureChanged = function( /* FigureChangeEvent */ e) {
    this.updateLocation();
}
//*************
// figureRemoved
//*************
TextFigure.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestRemove(new FigureChangeEvent(this));
}
TextFigure.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {;
}
TextFigure.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {;
}
TextFigure.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {;
}
//*************
// Updates the location relative to the connected figure. The TextFigure is centered around the located point.
//*************
TextFigure.prototype.updateLocation = function() {
    /*  <==============================================================[ NOT IMPL]

        if (fLocator != null) {
            Point p = fLocator.locate(fObservedFigure);
            p.x -= size().width/2 + fOriginX;
            p.y -= size().height/2 + fOriginY;

            if (p.x != 0 || p.y != 0) {
                willChange();
                basicMoveBy(p.x, p.y);
                changed();
            }
        }
*/
}
//*************
// release
//*************
TextFigure.prototype.release = function() {
    this.abstractFigureRelease();
    if (this.fObservedFigure != null) this.fObservedFigure.removeFigureChangeListener(this);
}
//*************
// Disconnects the text figure.
//*************
TextFigure.prototype.disconnect = function() {
    /*  <==============================================================[ NOT IMPL]

       fObservedFigure.removeFigureChangeListener(this);
        fObservedFigure = null;
        fLocator = null;
 */
}
//*************
// NOT IMPLEMENTED  
//*************
TextFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
TextFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// clone 
//*************
TextFigure.prototype.clone = function() {
    return new TextFigure(true);
}
//*************
// serialize
//*************
/* String */
TextFigure.prototype.serialize = function() {
    return this.serializeTextFigure();
}
//*************
// serializeTextFigure
//*************
/* String */
TextFigure.prototype.serializeTextFigure = function() {
    var ret = new Hashtable;
    ret.put("fontName", this.getAttribute("FontName"));
    ret.put("fontSize", this.getAttribute("FontSize"));
    ret.put("fontStyle", this.getAttribute("FontStyle"));
    if (this.getText() != null) ret.put("text", this.getText());
    return this.serializeAttributeFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
TextFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeTextFigure(str);
}
//*************
// deserializeTextFigure
//*************
/* Hashtable */
TextFigure.prototype.deserializeTextFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAttributeFigure(str);
    if (inp.containsKey("text")) this.setText(inp.get("text"));
    else this.setText(" ");
    this.setFont(new Font(inp.get("fontName"), inp.get("fontStyle"), inp.get("fontSize")));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
TextFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFTextFigure(contextUri, command);
}
//*************
// serializeAsRDFTextFigure [NEW: 20-3-2006]
//*************
/* String */
TextFigure.prototype.serializeAsRDFTextFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = history + " svg:font-family \"" + this.getAttribute("FontName") + "\" . ";
    content += history + " svg:font-style \"" + this.getAttribute("FontStyle") + "\" . ";
    content += history + " svg:font-size \"" + this.getAttribute("FontSize") + "\" . ";
    if (this.getText() != null) content += history + " svg:content \"" + this.getText() + "\" . ";
    content = this.serializeAsRDFAttributeFigure(contextUri, command) + content;
    return content;
}