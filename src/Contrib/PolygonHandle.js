/**
 * Hotdraw.js : PolygonHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A handle for a node on the polygon.
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     8th August 2005
 * @package   websemantics/hotdraw/contrib
 */

PolygonHandle.prototype= new AbstractHandle();  
//
function PolygonHandle(/* PolygonFigure */ owner, /* Locator */ locator, /* int */ indx){
var argv = PolygonHandle.arguments;
var argc = PolygonHandle.length;
this.className="PolygonHandle";
/* Locator */ this.fLocator=null;
/* int */     this.fIndex=0;
if(argv.length>0)this.initPolygonHandle(owner,locator,indx);
}
//*************
// Constructs a polygon handle. 
//*************
PolygonHandle.prototype.initPolygonHandle = function(owner,locator,indx){
this.initAbstractHandle(owner);
this.fLocator = locator;
this.fIndex = indx;
}
//*************
// Tracks a step of the interaction.
//*************
PolygonHandle.prototype.invokeStep = function(/* int */ x, /* int */ y,/* int */ anchorX, /* int */anchorY, /* DrawingView */ view){
this.myOwner().setPointAt(new Point(x, y), this.fIndex);
}
//*************
// Tracks a step of the interaction.
//*************
PolygonHandle.prototype.invokeEnd = function(/* int */ x, /* int */ y,/* int */ anchorX, /* int */anchorY, /* DrawingView */ view){
this.myOwner().smoothPoints();
}
//*************
// myOwner
//*************
PolygonHandle.prototype.myOwner = function(){
return this.owner();
}
//*************
// locate
//*************
/* Point */ PolygonHandle.prototype.locate = function(){
return this.fLocator.locate(this.owner());
}
