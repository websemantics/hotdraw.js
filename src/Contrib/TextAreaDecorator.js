/**
 * Hotdraw.js : TextAreaDecorator (NEW)
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 * 
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     9th August 2005
 * @package   websemantics/hotdraw/contrib
 */

TextAreaDecorator.prototype= new DecoratorFigure(); 

function TextAreaDecorator(/* Figure */ figure){ 
var argv = TextAreaDecorator.arguments;
var argc = TextAreaDecorator.length;
/* String */ this.className="TextAreaDecorator";
/* boolean */       this.fIsReadOnly=false;
/* String */        this.fText="SVG HotDraw is a two-dimensional graphics framework for structured drawing editors that is written in JavaScript for SVG. It has been used to create many different editors from CASE tools to a HyperCard clone. You can easily create new figures and special manipulation tools for your drawings.";
/* String */        this.fgCurrentFontName="Helvetica";
/* int */           this.fgCurrentFontSize=14;
/* int */           this.fgCurrentFontStyle="Normal";
/* Font */          this.fFont=this.createCurrentFont();
/* FlowParagraph */ this.para=null;
if(argv.length>0)this.initTextAreaDecorator(figure);
}
//*************
// Constructs a TextAreaDecorator and decorates the passed in figure.
//*************
TextAreaDecorator.prototype.initTextAreaDecorator = function(figure){
this.initDecoratorFigure(figure);
this.setAttribute("FrameColor","none");
this.setAttribute("FillColor","black");
}
//*************
// border
//*************
/* Point */ TextAreaDecorator.prototype.border = function(){
return new Point(0,0);
}
//*************
// getOpacity
//*************
TextAreaDecorator.prototype.getOpacity = function(){
return this.fComponent.shape.getOpacity();
}
//*************
// getOpacity
//*************
TextAreaDecorator.prototype.setOpacity = function(o){
this.fComponent.shape.setOpacity(o);
}
//*************
// getOpacity
//*************
TextAreaDecorator.prototype.setTextAlign = function(ta){
this.shape.setTextAlign(ta);
}
//*************
// Forwards handles to its contained figure.
//*************
/* Vector */ TextAreaDecorator.prototype.handles = function(){
return this.handlesTextAreaDecorator();
}
//*************
// Forwards handles to its contained figure.
//*************
/* Vector */ TextAreaDecorator.prototype.handlesTextAreaDecorator= function(){
var handles = this.handlesDecoratorFigure();
    handles.addElement(new FontSizeHandle(this, new RelativeLocator(0.5, 0.5)));
    handles.addElement(new OpacityHandle(this, new RelativeLocator(0.45, 0.5)));
    handles.addElement(new TextAlignHandle(this, new RelativeLocator(0.55, 0.5)));
return handles;
}
//*************
// createSVGContent
//*************
TextAreaDecorator.prototype.createSVGContent = function(/* Graphics */ g){
/* gRectangle */ var r = this.displayBox();
this.shape=g.drawTextView(0,0, r.width,r.height,null,this.fComponent.shape);
this.para = this.shape.addParagraph(this.fText);
this.updateShapeAttributes();
}
//*************
// Forwards draw to its contained figure.
//*************
TextAreaDecorator.prototype.draw = function(/* Graphics */ g){
this.drawTextAreaDecorator(g);
}
//*************
// Forwards draw to its contained figure.
//*************
TextAreaDecorator.prototype.drawTextAreaDecorator = function(/* Graphics */ g){
this.drawDecoratorFigure(g);
// Update the location and the size od the text figure
this.shape.setFont(this.getFont());
this.shape.updateRegionShapeProperties(this.fComponent.shape);
}
//*************
// Update the figure attributes (i.e. color, strokeWidth, etc)
//*************
TextAreaDecorator.prototype.updateShapeAttributes = function(){
this.updateShapeAttributesTextAreaDecorator();
}
//*************
// updateShapeAttributesTextAreaDecorator
//*************
TextAreaDecorator.prototype.updateShapeAttributesTextAreaDecorator = function(){

if(this.isCreated())this.shape.setFont(this.getFont()); 
if(this.isCreated())this.shape.setColor(this.getAttribute("FillColor")); 
if(this.isCreated())this.shape.setStrokeColor(this.getAttribute("FrameColor")); 
if(this.isCreated())this.shape.setOpacity(this.getAttribute("Opacity"));
if(this.isCreated())this.shape.setStrokeWidth(this.getAttribute("FrameWidth"));

if(this.FComponent==null)return;

if(this.fComponent.isCreated())this.fComponent.shape.setColor(this.getAttribute("FillColor")); 
if(this.fComponent.isCreated())this.fComponent.shape.setStrokeColor(this.getAttribute("FrameColor")); 
if(this.fComponent.isCreated())this.fComponent.shape.setOpacity(this.getAttribute("Opacity"));
if(this.fComponent.isCreated())this.fComponent.shape.setStrokeWidth(this.getAttribute("FrameWidth"));
}
//*************
// Forwards the connection insets to its contained figure..
//*************
/* Insets */TextAreaDecorator.prototype.connectionInsets = function(){
return this.connectionInsetsTextAreaDecorator();
}
/* Insets */TextAreaDecorator.prototype.connectionInsetsTextAreaDecorator = function(){
/* Insets */ var i = this.connectionInsetsDecoratorFigure();
return i;
}
//*************
// Forwards displayBox to its contained figure.
//*************
/* gRectangle */ TextAreaDecorator.prototype.displayBox = function(){
/* gRectangle */ var r = this.fComponent.displayBox();
 r.grow(this.border().x, this.border().y);
return r;
}
//*************
// Gets the font.
//*************
/* Font */ TextAreaDecorator.prototype.getFont = function(){
return this.fFont;
}
//*************
// Sets the font.
//*************
TextAreaDecorator.prototype.setFont = function(/* Font */ newFont){
this.willChange();
this.fFont = newFont;
this.shape.setFont(this.fFont);
this.changed(); 
}
//*************
// 
//*************
TextAreaDecorator.prototype.changed = function(){
// Needs implementation
}
//*************
// Creates the current font to be used for new text figures.
//*************
/* Font */ TextAreaDecorator.prototype.createCurrentFont = function(){
return new Font(this.fgCurrentFontName, this.fgCurrentFontStyle, this.fgCurrentFontSize+"pt");
}
//*************
// Sets the current font name
//*************
TextAreaDecorator.prototype.setCurrentFontName = function(/* String */ name){
this.fgCurrentFontName = name;
}
//*************
// Sets the current font size.
//*************
TextAreaDecorator.prototype.setCurrentFontSize = function(/* int */ size){
this.fgCurrentFontSize = size;
}
//*************
// Sets the current font style.
//*************
TextAreaDecorator.prototype.setCurrentFontStyle = function(/* int */ style){
this.fgCurrentFontStyle = style;
}
//*************
// A text figure understands the "FontSize", "FontStyle", and "FontName" attributes.
//*************
/* Object! or not */ TextAreaDecorator.prototype.getAttribute = function(/* String */ name){
/* Font */ var font = this.getFont();
  if (name=="FontSize")return font.getSize();
  if (name=="FontStyle")return font.getStyle();
  if (name=="FontName")return font.getName();
return this.getAttributeAttributeFigure(name);
}
//*************
// A text figure understands the "FontSize", "FontStyle", and "FontName" attributes.
//*************
TextAreaDecorator.prototype.setAttribute = function(/* String */ name, /* Object */ value){
/* Font */ var font = this.getFont();
 if (name=="FontSize")
   this.setFont(new Font(font.getName(), font.getNamedStyle(),parseInt(value)) ); 
 else if (name=="FontStyle") {
 font.setStyle(parseInt(value));
 this.setFont(new Font(font.getName(), font.getNamedStyle(), font.getSize()) );
 }
 else if (name=="FontName")
   this.setFont(new Font(value, font.getNamedStyle(), font.getSize()) );
 else
	this.setAttributeAttributeFigure(name, value);
}
//*************
// Gets the text shown by the text figure.
//*************
/* String */ TextAreaDecorator.prototype.getText = function(){
return this.fText;
}
//*************
// Sets the text shown by the text figure.
//*************
TextAreaDecorator.prototype.setText = function(/* String */ newText){

 if (newText!=this.fText) {
  this.willChange();
  this.fText = newText;
	 if(this.para!=null)this.para.setText(newText);
  this.changed();
 }
}
//*************
// Returns the figure that contains the given point.
//
// In contrast to containsPoint it returns its innermost figure that contains the point.
//*************
/* Figure */ TextAreaDecorator.prototype.findFigureInside = function(x,y){
if (this.containsPoint(x, y)) return this;
return null;
}
//*************
// Tests whether the figure accepts typing.
//*************
TextAreaDecorator.prototype.acceptsTyping = function(){
return !this.fIsReadOnly;
}
//*************
// Forwards draw to its contained figure.
//*************
TextAreaDecorator.prototype.clone = function(){
return new TextAreaDecorator(null);
}