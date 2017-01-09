/**
 * Hotdraw.js : FloatingTextArea
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A FloatingTextArea overlays an editor on top of an area in a drawing
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     4th August 2005
 * @package   websemantics/hotdraw/contrib
 */

function FloatingTextArea() {
    var argv = FloatingTextArea.arguments;
    var argc = FloatingTextArea.length;
    this.className = "FloatingTextArea";
    /* TextField */
    this.fEditWidget = null;
    /* Container */
    this.fContainer = null;
    if (argv.length >= 0) this.initFloatingTextArea();
}
//*************
// Constructor for the FloatingTextArea object
//*************
FloatingTextArea.prototype.initFloatingTextArea = function() {
    this.fEditWidget = new TextBox(0, 0, 400, 300, "Musbah", viewerMode == ASV);
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
FloatingTextArea.prototype.createOverlay = function( /* Container */ container, /* Font */ font) {
    if (font == undefined) {
        this.createOverlay(container, null);
        return;
    }
    container.add(this.fEditWidget);
    this.fEditWidget.show();
    if (font != null) this.fEditWidget.setFont(font);
    this.fContainer = container;
    this.fContainer.paintChildren(this.fContainer.textBoxg);
}
//*************
// Positions and sizes the overlay.
//*************
FloatingTextArea.prototype.setBounds = function( /* gRectangle */ r, /* String */ text) {
    var w = r.getWidth();
    var h = r.getHeight();
    this.fEditWidget.setBounds(r.x, r.y, w, h);
    // Because Batik does not support flowText dynamic update via JavaScript we use single-line TextField,..
    // The length of the textField will be changed to fit as much text as that which would fit in TextArea.
    //if(viewerMode==Batik)
    //this.fEditWidget.setBounds(r.x, r.y,w * h / this.fEditWidget.getHeight(),h );
    this.fEditWidget.show();
    this.fEditWidget.setText(text);
    this.fEditWidget.selectAll();
}
//*************
// getBounds
//*************
FloatingTextArea.prototype.getBounds = function() {
    return this.fEditWidget.getBounds();
}
//*************
// isShown
//*************
FloatingTextArea.prototype.isShown = function() {
    return this.fEditWidget.isShown();
}
//*************
// Removes the overlay.
//*************
FloatingTextArea.prototype.endOverlay = function() {
    if (this.fEditWidget == null) return;
    this.fEditWidget.hide();
    this.fContainer.remove(this.fEditWidget);
}
//*************
// Adds an action listener
//*************
FloatingTextArea.prototype.addActionListener = function( /* ActionListener */ listener) {
    this.fEditWidget.addActionListener(listener);
}
//*************
// Remove an action listener
//*************
FloatingTextArea.prototype.removeActionListener = function( /* ActionListener */ listener) {
    this.fEditWidget.removeActionListener(listener);
}
//*************
// Gets the text contents of the overlay.
//*************
/* String */
FloatingTextArea.prototype.getText = function() {
    return this.fEditWidget.getText();
}
//*************
// Gets the preferred size of the overlay.
//*************
/* Dimension */
FloatingTextArea.prototype.getPreferredSize = function( /* int */ cols) {
    return new Dimension(this.fEditWidget.getWidth(), this.fEditWidget.getHeight());
}