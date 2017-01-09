/**
 * Hotdraw.js :
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
 * @since     4th August 2005
 * @package   websemantics/hotdraw/contrib
 */

TextAreaTool.prototype = new CreationTool();

function TextAreaTool( /* DrawingView */ view, /* Figure */ prototypeFig) {
    var argv = TextAreaTool.arguments;
    var argc = TextAreaTool.length;
    this.className = "TextAreaTool";

    /* FloatingTextField */
    this.fTextAreaField = null;
    /* TextHolder */
    this.fTypingTarget = null;
    /* int */
    this.textHolderDefaultWidth = 300;
    /* int */
    this.textHolderDefaultHeight = 300;
    
    if (argv.length > 0) 
    	this.initTextAreaTool(view, prototypeFig);
}

TextAreaTool.prototype.initTextAreaTool = function(view, prototypeFig) {
		// Summary:
		// Initializes a TextAreaTool with the given prototype.
    this.initCreationTool(view, prototypeFig);
}

TextAreaTool.prototype.activate = function() {
		// Summary:
		// Sets the text cursor.
    this.activateTextAreaTool();
}
TextAreaTool.prototype.activateTextAreaTool = function() {
    this.activateCreationTool();
    this.view().setCursor("text");
}

TextAreaTool.prototype.deactivate = function() {
    this.deactivateTextAreaTool();
}
TextAreaTool.prototype.deactivateTextAreaTool = function() {
    this.deactivateCreationTool();
    this.endEdit();
}

/* Rectangle */
TextAreaTool.prototype.fieldBounds = function( /* TextHolder */ figure) {
    /* Rectangle */
    var box = figure.displayBox();
    return new gRectangle(box.x, box.y, box.width, box.height);
}

TextAreaTool.prototype.endEdit = function( /* TextHolder */ figure) {
    if (this.fTypingTarget != null) {
        if (this.fTextAreaField.getText().length > 0) this.fTypingTarget.setText(this.fTextAreaField.getText());
        else this.drawing().remove(this.fTypingTarget);
        this.fTypingTarget = null;
        this.fTextAreaField.endOverlay();
    }
}

TextAreaTool.prototype.beginEdit = function( /* TextHolder */ figure) {
    if (this.fTextAreaField == null) this.fTextAreaField = new FloatingTextArea();
    if (figure != this.fTypingTarget && this.fTypingTarget != null) this.endEdit();
    this.fTextAreaField.createOverlay(this.view(), figure.getFont());
    this.fTextAreaField.setBounds(this.fieldBounds(figure), figure.getText());
    this.fTypingTarget = figure;
}

TextAreaTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
		// Summary:
		// If the pressed figure is a TextHolder it can be edited otherwise a new 
		// text figure is created.

    /* Figure */
    var pressedFigure;
    /* TextHolder */
    var textHolder = null;
    // If the TextBox is shown and the mouse within its regions then return;
    if (this.fTextAreaField != null && this.fTextAreaField.isShown() && this.fTextAreaField.getBounds().inside(x, y)) return;
    pressedFigure = this.drawing().findFigureInside(x, y);
    if (pressedFigure instanceof TextAreaDecorator) {
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
    } else {
        if ((pressedFigure instanceof EllipseFigure || pressedFigure instanceof RectangleFigure || pressedFigure instanceof RoundRectangleFigure || pressedFigure instanceof PolygonFigure) && !(pressedFigure instanceof ImageFigure)) {
            textHolder = this.createFigure();
            textHolder.decorate(pressedFigure);
            this.drawing().replace(pressedFigure, textHolder); // <== [ Replace Figure with TextArea ]
            this.editor().toolDone();
            return; // <===[ADDED: delete if you want to edit when the figure is created]
            this.beginEdit(textHolder);
        } else {
            if (pressedFigure != null) alert("Invalid Figure Type :" + pressedFigure);
            this.editor().toolDone();
        }
    }
    this.view().drawDrawing();
}

TextAreaTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}

TextAreaTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}