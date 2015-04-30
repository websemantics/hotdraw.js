/**
 * Hotdraw.js : FloatingTextField
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A text field overlay that is used to edit a TextFigure.
 * A FloatingTextField requires a two step initialization:
 * In a first step the overlay is created and in a second step it can be positioned.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     4th August 2005
 * @package   websemantics/hotdraw/util
 */

// FloatingTextField.prototype= new Object(); 

function FloatingTextField() {
    var argv = FloatingTextField.arguments;
    var argc = FloatingTextField.length;
    this.className = "FloatingTextField";
    /* TextField */
    this.fEditWidget = null;
    /* Container */
    this.fContainer = null;
    if (argv.length >= 0) this.initFloatingTextField();
}
//*************
// Initializes a FloatingTextField
//*************
FloatingTextField.prototype.initFloatingTextField = function() {
    this.fEditWidget = new TextBox(0, 0, 400, 100, "Text", false);
    this.fEditWidget.setAbsolutePosition(true);
    //this.fEditWidget.paint();
}
//*************
// Creates the overlay for the given Component.
// OR
// Creates the overlay for the given Container using a specific font.
//
// Forms:
// ======
// (1) createOverlay( Container  container)
// (2) createOverlay( Container container, Font font)
//*************
FloatingTextField.prototype.createOverlay = function( /* Container */ container, /* Font */ font) {
    if (font == undefined) {
        this.createOverlay(container, null);
        return;
    }
    this.fEditWidget.show();
    container.add(this.fEditWidget);
    if (font != null) this.fEditWidget.setFont(font);
    this.fContainer = container;
    this.fContainer.paintChildren(this.fContainer.textBoxg);
    this.fEditWidget.setStyledModeOn();
    this.fEditWidget.changeSelectionRectStyle("red", "none", 0); //<===============[ TextBox Style ]
}
//*************
// Positions the overlay.
//*************
FloatingTextField.prototype.setBounds = function( /* gRectangle */ r, /* String */ text) {
    this.fEditWidget.setBounds(r.x, r.y, r.width, r.height);
    this.fEditWidget.show();
    this.fEditWidget.setText(text);
    this.fEditWidget.selectAll();
}
//*************
// getBounds
//*************
FloatingTextField.prototype.getBounds = function() {
    return this.fEditWidget.getBounds();
}
//*************
// isShown
//*************
FloatingTextField.prototype.isShown = function() {
    return this.fEditWidget.isShown();
}
//*************
// Removes the overlay.
//*************
FloatingTextField.prototype.endOverlay = function() {
    if (this.fEditWidget == null) return;
    this.fEditWidget.hide();
    this.fContainer.remove(this.fEditWidget);
}
//*************
// Adds an action listener
//*************
FloatingTextField.prototype.addActionListener = function( /* ActionListener */ listener) {
    this.fEditWidget.addActionListener(listener);
}
//*************
// Remove an action listener
//*************
FloatingTextField.prototype.removeActionListener = function( /* ActionListener */ listener) {
    this.fEditWidget.removeActionListener(listener);
}
//*************
// Gets the text contents of the overlay.
//*************
/* String */
FloatingTextField.prototype.getText = function() {
    return this.fEditWidget.getText();
}
//*************
// Gets the preferred size of the overlay.
//*************
/* Dimension */
FloatingTextField.prototype.getPreferredSize = function( /* int */ cols) {
    return this.fEditWidget.getPreferredSize(cols);
}