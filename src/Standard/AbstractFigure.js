/**
 * Hotdraw.js : AbstractFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * AbstractFigure provides default implementations for the Figure interface.
 * Design Patterns: Template Method 
 * Template Methods implement default and invariant behavior for figure subclasses.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/standard
 */

// AbstractFigure.prototype = new Figure(); 

function AbstractFigure(){  /* implements Figure */

  var argv = AbstractFigure.arguments;
  var argc = AbstractFigure.length;
  /* String */         this.className="AbstractFigure";

  // Each Figure type (i.e. LineFigure , PolyFigure, etc) should have a counter that keeps track of the number 
  // available of that figure of that type. I
  /* String */         this.id =null;              // Ex: LineFigure_1, TextFigure_10, PolyLine_4, etc
  /* int */            this.myCount=0;             // The count of the current figure
  /* Array */          this.counter=new Array(0);  // An array of counters used to count different types of figures

  // The listeners for a figure's changes.
  /* Listener */       this.fListener=null;
  /* Shape */          this.shape=null;        // saves the shapes from svgDraw2D library,...
  /* Boolean */        this.created=false;     // Turn to true once the svg content of this figure has been created.
  
  if(argv.length>0)
    this.initAbstractFigure();
}
//*************
// initAbstractFigure
//*************
AbstractFigure.prototype.initAbstractFigure = function(){
  this.obtainFigureId();
}
//*************
// getId
//*************
AbstractFigure.prototype.getId = function(){
  return this.id;
}
//*************
// setId
//*************
AbstractFigure.prototype.setId = function(id){
  this.id=id;
}
//*************
// Private: 
// getComponentId : Returns a unique Id that starts with the figure type (i.e. LineFigure, etc) and a number
//                  Ex: LineFigure_1, TextFigure_10, PolyLine_4, etc
//
//
//*************
AbstractFigure.prototype.obtainFigureId= function(){
  // ex: this.counter["LineFigure"]++
  var className = this.className;
  if(this.id==null) {
    if(this.counter[className] == undefined )this.counter[className]=0;
     else  this.counter[className]++;
   this.myCount = this.counter[className];
   
   this.id=this.className+"_"+this.myCount;
  }
  return this.id;
}
//*************
// Moves the figure by the given offset.
//*************
AbstractFigure.prototype.moveBy = function(dx,dy){
   //this.willChange();
   this.basicMoveBy(dx, dy);
   this.changed();
}
//*************
// Get Shape
//*************
/* Shape */ AbstractFigure.prototype.getShape = function(){
  return this.shape;
}
//*************
// isCreated
//*************
/* Boolean */ AbstractFigure.prototype.isCreated = function(){
  return (this.created && this.shape != null);
}
//*************
// createSVGContent
//*************
AbstractFigure.prototype.createSVGContent = function(/* Graphics */ g){
}
//*************
// draw
//*************
AbstractFigure.prototype.draw = function(/* Graphics */ g){
  this.drawAbstractFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
AbstractFigure.prototype.drawAbstractFigure = function(/* Graphics */ g){
 if(!this.created){
     this.created=true;
		 this.createSVGContent(g);
		}
 // It's assumed that the figure content (svg content,..this.shape),..has been created before this point
 // So no checks were performed to ensure that this.shape is not null (for performance)
 if(g != undefined) g.addChild(this.shape.getNode());
}
//*************
// Moves the figure. 
//
// This is the method that subclasses override. 
// Clients usually call displayBox.
//*************
AbstractFigure.prototype.basicMoveBy = function(dx,dy){
}
//*************
// Changes the display box of a figure.
//
//It changes the display box and announces the corresponding change.
//
// Forms:
// ======
// (1) Rectangle displayBox ();
// (2) void displayBox (Point origin, Point corner);
// (3) void displayBox (Rectangle r);
//*************
/* Rectangle OR void */ AbstractFigure.prototype.displayBox = function(/* Point */ origin, /* Point */ corner){
if(origin==undefined && corner == undefined) return this.ret_displayBox(); 
 if(origin instanceof gRectangle){
 var r=origin;
 this.displayBox(new Point(r.x, r.y), new Point(r.x+r.width, r.y+r.height));
 return;
}
this.willChange();
this.basicDisplayBox(origin, corner);
this.changed();
}
//*************
// Sets the display box of a figure.
//
// This is the method that subclassers override. Clients usually call displayBox.
//*************
AbstractFigure.prototype.basicDisplayBox = function(/* Point */ origin, /* Point */ corner){
}
//*************
// Gets the display box of a figure. [from Java to JavaScript,..renamed to ret_displayBox(
//
// This is the method that subclassers override.
//*************
/* Rectangle */ AbstractFigure.prototype.ret_displayBox = function(){
}
//*************
// Returns the handles of a Figure that can be used to manipulate some of its attributes.
//
// This is the method that subclassers override.
//*************
/* Vector */ AbstractFigure.prototype.handles = function(){
}
//*************
// Returns an Enumeration of the figures contained in this figure.
//*************
/* FigureEnumeration*/ AbstractFigure.prototype.figures = function(){
var figures = new Vector();
 figures.addElement(this);
return new FigureEnumerator(figures); 
}
//*************
// Gets the size of the figure. A convenience method.
//*************
/* Dimension */AbstractFigure.prototype.size= function(){
return new Dimension(this.displayBox().width, this.displayBox().height);
}
//*************
// Checks if the figure is empty.
//*************
/* boolean */ AbstractFigure.prototype.isEmpty = function(){
  return (this.size().width < 3) || (this.size().height < 3);
}
//*************
// Returns the figure that contains the given point.
//
// In contrast to containsPoint it returns its innermost figure that contains the point.
//*************
/* Figure */ AbstractFigure.prototype.findFigureInside = function(x,y){
if (this.containsPoint(x, y)) return this;
  return null;
}
//*************
// Checks if a point is inside the figure.
//*************
AbstractFigure.prototype.containsPoint = function(x,y){
  return this.displayBox().contains(x, y);
}
//*************
// Checks whether the given figure is contained in this figure.
//*************
/* boolean */AbstractFigure.prototype.includes = function(/* Figure */ figure){
  return figure == this;
}
//*************
// Decomposes a figure into its parts. It returns a Vector that contains itself.
//*************
/* FigureEnumeration*/ AbstractFigure.prototype.decompose = function(){
  figures = new Vector();
  figures.addElement(this);
  return new FigureEnumerator(figures); 
}
//*************
// Sets the Figure's container and registers the container as a figure change listener. 
//
// A figure's container can be any kind of FigureChangeListener. 
// A figure is not restricted to have a single container.
//*************
AbstractFigure.prototype.addToContainer = function(/* FigureChangeListener */ c){
  this.addFigureChangeListener(c);
  this.invalidate();
}
//*************
// Removes a figure from the given container and unregisters it as a change listener.
//*************
AbstractFigure.prototype.removeFromContainer = function(/* FigureChangeListener */ c){
  this.removeFigureChangeListener(c);
  this.changed();
}
//*************
// Adds a listener for this figure.
//*************
AbstractFigure.prototype.addFigureChangeListener = function(/* FigureChangeListener */ l){
  //this.fListener = FigureChangeEventMulticaster.add(this.fListener, l);  [Original]
  //this.fListener = (new FigureChangeEventMulticaster).add(this.fListener, l); [Old]
  this.fListener = figureChangeEventMulticaster.add(this.fListener, l);
}
//*************
// Removes a listener for this figure.
//*************
AbstractFigure.prototype.removeFigureChangeListener = function(/* FigureChangeListener */ l){
  //this.fListener = FigureChangeEventMulticaster.remove(this.fListener, l); [Original]
  //this.fListener = (new FigureChangeEventMulticaster).remove(this.fListener, l); [Old]
  this.fListener = figureChangeEventMulticaster.remove(this.fListener, l); 
}
//*************
// Gets the figure's listners.
//*************
/* FigureChangeListener */AbstractFigure.prototype.listener = function(){
  return this.fListener;
}
//*************
// A figure is released from the drawing.
//
// Never call this method directly. Release notifies its listeners.
//*************
AbstractFigure.prototype.release = function(){
  this.abstractFigureRelease();
}
//*************
// A figure is released from the drawing.
//
// Never call this method directly. Release notifies its listeners.
//*************
AbstractFigure.prototype.abstractFigureRelease = function(){
  if (this.fListener != null)  	 									 		 		
      this.fListener.figureRemoved(new FigureChangeEvent(this));
  this.dispose();
}
//*************
// Delete a shape
//*************
AbstractFigure.prototype.dispose = function(){this.disposeAbstractFigure();}

AbstractFigure.prototype.disposeAbstractFigure = function(){
  if(this.shape!=null)this.shape.dispose();
  this.shape=null;
}
//*************
// Invalidates the figure.
//
// This method informs the listeners that the figure's current display box is invalid and should be refreshed.
//*************
AbstractFigure.prototype.invalidate = function(){
}
//*************
// Informes that a figure is about to change something that affects the contents of its display box.
//*************
AbstractFigure.prototype.willChange = function(){
}
//*************
// Informs that a figure changed the area of its display box.
//*************
AbstractFigure.prototype.changed = function(){
  this.changedAbstractFigure();
}
//*************
// changedAbstractFigure
//*************
AbstractFigure.prototype.changedAbstractFigure = function(){
  if (this.fListener != null)
      this.fListener.figureChanged(new FigureChangeEvent(this));
}
//*************
// Gets the center of a figure. A convenice method that is rarely overridden.
//*************
/* Point */ AbstractFigure.prototype.center = function(){
  // return Geom.center(displayBox()); <=================================== [NOT IMP]
}
//*************
// Checks if this figure can be connected. By default AbstractFigures can be connected.
//*************
AbstractFigure.prototype.canConnect = function(){
 return true;
}
//*************
// Returns the connection inset. 
//
// The connection inset defines the area where the display box of a
// figure can't be connected. By default the entire display box can be connected.
//*************
/* Insets */AbstractFigure.prototype.connectionInsets = function(){
return new Insets(0, 0, 0, 0);
}
//*************
// Returns the Figures connector for the specified location.
//*************
/* Connector */ AbstractFigure.prototype.connectorAt = function(x,y){
//return new ChopBoxConnector(this); <=================================== [NOT IMP]
}
//*************
// Sets whether the connectors should be visible.
//*************
AbstractFigure.prototype.connectorVisibility = function(/* boolean */isVisible){
}
//*************
// Returns the locator used to located connected text.
//*************
/* Locator */ AbstractFigure.prototype.connectedTextLocator = function(/* Figure */ text){
// return RelativeLocator.center(); <=================================== [NOT IMP]
}
//*************
// Returns the named attribute or null if a figure doesn't have an attribute.
//
// By default figures don't have any attributes getAttribute returns null.
//*************
/* Object */ AbstractFigure.prototype.getAttribute = function(/* String */ name){
  return null;
}
//*************
// Sets the named attribute to the new value. 
//
// By default figures don't have any attributes and the request is ignored.
//*************
AbstractFigure.prototype.setAttribute = function(/* String */ name, /* Object */ value ){
}
//*************
// Clones a figure.
//
// Creates a clone by using the storable mechanism to flatten the Figure to stream followed by
// resurrecting it from the same stream.
//*************
/* Object */ AbstractFigure.prototype.clone = function(){
  var what=this;
  return new cloneObject(this);
}
//*************
// Stores the Figure to a StorableOutput.
//*************
AbstractFigure.prototype.write = function(/*StorableOutput */ dw){

}
//*************
// read
//*************
AbstractFigure.prototype.read = function(/* StorableInput dr */){
 
}
//*************
// serialize
//*************
/* String */ AbstractFigure.prototype.serialize = function(){
return this.serializeAbstractFigure();
}
//*************
// serializeAbstractFigure
//*************
/* String */ AbstractFigure.prototype.serializeAbstractFigure = function(){

  var db = this.displayBox();

  var ret = new Hashtable;
  var id  = this.id;//.replace(/:/g,"|");
  ret.put("class",this.className);
  ret.put("id",id);
  ret.put("x",db.getX());
  ret.put("y",db.getY());
  ret.put("w",db.getWidth());
  ret.put("h",db.getHeight());

  return ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */ AbstractFigure.prototype.deserialize = function(/* String */ str){
return this.deserializeAbstractFigure(str);
}
//*************
// deserializeAbstractFigure
// return the Hashtable to save time,.....
//*************
/* Hashtable */ AbstractFigure.prototype.deserializeAbstractFigure = function(/* String */ str){

  var inp = new Hashtable;
      inp.deserialize(str);
  		
  var id       = inp.get("id");//.replace(/|/g,":");
  this.setId(id);
  var x=parseFloat(inp.get("x"));
  var y=parseFloat(inp.get("y"));
  var w=parseFloat(inp.get("w"));
  var h=parseFloat(inp.get("h"));

  this.displayBox(new Point(x,y),new Point(x+w,y+h));

  return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */ AbstractFigure.prototype.serializeAsRDF = function(/* String */ contextUri,command){
  return this.serializeAsRDFAbstractFigure(contextUri,command);
}
//*************
// serializeAsRDFAbstractFigure [NEW: 17-3-2006]
//*************
/* String */ AbstractFigure.prototype.serializeAsRDFAbstractFigure = function(/* String */ contextUri,command){

  var content  =  "";
  var db       =  this.displayBox();
  var nodeName =  this.shape.getNode().nodeName;
  var resource =  "<"+contextUri+nodeName+"_"+this.myCount+">"; // Ex: <http://svgcwe/workspace_1/context_1/rect_0>
  var history  =  "<"+contextUri+nodeName+"_"+this.myCount+"/historyNode_"+this.historyNodeCounter+"> ";
  var author   =  this.getAuthor(); // <==== author has to be replaced by its resource.
  var id       = this.id;
  var date     = this.date.toISO8601String(6);

  if(this.historyNodeCounter==0){
      content  = resource+" rdf:type svg:"+nodeName+" . ";
      content += resource+" svgcwe:owned-by <"+contextUri+"> . ";
  		content += history+" dc:Creator \""+author+"\". ";          
  	} else
  	  content += history+" dc:Contributor \""+author+"\". ";
      //content += history+" dc:Date \""+date+"\"^^xsd:DateTime . "; // W£C Date and Time Formats (and DateTime Data Type of XML Sxhema)
      content += history+" dc:Date \""+date+"\". "; // W£C Date and Time Formats (and DateTime Data Type of XML Sxhema)
  		content += history+" rdf:type svgcwe:HistoryNode . ";
      content += history+" svgcwe:owned-by "+resource+" . ";
      content += history+" svgcwe:command \""+command+"\" . ";
      content += history+" svg:id \""+id+"\" . ";
      content += history+" svg:x "+db.getX()+" . ";
      content += history+" svg:y "+db.getY()+" . ";
      content += history+" svg:width "+db.getWidth()+". ";
      content += history+" svg:height "+db.getHeight()+" . ";

  		this.historyNodeCounter++;

  return content;
}
//*************
// toString
//*************
AbstractFigure.prototype.toString = function(){
  return this.className;
}

//******************************************************************8
// Helping Function
//******************************************************************8
function cloneObject(what) {
    for (i in what) {
        if (typeof what[i] == 'object') {
            this[i] = new cloneObject(what[i]);
        }
        else
            this[i] = what[i];
    }
}
