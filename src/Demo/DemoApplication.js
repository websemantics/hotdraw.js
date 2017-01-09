/**
 * Hotdraw.js : DemoApplication
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/demo
 */

DemoApplication.prototype = new DrawApplication(); // Implements DrawingViewChangeListener

function DemoApplication() {
    var argv = DemoApplication.arguments;
    var argc = DemoApplication.length;
    /* String */
    this.name = "DemoApplication";
    /* String */
    this.className = "DemoApplication";
    /* Hashtable */
    this.figures = new Hashtable();
    /* Figure */
    this._curFig = null;
    /* Window */
    this.tools = null; // This is the tools window
    /* Window */
    this.attributesWindow = null; // This is the property window.
}
//*************
// Opens the window and initializes its contents.
// Clients usually only call but don't override it.
//*************
DemoApplication.prototype.open = function(x, y, w, h) {
    this.openDemoApplication(x, y, w, h);
    this.attributesWindow = new DemoAttributes(10, 10);
    this.attributesWindow.paint();
    this.attributesWindow.hide();
}
//*************
// Creates the drawing view used in this application.  You need to override this 
// method to use a DrawingView subclass in your application. By default a standard 
// DrawingView is returned.
//*************
/* StandardDrawingView */
DrawApplication.prototype.createDrawingView = function() {
    /* Dimension */
    var d = this.getDrawingViewSize();
    return new DemoDrawingView(this, d.width, d.height);
}
//*************
// openDemoApplication
//*************
DemoApplication.prototype.openDemoApplication = function(x, y, w, h) {
    this.openDrawApplication(x, y, w, h, "SVG Hotdraw Demo v1.0: Tools,.."); // The this.tools window will be created from here onwards.
}
//*************
// Creates the tools. By default only the selection tool is added.
// Override this method to add additional tools.
// Call the inherited method to include the selection tool.
//*************
DemoApplication.prototype.createTools = function( /* Panel */ palette) {
    this.createToolsDemoApplication(palette);
}
//*************
// createToolsDemoApplication
//*************
DemoApplication.prototype.createToolsDemoApplication = function( /* Panel */ palette) {
    this.createToolsDrawApplication(palette);
    var tool;
    tool = new TextTool(this.view(), new TextFigure());
    palette.add(this.createToolButton(this.IMAGES + "TEXT", "Text Tool", tool));
    tool = new CreationTool(this.view(), new ImageFigure());
    palette.add(this.createToolButton(this.IMAGES + "IMAGE", "Image Tool", tool));
    tool = new CreationTool(this.view(), new RectangleFigure());
    palette.add(this.createToolButton(this.IMAGES + "RECT", "Rectangle Tool", tool));
    tool = new CreationTool(this.view(), new EllipseFigure());
    palette.add(this.createToolButton(this.IMAGES + "ELLIPSE", "Ellipse Tool", tool));
    tool = new CreationTool(this.view(), new RoundRectangleFigure());
    palette.add(this.createToolButton(this.IMAGES + "RRECT", "Round Rectangle Tool", tool));
    tool = new PolygonTool(this.view());
    palette.add(this.createToolButton(this.IMAGES + "POLYGON", "Polygon Tool", tool));
    tool = new CreationTool(this.view(), new LineFigure());
    palette.add(this.createToolButton(this.IMAGES + "LINE", "Line Tool", tool));
    tool = new ScribbleTool(this.view());
    palette.add(this.createToolButton(this.IMAGES + "SCRIBBL", "Scribble Tool", tool));
    tool = new BorderTool(this.view());
    palette.add(this.createToolButton(this.IMAGES + "BORDDEC", "Border Tool", tool));
    tool = new TextAreaTool(this.view(), new TextAreaDecorator());
    palette.add(this.createToolButton(this.IMAGES + "TEXTAREA", "TextArea Decorator Tool", tool));
}
//*************
// actionPerformedWindow 
//*************
DemoApplication.prototype.actionPerformed = function( /* ActionEvent */ e) {
    var src = e.source;
    var comm = e.getActionCommand();
    if (comm == "menuItemSelected") {
        switch (src.name) {
            case "Tools":
                this.tools.show();
                break;
        }
    }
}
//*************
// toString 
//*************
DemoApplication.prototype.recalc = function() {
    this.view().recalc();
    if (this.tools != null) this.tools.recalc();
    if (this.attributesWindow != null) {
        this.attributesWindow.show();
        this.attributesWindow.recalc();
        this.attributesWindow.hide();
    }
}
//*************
// Handles a change of the current selection. Updates all menu items that are selection sensitive.
//*************
DemoApplication.prototype.selectionChanged = function( /* DrawingView */ view) {
    if (this.attributesWindow == null || this.attributesWindow.isHidden()) return;
    this.attributesWindow.open(view.selectionZOrdered());
}
//*************
// toString 
//*************
DemoApplication.prototype.toString = function() {
    return "DemoApplication";
}