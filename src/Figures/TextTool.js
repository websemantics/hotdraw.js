/**
 * Hotdraw.js : TextTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Tool to create new or edit existing text figures. The editing behavior is implemented by overlaying the
 * Figure providing the text with a FloatingTextField.  A tool interaction is done once a Figure that is not
 * a TextHolder is clicked.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     1st March 2005
 * @package   websemantics/hotdraw/figures
 */ 

TextTool.prototype = new CreationTool();

function TextTool( /* DrawingView */ view, /* Figure */ prototypeFig) {
    var argv = TextTool.arguments;
    var argc = TextTool.length;
    this.className = "TextTool";
    /* FloatingTextField */
    this.fTextField = null;
    /* TextHolder */
    this.fTypingTarget = null;
    if (argv.length > 0) this.initTextTool(view, prototypeFig);
}
//*************
// Initializes a TextTool with the given prototype.
//*************
TextTool.prototype.initTextTool = function(view, prototypeFig) {
    this.initCreationTool(view, prototypeFig);
}
//*************
// Sets the text cursor.
//*************
TextTool.prototype.activate = function() {
    this.activateTextTool();
}
TextTool.prototype.activateTextTool = function() {
    this.activateCreationTool();
    this.view().setCursor("text");
}
//*************
// deactivate
//*************
TextTool.prototype.deactivate = function() {
    this.deactivateTextTool();
}
TextTool.prototype.deactivateTextTool = function() {
    this.deactivateCreationTool();
    this.endEdit();
}
//*************
// fieldBounds
//*************
/* Rectangle */
TextTool.prototype.fieldBounds = function( /* TextHolder */ figure) {
    /* Rectangle */
    var box = figure.textDisplayBox();
    var nChars = figure.overlayColumns();
    /* Dimension */
    var d = this.fTextField.getPreferredSize(nChars);
    return new gRectangle(box.x, box.y, d.width, d.height);
}
//*************
// endEdit
//*************
TextTool.prototype.endEdit = function( /* TextHolder */ figure) {
    if (this.fTypingTarget != null) {
        if (this.fTextField.getText().length > 0) {
            this.fTypingTarget.setText(this.fTextField.getText());
            this.fireViewEvent(this.fTypingTarget, "Update"); // <======================= [ Update View Event]
        } else {
            this.drawing().remove(this.fTypingTarget);
            this.fireViewEvent(this.fTypingTarget, "Remove"); // <======================= [ Remove View Event]
        }
        this.fTypingTarget = null;
        this.fTextField.endOverlay();
    }
}
//*************
// beginEdit
//*************
TextTool.prototype.beginEdit = function( /* TextHolder */ figure) {
    if (this.fTextField == null) this.fTextField = new FloatingTextField();
    if (figure != this.fTypingTarget && this.fTypingTarget != null) this.endEdit();
    this.fTextField.createOverlay(this.view(), figure.getFont());
    this.fTextField.setBounds(this.fieldBounds(figure), figure.getText());
    this.fTypingTarget = figure;
}
//*************
// If the pressed figure is a TextHolder it can be edited otherwise a new text figure is created.
//*************
TextTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    /* Figure */
    var pressedFigure;
    /* TextHolder */
    var textHolder = null;
    // If the TextBox is shown and the mouse within its regions then return;
    if (this.fTextField != null && this.fTextField.isShown() && this.fTextField.getBounds().inside(x, y)) return;
    pressedFigure = this.drawing().findFigureInside(x, y);
    // If the pressed Figure is of type TextFigure, then  set textHolder to the pressed Figure unless it does not accept typing
    if (pressedFigure instanceof TextFigure) {
        textHolder = pressedFigure;
        if (!textHolder.acceptsTyping()) textHolder = null;
    }
    if (textHolder != null) {
        this.beginEdit(textHolder);
        return;
    }
    if (this.fTypingTarget != null) {
        this.editor().toolDone();
        this.endEdit();
        // this.fireViewEvent(this.fTypingTarget,"Update"); // <======================= [ Update View Event]
    } else {
        this.creationToolMouseDown(e, x, y);
        textHolder = this.createdFigure();
        this.beginEdit(textHolder);
        this.fireViewEvent(this.fTypingTarget, "Create"); // <======================= [Create View Event]
    }
    this.view().drawDrawing();
}
TextTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
TextTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}