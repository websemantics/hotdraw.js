/**
 * Hotdraw.js : PolygonScaleHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 * 
 * A Handle to scale and rotate a PolygonFigure
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     4th August 2005
 * @package   websemantics/hotdraw/contrib
 */

PolygonScaleHandle.prototype= new AbstractHandle();  

function PolygonScaleHandle(/* PolygonFigure */ owner){
var argv = PolygonScaleHandle.arguments;
var argc = PolygonScaleHandle.length;
this.className="PolygonScaleHandle";
/* Point */   this.fOrigin=null;        
/* Point */   this.fCurrent=null;        
/* Polygon */ this.fOrigPoly=null;        
if(argv.length>0)this.initPolygonScaleHandle(owner);
}
//*************
// Initializes the PolygonScaleHandle 
//*************
PolygonScaleHandle.prototype.initPolygonScaleHandle = function(owner){
this.initAbstractHandle(owner);
this.color="green";
}
//*************
// Create SVG Content
//*************
PolygonScaleHandle.prototype.createSVGContent = function(/* Graphics */ g){
  /* Rectangle */ var r = this.displayBox();
	g.setColor(this.color);
  this.shape=g.drawOval(r.x+r.width/2, r.y+ r.height/2, r.width, r.height);
	this.shape.setStrokeWidth(0.5);
  this.shape.setStrokeColor("black");
	this.shape.setCursor(this.getCursorName());
}
//*************
// Locates 
//*************
/* Point */ PolygonScaleHandle.prototype.locate = function(){
  if (this.fCurrent != null)
      return this.fCurrent;
    else
      return this.getOrigin();
}
//*************
// Tracks the start of the interaction. The default implementation does nothing.
//*************
PolygonScaleHandle.prototype.invokeStart = function(/* int */ x, /* int */ y, /* Drawing */ drawing){
this.fOrigPoly = this.owner().getPolygon();
this.fOrigin = this.getOrigin();
this.fCurrent = new Point(this.fOrigin.x, this.fOrigin.y);
}
//*************
// Tracks a step of the interaction.
//*************
PolygonScaleHandle.prototype.invokeStep = function(/* int */ dx, /* int */ dy,/* Drawing */ drawing){
this.fCurrent = new Point(this.fOrigin.x + dx, this.fOrigin.y + dy);
this.owner().scaleRotate(this.fOrigin, this.fOrigPoly, this.fCurrent); 
}
//*************
// invokeEnd
//*************
PolygonScaleHandle.prototype.invokeEnd = function(/* int */ dx, /* int */ dy,/* Drawing */ drawing){
this.fOrigPoly = null;
this.fOrigin = null;
this.fCurrent = null;
}
//*************
// getOrigin: 
//*************
/* Point */ PolygonScaleHandle.prototype.getOrigin = function(min,max,value){
// find a nice place to put handle
// Need to pick a place that will not overlap with point handle
// and is internal to polygon
// Try for one HANDLESIZE step away from outermost toward center
 var outer = this.owner().outermostPoint();
    var ctr = this.owner().center();
    var len = geom.length(outer.x, outer.y, ctr.x, ctr.y);
    if (len == 0) // best we can do?
      return new Point(outer.x - this.HANDLESIZE/2, outer.y +  this.HANDLESIZE/2);

    var u =  this.HANDLESIZE / len;
    if (u > 1.0) // best we can do?
      return new Point((outer.x * 3 + ctr.x)/4, (outer.y * 3 + ctr.y)/4);
    else
      return new Point(parseInt(outer.x * (1.0 - u) + ctr.x * u),
                       parseInt(outer.y * (1.0 - u) + ctr.y * u));											 
}



