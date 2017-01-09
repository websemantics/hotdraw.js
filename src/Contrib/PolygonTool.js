/**
 * Hotdraw.js : PolygonTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 * 
 * Tool to draw a PolygonTool
 * 
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @since     4th August 2005
 * @package   websemantics/hotdraw/contrib
 */

PolygonTool.prototype= new AbstractTool(); 

function PolygonTool(/* DrawingView */ view){
var argv = PolygonTool.arguments;
var argc = PolygonTool.length;
this.className="PolygonTool";
/* PolygonFigure */ this.fPolygon = null; 
/* int */ this.fLastX = null;
/* int */ this.fLastY = null; 
if(argv.length>0)this.initPolygonTool(view);
}
//*************
// Initializes a PolygonTool with the given prototype.
//*************
PolygonTool.prototype.initPolygonTool = function(view){
this.initAbstractTool(view);
}
//*************
// Sets the cross hair cursor.
//*************
PolygonTool.prototype.activate = function(){this.activatePolygonTool();}
PolygonTool.prototype.activatePolygonTool = function(){
this.activateAbstractTool();
this.view().setCursor("crosshair");
this.view().clearSelection();
this.fPolygon = null;
}
//*************
// deactivate
//*************
PolygonTool.prototype.deactivate = function(){this.deactivatePolygonTool();}
PolygonTool.prototype.deactivatePolygonTool = function(){ 
this.deactivateAbstractTool();

if (this.fPolygon != null) {
      // this.fPolygon.smoothPoints();
      if (this.fPolygon.pointCount() < 3 ||
          this.fPolygon.size().width < 4 || this.fPolygon.size().height < 4)
        this.drawing().remove(this.fPolygon);
    }
    this.fPolygon = null;
}
//*************
// 
//*************
PolygonTool.prototype.addPoint = function(x,y){
	 if (this.fPolygon == null) {
         this.fPolygon = new PolygonFigure(x, y);
         this.view().add(this.fPolygon);
          this.fPolygon.addPoint(x, y);
      } else if (this.fLastX != x || this.fLastY != y)
          this.fPolygon.addPoint(x, y);

      this.fLastX = x;
      this.fLastY = y;
}
//*************
// Creates a new figure by cloning the prototype.
//*************
PolygonTool.prototype.mouseDown = function(/* MouseEvent */ e, /* int */ x, /* int */ y){
 // replace pts by actual event pts
    x = e.getX();
    y = e.getY();
	 if (e.getClickCount() >= 2) {
        if (this.fPolygon != null) {
            this.fPolygon.smoothPoints();
					  this.fireViewEvent(this.fPolygon,"Create"); // <======================= [ Create View Event]
            this.editor().toolDone();
        }
        this.fPolygon = null;

    } else {
        // use original event coordinates to avoid
        // supress that the scribble is constrained to
        // the grid
        this.addPoint(e.getX(), e.getY());
    }
}
//*************
// mouseMove
//*************
PolygonTool.prototype.mouseMove = function(/* MouseEvent */ e, /* int */ x, /* int */ y){
    if (this.fPolygon != null) {
       if (this.fPolygon.pointCount() > 1) {
           this.fPolygon.setPointAt(new Point(x, y), this.fPolygon.pointCount()-1);
           // this.view().checkDamage();
       }
    }
}
//*************
// Adjusts the extent of the created figure
//*************
PolygonTool.prototype.mouseDrag = function(/* MouseEvent */ e, /* int */ x, /* int */ y){
 if (this.fPolygon != null)
   this.addPoint(e.getX(), e.getY());
 // Refresh the figure,...
// if(this.fScribble.getShape()!=null){this.fScribble.draw();}
}
//*************
// 
//*************
PolygonTool.prototype.mouseUp = function(/* MouseEvent */ e, /* int */ x, /* int */ y){
}
