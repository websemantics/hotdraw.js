/**
 * Hotdraw.js : DemoAttributes
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/demo
 */
DemoAttributes.prototype = new Window();

function DemoAttributes(x, y) {
    var argv = DemoAttributes.arguments;
    var argc = DemoAttributes.length;
    /* String */
    this.name = "DemoAttributes";
    /* String */
    this.className = "DemoAttributes";
    /* Vector */
    this.selected = null;
    /* Component */
    this.imageURL = null;
    /* Component */
    this.fontComboBox = null;
    /* Component */
    this.fillColorLabel = null;
    /* Component */
    this.strokeColorLabel = null;
    /* Component */
    this.fillColorComboBox = null;
    /* Component */
    this.strokeColorComboBox = null;
    /* Component */
    this.modified = null;
    /* int */
    this.cw = 520;
    /* int */
    this.ch = 145;
    if (argv.length > 0) this.initDemoAttributes(x, y);
}
//*************
// initDemoAttributes 
//*************
DemoAttributes.prototype.initDemoAttributes = function(x, y) {
    this.initWindow(x, y, this.cw, this.ch, "Attributes & Commands", null, true);
    this.setLayout(new FlowLayout(LEFT));
    this.setToFixedSize();
    this.tabbedPane = new TabbedPane(50, 20, this.cw - 20, this.ch - 45);
    this.tabbedPane.setFont(this.getFont());
    this.tabbedPane.setAlign(X_AXIS, LEFT, TOP, 2);
    this.image = this.tabbedPane.addPane("pane3", " Image ");
    this.attributes = this.tabbedPane.addPane("pane1", " Attributes ");
    this.attributes.setLayout(new FlowLayout(LEFT, 5, 5));
    this.image.setLayout(new FlowLayout(LEFT, 5, 5));
    this.attributes.setInsets(3, 3, 7, 3);
    this.image.setInsets(3, 3, 7, 3);
    // Fill Color Combo Box 
    this.fillColorLabel = new Label(0, 0, 0, 0, "fillColor", "Fill:");
    this.attributes.add(this.fillColorLabel);
    this.fillColorComboBox = new ColorComboBox("fillColorComboBox");
    this.attributes.add(this.fillColorComboBox).addActionListener(this);
    // Stroke Color Combo Box   
    this.strokeColorLabel = new Label(0, 0, 0, 0, "strokeColor", "Pen:");
    this.attributes.add(this.strokeColorLabel);
    this.strokeColorComboBox = new ColorComboBox("strokeColorComboBox");
    this.attributes.add(this.strokeColorComboBox).addActionListener(this);
    // Font
    this.attributes.add(new Label(0, 0, 0, 0, "font", "Font:"));
    this.fontComboBox = new ComboBox(0, 0, 0, 0, "fontComboBox");
    this.fontComboBox.setFont(this.getFont());
    this.fontComboBox.addTextItem("Times New Roman");
    this.fontComboBox.addTextItem("Monotype Corsiva");
    this.fontComboBox.addTextItem("Comic Sans MS");
    this.fontComboBox.addTextItem("Sans-serif");
    this.fontComboBox.addTextItem("Helvetica");
    this.fontComboBox.addTextItem("Monospace");
    this.fontComboBox.addTextItem("Marigold");
    this.fontComboBox.addTextItem("Georgia");
    this.fontComboBox.addTextItem("Arial");
    this.attributes.add(this.fontComboBox).addActionListener(this);
    // Image
    //
    this.image.add(new Label(0, 0, 0, 0, "url", "URL:"));
    this.imageURL = new TextBox(0, 0, this.cw - 90, 100, "", false);
    this.image.add(this.imageURL).setFont(this.getFont());
    this.image.add(new Button(0, 0, 0, 0, "applyURL", "  Apply   ")).addActionListener(this);
    this.add(this.tabbedPane);
}
//*************
// paint 
//*************
DemoAttributes.prototype.paint = function( /* Graphics */ g) {
    this.paintDemoAttributes(g);
}
//*************
// paintDemoAttributes 
//*************
DemoAttributes.prototype.paintDemoAttributes = function( /* Graphics */ g) {
    this.paintComponent(g);
}
//*************
// open 
//*************
DemoAttributes.prototype.open = function( /* Vector */ selected) {
    this.selected = selected;
    if (selected.size() <= 0) {
        this.changeStrokeColor("none");
        this.changeFillColor("none");
        this.changeImageURL("");
        return;
    }
    var figure = this.selected.elementAt(0);
    if (figure instanceof ImageFigure) {
        this.changeStrokeColor("none");
        this.changeFillColor("none");
        this.changeImageURL(figure.getURL());
    } else {
        this.changeStrokeColor(figure.getAttribute("FrameColor"));
        this.changeFillColor(figure.getAttribute("FillColor"));
        this.changeImageURL("");
    }
    if (figure instanceof TextFigure || this.figure instanceof TextAreaDecorator) {
        this.changeFontName(figure.getFont());
    }
}
//*************
// recalc 
//*************
DemoAttributes.prototype.recalc = function() {
    this.recalcDemoAttributes();
}
//*************
// recalcDemoAttributes 
//*************
DemoAttributes.prototype.recalcDemoAttributes = function() {
    this.recalcWindow();
}
//*************
// changeFont
//*************
DemoAttributes.prototype.changeFontName = function( /* String */ font) {
    this.fontComboBox.changeToText(font.getName());
}
//
// Appearance Pane
//
//*************
// changeStrokeColor
//*************
DemoAttributes.prototype.changeStrokeColor = function( /* Color */ strokeColor) {
    this.strokeColorComboBox.changeToColor(strokeColor);
}
//*************
// changeFillColor
//*************
DemoAttributes.prototype.changeFillColor = function( /* Color */ fillColor) {
    this.fillColorComboBox.changeToColor(fillColor);
}
//
// General Pane
//
//*************
// changeImageURL
//*************
DemoAttributes.prototype.changeImageURL = function( /* String */ url) {
    this.imageURL.setText(url);
}
//*************
// getImageURL
//*************
DemoAttributes.prototype.getImageURL = function() {
    return this.imageURL.getText();
}
//*************
// actionPerformed 
//*************
DemoAttributes.prototype.actionPerformed = function( /* ActionEvent */ e) {
    this.actionPerformedDemoAttributes(e);
}
//*************
// actionPerformedDemoAttributes 
//*************
DemoAttributes.prototype.actionPerformedDemoAttributes = function( /* ActionEvent */ e) {
    this.actionPerformedWindow(e);
    var src = e.source;
    var comm = e.getActionCommand();
    if (this.selected.size() <= 0) return;
    if (comm == "itemClicked") {
        var name = src.name;
        if (name == "fillColorComboBox") this.setAttributeToSelected("FillColor", src.getCurrentComponent().getColor());
        if (name == "strokeColorComboBox") this.setAttributeToSelected("FrameColor", src.getCurrentComponent().getColor());
        if (name == "fontComboBox") this.setAttributeToSelected("FontName", src.getCurrentComponent().name);
    }
    if (comm == "buttonClicked") {
        if (src.name == "applyURL") {
            /* Enumeration */
            var k = new Enumerator(this.selected);
            while (k.hasMoreElements()) {
                var imageFigure = k.nextElement();
                if (imageFigure instanceof ImageFigure) imageFigure.setURL(this.getImageURL());
            }
        }
    }
}
//*************
// actionPerformedDemoAttributes 
//*************
DemoAttributes.prototype.setAttributeToSelected = function( /* String */ name, /* String */ value) {
    /* Enumeration */
    var k = new Enumerator(this.selected);
    while (k.hasMoreElements()) k.nextElement().setAttribute(name, value);
}