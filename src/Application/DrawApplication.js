/**
 * Hotdraw.js : DrawApplication
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DrawApplication defines a standard presentation for standalone drawing editors.
 * The presentation is customized in subclasses. The application is started as follows:
 * public static void main(String[] args) {
 * MayDrawApp window = new MyDrawApp();
 * window.open();
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/application
 */

// Extends Frame implements DrawingEditor, PaletteListener

// DrawApplication.prototype= new Frame();  

function DrawApplication() {
    var argv = DrawApplication.arguments;
    var argc = DrawApplication.length;

    /* String */
    this.name = "DrawApplication";
    /* String */
    this.className = "DrawApplication";

    /* Drawing */
    this.fDrawing = null;
    /* Tool */
    this.fTool = null;
    /* Iconkit */
    this.fIconkit = null;
    /* TextField */
    this.fStatusLine = null;
    /* StandardDrawingView */
    this.fView = null;
    /* ToolButton */
    this.fDefaultToolButton = null;
    /* ToolButton */
    this.fSelectedToolButton = null;
    /* String */
    this.fDrawingFilename = null;
    /* String */
    this.fgUntitled = "untitled";
    /* String */
    this.fgDrawPath = "";
    /* String */
    this.IMAGES = this.fgDrawPath + "../../img/";
}
//*************
// Opens the window and initializes its contents.
// Clients usually only call but don't override it.
//*************
DrawApplication.prototype.open = function(x, y, w, h, title) { // tools is a panel type
    this.openDrawApplication(x, y, w, h);
}
//*************
// drawApplicationOpen
//*************
DrawApplication.prototype.openDrawApplication = function(x, y, w, h, title) { // tools is a panel type
    this.width = w;
    this.height = h;
    // Create Tools Window,...
    var buttons = 11;
    var buttonsw = buttons * 28;
    this.tools = new Window(innerWidth - 50 - buttonsw, 10, 23 + buttonsw, 55, title, null, false);
    this.tools.setToFixedSize();
    this.tools.setLayout(new FlowLayout(CENTER));
    // Create View
    this.fView = this.createDrawingView();
    this.fView.translate(x, y);
    this.createTools(this.tools);
    // Paint the Tools Window
    this.tools.paint();
    this.fStatusLine = this.createStatusLine(this.tools);
    /* Dimension */
    var d = this.defaultSize();
    this.initDrawing();
    this.tools.putWindowOnTop();
}
//*************
// Initilize Drawing 
//*************
DrawApplication.prototype.initDrawing = function() {
    this.fDrawing = this.createDrawing();
    this.fDrawingFilename = this.fgUntitled;
    this.fView.setDrawing(this.fDrawing);
    this.toolDone();
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
    return new StandardDrawingView(this, d.width, d.height);
}
//*************
// Creates the tools. By default only the selection tool is added.
// Override this method to add additional tools.
// Call the inherited method to include the selection tool.
//*************
DrawApplication.prototype.createTools = function( /* Panel */ palette) { // palette is the tools window
    this.createToolsDrawApplication(palette);
}
//*************
// createToolsDrawApplication
//*************
DrawApplication.prototype.createToolsDrawApplication = function( /* Panel */ palette) { // palette is the tools window
    /* Tool */
    var tool = this.createSelectionTool();
    this.fDefaultToolButton = this.createToolButton(this.IMAGES + "SEL", "Selection Tool", tool);
    palette.add(this.fDefaultToolButton);
}
//*************
// Creates the selection tool used in this editor. Override to use a custom selection tool.
//*************
/* Tool */
DrawApplication.prototype.createSelectionTool = function() {
    return new SelectionTool(this.view());
}
//*************
// Creates a tool button with the given image, tool, and text
//*************
/* ToolButton */
DrawApplication.prototype.createToolButton = function( /* String*/ iconName, /*String*/ toolName, /*Tool*/ tool) {
    return new ToolButton(this, iconName, toolName, tool);
}
//*************
// Override to define the dimensions of the drawing view.
//*************
/* Dimension */
DrawApplication.prototype.getDrawingViewSize = function() {
    return new Dimension(this.width, this.height);
}
//*************
// Creates the drawing used in this application.
// You need to override this method to use a Drawing subclass in your application.
// By default a standard Drawing is returned.
//*************
/* Drawing */
DrawApplication.prototype.createDrawing = function() {
    return new StandardDrawing(true); // true is used to make the StandardDrawing run initStandardDrawing to intilize
}
//*************
// Sets the drawing to be edited.
//*************
DrawApplication.prototype.setDrawing = function( /* Drawing */ drawing) {
    this.fView.setDrawing(drawing);
    this.fDrawing = drawing;
}
//*************
// Gets the default size of the window.
//*************
/* Dimension */
DrawApplication.prototype.defaultSize = function() {
    return new Dimension(430, 406);
}
//*************
// Gets the current drawing.
//*************
/* Drawing */
DrawApplication.prototype.drawing = function() {
    return this.fDrawing;
}
//*************
// Gets the current tool.
//*************
/* Tool */
DrawApplication.prototype.tool = function() {
    return this.fTool;
}
//*************
// Gets the current drawing view.
//*************
/* DrawingView */
DrawApplication.prototype.view = function() {
    return this.fView;
}
//*************
// Sets the default tool of the editor.
//*************
DrawApplication.prototype.toolDone = function() {
    if (this.fDefaultToolButton != null) {
        this.setTool(this.fDefaultToolButton.tool(), this.fDefaultToolButton.name());
        this.setSelected(this.fDefaultToolButton);
    }
}
//*************
// Handles a change of the current selection. Updates all menu items that are selection sensitive.
//*************
DrawApplication.prototype.selectionChanged = function( /* DrawingView */ view) {}
//*************
// setTool
//*************
DrawApplication.prototype.setTool = function( /* Tool */ t, /* String */ name) {
    if (this.fTool != null) this.fTool.deactivate();
    this.fTool = t;
    if (this.fTool != null) {
        this.showStatus(name);
        this.fTool.activate();
    }
}
//*************
// Handles a user selection in the palette.
//*************
DrawApplication.prototype.paletteUserSelected = function( /* PaletteButton */ button) {
    /* ToolButton */
    var toolButton = button;
    this.setTool(toolButton.tool(), toolButton.name());
    this.setSelected(toolButton);
}
//*************
// setSelected
//*************
DrawApplication.prototype.setSelected = function( /* ToolButton */ button) {
    if (this.fSelectedToolButton != null) this.fSelectedToolButton.reset();
    this.fSelectedToolButton = button;
    if (this.fSelectedToolButton != null) this.fSelectedToolButton.select();
}
//*************
// Handles when the mouse enters or leaves a palette button.
//*************
DrawApplication.prototype.paletteUserOver = function( /* PaletteButton */ button, /* boolean */ inside) {
    /* ToolButton */
    var toolButton = button;
    if (inside) this.showStatus(toolButton.name());
    else
    if (this.fSelectedToolButton != null) this.showStatus(this.fSelectedToolButton.name());
}
//*************
// Shows a status message.
//*************
DrawApplication.prototype.showStatus = function( /* String */ string) {
    this.fStatusLine.setText(string);
} //*************
// createStatusLine
//*************
DrawApplication.prototype.createStatusLine = function( /* Window */ tools) {
    var w = tools.getWidth() - tools.left - tools.right;
    var h = 24;
    tools.setSize(tools.getWidth(), tools.h + h);
    var g = tools.getGraphics();
    var x = tools.left;
    var y = tools.getHeight() - tools.bottom - h;
    //g.setColor("white");
    //g.drawRect(x+3,y+3,w-6,h-6);
    var wb = g.drawStepBorder(x + 3, y + 3, w - 6, h - 6);
    wb.setFaceDown();
    g.setColor("black");
    g.setFont(new Font("Helvetica", "normal", "10pt"));
    var text = g.drawText(x + 5, y + 3, " ");
    text.setToBaseLine();
    return text;
}