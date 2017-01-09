/**
 * Hotdraw.js : DemoDrawingView
 *
 * The Collaborative implementation of DrawingView. Support PopUpMenu
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/demo
 */

DemoDrawingView.prototype = new StandardDrawingView();

function DemoDrawingView( /* DrawingEditor */ editor, /* int */ width, /* int */ height) {
    var argv = DemoDrawingView.arguments;
    var argc = DemoDrawingView.length;
    this.className = "DemoDrawingView";
    /* boolean */
    this.changeEventFlag = true;
    /* Figure */
    this.targetFigure = true;
    /* Component */
    this.popUpMenu2 = null;
    if (argv.length > 0) this.initDemoDrawingView(editor, width, height);
}
//*************
// 
//*************
DemoDrawingView.prototype.initDemoDrawingView = function(editor, width, height) {
    this.initStandardDrawingView(editor, width, height);
    // Setup the first popUp menu
    this.addMenuItem("Attributes");
    // We will create another PopUp Menu to deal with Figures
    var temp = this.popUpMenu;
    this.popUpMenu = null;
    this.addMenuItem("Send To Front");
    this.addMenuItem("Send To Back");
    this.addMenuSeparator();
    this.addMenuItem("Delete");
    this.addMenuItem("Duplicate");
    this.addMenuItem("Group");
    this.addMenuItem("Ungroup");
    this.addMenuSeparator();
    this.addMenuItem("Attributes");
    this.popUpMenu2 = this.popUpMenu;
    this.popUpMenu = temp;
}
//*************
// createSVGContent
//*************
DemoDrawingView.prototype.createSVGContent = function() {
    this.createSVGContentDemoDrawingView();
}
//*************
// createSVGContentDemoDrawingView
//*************
DemoDrawingView.prototype.createSVGContentDemoDrawingView = function() {
    this.createSVGContentStandardDrawingView();
    if (this.popUpMenu2 != null) {
        this.popUpMenu2.paint();
        menuLayer.addGraphics(this.popUpMenu2);
        this.popUpMenu2.hide();
    }
}
//*************
// recalc 
//*************
DemoDrawingView.prototype.recalc = function() {
    this.recalcDemoDrawingView();
}
//*************
// recalcDemoDrawingView 
//*************
DemoDrawingView.prototype.recalcDemoDrawingView = function() {
    this.recalcStandardDrawingView();
    if (this.popUpMenu2 != null) this.popUpMenu2.recalc();
}
//*************
// Handles mouse down events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
DemoDrawingView.prototype.mousePressed = function( /* MouseEvent */ e) {
    this.mousePressedDemoDrawingView(e);
}
//*************
// mousePressedStandardDrawingView
//*************
DemoDrawingView.prototype.mousePressedDemoDrawingView = function( /* MouseEvent */ e) {
    if (e.isAltDown() || e.isControlDown()) return; // Alt and Ctrl are special keys used by ASV 
    this.mousePressedStandardDrawingView(e);
    var figure = this.drawing().findFigure(e.getX(), e.getY());
    /* Point */
    var p = this.getAbsoluteLocation();
    // PopUpMenu
    if (e.getButton() == BUTTON2) {
        var popUpMenu = null;
        var x = p.x + e.getX() + 5;
        var y = p.y + e.getY() + 5;
        // Display the second PopUp Menu
        if (figure != null && this.selection().contains(figure) && this.popUpMenu2 != null) {
            popUpMenu = this.popUpMenu2;
            this.targetFigure = figure;
        } else if (this.popUpMenu != null) { // Else, display the PopUp Menu of the container
            popUpMenu = this.popUpMenu;
            this.clearSelection();
        }
        if (popUpMenu != null) {
            var w = popUpMenu.getWidth();
            var h = popUpMenu.getHeight();
            if (x + w > innerWidth) x = x - w - 10;
            if (y + h > innerHeight) y = y - h - 10;
            popUpMenu.translate(x, y);
            popUpMenu.show();
        }
    }
}
//*************
// mousePressed : We overridden econtMousePressed so we can gain control over the PopUp Menu,...
//*************
DemoDrawingView.prototype.econtMousePressed = function( /* MouseEvent */ e) {
    var d = this.getComponentAt(e.getX(), e.getY());
    this.pressX = e.getX();
    this.pressY = e.getY();
    if (this.isEventable(d)) this.fireMouseEventToComponent(d, "mousePressed", e);
}
//*************
// actionPerformedWindow 
//*************
DemoDrawingView.prototype.actionPerformed = function( /* ActionEvent */ e) {
    var src = e.source;
    var comm = e.getActionCommand();
    if (comm == "menuItemSelected") {
        switch (src.name) {
            case "Send To Front":
                this.sendSelectionToFront();
                break;
            case "Send To Back":
                this.sendSelectionToBack();
                break;
            case "Delete":
                var cmd = new DeleteCommand("Delete", this);
                cmd.execute();
                break;
            case "Duplicate":
                var cmd = new DuplicateCommand("Duplicate", this);
                cmd.execute();
                break;
            case "Group":
                var cmd = new GroupCommand("Group", this);
                cmd.execute();
                break;
            case "Ungroup":
                var cmd = new UngroupCommand("Ungroup", this);
                cmd.execute();
                break;
                //
                // Second PopUpMenu
                //
            case "Attributes":
                this.editor().attributesWindow.show();
                this.editor().selectionChanged(this.editor().view());
                break;
        }
    }
    // Pass the event to all listeners
    // Action Listeners 
    if (this.actionListeners != null) {
        var k = new Enumerator(this.actionListeners);
        while (k.hasMoreElements())
        /* ActionListener */
            k.nextElement().actionPerformed(e);
    }
}