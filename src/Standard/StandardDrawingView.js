/**
 * Hotdraw.js : StandardDrawingView
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The standard implementation of DrawingView
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

// extends Panel implements DrawingView,MouseListener, MouseMotionListener, KeyListener

StandardDrawingView.prototype = new Panel();

function StandardDrawingView( /* DrawingEditor */ editor, /* int */ width, /* int */ height) {
    var argv = StandardDrawingView.arguments;
    var argc = StandardDrawingView.length;
    this.className = "StandardDrawingView";
    /* DrawingEditor */
    this.fEditor = null; // The DrawingEditor of the view.
    /* Drawing */
    this.fDrawing = null; // The shown drawing.
    /* Rectangle */
    this.fDamage = null; // The accumulated damaged area
    /* Vector */
    this.fSelection = null; // The list of currently selected figures.
    /* Vector */
    this.fSelectionHandles = null; // The shown selection handles.
    /* Dimension */
    this.fViewSize = null; // The preferred size of the view
    /* Point */
    this.fLastClick = null; // The position of the last mouse click inside the view.
    /* Vector */
    this.fBackgrounds = null; // A vector of optional backgrounds. The vector maintains a list a view painters that are drawn before the contents, that is in the background.
    /* Vector */
    this.fForegrounds = null; // A vector of optional foregrounds. The vector maintains a list a view painters that are drawn after the contents, that is in the foreground.
    /* Painter */
    this.fUpdateStrategy = null; // The update strategy used to repair the view.
    /* Graphics */
    this.viewcontentg = null;
    /* Graphics */
    this.selectiong = null;
    /* Graphics */
    this.textBoxg = null;
    /* PointConstrainer */
    this.fConstrainer = null; // The grid used to constrain points for snap to grid functionality.
    if (argv.length > 0) this.initStandardDrawingView(editor, width, height);
}
//*************
// 
//*************
StandardDrawingView.prototype.initStandardDrawingView = function(editor, width, height) {
    this.initPanel(0, 0, width, height);
    this.fEditor = editor;
    this.fViewSize = new Dimension(width, height);
    this.fLastClick = new Point(0, 0);
    this.fConstrainer = null;
    this.fSelection = new Vector();
    this.addMouseListener(this);
    this.addMouseMotionListener(this);
    this.addKeyListener(this);
    // To support focus
    ds_addEventListener(this, "click", "desktopMouseClick");
    ds_addEventListener(this, "mousedown", "desktopMouseClick");
}
//****************
// desktopMouseClick
//****************
StandardDrawingView.prototype.desktopMouseClick = function(evt) {
    this.lostFocus();
}
//*************
// paint
//*************
StandardDrawingView.prototype.paint = function( /* Graphics */ g) {
    this.paintStandardDrawingView(g);
}
//*************
// paintStandardDrawingView
//*************
StandardDrawingView.prototype.paintStandardDrawingView = function( /* Graphics */ g) {
    this.paintPanel(g);
    this.lostFocus();
}
//*************
// createSVGContent
//*************
StandardDrawingView.prototype.createSVGContent = function() {
    this.createSVGContentStandardDrawingView();
}
//*************
// createSVGContentStandardDrawingView
//*************
StandardDrawingView.prototype.createSVGContentStandardDrawingView = function() {
    this.createSVGContentPanel();
    //this.setBackground("#D4D0C8");
    this.viewcontentg = this.getGraphics();
    this.selectiong = this.getGraphics();
    this.textBoxg = this.getGraphics();
    this.glassPaneOn();
    this.enableMouseListener();
    this.enableMouseMotionListener();
    this.enableKeyListener();
}
//*************
// recalc 
//*************
StandardDrawingView.prototype.recalc = function() {
    this.recalcStandardDrawingView();
}
//*************
// actionPerformedWindow 
//*************
StandardDrawingView.prototype.recalcStandardDrawingView = function() {
    this.recalcPanel();
}
//*************
// Paints the drawing view. The actual drawing is delegated to the current update strategy.
//*************
//StandardDrawingView.prototype.paint = function(/* Graphics */ g){
//this.fUpdateStrategy.draw(g, this);
//}  
//*************
// Sets the view's editor.
//*************
StandardDrawingView.prototype.setEditor = function( /* DrawingEditor */ editor) {
    this.fEditor = editor;
}
//*************
// Sets and installs another drawing in the view.
//*************
StandardDrawingView.prototype.setDrawing = function( /* Drawing */ d) {
    this.clearSelection();
    if (this.fDrawing != null) this.fDrawing.removeDrawingChangeListener(this);
    this.fDrawing = d;
    if (this.fDrawing != null) this.fDrawing.addDrawingChangeListener(this);
    this.checkMinimumSize();
    this.repaint();
}
//*************
// Gets the current tool.
//*************
/* Tool */
StandardDrawingView.prototype.tool = function() {
    return this.fEditor.tool();
}
//*************
// Gets the drawing.
//*************
/* Drawing */
StandardDrawingView.prototype.drawing = function() {
    return this.fDrawing;
}
//*************
// Gets the editor.
//*************
/* DrawingEditor */
StandardDrawingView.prototype.editor = function() {
    return this.fEditor;
}
//*************
// Adds a figure to the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.standardDrawingViewAdd = function( /* Figure */ figure) {
    return this.drawing().add(figure);
}
//*************
// Adds a figure to the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.add = function( /* Figure or Component */ figure) {
    if (figure instanceof Component) return this.addContainer(figure);
    return this.standardDrawingViewAdd(figure);
}
//*************
// Removes a figure from the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.remove = function( /* Figure or Component */ figure) {
    if (figure instanceof Component) return this.removeContainer(figure);
    return this.standardDrawingViewRemove(figure);
}
//*************
// Removes a figure from the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.standardDrawingViewRemove = function( /* Figure */ figure) {
    return this.drawing().remove(figure);
}
//*************
// Adds a vector of figures to the drawing.
//*************
StandardDrawingView.prototype.addAll = function( /* Vector */ figures) {
    /* FigureEnumeration */
    var k = new FigureEnumerator(figures);
    while (k.hasMoreElements()) this.add(k.nextFigure());
}
//*************
// Removes a vector of figures. OR Removes all children.
//
// Forms:
// ======
// (1) removeAll()
// (2) removeAll(Vector newFigures)
//*************
StandardDrawingView.prototype.removeAll = function( /* Vector */ newFigures) {
    //
    // (1) removeAll()
    //
    if (newFigures == undefined) {
        /* FigureEnumeration */
        var k = this.drawing().figures();
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            this.remove(figure);
        }
        this.clearSelection();
        return;
    }
    //
    // (2) removeAll(Vector newFigures)
    //
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextElement();
        this.remove(figure);
    }
    this.clearSelection();
}
//*************
// Gets the minimum dimension of the drawing.
//*************
/* Dimension */
StandardDrawingView.prototype.getMinimumSize = function() {
    return this.fViewSize;
}
//*************
// Gets the preferred dimension of the drawing..
//*************
/* Dimension */
StandardDrawingView.prototype.getPreferredSize = function() {
    return this.getMinimumSize();
}
//*************
// Sets the current display update strategy.
//*************
StandardDrawingView.prototype.setDisplayUpdate = function( /* Painter */ updateStrategy) {
    this.fUpdateStrategy = updateStrategy;
}
//*************
// Gets the currently selected figures.Return a vector with the selected figures. 
// The vector is a copy of the current selection.
//*************
/* Vector */
StandardDrawingView.prototype.selection = function() {
    // protect the vector with the current selection
    return this.fSelection;
}
//*************
// Gets an enumeration over the currently selected figures.
//*************
/* FigureEnumeration */
StandardDrawingView.prototype.selectionElements = function() {
    return (new FigureEnumerator(this.fSelection));
}
//*************
// Gets the currently selected figures in Z order.
//*************
/* Vector */
StandardDrawingView.prototype.selectionZOrdered = function() {
    /* Vector */
    var result = new Vector(this.fSelection.size());
    /* FigureEnumeration */
    var figures = this.drawing().figures();
    while (figures.hasMoreElements()) {
        /* Figure */
        var f = figures.nextFigure();
        if (this.fSelection.contains(f)) {
            result.addElement(f);
        }
    }
    return result;
}
//*************
// Gets the number of selected figures.
//*************
StandardDrawingView.prototype.selectionCount = function() {
    return this.fSelection.size()
}
//*************
// Adds a figure to the current selection.
//*************
StandardDrawingView.prototype.addToSelection = function( /* Figure */ figure) {
    if (!this.fSelection.contains(figure)) {
        this.fSelection.addElement(figure);
        this.fSelectionHandles = null;
        figure.invalidate();
        this.selectionChanged();
    }
}
//*************
// Adds a vector of figures to the current selection.
//*************
StandardDrawingView.prototype.addToSelectionAll = function( /* Vector */ figure) {
    /* FigureEnumeration */
    var k = new FigureEnumerator(figures);
    while (k.hasMoreElements()) this.addToSelection(k.nextFigure());
}
//*************
// Removes a figure from the selection.
//*************
StandardDrawingView.prototype.removeFromSelection = function( /* Figure */ figure) {
    if (this.fSelection.contains(figure)) {
        this.fSelection.removeElement(figure);
        this.fSelectionHandles = null;
        figure.invalidate();
        this.selectionChanged();
    }
}
//*************
// If a figure isn't selected it is added to the selection.Otherwise it is removed from the selection.
//*************
StandardDrawingView.prototype.toggleSelection = function( /* Figure */ figure) {
    this.disposeSvgHandles();
    if (this.fSelection.contains(figure)) this.removeFromSelection(figure);
    else this.addToSelection(figure);
    this.selectionChanged();
}
//*************
// Clears the current selection.
//*************
StandardDrawingView.prototype.clearSelection = function() {
    //alert("clearSelect");
    /* Figure */
    var figure;
    /* FigureEnumeration */
    k = this.selectionElements();
    while (k.hasMoreElements()) k.nextFigure().invalidate();
    this.fSelection = new Vector();
    this.disposeSvgHandles();
    this.selectionChanged();
}
//*************
// Dispose svg Handles [added]
//*************
StandardDrawingView.prototype.disposeSvgHandles = function() {
    // Delete all svg elements related to handles !  
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements())(k.nextElement()).dispose();
    this.fSelectionHandles.clear();
    this.fSelectionHandles = null;
}
//*************
// Gets an enumeration of the currently active handles.
//*************
/* Enumeration */
StandardDrawingView.prototype.selectionHandles = function() {
    if (this.fSelectionHandles == null) {
        this.fSelectionHandles = new Vector();
        /* FigureEnumeration */
        var k = this.selectionElements();
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            /* Enumeration */
            var kk = figure.handles().elements();
            while (kk.hasMoreElements()) {
                this.fSelectionHandles.addElement(kk.nextElement());
            }
        }
    }
    return this.fSelectionHandles.elements();
}
//*************
// Gets the current selection as a FigureSelection. A FigureSelection can be cut, copied, pasted.
//*************
/* FigureSelection */
StandardDrawingView.prototype.getFigureSelection = function() {
    return new FigureSelection(this.selectionZOrdered());
}
//*************
// Finds a handle at the given coordinates. Return the hit handle, null if no handle is found.
//*************
/* Handle */
StandardDrawingView.prototype.findHandle = function(x, y) {
    /* Handle */
    var handle;
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements()) {
        handle = k.nextElement();
        if (handle.containsPoint(x, y)) return handle;
    }
    return null;
}
//*************
// Informs that the current selection changed. By default this event is forwarded to the drawing editor.
//*************
StandardDrawingView.prototype.selectionChanged = function() {
    this.fEditor.selectionChanged(this);
}
//*************
// Gets the position of the last click inside the view.
//*************
/* Point */
StandardDrawingView.prototype.lastClick = function() {
    return this.fLastClick;
}
//*************
// Sets the grid spacing that is used to constrain points.
//*************
StandardDrawingView.prototype.setConstrainer = function( /* PointConstrainer */ c) {
    this.fConstrainer = c;
}
//*************
// Gets the current constrainer.
//*************
/* PointConstrainer */
StandardDrawingView.prototype.getConstrainer = function() {
    return this.fConstrainer;
}
//*************
// Constrains a point to the current grid.
//*************
/* Point */
StandardDrawingView.prototype.constrainPoint = function( /* Point */ p) {
    // constrin to view size
    /* Dimension */
    var size = this.getSize();
    //p.x = Math.min(size.width, Math.max(1, p.x));
    //p.y = Math.min(size.height, Math.max(1, p.y));
    /* <======================================================= [USE THIS - BUT - NOT IMPLEMENTED]
p.x = Geom.range(1, size.width, p.x);
p.y = Geom.range(1, size.height, p.y);
*/
    if (this.fConstrainer != null) return this.fConstrainer.constrainPoint(p);
    return p;
}
//*************
// mouseStartDragged
//*************
StandardDrawingView.prototype.mouseStartDragged = function( /* MouseEvent */ e) {
    this.mouseStartDraggedStandardDrawingView(e);
}
StandardDrawingView.prototype.mouseStartDraggedStandardDrawingView = function( /* MouseEvent */ e) {
    this.hideShowHandles(false);
}
//*************
// mouseStartDragged
//*************
StandardDrawingView.prototype.mouseEndDragged = function( /* MouseEvent */ e) {
    this.hideShowHandles(true);
    this.mouseReleased(e, p.x, p.y);
}
//*************
// Handles mouse drag events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mouseDragged = function( /* MouseEvent */ e) {
    this.mouseDraggedStandardDrawingView(e);
}
StandardDrawingView.prototype.mouseDraggedStandardDrawingView = function( /* MouseEvent */ e) {
    //var p = this.constrainPoint(new Point(e.getX(), e.getY()));
    //this.tool().mouseDrag(e, p.x, p.y);
    // The grid is not supported
    this.tool().mouseDrag(e, e.x, e.y);
}
//*************
// Handles mouse move events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mouseMoved = function( /* MouseEvent */ e) {
    this.tool().mouseMove(e, e.x, e.y);
}
//*************
// Handles mouse down events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mousePressed = function( /* MouseEvent */ e) {
    this.mousePressedStandardDrawingView(e);
}
//*************
// mousePressedStandardDrawingView
//*************
StandardDrawingView.prototype.mousePressedStandardDrawingView = function( /* MouseEvent */ e) {
    this.gainFocus();
    /* Point */
    p = this.constrainPoint(new Point(e.getX(), e.getY()));
    this.fLastClick = new Point(e.getX(), e.getY());
    this.tool().mouseDown(e, p.x, p.y);
    this.checkDamage();
    this.drawAll();
}
//*************
// Handles mouse up events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mouseReleased = function( /* MouseEvent */ e) {
    /* Point */
    var p = this.constrainPoint(new Point(e.getX(), e.getY()));
    this.tool().mouseUp(e, p.x, p.y);
    this.checkDamage();
    this.drawAll();
}
//*************
// keyTyped 
//*************
StandardDrawingView.prototype.keyTyped = function( /* KeyEvent */ event) {
    var code = event.getKeyChar();
}
//*************
// Private: 
// --------
// keyReleased 
//*************
StandardDrawingView.prototype.keyReleased = function( /* KeyEvent */ event) {}
//*************
// keyPressed 
// Handles key down events. Cursor keys are handled by the view the other key events are delegated to the
// currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.keyPressed = function( /* KeyEvent */ e) {
    /* int */
    var code = e.getKeyCode();
    if ((code == VK_BACK_SPACE) || (code == VK_DELETE)) {
        var cmd = new DeleteCommand("Delete", this);
        cmd.execute();
    } else if (code == VK_DOWN || code == VK_UP || code == VK_RIGHT || code == VK_LEFT) {
        this.handleCursorKey(code);
    } else if (code == VK_PAGE_UP) {
        this.sendSelectionToFront();
    } else if (code == VK_PAGE_DOWN) {
        this.sendSelectionToBack();
    } else {
        this.tool().keyDown(e, code);
    }
    this.checkDamage();
}
//*************
// Handles cursor keys by moving all the selected figures one grid point in the cursor direction. 
//*************
StandardDrawingView.prototype.handleCursorKey = function( /* int */ key) {
    var dx = 0,
        dy = 0;
    var stepX = 1,
        stepY = 1;
    // should consider Null Object.
    if (this.fConstrainer != null) {
        stepX = this.fConstrainer.getStepX();
        stepY = this.fConstrainer.getStepY();
    }
    switch (key) {
        case VK_DOWN:
            dy = stepY;
            break;
        case VK_UP:
            dy = -stepY;
            break;
        case VK_RIGHT:
            dx = stepX;
            break;
        case VK_LEFT:
            dx = -stepX;
            break;
    }
    this.moveSelection(dx, dy);
}
//*************
// moveSelection
//*************
StandardDrawingView.prototype.moveSelection = function(dx, dy) {
    /* FigureEnumeration */
    var figures = this.selectionElements();
    while (figures.hasMoreElements()) {
        var figure = figures.nextFigure();
        figure.moveBy(dx, dy);
    }
    this.drawAll();
    this.checkDamage();
}
//*************
// Send Selection To Front
//*************
StandardDrawingView.prototype.sendSelectionToFront = function() {
    var drawing = this.drawing();
    k = this.selectionElements();
    while (k.hasMoreElements()) {
        var figure = k.nextFigure();
        drawing.bringToFront(figure);
        // **********************************************************************************************************
        // This extra event monitoring code is used to report changes on the view,... 
        if (this.changed != undefined) this.changed(figure, "OrderFront"); // <============================== [Generate View Event]
        // **********************************************************************************************************
    }
    this.drawAll();
}
//*************
// Send Selection To Back
//*************
StandardDrawingView.prototype.sendSelectionToBack = function() {
    var drawing = this.drawing();
    k = this.selectionElements();
    while (k.hasMoreElements()) {
        var figure = k.nextFigure();
        drawing.sendToBack(figure);
        // **********************************************************************************************************
        // This extra event monitoring code is used to report changes on the view,... 
        if (this.changed != undefined) this.changed(figure, "OrderBack"); // <============================== [Generate View Event]
        // **********************************************************************************************************
    }
    this.drawAll();
}
//*************
// Refreshes the drawing if there is some accumulated damage
//*************
StandardDrawingView.prototype.checkDamage = function() {}
//*************
// Draws the contents of the drawing view. The view has three layers: background, drawing, handles.
// The layers are drawn in back to front order.
//*************
StandardDrawingView.prototype.drawAll = function( /* Graphics */ g) {
    if (g == undefined) g = this.viewcontentg;
    /* boolean */
    var isPrinting = false; // (g instanceof PrintGraphics); [======= see ]
    this.drawBackground(g);
    if (this.fBackgrounds != null && !isPrinting) this.drawPainters(g, this.fBackgrounds);
    this.drawDrawing(g);
    if (this.fForegrounds != null && !isPrinting) this.drawPainters(g, this.fForegrounds);
    if (!isPrinting) this.drawHandles(g);
}
//*************
// Draws the currently active handles.
//*************
StandardDrawingView.prototype.drawHandles = function( /* Graphics */ g) {
    if (g == undefined) g = this.viewcontentg;
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements())
    (k.nextElement()).draw(g);
}
//*************
// Hide Show Handles
//*************
StandardDrawingView.prototype.hideShowHandles = function( /* boolean */ flag) {
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements())
    (k.nextElement()).getShape().setVisibility(flag);
}
//*************
// Draws the drawing.
//*************
StandardDrawingView.prototype.drawDrawing = function( /* Graphics */ g) {
    if (g == undefined) g = this.viewcontentg;
    this.fDrawing.draw(g);
}
//*************
// Draws the background. If a background pattern is set it is used to fill the 
// background. Otherwise the background is filled in the background color.
//*************
StandardDrawingView.prototype.drawBackground = function( /* Graphics */ g) {
    /* <======================================================================= [ NOT IMPLEMENTED ]
 g.setColor(getBackground());
 g.fillRect(0, 0, getBounds().width, getBounds().height);
*/
}
//*************
// 
//*************
StandardDrawingView.prototype.drawPainters = function( /* Graphics */ g, /* Vector */ v) {
    for (var i = 0; i < v.size(); i++)
    (v.elementAt(i)).draw(g, this);
}
//*************
// Adds a background.
//*************
StandardDrawingView.prototype.addBackground = function( /* Painter */ painter) {
    if (this.fBackgrounds == null) this.fBackgrounds = new Vector(3);
    this.fBackgrounds.addElement(painter);
    this.repaint();
}
//*************
// Removes a background.
//*************
StandardDrawingView.prototype.removeBackground = function( /* Painter */ painter) {
    if (this.fBackgrounds != null) this.fBackgrounds.removeElement(painter);
    this.repaint();
}
//*************
// Removes a foreground.
//*************
StandardDrawingView.prototype.removeForeground = function( /* Painter */ painter) {
    if (this.fForegrounds != null) this.fForegrounds.removeElement(painter);
    this.repaint();
}
//*************
// Adds a foreground.
//*************
StandardDrawingView.prototype.addForeground = function( /* Painter */ painter) {
    if (this.fForegrounds == null) this.fForegrounds = new Vector(3);
    this.fForegrounds.addElement(painter);
    this.repaint();
}
//*************
// 
//*************
StandardDrawingView.prototype.checkMinimumSize = function() {
    /* FigureEnumeration */
    var k = this.drawing().figures();
    /* Dimension */
    var d = new Dimension(0, 0);
    while (k.hasMoreElements()) {
        /* Rectangle */
        var r = k.nextFigure().displayBox();
        d.width = Math.max(d.width, r.x + r.width);
        d.height = Math.max(d.height, r.y + r.height);
    }
    if (this.fViewSize.height < d.height || this.fViewSize.width < d.width) {
        this.fViewSize.height = d.height + 10;
        this.fViewSize.width = d.width + 10;
        this.setSize(this.fViewSize);
    }
}
//*************
// isFocusTraversable
//*************
StandardDrawingView.prototype.isFocusTraversable = function() {
    return true;
}
//*************
// listener methods we are not interested in 
//*************
StandardDrawingView.prototype.mouseEntered = function( /* MouseEvent */ e) {;
}
StandardDrawingView.prototype.mouseExited = function( /* MouseEvent */ e) {;
}
StandardDrawingView.prototype.mouseClicked = function( /* MouseEvent */ e) {
    this.gainFocus();
}
//*************
// To String 
//*************
StandardDrawingView.prototype.toString = function() {
    return this.className;
}
//*************
// Freezes the view by acquiring the drawing lock.
//*************
StandardDrawingView.prototype.freezeView = function() {
    this.drawing().lock();
}
//*************
// Unfreezes the view by releasing the drawing lock.
//*************
StandardDrawingView.prototype.unfreezeView = function() {
    this.drawing().unlock();
}
//*************
// readObject
//*************
StandardDrawingView.prototype.readObject = function( /* ObjectInputStream */ s) {}
//*************
// repairDamage
//*************
StandardDrawingView.prototype.repairDamage = function() {}
//*************
// drawingInvalidated
//*************
StandardDrawingView.prototype.drawingInvalidated = function( /* DrawingChangeEvent */ e) {}
//*************
// drawingRequestUpdate
//*************
StandardDrawingView.prototype.drawingRequestUpdate = function( /* DrawingChangeEvent */ e) {
    this.repairDamage();
}
//*************
// Updates the drawing view.
//*************
StandardDrawingView.prototype.update = function( /* Graphics */ g) {
    this.paint(g);
}
//*************
// Refreshes the drawing if there is some accumulated damage
//*************
StandardDrawingView.prototype.checkDamage = function() {}