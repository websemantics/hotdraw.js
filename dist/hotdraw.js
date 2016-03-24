// Hotdraw.js 0.1.2
//
// Copyright (c) 2004 – 2015 Web Semantics,Inc. All rights reserved.
//
// http://www.opensource.org/licenses/mit-license.php
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2016-03-24

/**
 * Hotdraw.js
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2004
 * @package   websemantics/hotdraw
 */

var hdSelectionRectStyle = 'stroke-linecap:round;fill:none;opacity:0.8;stroke:black;stroke-width:1';
var hdImageURL = "../img/joe.surf.yellow.small.gif";

function hdChangeSelectionRectStyle(/* String */ style){
	hdSelectionRectStyle = style;
}

function hdChangeImageURL(/* String */ newImageURL){
	hdImageURL = newImageURL;
}


function createMarker(/* String */ id,/* String */ pathStyle,/* String */ d,/* String */ transform){
	if(transform == undefined)transform="";
	var  node = createSVGNode("marker",{"id":id, "style":"overflow:visible","refX": 0, "refY":0,"viewBox":"0 0 10 10","markerUnits":"strokeWidth","markerWidth":4,"markerHeight":3,"orient":"auto"});
	            createSVGNode("path",{"d":d,"style":pathStyle,"transform":transform},node);
		          df_addToDefs(node);
	return node;
}


function InitialiseHotDraw(){

	var markerList=("Arrow1Lstart","Arrow1Mstart","Arrow1Sstart","Arrow2Lend","Arrow2Mend","Arrow2Send","Arrow2Lstart","Arrow2Mstart","Arrow2Sstart","Tail","Dot_l","Dot_m","Dot_s","SquareL","SquareM","SquareS","DiamondL","DiamondM","DiamondS","TriangleInL","TriangleInM","TriangleInS","TriangleOutL","TriangleOutM","TriangleOutS","Scissors");

	createMarker("Scissors","marker-start:none","M 9.0898857,-3.6061018 C 8.1198849,-4.7769976 6.3697607,-4.7358294 5.0623558,-4.2327734 L -3.1500488,-1.1548705 C -5.5383421,-2.4615840 -7.8983361,-2.0874077 -7.8983361,-2.7236578 C -7.8983361,-3.2209742 -7.4416699,-3.1119800 -7.5100293,-4.4068519 C -7.5756648,-5.6501286 -8.8736064,-6.5699315 -10.100428,-6.4884954 C -11.327699,-6.4958500 -12.599867,-5.5553341 -12.610769,-4.2584343 C -12.702194,-2.9520479 -11.603560,-1.7387447 -10.304005,-1.6532027 C -8.7816644,-1.4265411 -6.0857470,-2.3487593 -4.8210600,-0.082342643 C -5.7633447,1.6559151 -7.4350844,1.6607341 -8.9465707,1.5737277 C -10.201445,1.5014928 -11.708664,1.8611256 -12.307219,3.0945882 C -12.885586,4.2766744 -12.318421,5.9591904 -10.990470,6.3210002 C -9.6502788,6.8128279 -7.8098011,6.1912892 -7.4910978,4.6502760 C -7.2454393,3.4624530 -8.0864637,2.9043186 -7.7636052,2.4731223 C -7.5199917,2.1477623 -5.9728246,2.3362771 -3.2164999,1.0982979 L 5.6763468,4.2330688 C 6.8000164,4.5467672 8.1730685,4.5362646 9.1684433,3.4313614 L -0.051640930,-0.053722219 L 9.0898857,-3.6061018 z M -9.2179159,-5.5066058 C -7.9233569,-4.7838060 -8.0290767,-2.8230356 -9.3743431,-2.4433169 C -10.590861,-2.0196559 -12.145370,-3.2022863 -11.757521,-4.5207817 C -11.530373,-5.6026336 -10.104134,-6.0014137 -9.2179159,-5.5066058 z M -9.1616516,2.5107591 C -7.8108215,3.0096239 -8.0402087,5.2951947 -9.4138723,5.6023681 C -10.324932,5.9187072 -11.627422,5.4635705 -11.719569,4.3902287 C -11.897178,3.0851737 -10.363484,1.9060805 -9.1616516,2.5107591 z ");
	createMarker("TriangleOutS","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z ","scale(0.2)");
	createMarker("TriangleOutM","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z ","scale(0.4)");
	createMarker("TriangleOutL","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z ","scale(0.8)");
	createMarker("TriangleInS","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z ","scale(-0.2)");
	createMarker("TriangleInM","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z ","scale(-0.4)");
	createMarker("TriangleInL","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z ","scale(-0.8)");
	createMarker("DiamondS","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M -2.1579186e-005,-7.0710768 L -7.0710894,-8.9383918e-006 L -2.1579186e-005,7.0710589 L 7.0710462,-8.9383918e-006 L -2.1579186e-005,-7.0710768 z ","scale(0.2)");
	createMarker("DiamondM","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M -2.1579186e-005,-7.0710768 L -7.0710894,-8.9383918e-006 L -2.1579186e-005,7.0710589 L 7.0710462,-8.9383918e-006 L -2.1579186e-005,-7.0710768 z ","scale(0.4)");
	createMarker("DiamondL","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M -2.1579186e-005,-7.0710768 L -7.0710894,-8.9383918e-006 L -2.1579186e-005,7.0710589 L 7.0710462,-8.9383918e-006 L -2.1579186e-005,-7.0710768 z ","scale(0.8)");
	createMarker("SquareS","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M -5.0,-5.0 L -5.0,5.0 L 5.0,5.0 L 5.0,-5.0 L -5.0,-5.0 z ","scale(0.2)");
	createMarker("SquareM","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M -5.0,-5.0 L -5.0,5.0 L 5.0,5.0 L 5.0,-5.0 L -5.0,-5.0 z ","scale(0.4)");		
	createMarker("SquareL","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M -5.0,-5.0 L -5.0,5.0 L 5.0,5.0 L 5.0,-5.0 L -5.0,-5.0 z ","scale(0.8)");
	createMarker("Dot_s","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none;marker-end:none","M -2.5,-1.0 C -2.5,1.7600000 -4.7400000,4.0 -7.5,4.0 C -10.260000,4.0 -12.5,1.7600000 -12.5,-1.0 C -12.5,-3.7600000 -10.260000,-6.0 -7.5,-6.0 C -4.7400000,-6.0 -2.5,-3.7600000 -2.5,-1.0 z ","scale(0.2) translate(7.125493, 1)");
	createMarker("Dot_m","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none;marker-end:none","M -2.5,-1.0 C -2.5,1.7600000 -4.7400000,4.0 -7.5,4.0 C -10.260000,4.0 -12.5,1.7600000 -12.5,-1.0 C -12.5,-3.7600000 -10.260000,-6.0 -7.5,-6.0 C -4.7400000,-6.0 -2.5,-3.7600000 -2.5,-1.0 z ","scale(0.4) translate(7.125493, 1)");
	createMarker("Dot_l","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none;marker-end:none","M -2.5,-1.0 C -2.5,1.7600000 -4.7400000,4.0 -7.5,4.0 C -10.260000,4.0 -12.5,1.7600000 -12.5,-1.0 C -12.5,-3.7600000 -10.260000,-6.0 -7.5,-6.0 C -4.7400000,-6.0 -2.5,-3.7600000 -2.5,-1.0 z ","scale(0.8) translate(7.125493, 1)");

	// Create the Tail Marker
	var  node = createSVGNode("marker",{"id":"Tail", "style":"overflow:visible","refX": 0, "refY":0,"viewBox":"0 0 10 10","markerUnits":"strokeWidth","markerWidth":4,"markerHeight":3,"orient":"auto"});
	var  g    = createSVGNode("g",{"transform":"scale(-1.2)"},node);
	            createSVGNode("path",{"d":"M -3.8048674,-3.9585227 L 0.54352094,-0.00068114835","style":"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;marker-start:none;marker-end:none;stroke-linecap:round","transform":""},g);
	            createSVGNode("path",{"d":"M -1.2866832,-3.9585227 L 3.0617053,-0.00068114835","style":"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;marker-start:none;marker-end:none;stroke-linecap:round","transform":""},g);
	            createSVGNode("path",{"d":"M 1.3053582,-3.9585227 L 5.6537466,-0.00068114835","style":"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;marker-start:none;marker-end:none;stroke-linecap:round","transform":""},g);
	            createSVGNode("path",{"d":"M -3.8048674,4.1775838 L 0.54352094,0.21974226","style":"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;marker-start:none;marker-end:none;stroke-linecap:round","transform":""},g);
	            createSVGNode("path",{"d":"M -1.2866832,4.1775838 L 3.0617053,0.21974226","style":"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;marker-start:none;marker-end:none;stroke-linecap:round","transform":""},g);
	            createSVGNode("path",{"d":"M 1.3053582,4.1775838 L 5.6537466,0.21974226","style":"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.8;marker-start:none;marker-end:none;stroke-linecap:round","transform":""},g);
		          df_addToDefs(node);

	createMarker("Arrow2Sstart","font-size:12.0;fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round","M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z ","scale(0.3) translate(-5,0)");
	createMarker("Arrow2Mstart","font-size:12.0;fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round","M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z ","scale(0.6) translate(-5,0)" );
	createMarker("Arrow2Lstart","font-size:12.0;fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round","M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z ","scale(1.1) translate(-5,0)");
	createMarker("Arrow2Send","font-size:12.0;fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round;","M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z ","scale(0.3) rotate(180) translate(-5,0)");
	createMarker("Arrow2Mend","font-size:12.0;fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round;","M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z ","scale(0.6) rotate(180) translate(-5,0)");
	createMarker("Arrow2Lend","font-size:12.0;fill-rule:evenodd;stroke-width:0.62500000;stroke-linejoin:round;","M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z ","scale(1.1) rotate(180) translate(-5,0)" );
	createMarker("Arrow1Sstart","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z ","scale(0.2)");
	createMarker("Arrow1Mstart","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z ","scale(0.4)");
	createMarker("Arrow1Lstart","fill-rule:evenodd;stroke:#000000;stroke-width:1.0pt;marker-start:none","M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z ","scale(0.8)");

	// Setup a sellection of SVG background patterns to be used by CWE application
	setBackgroundPatterns(); 

}

function setBackgroundPatterns(){
	var rectpattern,node;
	// Patterns used to paint the background  
	// (1) Grid Pattern
	 pattern=createSVGNode("pattern",{id:"bg_grid", x: 0, y:0,width:12,height:12,overflow:"visible",patternUnits:"userSpaceOnUse",preserveAspectRatio:"xMidYMid meet"});
	 pattern.appendChild(createSVGNode("rect",{x: 0, y:0,width:12,height:12,style:"stroke:#D1E3F6;stroke-width:1;fill:white"}));
	 df_addToDefs(pattern);
	// (2) Mesh Pattern
	 pattern=createSVGNode("pattern",{id:"bg_mesh", x: 0, y:0,width:64,height:64,overflow:"visible",patternUnits:"userSpaceOnUse",preserveAspectRatio:"xMidYMid meet"});
	 pattern.appendChild(createSVGNode("circle",{cx: 32, cy:32,r:28,style:"stroke:none;stroke-width:0;fill:white"}));
	 df_addToDefs(pattern);
	// (3) Vertical white Linear Color
	 node=createSVGNode("linearGradient",{id:"bg_whiteVerticalLinearColor",x1:"0%", y1:"0%", x2:"0%", y2:"100%"});
	 node.appendChild(createSVGNode("stop",{offset:"0%",'stop-color':'#E1EBF0'}));
	 node.appendChild(createSVGNode("stop",{offset:"100%",'stop-color':'rgb(255,255,255)'}));
	 df_addToDefs(node);
	// (4) Isometric Pattern
	 pattern=createSVGNode("pattern",{id:"bg_isometric", x: 0, y:0,width:195.6957398-21,height:262.4999313,overflow:"visible",patternUnits:"userSpaceOnUse",preserveAspectRatio:"xMidYMid meet"});
	 pattern.appendChild(createSVGNode("rect",{x: 0, y:0,width:195.6957398,height:262.4999313,style:"stroke:none;stroke-width:0;fill:#6AC60D"}));
	 pattern.appendChild(createSVGNode("rect",{x: 97.8478699, y:-43.74998855,width:97.8478699,height:87.4999771,transform:"matrix(0.894246,0.447576,0,1,0,0)",style:"stroke:none;stroke-width:0;fill:#4FA019"}));
	 pattern.appendChild(createSVGNode("rect",{x: 0, y:43.74998855,width:97.8479004,height:87.4999771,transform:"matrix(0.894246,-0.447577,0,1,0,0)",style:"stroke:none;stroke-width:0;fill:#65B821"}));
	 pattern.appendChild(createSVGNode("rect",{x: 0, y:-43.74998855+(87.4999771*2),width:97.8478699,height:87.4999771,transform:"matrix(0.894246,0.447576,0,1,0,0)",style:"stroke:none;stroke-width:0;fill:#4FA019"}));
	 pattern.appendChild(createSVGNode("rect",{x: 97.8478699, y:43.74998855+(87.4999771*2),width:97.8479004,height:87.4999771,transform:"matrix(0.894246,-0.447577,0,1,0,0)",style:"stroke:none;stroke-width:0;fill:#65B821"}));
	 df_addToDefs(pattern);
}
/**
 * Hotdraw.js : Figure {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A figure knows its display box and can draw itself. 
 * A figure can be composed of several figures. 
 * To interact and manipulate with a figure it can provide Handles and Connectors.
 * A figure has a set of handles to manipulate its shape or attributes.
 * A figure has one or more connectors that define how to locate a connection point.
 * Figures can have an open ended set of attributes.
 * An attribute is identified by a string.
 * Default implementations for the Figure interface are provided by AbstractFigure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Figure() {
    var argv = Figure.arguments;
    var argc = Figure.length;
    this.className = "Figure";
    if (argv.length > 0) this.initFigure();
}
//*************
// initFigure
//*************
Figure.prototype.initFigure = function() {}
//***********************
// Moves the Figure to a new location.
// @param dx the x delta
// @param dy the y delta
//***********************
/* void */
Figure.prototype.moveBy = function( /* int */ dx, /* int */ dy) {}
//***********************
// Changes the display box of a figure. 
//
// This method is always implemented in figure subclasses.
// It only changes the displaybox and does not announce any changes. 
// It is usually not called by the client.
// Clients typically call displayBox to change the display box.
// @param origin the new origin
// @param corner the new corner
// @see #displayBox
//***********************
/* void */
Figure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {}
//***********************
// Changes the display box of a figure.  
//
// Clients usually invoke this method.
// It changes the display box and announces the corresponding changes.
// @param origin the new origin
// @param corner the new corner 
//***********************
/* void */
Figure.prototype.displayBox = function( /* Point */ origin, /* Point */ corner) {}
//***********************
// Gets the display box of a figure  
//
// @see #basicDisplayBox
//***********************
/* Rectangle */
Figure.prototype.displayBox = function( /* Point */ origin, /* Point */ corner) {}
//***********************
// Draws the figure.  
//
// @param g the Graphics to draw into
//***********************
/* void */
Figure.prototype.draw = function( /* Graphics */ g) {}
//***********************
// Returns the handles used to manipulate the figure. 
//
// Handles is a Factory Method for creating handle objects.
//
// @param g the Graphics to draw into
//***********************
/* Vector */
Figure.prototype.handles = function() {}
//***********************
// Gets the size of the figure 
//***********************
/* Dimension */
Figure.prototype.size = function() {}
//***********************
// Gets the figure's center 
//***********************
/* Point */
Figure.prototype.center = function() {}
//***********************
// Checks if the Figure should be considered as empty. 
//***********************
/* boolean */
Figure.prototype.isEmpty = function() {}
//***********************
// Returns an Enumeration of the figures contained in this figure 
//***********************
/* FigureEnumeration */
Figure.prototype.figures = function() {}
//***********************
// Returns the figure that contains the given point. 
//***********************
/* Figure */
Figure.prototype.findFigureInside = function( /* int */ x, /* int */ y) {}
//***********************
// Checks if a point is inside the figure. 
//***********************
/* boolean */
Figure.prototype.containsPoint = function( /* int */ x, /* int */ y) {}
//***********************
// Returns a Clone of this figure 
//***********************
/* Object */
Figure.prototype.clone = function( /* int */ x, /* int */ y) {}
//***********************
// Changes the display box of a figure. 
//
// This is a convenience method. 
// Implementors should only have to override basicDisplayBox
//***********************
/* void */
Figure.prototype.displayBox = function( /* Rectangle */ r) {}
//***********************
// Checks whether the given figure is contained in this figure. 
//***********************
/* boolean */
Figure.prototype.includes = function( /* Figure */ figure) {}
//***********************
// Decomposes a figure into its parts. 
//
// A figure is considered as a part of itself.
//***********************
/* FigureEnumeration */
Figure.prototype.decompose = function() {}
//***********************
// Sets the Figure's container and registers the container as a figure change listener. 
//
// A figure's container can be any kind of FigureChangeListener.
// A figure is not restricted to have a single container.
//***********************
/* void */
Figure.prototype.addToContainer = function( /* FigureChangeListener */ c) {}
//***********************
// Removes a figure from the given container and unregisters 
//
// it as a change listener.
//***********************
/* void */
Figure.prototype.removeFromContainer = function( /* FigureChangeListener */ c) {}
//***********************
// Gets the Figure's listeners. 
//***********************
/* FigureChangeListener */
Figure.prototype.listener = function() {}
//***********************
// Adds a listener for this figure. 
//***********************
/* void */
Figure.prototype.addFigureChangeListener = function( /* FigureChangeListener */ l) {}
//***********************
// removeFigureChangeListener 
//***********************
/* void */
Figure.prototype.removeFigureChangeListener = function( /* FigureChangeListener */ l) {}
//***********************
// Releases a figure's resources. 
//
// Release is called when a figure is removed from a drawing.
// Informs the listeners that the figure is removed by calling figureRemoved.
//***********************
/* void */
Figure.prototype.release = function() {}
//***********************
// Invalidates the figure. 
//
// This method informs its listeners that its current display box 
// is invalid and should be refreshed.
//***********************
/* void */
Figure.prototype.invalidate = function() {}
//***********************
// Informes that a figure is about to change such that its display box is affected. 
//***********************
/* void */
Figure.prototype.willChange = function() {}
//***********************
// Informes that a figure has changed its display box.
//
// This method also triggers an update call for its registered observers.
//***********************
/* void */
Figure.prototype.changed = function() {}
//***********************
// Checks if this figure can be connected
//***********************
/* boolean */
Figure.prototype.canConnect = function() {}
//***********************
// Gets a connector for this figure at the given location.
//
// A figure can have different connectors at different locations.
//***********************
/* Connector */
Figure.prototype.connectorAt = function( /* int */ x, /* int */ y) {}
//***********************
// Sets whether the connectors should be visible.
//
// Connectors can be optionally visible. Implement
// this method and react on isVisible to turn the
// connectors on or off.
//***********************
/* void */
Figure.prototype.connectorVisibility = function( /* boolean  */ isVisible) {}
//***********************
// Returns the connection inset. 
//
// This is only a hint that connectors can use to determine the connection location.
// The inset defines the area where the display box of a figure should not be connected.
//***********************
/* Insets */
Figure.prototype.connectionInsets = function() {}
//***********************
// Returns the locator used to located connected text. 
//***********************
/* Locator */
Figure.prototype.connectedTextLocator = function( /* Figure  */ text) {}
//***********************
// Returns the named attribute or null if a figure doesn't have an attribute.
//
// All figures support the attribute names, FillColor and FrameColor
//***********************
/* Object */
Figure.prototype.getAttribute = function( /* String  */ name) {}
//***********************
// Returns the locator used to located connected text. 
//***********************
/* void */
Figure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {}
/**
 * Hotdraw.js : Drawing {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Drawing is a container for figures.
 *
 * Drawing sends out DrawingChanged events to DrawingChangeListeners whenever 
 * a part of its area was invalidated.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Drawing() { /* extends Storable, FigureChangeListener, Serializable */
    var argv = Drawing.arguments;
    var argc = Drawing.length;
    this.className = "Drawing";
    if (argv.length > 0) this.initDrawing();
}
//*************
// initDrawing
//*************
Drawing.prototype.initDrawing = function() {}
//*************
// Releases the drawing and its contained figures.
//*************
Drawing.prototype.release = function() {}
//*************
// Returns an enumeration to iterate in Z-order back to front over the figures.
//*************
/* FigureEnumeration */
Drawing.prototype.figures = function() {}
//*************
// Returns an enumeration to iterate in Z-order front to back over the figures.
//*************
/* FigureEnumeration */
Drawing.prototype.figuresReverse = function() {}
//*************
// Finds a top level Figure. Use this call for hit detection that should not descend into the figure's children.
//
// Forms:
// ======
// (1) findFigure(x,y)
// (2) findFigure(Rectangle r)
//*************
/* Figure */
Drawing.prototype.findFigure = function(x, y) {}
//*************
// Finds a top level Figure, but supresses the passed in figure. Use this method to ignore a figure
// that is temporarily inserted into the drawing.
//
// Forms:
// ======
// (1) findFigureWithout(x,y,Figure without)
// (2) findFigureWithout(Rectangle r,Figure without)
//*************
/* Figure */
Drawing.prototype.findFigureWithout = function(x, y, /* Figure */ without) {}
//*************
// Finds a figure but descends into a figure's children. Use this method to implement click-through
// hit detection, that is, you want to detect the inner most figure containing the given point.
//*************
/* Figure */
Drawing.prototype.findFigureInside = function(x, y) {}
//*************
// Finds a figure but descends into a figure's children. It supresses the passed in figure.
// Use this method to ignore a figure that is temporarily inserted into the drawing.
//*************
Drawing.prototype.findFigureInsideWithout = function(x, y, /* Figure */ without) {}
//*************
// Adds a listener for this drawing.
//*************
Drawing.prototype.addDrawingChangeListener = function( /* DrawingChangeListener */ listener) {}
//*************
// Removes a listener from this drawing.
//*************
Drawing.prototype.removeDrawingChangeListener = function( /* DrawingChangeListener */ listener) {}
//*************
// Gets the listeners of a drawing.
//*************
/* Enumeration */
Drawing.prototype.drawingChangeListeners = function() {}
//*************
// Adds a figure and sets its container to refer to this drawing.
//*************
/* Figure */
Drawing.prototype.add = function( /* Figure */ figure) {}
//*************
// Adds a vector of figures.
//*************
Drawing.prototype.addAll = function( /* Vector */ newFigures) {}
//*************
// Removes the figure from the drawing and releases it.
//*************
/* Figure */
Drawing.prototype.remove = function( /* Figure */ figure) {}
//*************
// Removes a figure from the figure list, but doesn't release it. Use this method to temporarily
// manipulate a figure outside of the drawing.
//*************
/* Figure */
Drawing.prototype.orphan = function( /* Figure */ figure) {}
//*************
// Removes a vector of figures from the figure's list without releasing the figures.
//*************
Drawing.prototype.orphanAll = function( /* Vector */ newFigures) {}
//*************
// Removes a vector of figures .
//*************
Drawing.prototype.removeAll = function( /* Vector */ figures) {}
//*************
// Replaces a figure in the drawing without removing it from the drawing.
//*************
Drawing.prototype.replace = function( /* Figure */ figure, /* Figure */ replacement) {}
//*************
// Sends a figure to the back of the drawing.
//*************
Drawing.prototype.sendToBack = function( /* Figure */ figure) {}
//*************
// Brings a figure to the front.
//*************
Drawing.prototype.bringToFront = function( /* Figure */ figure) {}
//*************
// Draws all the figures back to front.
//*************
Drawing.prototype.draw = function( /* Graphics */ g) {}
//*************
// Invalidates a rectangle and merges it with the existing damaged area.
//*************
Drawing.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {}
//*************
// Forces an update of the drawing change listeners.
//*************
Drawing.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {}
//*************
// Handles a removeFrfigureRequestRemove request that is passed up the figure container hierarchy.
//*************
Drawing.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {}
//*************
// Acquires the drawing lock.
//*************
Drawing.prototype.lock = function() {}
//*************
// Releases the drawing lock.
//*************
Drawing.prototype.unlock = function() {}
/**
 * Hotdraw.js : FigureEnumeration
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Interface for FigureEnumerations that access Figures.
 * It provides a method nextFigure, that hides the down casting from client code.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

FigureEnumeration.prototype = new Enumeration();

function FigureEnumeration() {
    var argv = FigureEnumeration.arguments;
    var argc = FigureEnumeration.length;
    this.className = "FigureEnumeration";
    if (argv.length > 0) this.initFigureEnumeration();
}
//*************
// initFigureEnumeration
//*************
FigureEnumeration.prototype.initFigureEnumeration = function() {}
/* Figure */
FigureEnumeration.prototype.nextFigure = function() {}
/**
 * Hotdraw.js : FigureChangeListener {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Listener interested in Figure changes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

FigureChangeListener.prototype = new EventListener();

function FigureChangeListener() {;
}
// Sent when a figure is invalid 
FigureChangeListener.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {;
}
// Sent when a figure changed
FigureChangeListener.prototype.figureChanged = function( /* FigureChangeEvent */ e) {;
}
// Sent when a figure was removed
FigureChangeListener.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {;
}
// Sent when requesting to remove a figure.
FigureChangeListener.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {;
}
// Sent when an update should happen.
FigureChangeListener.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {}
/**
 * Hotdraw.js : DrawingChangeListener {Interface}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Listener interested in Drawing changes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/framework
 */

DrawingChangeListener.prototype = new EventListener();

function DrawingChangeListener() {;
}

// Sent when an area is invalid
DrawingChangeListener.prototype.drawingInvalidated = function( /* DrawingChangeEvent */ e) {;
}

// Sent when the drawing wants to be refreshed 
DrawingChangeListener.prototype.drawingRequestUpdate = function( /* DrawingChangeEvent */ e) {;
}
/**
 * Hotdraw.js : FigureChangeEvent
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * FigureChange event passed to FigureChangeListeners.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     13th January 2005
 * @package   websemantics/hotdraw/framework
 */

FigureChangeEvent.prototype = new EventObject();

function FigureChangeEvent( /* Figure */ source, /* Rectangle */ r) { /* extends EventObject */
    var argv = FigureChangeEvent.arguments;
    var argc = FigureChangeEvent.length;
    this.className = "FigureChangeEvent";
    /* gRectangle */
    this.fRectangle = null;
    /* gRectangle */
    this.fgEmptyRectangle = new gRectangle(0, 0, 0, 0);;
    if (argv.length > 0) this.initFigureChangeEvent(source, r);
}
//*************
// initFigureChangeEvent
//
// Constructs an event for the given source Figure. The rectangle is the area to be invalvidated.
//
// Forms:
// ======
// (1) initFigureChangeEvent(Figure source)
// (2) initFigureChangeEvent(Figure source, Rectangle r)
//*************
FigureChangeEvent.prototype.initFigureChangeEvent = function(source, r) {
    this.initEventObject(source);
    if (r == undefined) this.fRectangle = this.fgEmptyRectangle;
    else this.fRectangle = r;
}
//*************
// Gets the changed figure
//*************
/* Figure */
FigureChangeEvent.prototype.getFigure = function() {
    return this.getSource();
}
//*************
// Gets the changed rectangle
//*************
/* Rectangle */
FigureChangeEvent.prototype.getInvalidatedRectangle = function() {
    return this.fRectangle;
}
/**
 * Hotdraw.js : DrawingChangeEvent
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The event passed to DrawingChangeListeners.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     3rd February 2005
 * @package   websemantics/hotdraw/framework
 */

DrawingChangeEvent.prototype = new EventObject();

function DrawingChangeEvent( /* Figure */ source, /* Rectangle */ r) { /* extends EventObject */
    var argv = DrawingChangeEvent.arguments;
    var argc = DrawingChangeEvent.length;
    this.className = "DrawingChangeEvent";
    /* gRectangle */
    this.fRectangle = null;
    /* gRectangle */
    this.fgEmptyRectangle = new gRectangle(0, 0, 0, 0);;
    if (argv.length > 0) this.initDrawingChangeEvent(source, r);
}
//*************
// initDrawingChangeEvent
//
// Constructs a drawing change event.
//
// Forms:
// ======
// (1) initDrawingChangeEvent(Figure source)
// (2) initDrawingChangeEvent(Figure source, Rectangle r)
//*************
DrawingChangeEvent.prototype.initDrawingChangeEvent = function(source, r) {
    this.initEventObject(source);
    if (r == undefined) this.fRectangle = this.fgEmptyRectangle;
    else this.fRectangle = r;
}
//*************
// Gets the changed drawing 
//*************
/* Drawing */
DrawingChangeEvent.prototype.getDrawing = function() {
    return this.getSource();
}
//*************
// Gets the changed rectangle 
//*************
/* Rectangle */
DrawingChangeEvent.prototype.getInvalidatedRectangle = function() {
    return this.fRectangle;
}
/**
 * Hotdraw.js : Tool {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A tool defines a mode of the drawing view. All input events targeted to the 
 * drawing view are forwarded to its current tool.
 * Tools inform their editor when they are done with an interaction by calling 
 * the editor's toolDone() method.
 * The Tools are created once and reused. They are initialized/deinitialized 
 * with activate()/deactivate().
 * Tool plays the role of the State. In encapsulates all state specific behavior.
 * DrawingView plays the role of the StateContext.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Tool() {
    this.className = "Tool";
}
//*************
// Activates the tool for the given view. This method is called whenever the 
// user switches to this tool. Use this method to reinitialize a tool.
//*************
Tool.prototype.activate = function() {;
}
//*************
// Deactivates the tool. This method is called whenever the user switches to 
// another tool. Use this method to do some clean-up when the tool is switched. 
//Subclassers should always call super.deactivate.
//*************
Tool.prototype.deactivate = function() {;
}
//*************
// Handles mouse down events in the drawing view.
//*************
Tool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse drag events in the drawing view.
//*************
Tool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse up in the drawing view.
//*************
Tool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse moves (if the mouse button is up).
//*************
Tool.prototype.mouseMove = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles key down events in the drawing view.
//*************
Tool.prototype.keyDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
/**
 * Hotdraw.js : DrawingView {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DrawingView renders a Drawing and listens to its changes.
 * It receives user input and delegates it to the current tool.
 * DrawingView observes drawing for changes via the DrawingListener interface.
 * DrawingView plays the role of the StateContext in the State pattern.
 * Tool is the State. DrawingView is the StrategyContext in the Strategy pattern
 * with regard to the UpdateStrategy.  DrawingView is the StrategyContext 
 * for the PointConstrainer.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/framework
 */

DrawingView.prototype = new DrawingChangeListener(); // extends ImageObserver, DrawingChangeListener
function DrawingView() {
    this.className = "DrawingView";
}
//*************
// Sets the view's editor.
//*************
DrawingView.prototype.setEditor = function( /* DrawingEditor */ editor) {;
}
//*************
// Gets the current tool.
//*************
/* Tool */
DrawingView.prototype.tool = function() {;
}
//*************
// Gets the drawing.
//*************
/* Drawing */
DrawingView.prototype.drawing = function() {;
}
//*************
// Sets and installs another drawing in the view.
//*************
DrawingView.prototype.setDrawing = function( /* Drawing */ d) {;
}
//*************
// Gets the editor.
//*************
/* DrawingEditor */
DrawingView.prototype.editor = function() {;
}
//*************
// Adds a figure to the drawing. Return the added figure.
//*************
/* Figure */
DrawingView.prototype.add = function( /* Figure */ figure) {;
}
//*************
// Removes a figure from the drawing. Return the removed figure
//*************
/* Figure */
DrawingView.prototype.remove = function( /* Figure */ figure) {;
}
//*************
// Adds a vector of figures to the drawing.
//*************
DrawingView.prototype.addAll = function( /* Vector */ figures) {;
}
//*************
// Gets the size of the drawing.
//*************
/* Dimension */
DrawingView.prototype.getSize = function() {;
}
//*************
// Gets the minimum dimension of the drawing.
//*************
/* Dimension */
DrawingView.prototype.getMinimumSize = function() {;
}
//*************
// Gets the preferred dimension of the drawing..
//*************
/* Dimension */
DrawingView.prototype.getPreferredSize = function() {;
}
//*************
// Sets the current display update strategy.
//*************
DrawingView.prototype.setDisplayUpdate = function( /* Painter */ updateStrategy) {;
}
//*************
// Gets the currently selected figures. 
// Return a vector with the selected figures. The vector is a copy of the current selection.
//*************
/* Vector */
DrawingView.prototype.selection = function() {;
}
//*************
// Gets an enumeration over the currently selected figures.
//*************
/* FigureEnumeration */
DrawingView.prototype.selectionElements = function() {;
}
//*************
// Gets the currently selected figures in Z order.
//*************
/* Vector */
DrawingView.prototype.selectionZOrdered = function() {;
}
//*************
// Gets the number of selected figures.
//*************
/* int */
DrawingView.prototype.selectionCount = function() {;
}
//*************
// Adds a figure to the current selection.
//*************
DrawingView.prototype.addToSelection = function( /* Figure */ figure) {;
}
//*************
// Adds a vector of figures to the current selection.
//*************
DrawingView.prototype.addToSelectionAll = function( /* Vector */ figures) {;
}
//*************
// Removes a figure from the selection.
//*************
DrawingView.prototype.removeFromSelection = function( /* Figure */ figure) {;
}
//*************
// If a figure isn't selected it is added to the selection. Otherwise it is removed from the selection.
//*************
DrawingView.prototype.toggleSelection = function( /* Figure */ figure) {;
}
//*************
// Clears the current selection.
//*************
DrawingView.prototype.clearSelection = function() {;
}
//*************
// Gets the current selection as a FigureSelection. A FigureSelection can be cut, copied, pasted.
//*************
/* FigureSelection */
DrawingView.prototype.getFigureSelection = function() {;
}
//*************
// Finds a handle at the given coordinates.Return the hit handle, null if no handle is found.
//*************
/* Handle */
DrawingView.prototype.findHandle = function(x, y) {;
}
//*************
// Gets the position of the last click inside the view.
//*************
/* Point */
DrawingView.prototype.lastClick = function() {;
}
//*************
// Sets the current point constrainer.
//*************
DrawingView.prototype.setConstrainer = function( /* PointConstrainer */ p) {;
}
//*************
// Gets the current grid setting.
//*************
/* PointConstrainer */
DrawingView.prototype.getConstrainer = function() {;
}
//*************
// Checks whether the drawing has some accumulated damage
//*************
DrawingView.prototype.checkDamage = function() {;
}
//*************
// Repair the damaged area
//*************
DrawingView.prototype.repairDamage = function() {;
}
//*************
// Paints the drawing view. The actual drawing is delegated to the current update strategy.
//*************
DrawingView.prototype.paint = function( /* Graphics */ g) {;
}
//*************
// Creates an image with the given dimensions
//*************
/* Image */
DrawingView.prototype.createImage = function(width, height) {;
}
//*************
// Gets a graphic to draw into
//*************
/* Graphics */
DrawingView.prototype.getGraphics = function() {;
}
//*************
// Gets the background color of the DrawingView
//*************
/* Color */
DrawingView.prototype.getBackground = function() {;
}
//*************
// Sets the background color of the DrawingView
//*************
DrawingView.prototype.setBackground = function( /* Color */ c) {;
}
//*************
// Draws the contents of the drawing view. The view has three layers:
// background, drawing, handles.
// The layers are drawn in back to front order.
//*************
DrawingView.prototype.drawAll = function( /* Graphics */ g) {;
}
//*************
// Draws the currently active handles.
//*************
DrawingView.prototype.drawHandles = function( /* Graphics */ g) {;
}
//*************
// Draws the drawing.
//*************
DrawingView.prototype.drawDrawing = function( /* Graphics */ g) {;
}
//*************
// Draws the background. If a background pattern is set it is used to fill the 
// background. Otherwise the background is filled in the background color.
//*************
DrawingView.prototype.drawBackground = function( /* Graphics */ g) {;
}
//*************
// Sets the cursor of the DrawingView 
//*************
DrawingView.prototype.setCursor = function( /* Cursor */ c) {;
}
//*************
// Freezes the view by acquiring the drawing lock.
//*************
DrawingView.prototype.freezeView = function() {;
}
//*************
// Unfreezes the view by releasing the drawing lock.
//*************
DrawingView.prototype.unfreezeView = function() {;
}
/**
 * Hotdraw.js : DrawingEditor {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DrawingEditor defines the interface for coordinating the different objects 
 * that participate in a drawing editor.
 * DrawingEditor is the mediator. It decouples the participants of a drawing editor.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th February 2005
 * @package   websemantics/hotdraw/framework
 */

function DrawingEditor() {
    this.className = "DrawingEditor";
}
//*************
// Gets the editor's drawing view.
//*************
/* DrawingView */
DrawingEditor.prototype.view = function() {;
}
//*************
// Gets the editor's drawing.
//*************
/* Drawing */
DrawingEditor.prototype.drawing = function() {;
}
//*************
// Gets the editor's current tool.
//*************
/* Tool */
DrawingEditor.prototype.tool = function() {;
}
//*************
// Informs the editor that a tool has done its interaction.
// This method can be used to switch back to the default tool.
//*************
DrawingEditor.prototype.toolDone = function() {;
}
//*************
// Informs that the current selection has changed. Override this method to handle selection changes.
//*************
DrawingEditor.prototype.selectionChanged = function( /* DrawingView */ view) {;
}
//*************
// Shows a status message in the editor's user interface
//*************
DrawingEditor.prototype.showStatus = function( /* String */ str) {;
}
/**
 * Hotdraw.js : Handle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Handles are used to change a figure by direct manipulation. Handles know their 
 * owning figure and they provide methods to locate the handle on the figure and 
 * to track changes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Handle() {
    this.className = "Handle";
    this.HANDLESIZE = 8;
}
//*************
// Locates the handle on the figure. The handle is drawn centered around the returned point.
//*************
/* Point */
Handle.prototype.locate = function() {;
}
//*************
// Tracks the start of the interaction. The default implementation does nothing.
//*************
Handle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {;
}
//*************
// Tracks a step of the interaction.
//*************
Handle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {;
}
//*************
// Tracks the end of the interaction.
//*************
Handle.prototype.invokeEnd = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {;
}
//*************
// Gets the handle's owner.
//*************
/* Figure */
Handle.prototype.owner = function() {;
}
//*************
// Gets the display box of the handle.
//*************
/* gRectangle */
Handle.prototype.displayBox = function() {;
}
//*************
// Tests if a point is contained in the handle.
//*************
/* boolean */
Handle.prototype.containsPoint = function(x, y) {;
}
//*************
// Draws this handle.
//*************
Handle.prototype.draw = function( /* Graphics */ g) {;
}
/**
 * Hotdraw.js : Locator {Interface Only}
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Locators can be used to locate a position on a figure.Locator encapsulates 
 * the strategy to locate a handle on a figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/framework
 */

function Locator() { // extends Storable, Serializable, Cloneable
    this.className = "Locator";
}
//*************
// Locates a position on the passed figure.
//*************
/* Point */
Locator.prototype.locate = function( /* Figure */ owner) {;
}
/**
 * Hotdraw.js : ReverseVectorEnumerator [implementation of Enumeration interface]
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An Enumeration that enumerates a vector back (size-1) to front (0).
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/util
 */

ReverseVectorEnumerator.prototype = new Enumeration();

function ReverseVectorEnumerator( /* Vector */ v) { /* implements Enumeration */
    var argv = ReverseVectorEnumerator.arguments;
    var argc = ReverseVectorEnumerator.length;
    this.className = "ReverseVectorEnumerator";
    this.vector = new Vector();
    this.count = 0;
    if (argv.length > 0) this.initReverseVectorEnumerator(v);
}
//*************
// initReverseVectorEnumerator
//*************
ReverseVectorEnumerator.prototype.initReverseVectorEnumerator = function(v) {
    this.vector = v;
    this.count = this.vector.size() - 1;
}
//*************
// Returns true if the Renumeration contains more elements; false if its empty.
//*************
/* boolean */
ReverseVectorEnumerator.prototype.hasMoreElements = function() {
    return this.count >= 0;
}
//*************
// Returns the next element of the Renumeration.
//*************
/* Object */
ReverseVectorEnumerator.prototype.nextElement = function() {
    if (this.count >= 0) {
        return this.vector.elementAt(this.count--);
    }
}
/**
 * Hotdraw.js : PaletteButton
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A palette button is a three state button. The states are normal
 * pressed and selected. It uses to the palette listener interface
 * to notify about state changes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     11th February 2005
 * @package   websemantics/hotdraw/util
 */

var NORMAL = 1;
var PRESSED = 2;
var SELECTED = 3;

PaletteButton.prototype = new Canvas(); //  implements MouseListener, MouseMotionListener 

function PaletteButton( /* PaletteListener */ listener) {
    var argv = PaletteButton.arguments;
    var argc = PaletteButton.length;
    this.className = "PaletteButton";
    /* PaletteListener */
    this.fListener = null;
    /* int */
    this.fState = 0;
    /* int */
    this.fOldState = 0;
    if (argv.length > 0) this.initPaletteButton(listener);
}
//*************
// Constructs a tool for the given view.
//*************
PaletteButton.prototype.initPaletteButton = function(listener) {
    this.initCanvas(0, 0, 24, 24);
    this.fListener = listener;
    this.fState = NORMAL;
    this.fOldState = NORMAL;
    this.addMouseMotionListener(this);
    this.addMouseListener(this);
}
//****************
// createSVGContent 
//****************
PaletteButton.prototype.createSVGContent = function() {
    this.createSVGContentPaletteButton(g);
}
//****************
// createSVGContentPaletteButton 
//****************
PaletteButton.prototype.createSVGContentPaletteButton = function() {
    this.createSVGContentCanvas();
}
//*************
// mouseDragged 
//*************
PaletteButton.prototype.mouseDragged = function( /* MouseEvent */ e) {
    //if (this.contains(e.getX(),e.getY()))
    this.fState = PRESSED;
    //   else
    //  this.fState = this.fOldState;
    this.refresh();
}
//*************
// mouseMoved 
//*************
PaletteButton.prototype.mouseMoved = function( /* MouseEvent */ e) {
    this.fListener.paletteUserOver(this, true);
}
//*************
// mouseClicked 
//*************
PaletteButton.prototype.mouseClicked = function( /* MouseEvent */ e) {}
//*************
// mousePressed 
//*************
PaletteButton.prototype.mousePressed = function( /* MouseEvent */ e) {
    this.fOldState = this.fState;
    this.fState = PRESSED;
    this.refresh();
}
//*************
// mouseReleased 
//*************
PaletteButton.prototype.mouseReleased = function( /* MouseEvent */ e) {
    this.fState = this.fOldState;
    //if (this.contains(e.getX(),e.getY()))  [NO NEED!]
    this.fListener.paletteUserSelected(this);
    this.refresh();
}
//*************
// mouseEndDragged 
//*************
PaletteButton.prototype.mouseEndDragged = function( /* MouseEvent */ e) {
    this.fState = PRESSED;
    this.mouseReleased();
}
//*************
// mouseEntered 
//*************
PaletteButton.prototype.mouseEntered = function( /* MouseEvent */ e) {}
//*************
// mouseExited 
//*************
PaletteButton.prototype.mouseExited = function( /* MouseEvent */ e) {
    if (this.fState == PRESSED) this.mouseDragged(e);
    this.fListener.paletteUserOver(this, false);
}
PaletteButton.prototype.paintBackground = function( /* Graphics */ g) {;
}
PaletteButton.prototype.paintNormal = function( /* Graphics */ g) {;
}
PaletteButton.prototype.paintPressed = function( /* Graphics */ g) {;
}
PaletteButton.prototype.paintSelected = function( /* Graphics */ g) {;
}
//*************
// value 
//*************
/* Object */
PaletteButton.prototype.value = function() {
    return null;
}
//*************
// name 
//*************
/* String */
PaletteButton.prototype.name = function() {
    return "";
}
//*************
// reset 
//*************
PaletteButton.prototype.reset = function() {
    this.fState = NORMAL;
    this.refresh();
}
//*************
// select 
//*************
PaletteButton.prototype.select = function() {
    this.fState = SELECTED;
    this.refresh();
}
//*************
// update 
//*************
PaletteButton.prototype.update = function( /* Graphics */ g) {
    this.refresh(g);
}
//*************
// update 
//*************
PaletteButton.prototype.refresh = function( /* Graphics */ g) {
    this.paintBackground(g);
    switch (this.fState) {
        case PRESSED:
            this.paintPressed(g);
            break;
        case SELECTED:
            this.paintSelected(g);
            break;
        case NORMAL:
        default:
            this.paintNormal(g);
            break;
    }
}
/**
 * Hotdraw.js : Command
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Commands encapsulate an action to be executed. Commands have a name and can 
 * be used in conjunction with Command enabled ui components.
 * Command is a simple instance of the command pattern without undo support.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005
 * @package   websemantics/hotdraw/util
 */

function Command( /* String */ name) {
    var argv = Command.arguments;
    var argc = Command.length;
    this.className = "Command";
    /* String */
    this.fName = null;
    if (argv.length > 0) this.initCommand(name);
}
//*************
// Constructs a command with the given name.
//*************
Command.prototype.initCommand = function(name) {
    this.fName = name;
}
//*************
//  Executes the command.
//*************
Command.prototype.execute = function() {}
//*************
//  Tests if the command can be executed.
//*************
/* boolean */
Command.prototype.isExecutable = function() {
    return true;
}
//*************
//  Gets the command name.
//*************
/* String */
Command.prototype.name = function() {
    return this.fName;
}
//*************
// toString
//*************
/* String */
Command.prototype.toString = function() {
    return this.className + " [ name=" + this.fName + " ]";
}
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
/**
 * Hotdraw.js : Geom
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Some geometric utilities.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th August 2005
 * @package   websemantics/hotdraw/util
 */

function Geom() {
    var argv = Geom.arguments;
    var argc = Geom.length;
    this.className = "Geom";
    /* int */
    this.NORTH = 1;
    /* int */
    this.SOUTH = 2;
    /* int */
    this.WEST = 3;
    /* int */
    this.EAST = 4;
    if (argv.length > 0) this.initGeom();
}
//*************
// Constructer
//*************
Geom.prototype.initGeom = function() {}
//*************
// Tests if a point is on a line.
//*************
/* boolean */
Geom.prototype.lineContainsPoint = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2, /* int */ px, /* int */ py) {
    /* gRectangle */
    var r = new gRectangle(new Point(x1, y1));
    r.add(x2, y2);
    r.grow(2, 2);
    if (!r.contains(px, py)) return false;
    var a, b, x, y;
    if (x1 == x2) return (Math.abs(px - x1) < 3);
    if (y1 == y2) return (Math.abs(py - y1) < 3);
    a = (y1 - y2) / (x1 - x2);
    b = y1 - a * x1;
    x = (py - b) / a;
    y = a * px + b;
    return (Math.min(Math.abs(x - px), Math.abs(y - py)) < 4);
}
//*************
// Returns the direction NORTH, SOUTH, WEST, EAST from one point to another one.
//*************
/* int */
Geom.prototype.direction = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2) {
    var direction = 0;
    var vx = x2 - x1;
    var vy = y2 - y1;
    if (vy < vx && vx > -vy) direction = EAST;
    else if (vy > vx && vy > -vx) direction = NORTH;
    else if (vx < vy && vx < -vy) direction = WEST;
    else direction = SOUTH;
    return direction;
}
//*************
// south
//*************
/* Point */
Geom.prototype.south = function( /* gRectangle */ r) {
    return new Point(r.x + r.width / 2, r.y + r.height);
}
//*************
// center
//*************
/* Point */
Geom.prototype.center = function( /* gRectangle */ r) {
    return new Point(r.x + r.width / 2, r.y + r.height / 2);
}
//*************
// west
//*************
/* Point */
Geom.prototype.west = function( /* gRectangle */ r) {
    return new Point(r.x, r.y + r.height / 2);
}
//*************
// east
//*************
/* Point */
Geom.prototype.east = function( /* gRectangle */ r) {
    return new Point(r.x + r.width, r.y + r.height / 2);
}
//*************
// north
//*************
/* Point */
Geom.prototype.north = function( /* gRectangle */ r) {
    return new Point(r.x + r.width / 2, r.y);
}
//*************
// Constains a value to the given range.
//*************
/* int */
Geom.prototype.range = function( /* int */ min, /* int */ max, /* int */ value) {
    if (value < min) value = min;
    if (value > max) value = max;
    return value;
}
//*************
// Gets the square distance between two points.
//*************
/* long */
Geom.prototype.length2 = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2) {
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}
//*************
// Gets the distance between to points
//*************
/* long */
Geom.prototype.length = function( /* int */ x1, /* int */ y1, /* int */ x2, /* int */ y2) {
    return Math.sqrt(this.length2(x1, y1, x2, y2));
}
//*************
// Gets the angle of a point relative to a rectangle.
//*************
/* double */
Geom.prototype.pointToAngle = function( /* gRectangle */ r, /* Point */ p) {
    var px = p.x - (r.x + r.width / 2);
    var py = p.y - (r.y + r.height / 2);
    return Math.atan2(py * r.width, px * r.height);
}
//*************
// Gets the point on a rectangle that corresponds to the given angle.
//*************
/* Point */
Geom.prototype.angleToPoint = function( /* gRectangle */ r, /* double */ angle) {
    /*
double si = Math.sin(angle);
        double co = Math.cos(angle);
        double e = 0.0001;

        int x= 0, y= 0;
        if (Math.abs(si) > e) {
            x= (int) ((1.0 + co/Math.abs(si))/2.0 * r.width);
            x= range(0, r.width, x);
        } else if (co >= 0.0)
            x= r.width;
        if (Math.abs(co) > e) {
            y= (int) ((1.0 + si/Math.abs(co))/2.0 * r.height);
            y= range(0, r.height, y);
        } else if (si >= 0.0)
            y= r.height;
        return new Point(r.x + x, r.y + y);
*/
}
//*************
// Converts a polar to a point
//*************
/* Point */
Geom.prototype.polarToPoint = function( /* double */ angle, /* double */ fx, /* double */ fy) {
    var si = Math.sin(angle);
    var co = Math.cos(angle);
    return new Point(parseInt(fx * co + 0.5), parseInt(fy * si + 0.5));
}
//*************
// Gets the point on an oval that corresponds to the given angle.
//*************
/* Point */
Geom.prototype.ovalAngleToPoint = function( /* gRectangle */ r, /* double */ angle) {
    var center = this.center(r);
    var p = this.polarToPoint(angle, r.width / 2, r.height / 2);
    return new Point(center.x + p.x, center.y + p.y);
}
//*************
// Standard line intersection algorithm. Return the point of intersection if it exists, else null
// from Doug Lea's PolygonFigure
//*************
/* Point */
Geom.prototype.intersect = function(
    /* int */
    xa, // line 1 point 1 x
    /* int */
    ya, // line 1 point 1 y
    /* int */
    xb, // line 1 point 2 x
    /* int */
    yb, // line 1 point 2 y
    /* int */
    xc, // line 2 point 1 x
    /* int */
    yc, // line 2 point 1 y
    /* int */
    xd, // line 2 point 2 x
    /* int */
    yd) { // line 2 point 2 y
    // source: http://vision.dai.ed.ac.uk/andrewfg/c-g-a-faq.html
    // eq: for lines AB and CD
    //     (YA-YC)(XD-XC)-(XA-XC)(YD-YC)
    // r = -----------------------------  (eqn 1)
    //     (XB-XA)(YD-YC)-(YB-YA)(XD-XC)
    //
    //     (YA-YC)(XB-XA)-(XA-XC)(YB-YA)
    // s = -----------------------------  (eqn 2)
    //     (XB-XA)(YD-YC)-(YB-YA)(XD-XC)
    //  XI = XA + r(XB-XA)
    //  YI = YA + r(YB-YA)
    var denom = ((xb - xa) * (yd - yc) - (yb - ya) * (xd - xc));
    var rnum = ((ya - yc) * (xd - xc) - (xa - xc) * (yd - yc));
    if (denom == 0.0) { // parallel
        if (rnum == 0.0) { // coincident; pick one end of first line
            if ((xa < xb && (xb < xc || xb < xd)) || (xa > xb && (xb > xc || xb > xd))) return new Point(xb, yb);
            else return new Point(xa, ya);
        } else return null;
    }
    var r = rnum / denom;
    var snum = ((ya - yc) * (xb - xa) - (xa - xc) * (yb - ya));
    var s = snum / denom;
    if (0.0 <= r && r <= 1.0 && 0.0 <= s && s <= 1.0) {
        var px = parseInt((xa + (xb - xa) * r));
        var py = parseInt((ya + (yb - ya) * r));
        return new Point(px, py);
    } else return null;
}
var geom = new Geom();
/**
 * Hotdraw.js : FigureTransferCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Common base clase for commands that transfer figures between 
 * a drawing and the clipboard.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

FigureTransferCommand.prototype = new Command();

function FigureTransferCommand( /* String */ name, /* DrawingView */ view) {
    var argv = FigureTransferCommand.arguments;
    var argc = FigureTransferCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initFigureTransferCommand(name, view);
}
//*************
// Constructs a drawing command.
//  @param name the command name
//  @param view the target view
//*************
FigureTransferCommand.prototype.initFigureTransferCommand = function(name, view) {
    this.initCommand(name);
    this.fView = view;
}
//*************
//  Deletes the selection from the drawing.
//*************
FigureTransferCommand.prototype.deleteSelection = function() {
    this.fView.removeAll(this.fView.selection());
    this.fView.clearSelection();
    this.fView.drawAll();
}
//*************
//  Copies the selection to the clipboard.
//*************
FigureTransferCommand.prototype.copySelection = function() {
    /* FigureSelection */
    var selection = this.fView.getFigureSelection();
    // Clipboard.getClipboard().setContents(selection);
}
//*************
// Inserts a vector of figures and translates them by the given offset.
//*************
FigureTransferCommand.prototype.insertFigures = function( /* Vector */ figures, /* int */ dx, /* int */ dy) {
    /* FigureEnumeration */
    var e = new FigureEnumerator(figures);
    while (e.hasMoreElements()) {
        /* Figure */
        var figure = e.nextFigure();
        figure.moveBy(dx, dy);
        figure = this.fView.add(figure);
        this.fView.addToSelection(figure);
    }
}
/**
 * Hotdraw.js : DeleteCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to delete the selection.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005
 * @package   websemantics/hotdraw/standard
 */

DeleteCommand.prototype = new FigureTransferCommand();

function DeleteCommand( /* String */ name, /* DrawingView */ view) {
    var argv = DeleteCommand.arguments;
    var argc = DeleteCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initDeleteCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
DeleteCommand.prototype.initDeleteCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
DeleteCommand.prototype.execute = function() {
    this.deleteSelection();
}
//*************
//  isExecutable
//*************
DeleteCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}
/**
 * Hotdraw.js : DuplicateCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to duplicate the selection
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

DuplicateCommand.prototype = new FigureTransferCommand();

function DuplicateCommand( /* String */ name, /* DrawingView */ view) {
    var argv = DuplicateCommand.arguments;
    var argc = DuplicateCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initDuplicateCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
DuplicateCommand.prototype.initDuplicateCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
DuplicateCommand.prototype.execute = function() {
    alert("Not Implemented");
    /*
        var selection = this.fView.getFigureSelection();
        this.fView.clearSelection();
        var figures = selection.getData(FigureSelection.TYPE);
        insertFigures(figures, 10, 10);
        fView.checkDamage();*/
}
//*************
//  isExecutable
//*************
DuplicateCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}
/**
 * Hotdraw.js : GroupCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to delete the selection.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005
 * @package   websemantics/hotdraw/figures
 */

GroupCommand.prototype = new FigureTransferCommand();

function GroupCommand( /* String */ name, /* DrawingView */ view) {
    var argv = GroupCommand.arguments;
    var argc = GroupCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initGroupCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
GroupCommand.prototype.initGroupCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
GroupCommand.prototype.execute = function() {
    /* Vector */
    var selected = this.fView.selectionZOrdered();
    /* Drawing */
    var drawing = this.fView.drawing();
    if (selected.size() > 0) {
        this.fView.clearSelection();
        drawing.orphanAll(selected);
        /* GroupFigure */
        var group = new GroupFigure();
        group.addAll(selected);
        this.fView.addToSelection(drawing.add(group));
    }
}
//*************
//  isExecutable
//*************
GroupCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}
/**
 * Hotdraw.js : UngroupCommand
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Command to ungroup the selection.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

UngroupCommand.prototype = new FigureTransferCommand();

function UngroupCommand( /* String */ name, /* DrawingView */ view) {
    var argv = UngroupCommand.arguments;
    var argc = UngroupCommand.length;
    this.className = "Command";
    /* DrawingView */
    this.fView = null;
    if (argv.length > 0) this.initUngroupCommand(name, view);
}
//*************
// Constructs a delete command.
//  @param name the command name
//  @param view the target view
//*************
UngroupCommand.prototype.initUngroupCommand = function(name, view) {
    this.initFigureTransferCommand(name, view);
}
//*************
//  execute
//*************
UngroupCommand.prototype.execute = function() {
    /* FigureEnumeration */
    var selection = this.fView.selectionElements();
    this.fView.clearSelection();
    while (selection.hasMoreElements()) {
        /* Figure */
        var selected = selection.nextFigure();
        /* Figure */
        var group = this.fView.drawing().orphan(selected);
        /* FigureEnumeration */
        var k = group.decompose();
        while (k.hasMoreElements()) {
            var f = k.nextFigure();
            this.fView.addToSelection(this.fView.add(f));
        }
    }
}
//*************
//  isExecutable
//*************
UngroupCommand.prototype.isExecutable = function() {
    return this.fView.selectionCount() > 0;
}
/**
 * Hotdraw.js : FigureEnumerator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An Enumeration for a Vector of Figures.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005 
 * @package   websemantics/hotdraw/standard
 */

FigureEnumerator.prototype = new FigureEnumeration();

function FigureEnumerator( /* Vector */ v) { /* implements FigureEnumeration */
    var argv = FigureEnumerator.arguments;
    var argc = FigureEnumerator.length;
    this.className = "FigureEnumerator";
    /* Vector -Instead of -Enumeration */
    this.fEnumeration = null;;
    if (argv.length > 0) this.initFigureEnumerator(v);
}
//*************
// initFigureEnumerator
//*************
FigureEnumerator.prototype.initFigureEnumerator = function(v) {
    this.fEnumeration = v.elements();
}
//*************
// Returns true if the enumeration contains more elements; false if its empty.
//*************
/* boolean */
FigureEnumerator.prototype.hasMoreElements = function() {
    return this.fEnumeration.hasMoreElements();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Object */
FigureEnumerator.prototype.nextElement = function() {
    return this.fEnumeration.nextElement();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Figure */
FigureEnumerator.prototype.nextFigure = function() {
    return this.fEnumeration.nextElement();
}
/**
 * Hotdraw.js : ReverseFigureEnumerator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An Enumeration that enumerates a vector of figures back (size-1) to front (0).
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005 
 * @package   websemantics/hotdraw/standard
 */

ReverseFigureEnumerator.prototype = new FigureEnumeration();

function ReverseFigureEnumerator( /* Vector */ v) { /* implements FigureEnumeration */
    var argv = ReverseFigureEnumerator.arguments;
    var argc = ReverseFigureEnumerator.length;
    this.className = "ReverseFigureEnumerator";
    /* ReverseVectorEnumerator */
    this.fEnumeration = null;;
    if (argv.length > 0) this.initReverseFigureEnumerator(v);
}
//*************
// initReverseFigureEnumerator
//*************
ReverseFigureEnumerator.prototype.initReverseFigureEnumerator = function(v) {
    this.fEnumeration = new ReverseVectorEnumerator(v);
}
//*************
// Returns true if the enumeration contains more elements; false if its empty.
//*************
/* boolean */
ReverseFigureEnumerator.prototype.hasMoreElements = function() {
    return this.fEnumeration.hasMoreElements();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Object */
ReverseFigureEnumerator.prototype.nextElement = function() {
    return this.fEnumeration.nextElement();
}
//*************
// Returns the next element of the enumeration. Calls to this method will enumerate successive elements.
//*************
/* Figure */
ReverseFigureEnumerator.prototype.nextFigure = function() {
    return this.fEnumeration.nextElement();
}
/**
 * Hotdraw.js : FigureChangeEventMulticaster
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Manages a list of FigureChangeListeners to be notified of 
 * specific FigureChangeEvents.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005 
 * @package   websemantics/hotdraw/standard
 */

// FigureChangeEventMulticaster.prototype= new AWTEventMulticaster();  [NOT IMPLEMENTED]

function FigureChangeEventMulticaster( /* EventListener */ a, /* EventListener */ b) { /* implements FigureChangeListener  */
    var argv = FigureChangeEventMulticaster.arguments;
    var argc = FigureChangeEventMulticaster.length;
    this.className = "FigureChangeEventMulticaster";
    /* EventListener*/
    this.a = null;
    /* EventListener*/
    this.b = null;
    if (argv.length > 0) this.initFigureChangeEventMulticaster(a, b);
}
//*************
// initFigureChangeEventMulticaster
//*************
FigureChangeEventMulticaster.prototype.initFigureChangeEventMulticaster = function(a, b) {
    this.a = a;
    this.b = b;
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureInvalidated = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureInvalidated(e);
    /* cast(FigureChangeListener) */
    this.b.figureInvalidated(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureRequestRemove = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureRequestRemove(e);
    /* cast(FigureChangeListener) */
    this.b.figureRequestRemove(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureRequestUpdate = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureRequestUpdate(e);
    /* cast(FigureChangeListener) */
    this.b.figureRequestUpdate(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureChanged = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureChanged(e);
    /* cast(FigureChangeListener) */
    this.b.figureChanged(e);
}
//*************
// 
//*************
FigureChangeEventMulticaster.prototype.figureRemoved = function( /*FigureChangeEvent*/ e) {
    /* cast(FigureChangeListener) */
    this.a.figureRemoved(e);
    /* cast(FigureChangeListener) */
    this.b.figureRemoved(e);
}
//*************
// 
//*************
/* FigureChangeListener */
FigureChangeEventMulticaster.prototype.add = function( /*FigureChangeListener*/ a, /*FigureChangeListener*/ b) {
    return this.addInternal(a, b);
}
//*************
// 
//*************
/* EventListener */
FigureChangeEventMulticaster.prototype.addInternal = function( /*FigureChangeListener*/ a, /*FigureChangeListener*/ b) {
    if (a == null) return b;
    if (b == null) return a;
    return new FigureChangeEventMulticaster(a, b);
}
//*************
// 
//*************
/* FigureChangeListener */
FigureChangeEventMulticaster.prototype.remove = function( /*FigureChangeListener*/ l, /*FigureChangeListener*/ oldl) {
    if (l instanceof EventListener && !oldl) {
        oldl = l;
        if (oldl == this.a) return this.b;
        if (oldl == this.b) return this.a;
        /*EventListener*/
        var a2 = this.removeInternal( /*(FigureChangeListener)*/ a, oldl);
        /*EventListener*/
        var b2 = this.removeInternal( /*(FigureChangeListener)*/ b, oldl);
        if (a2 == this.a && b2 == this.b) return this;
        else return this.addInternal( /*(FigureChangeListener)*/ a2, /*(FigureChangeListener)*/ b2);
    }
    return this.removeInternal(l, oldl);
}
//*************
// 
//*************
/* EventListener */
FigureChangeEventMulticaster.prototype.removeInternal = function( /*FigureChangeListener*/ l, /*FigureChangeListener*/ oldl) {
    if (l == oldl || l == null) {
        return null;
    } else if (l instanceof FigureChangeEventMulticaster) {
        return ( /*(FigureChangeEventMulticaster)*/ l).remove(oldl);
    } else {
        return l; // it's not here
    }
}
/* FigureChangeEventMulticaster */
var figureChangeEventMulticaster = new FigureChangeEventMulticaster();
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
      //content += history+" dc:Date \""+date+"\"^^xsd:DateTime . "; // W�C Date and Time Formats (and DateTime Data Type of XML Sxhema)
      content += history+" dc:Date \""+date+"\". "; // W�C Date and Time Formats (and DateTime Data Type of XML Sxhema)
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

/**
 * Hotdraw.js : CompositeFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Figure that is composed of several figures
 *
 * A CompositeFigure doesn't define any layout behavior. It is up to subclassers to
 * arrange the contained figures.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005
 * @package   websemantics/hotdraw/standard
 */

// Global Variables

var common_composite_figure_id = "composite_figure_id_";
var cocomposite_figure_counter = 0;

//=============================================================================
// (1) Internal Only : getCompositeFigureId: returns a unique Id for a Composite Figure
//=============================================================================
function getCompositeFigureId() {
    return (common_composite_figure_id + (cocomposite_figure_counter++));
}

CompositeFigure.prototype = new AbstractFigure();

function CompositeFigure() { /*  extends AbstractFigure & implements FigureChangeListener */
    var argv = CompositeFigure.arguments;
    var argc = CompositeFigure.length;
    /* String */
    this.className = "CompositeFigure";
    /* Vector */
    this.fFigures = null;
    /* Graphics */
    this.g = null;
    if (argv.length > 0) this.initCompositeFigure();
}
//*************
// initCompositeFigure
//*************
CompositeFigure.prototype.initCompositeFigure = function() {
    this.fFigures = new Vector(100);
    this.g = new Graphics(0, 0, 0, 0, getCompositeFigureId());
}
//*************
// Adds a figure to the list of figures. Initializes the the figure's container.
//*************
/* Figure */
CompositeFigure.prototype.add = function( /* Figure */ figure) {
    if (!this.fFigures.contains(figure)) {
        this.fFigures.addElement(figure);
        figure.addToContainer(this);
    }
    return figure;
}
//*************
// Add a vector of figures.
//*************
CompositeFigure.prototype.addAll = function( /* Vector */ newFigures) {
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) this.add(k.nextElement());
}
//*************
// Removes a figure from the composite.
//*************
/* Figure */
CompositeFigure.prototype.remove = function( /* Figure */ figure) {
    this.removeCompositeFigure(figure);
}
//*************
// Removes a figure from the composite.
//*************
/* Figure */
CompositeFigure.prototype.removeCompositeFigure = function( /* Figure */ figure) {
    if (this.fFigures.contains(figure)) {
        figure.removeFromContainer(this);
        figure.dispose();
        this.fFigures.removeElement(figure);
    }
    return figure;
}
//*************
// Removes a vector of figures. OR Removes all children.
//
// Forms:
// ======
// (1) removeAll()
// (2) removeAll(Vector newFigures)
//*************
CompositeFigure.prototype.removeAll = function( /* Vector */ newFigures) {
    this.removeAllCompositeFigure(newFigures);
}
//*************
// removeAllCompositeFigure
//*************
CompositeFigure.prototype.removeAllCompositeFigure = function( /* Vector */ newFigures) {
    if (newFigures == undefined) {
        /* FigureEnumeration */
        var k = this.figures();
        while (k.hasMoreElements()) this.remove(k.nextFigure());
        this.fFigures.removeAllElements();
        return;
    }
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) {
        this.remove(k.nextElement());
    }
}
//*************
// Removes a figure from the figure list, but doesn't release it. Use this method to temporarily
// manipulate a figure outside of the drawing.
//*************
/* Figure */
CompositeFigure.prototype.orphan = function( /* Figure */ figure) {
    this.fFigures.removeElement(figure);
    return figure;
}
//*************
// Removes a vector of figures from the figure's list without releasing the figures.
//*************
CompositeFigure.prototype.orphanAll = function( /* Vector */ newFigures) {
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) this.orphan(k.nextElement());
}
//*************
// Replaces a figure in the drawing without removing it from the drawing.
//*************
CompositeFigure.prototype.replace = function( /* Figure */ figure, /* Figure */ replacement) {
    var i = this.fFigures.indexOf(figure);
    if (i != -1) {
        replacement.addToContainer(this); // will invalidate figure
        figure.changed();
        this.fFigures.setElementAt(replacement, i);
    }
}
//*************
// Sends a figure to the back of the drawing.
//*************
CompositeFigure.prototype.sendToBack = function( /* Figure */ figure) {
    if (this.fFigures.size() == 1) return;
    if (this.fFigures.contains(figure)) {
        this.fFigures.removeElement(figure);
        this.fFigures.insertElementAt(figure, 0);
        figure.changed();
    }
}
//*************
// Brings a figure to the front.
//*************
CompositeFigure.prototype.bringToFront = function( /* Figure */ figure) {
    if (this.fFigures.contains(figure)) {
        this.fFigures.removeElement(figure);
        this.fFigures.addElement(figure);
        figure.changed();
    }
}
//*************
// Draws all the contained figures
//
// Since this implementation of HotDraw is in JavaScript for SVG, the draw functionality
// here is to update the SVG content (not to redraw),..I use g element to group the figures.
//*************
CompositeFigure.prototype.draw = function( /* Graphics */ g) {
    if (this.g != null) this.g.clear(); // Free all svg nodes from the CompositeFigure 'g' group element    [******( SVG )*****]
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) {
        var fig = k.nextFigure();
        fig.draw(this.g);
    }
    if (g != undefined) g.addGraphics(this.g);
}
//*************
// Gets a figure at the given index.
//*************
/* Figure */
CompositeFigure.prototype.figureAt = function(i) {
    return this.fFigures.elementAt(i);
}
//*************
// Returns an Enumeration for accessing the contained figures. The figures are returned in the drawing order.
//*************
/* FigureEnumeration */
CompositeFigure.prototype.figures = function() {
    return new FigureEnumerator(this.fFigures);
}
//*************
// Gets number of child figures.
//*************
/* int */
CompositeFigure.prototype.figureCount = function() {
    return this.fFigures.size();
}
//*************
// Returns an Enumeration for accessing the contained figures in the reverse drawing order.
//*************
/* FigureEnumeration */
CompositeFigure.prototype.figuresReverse = function() {
    return new ReverseFigureEnumerator(this.fFigures);
}
//*************
// Finds a top level Figure. Use this call for hit detection that should not descend into the figure's children.
//
// Forms:
// ======
// (1) findFigure(Rectangle r)
// (2) findFigure(int x,int y)
//*************
/* Figure */
CompositeFigure.prototype.findFigure = function(x, y) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    // Form (1)
    if (x instanceof gRectangle) {
        var r = x;
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            /* Rectangle */
            var fr = figure.displayBox();
            if (r.intersects(fr)) return figure;
        }
        return null;
    }
    // Form (2)
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        if (figure.containsPoint(x, y)) return figure;
    }
    return null;
}
//*************
// Finds a top level Figure, but supresses the passed in figure. Use this method to ignore a figure
// that is temporarily inserted into the drawing. OR Finds a top level Figure that intersects the given rectangle.
//
// Forms:
// ======
// (1) findFigureWithout(Rectangle r, Figure without)
// (2) findFigureWithout(int x, int y, Figure without)
//*************
/* Figure */
CompositeFigure.prototype.findFigureWithout = function(x, y, /* Figure */ without) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    // Form (1)
    if (x instanceof gRectangle) {
        var r = x;
        without = y;
        if (without == null) return this.findFigure(r);
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            /* Rectangle */
            var fr = figure.displayBox();
            if (r.intersects(fr) && !figure.includes(without)) return figure;
        }
        return null;
    }
    // Form (2)
    if (without == null) return this.findFigure(x, y);
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        if (figure.containsPoint(x, y) && !figure.includes(without)) return figure;
    }
    return null;
}
//*************
// Finds a figure but descends into a figure's children. Use this method to implement click-through
// hit detection, that is, you want to detect the inner most figure containing the given point.
//*************
/* Figure */
CompositeFigure.prototype.findFigureInside = function(x, y) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure().findFigureInside(x, y);
        if (figure != null) return figure;
    }
    return null;
}
//*************
// Finds a figure but descends into a figure's children. It supresses the passed in figure.
// Use this method to ignore a figure that is temporarily inserted into the drawing.
//*************
/* Figure */
CompositeFigure.prototype.findFigureInsideWithout = function(x, y, /* Figure */ without) {
    /* FigureEnumeration */
    var k = this.figuresReverse();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        if (figure != without) {
            /* Figure */
            var found = figure.findFigureInside(x, y);
            if (found != null) return found;
        }
    }
    return null;
}
//*************
// Checks if the composite figure has the argument as one of its children.
//*************
/* boolean */
CompositeFigure.prototype.includes = function( /* Figure */ figure) {
    //  if (super.includes(figure)) return true;   <================================ [ Can not be implemeneted! ]
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) {
        /* Figure */
        var f = k.nextFigure();
        if (f.includes(figure)) return true;
    }
    return false;
}
//*************
// Moves all the given figures by x and y. Doesn't announce any changes. Subclassers override
// basicMoveBy. Clients usually call moveBy.
//*************
CompositeFigure.prototype.basicMoveBy = function(x, y) {
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) k.nextFigure().moveBy(x, y);
}
//*************
// Releases the figure and all its children.
//*************
CompositeFigure.prototype.release = function() {
    this.abstractFigureRelease();
    /* FigureEnumeration */
    var k = this.figures();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        figure.release();
    }
}
//*************
// Propagates the figureInvalidated event to my listener.
//*************
CompositeFigure.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureInvalidated(e);
}
//*************
// Propagates the removeFromDrawing request up to the container.
//*************
CompositeFigure.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestRemove(new FigureChangeEvent(this));
}
//*************
// Propagates the requestUpdate request up to the container.
//*************
CompositeFigure.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestUpdate(e);
}
//*************
// 
//*************
CompositeFigure.prototype.figureChanged = function( /* FigureChangeEvent */ e) {}
//*************
// 
//*************
CompositeFigure.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {}
//*************
// Writes the contained figures to the StorableOutput.
//*************
CompositeFigure.prototype.write = function( /* StorableOutput */ dw) {
    // NOT IMPLEMENTED 
}
//*************
// 
//*************
CompositeFigure.prototype.read = function( /* StorableOutput */ dr) {
    // NOT IMPLEMENTED 
}
/**
 * Hotdraw.js : StandardDrawing
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The standard implementation of the Drawing interface.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     12th January 2005 
 * @package   websemantics/hotdraw/standard
 */

StandardDrawing.prototype = new CompositeFigure();

function StandardDrawing() { /* implements Drawing */
    var argv = StandardDrawing.arguments;
    var argc = StandardDrawing.length;
    this.className = "StandardDrawing";
    /* Vector */
    this.fListeners = null;
    /* Thread */
    this.fDrawingLockHolder = null; //boolean that serves as a condition variable to lock the access to the drawing. The lock is recursive and we keep track of the current lock holder.
    if (argv.length > 0) this.initStandardDrawing();
}
//*************
// initStandardDrawing
//*************
StandardDrawing.prototype.initStandardDrawing = function() {
    this.initCompositeFigure();
    this.fListeners = new Vector(2);
}
//*************
// Adds a listener for this drawing.
//*************
StandardDrawing.prototype.addDrawingChangeListener = function( /* DrawingChangeListener */ listener) {
    this.fListeners.addElement(listener);
}
//*************
// Removes a listener from this drawing.
//*************
StandardDrawing.prototype.removeDrawingChangeListener = function( /* DrawingChangeListener */ listener) {
    this.fListeners.removeElement(listener);
}
//*************
// Returns the listeners for this drawing.
//*************
/* Enumeration */
StandardDrawing.prototype.drawingChangeListeners = function() {
    return this.fListeners.elements();
}
//*************
// Removes the figure from the drawing and releases it.
//*************
/* Figure */
StandardDrawing.prototype.remove = function( /* Figure */ figure) {
    // ensure that we remove the top level figure in a drawing 
    if (figure.listener() != null) {
        figure.listener().figureRequestRemove(new FigureChangeEvent(figure, null));
        return figure;
    }
    return null;
}
//*************
// Handles a removeFromDrawing request that is passed up the figure container hierarchy.
//*************
StandardDrawing.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {
    /* Figure */
    var figure = e.getFigure();
    if (this.fFigures.contains(figure)) {
        this.fFigures.removeElement(figure);
        figure.removeFromContainer(this); // will invalidate figure
        figure.release();
    } else;
    //alert("Attempt to remove non-existing figure");
}
//*************
// Invalidates a rectangle and merges it with the existing damaged area.
//*************
StandardDrawing.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {
    if (this.fListeners != null) {
        for (var i = 0; i < this.fListeners.size(); i++) {
            /* DrawingChangeListener */
            var l = this.fListeners.elementAt(i);
            l.drawingInvalidated(new DrawingChangeEvent(this, e.getInvalidatedRectangle()));
        }
    }
}
//*************
// Forces an update
//*************
StandardDrawing.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {
    if (this.fListeners != null) {
        for (var i = 0; i < this.fListeners.size(); i++) {
            /* DrawingChangeListener */
            var l = this.fListeners.elementAt(i);
            l.drawingRequestUpdate(new DrawingChangeEvent(this, null));
        }
    }
}
//*************
// Return's the figure's handles. This is only used when a drawing is nested inside another drawing.
//*************
/* Vector */
StandardDrawing.prototype.handles = function() {
    /* <======================================================================[ Not Implemented ] 
        Vector handles = new Vector();
        handles.addElement(new NullHandle(this, RelativeLocator.northWest()));
        handles.addElement(new NullHandle(this, RelativeLocator.northEast()));
        handles.addElement(new NullHandle(this, RelativeLocator.southWest()));
        handles.addElement(new NullHandle(this, RelativeLocator.southEast()));
        return handles;
*/
}
//*************
// Gets the display box. This is the union of all figures.
//*************
/* Rectangle */
StandardDrawing.prototype.displayBox = function() {
    if (this.fFigures.size() > 0) {
        /* FigureEnumeration */
        var k = this.figures();
        /* gRectangle */
        var r = k.nextFigure().displayBox();
        while (k.hasMoreElements()) r.add(k.nextFigure().displayBox());
        return r;
    }
    return new gRectangle(0, 0, 0, 0);
}
//*************
// basicDisplayBox
//*************
StandardDrawing.prototype.basicDisplayBox = function( /* Point */ p1, /* Point */ p2) {}
//*************
// Acquires the drawing lock.
//*************
StandardDrawing.prototype.lock = function() {
    /* <======================================================================[ Not Implemented ]
   // recursive lock
   Thread current = Thread.currentThread();
   if (fDrawingLockHolder == current)
       return;
    while (fDrawingLockHolder != null) {
        try { wait(); } catch (InterruptedException ex) { }
     }
     fDrawingLockHolder = current;
     */
}
//*************
// Releases the drawing lock.
//*************
StandardDrawing.prototype.unlock = function() {
    /* <======================================================================[ Not Implemented ]
   if (fDrawingLockHolder != null) {
       fDrawingLockHolder = null;
       notifyAll();
   }
*/
}
//*************
// readObject
//*************
StandardDrawing.prototype.readObject = function( /* ObjectInputStream */ s) {
    // [ Not Implemented ]
}
/**
 * Hotdraw.js : AbstractTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Default implementation support for Tools.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005
 * @package   websemantics/hotdraw/standard
 */

// AbstractTool.prototype= new Tool(); [Implements Tool interface] 

function AbstractTool( /* DrawingView */ itsView) {
    var argv = AbstractTool.arguments;
    var argc = AbstractTool.length;
    this.className = "AbstractTool";
    /* DrawingView */
    this.fView = null;
    // The position of the initial mouse down.
    /* int */
    this.fAnchorX = 0;
    /* int */
    this.fAnchorY = 0;
    if (argv.length > 0) this.initAbstractTool(itsView);
}
//*************
// Constructs a tool for the given view.
//*************
AbstractTool.prototype.initAbstractTool = function(itsView) {
    this.fView = itsView;
}
//*************
// Activates the tool for the given view. This method is called whenever the 
// user switches to this tool. Use this method to reinitialize a tool.
//*************
AbstractTool.prototype.activate = function() {
    this.activateAbstractTool();
}
AbstractTool.prototype.activateAbstractTool = function() {
    this.fView.clearSelection();
}
//*************
// Deactivates the tool. This method is called whenever the user switches to 
// another tool. Use this method to do some clean-up when the tool is switched. 
//Subclassers should always call super.deactivate.
//*************
AbstractTool.prototype.deactivate = function() {
    this.deactivateAbstractTool();
}
AbstractTool.prototype.deactivateAbstractTool = function() {
    this.view().setCursor("default");
}
//*************
// Handles mouse down events in the drawing view.
//*************
AbstractTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorX = x;
    this.fAnchorY = y;
}
//*************
// Handles mouse drag events in the drawing view.
//*************
AbstractTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse up in the drawing view.
//*************
AbstractTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles mouse moves (if the mouse button is up).
//*************
AbstractTool.prototype.mouseMove = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Handles key down events in the drawing view.
//*************
AbstractTool.prototype.keyDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {;
}
//*************
// Gets the tool's drawing.
//*************
/* Drawing */
AbstractTool.prototype.drawing = function() {
    return this.fView.drawing();
}
//*************
// Gets the tool's editor.
//*************
/* DrawingEditor */
AbstractTool.prototype.editor = function() {
    return this.fView.editor();
}
//*************
// Gets the tool's view.
//*************
/* DrawingView */
AbstractTool.prototype.view = function() {
    return this.fView;
}
//*************
// Gets the tool's view.
//*************
/* DrawingView */
AbstractTool.prototype.toString = function() {
    return this.className;
}
//*************
// fireViewEvent: this extra event monitoring code is used to report changes on the view,...
//*************
/* DrawingView */
AbstractTool.prototype.fireViewEvent = function( /* Figure */ fig, /* String */ type) {
    if (this.fView.changed != undefined) this.fView.changed(fig, type); // <============================== [Generate View Event]
}
/**
 * Hotdraw.js : SelectionTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Tool to select and manipulate figures.
 * A selection tool is in one of three states, e.g., background selection, 
 * figure selection, handle manipulation. 
 * The different states are handled by different child tools.
 * SelectionTool is the StateContext and child is the State.
 * The SelectionTool delegates state specific behavior to its current child tool.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

SelectionTool.prototype = new AbstractTool();

function SelectionTool( /* DrawingView */ view) {
    var argv = SelectionTool.arguments;
    var argc = SelectionTool.length;
    this.className = "SelectionTool";
    /* Tool */
    this.fChild = null;
    if (argv.length > 0) this.initSelectionTool(view);
}
//*************
// Constructs a tool for the given view.
//*************
SelectionTool.prototype.initSelectionTool = function(view) {
    this.initAbstractTool(view);
}
//*************
// Handles mouse down events and starts the corresponding tracker.
//*************
SelectionTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fChild != null) return;
    /* Handle */
    var handle = this.view().findHandle(e.getX(), e.getY());
    if (handle != null) {
        this.fChild = this.createHandleTracker(this.view(), handle);
    } else {
        /* Figure */
        var figure = this.drawing().findFigure(e.getX(), e.getY());
        if (figure != null) {
            this.fChild = this.createDragTracker(this.view(), figure);
        } else {
            if (!e.isShiftDown()) {
                this.view().clearSelection();
            }
            this.fChild = this.createAreaTracker(this.view());
        }
    }
    this.fChild.mouseDown(e, x, y);
}
//*************
// Handles mouse move events. 
//*************
SelectionTool.prototype.mouseMove = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    // Change the cursor shape of the mouse when hovers on Hondles
    /* Handle */
    var handle = this.view().findHandle(x, y);
    if (handle != null) {
        this.view().setCursor(handle.getCursorName());
    } else this.view().setCursor("default");
}
//*************
// Handles mouse drag events. The events are forwarded to the current tracker.
//*************
SelectionTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fChild != null) this.fChild.mouseDrag(e, x, y);
}
//*************
// Handles mouse up events. The events are forwarded to the current tracker.
//*************
SelectionTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    // this.view().unfreezeView();  <================================= [NOT IMPLEMENTED,....no need]
    if (this.fChild != null) this.fChild.mouseUp(e, x, y);
    this.fChild = null;
}
//*************
// Factory method to create a Handle tracker. It is used to track a handle.
//*************
/* Tool */
SelectionTool.prototype.createHandleTracker = function( /* DrawingView */ view, /* Handle */ handle) {
    return new HandleTracker(view, handle);
}
//*************
// Factory method to create a Drag tracker. It is used to drag a figure.
//*************
/* Tool */
SelectionTool.prototype.createDragTracker = function( /* DrawingView */ view, /* Figure */ f) {
    return new DragTracker(view, f);
}
//*************
// Factory method to create an area tracker. It is used to select an area.
//*************
/* Tool */
SelectionTool.prototype.createAreaTracker = function( /* DrawingView */ view) {
    return new SelectAreaTracker(view);
}
/**
 * Hotdraw.js : StandardDrawingView
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The standard implementation of DrawingView
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

// extends Panel implements DrawingView,MouseListener, MouseMotionListener, KeyListener

StandardDrawingView.prototype = new Panel();

function StandardDrawingView( /* DrawingEditor */ editor, /* int */ width, /* int */ height) {
    var argv = StandardDrawingView.arguments;
    var argc = StandardDrawingView.length;
    this.className = "StandardDrawingView";
    /* DrawingEditor */
    this.fEditor = null; // The DrawingEditor of the view.
    /* Drawing */
    this.fDrawing = null; // The shown drawing.
    /* Rectangle */
    this.fDamage = null; // The accumulated damaged area
    /* Vector */
    this.fSelection = null; // The list of currently selected figures.
    /* Vector */
    this.fSelectionHandles = null; // The shown selection handles.
    /* Dimension */
    this.fViewSize = null; // The preferred size of the view
    /* Point */
    this.fLastClick = null; // The position of the last mouse click inside the view.
    /* Vector */
    this.fBackgrounds = null; // A vector of optional backgrounds. The vector maintains a list a view painters that are drawn before the contents, that is in the background.
    /* Vector */
    this.fForegrounds = null; // A vector of optional foregrounds. The vector maintains a list a view painters that are drawn after the contents, that is in the foreground.
    /* Painter */
    this.fUpdateStrategy = null; // The update strategy used to repair the view.
    /* Graphics */
    this.viewcontentg = null;
    /* Graphics */
    this.selectiong = null;
    /* Graphics */
    this.textBoxg = null;
    /* PointConstrainer */
    this.fConstrainer = null; // The grid used to constrain points for snap to grid functionality.
    if (argv.length > 0) this.initStandardDrawingView(editor, width, height);
}
//*************
// 
//*************
StandardDrawingView.prototype.initStandardDrawingView = function(editor, width, height) {
    this.initPanel(0, 0, width, height);
    this.fEditor = editor;
    this.fViewSize = new Dimension(width, height);
    this.fLastClick = new Point(0, 0);
    this.fConstrainer = null;
    this.fSelection = new Vector();
    this.addMouseListener(this);
    this.addMouseMotionListener(this);
    this.addKeyListener(this);
    // To support focus
    ds_addEventListener(this, "click", "desktopMouseClick");
    ds_addEventListener(this, "mousedown", "desktopMouseClick");
}
//****************
// desktopMouseClick
//****************
StandardDrawingView.prototype.desktopMouseClick = function(evt) {
    this.lostFocus();
}
//*************
// paint
//*************
StandardDrawingView.prototype.paint = function( /* Graphics */ g) {
    this.paintStandardDrawingView(g);
}
//*************
// paintStandardDrawingView
//*************
StandardDrawingView.prototype.paintStandardDrawingView = function( /* Graphics */ g) {
    this.paintPanel(g);
    this.lostFocus();
}
//*************
// createSVGContent
//*************
StandardDrawingView.prototype.createSVGContent = function() {
    this.createSVGContentStandardDrawingView();
}
//*************
// createSVGContentStandardDrawingView
//*************
StandardDrawingView.prototype.createSVGContentStandardDrawingView = function() {
    this.createSVGContentPanel();
    //this.setBackground("#D4D0C8");
    this.viewcontentg = this.getGraphics();
    this.selectiong = this.getGraphics();
    this.textBoxg = this.getGraphics();
    this.glassPaneOn();
    this.enableMouseListener();
    this.enableMouseMotionListener();
    this.enableKeyListener();
}
//*************
// recalc 
//*************
StandardDrawingView.prototype.recalc = function() {
    this.recalcStandardDrawingView();
}
//*************
// actionPerformedWindow 
//*************
StandardDrawingView.prototype.recalcStandardDrawingView = function() {
    this.recalcPanel();
}
//*************
// Paints the drawing view. The actual drawing is delegated to the current update strategy.
//*************
//StandardDrawingView.prototype.paint = function(/* Graphics */ g){
//this.fUpdateStrategy.draw(g, this);
//}  
//*************
// Sets the view's editor.
//*************
StandardDrawingView.prototype.setEditor = function( /* DrawingEditor */ editor) {
    this.fEditor = editor;
}
//*************
// Sets and installs another drawing in the view.
//*************
StandardDrawingView.prototype.setDrawing = function( /* Drawing */ d) {
    this.clearSelection();
    if (this.fDrawing != null) this.fDrawing.removeDrawingChangeListener(this);
    this.fDrawing = d;
    if (this.fDrawing != null) this.fDrawing.addDrawingChangeListener(this);
    this.checkMinimumSize();
    this.repaint();
}
//*************
// Gets the current tool.
//*************
/* Tool */
StandardDrawingView.prototype.tool = function() {
    return this.fEditor.tool();
}
//*************
// Gets the drawing.
//*************
/* Drawing */
StandardDrawingView.prototype.drawing = function() {
    return this.fDrawing;
}
//*************
// Gets the editor.
//*************
/* DrawingEditor */
StandardDrawingView.prototype.editor = function() {
    return this.fEditor;
}
//*************
// Adds a figure to the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.standardDrawingViewAdd = function( /* Figure */ figure) {
    return this.drawing().add(figure);
}
//*************
// Adds a figure to the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.add = function( /* Figure or Component */ figure) {
    if (figure instanceof Component) return this.addContainer(figure);
    return this.standardDrawingViewAdd(figure);
}
//*************
// Removes a figure from the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.remove = function( /* Figure or Component */ figure) {
    if (figure instanceof Component) return this.removeContainer(figure);
    return this.standardDrawingViewRemove(figure);
}
//*************
// Removes a figure from the drawing.
//*************
/* Figure */
StandardDrawingView.prototype.standardDrawingViewRemove = function( /* Figure */ figure) {
    return this.drawing().remove(figure);
}
//*************
// Adds a vector of figures to the drawing.
//*************
StandardDrawingView.prototype.addAll = function( /* Vector */ figures) {
    /* FigureEnumeration */
    var k = new FigureEnumerator(figures);
    while (k.hasMoreElements()) this.add(k.nextFigure());
}
//*************
// Removes a vector of figures. OR Removes all children.
//
// Forms:
// ======
// (1) removeAll()
// (2) removeAll(Vector newFigures)
//*************
StandardDrawingView.prototype.removeAll = function( /* Vector */ newFigures) {
    //
    // (1) removeAll()
    //
    if (newFigures == undefined) {
        /* FigureEnumeration */
        var k = this.drawing().figures();
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            this.remove(figure);
        }
        this.clearSelection();
        return;
    }
    //
    // (2) removeAll(Vector newFigures)
    //
    /* Enumeration */
    var k = newFigures.elements();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextElement();
        this.remove(figure);
    }
    this.clearSelection();
}
//*************
// Gets the minimum dimension of the drawing.
//*************
/* Dimension */
StandardDrawingView.prototype.getMinimumSize = function() {
    return this.fViewSize;
}
//*************
// Gets the preferred dimension of the drawing..
//*************
/* Dimension */
StandardDrawingView.prototype.getPreferredSize = function() {
    return this.getMinimumSize();
}
//*************
// Sets the current display update strategy.
//*************
StandardDrawingView.prototype.setDisplayUpdate = function( /* Painter */ updateStrategy) {
    this.fUpdateStrategy = updateStrategy;
}
//*************
// Gets the currently selected figures.Return a vector with the selected figures. 
// The vector is a copy of the current selection.
//*************
/* Vector */
StandardDrawingView.prototype.selection = function() {
    // protect the vector with the current selection
    return this.fSelection;
}
//*************
// Gets an enumeration over the currently selected figures.
//*************
/* FigureEnumeration */
StandardDrawingView.prototype.selectionElements = function() {
    return (new FigureEnumerator(this.fSelection));
}
//*************
// Gets the currently selected figures in Z order.
//*************
/* Vector */
StandardDrawingView.prototype.selectionZOrdered = function() {
    /* Vector */
    var result = new Vector(this.fSelection.size());
    /* FigureEnumeration */
    var figures = this.drawing().figures();
    while (figures.hasMoreElements()) {
        /* Figure */
        var f = figures.nextFigure();
        if (this.fSelection.contains(f)) {
            result.addElement(f);
        }
    }
    return result;
}
//*************
// Gets the number of selected figures.
//*************
StandardDrawingView.prototype.selectionCount = function() {
    return this.fSelection.size()
}
//*************
// Adds a figure to the current selection.
//*************
StandardDrawingView.prototype.addToSelection = function( /* Figure */ figure) {
    if (!this.fSelection.contains(figure)) {
        this.fSelection.addElement(figure);
        this.fSelectionHandles = null;
        figure.invalidate();
        this.selectionChanged();
    }
}
//*************
// Adds a vector of figures to the current selection.
//*************
StandardDrawingView.prototype.addToSelectionAll = function( /* Vector */ figure) {
    /* FigureEnumeration */
    var k = new FigureEnumerator(figures);
    while (k.hasMoreElements()) this.addToSelection(k.nextFigure());
}
//*************
// Removes a figure from the selection.
//*************
StandardDrawingView.prototype.removeFromSelection = function( /* Figure */ figure) {
    if (this.fSelection.contains(figure)) {
        this.fSelection.removeElement(figure);
        this.fSelectionHandles = null;
        figure.invalidate();
        this.selectionChanged();
    }
}
//*************
// If a figure isn't selected it is added to the selection.Otherwise it is removed from the selection.
//*************
StandardDrawingView.prototype.toggleSelection = function( /* Figure */ figure) {
    this.disposeSvgHandles();
    if (this.fSelection.contains(figure)) this.removeFromSelection(figure);
    else this.addToSelection(figure);
    this.selectionChanged();
}
//*************
// Clears the current selection.
//*************
StandardDrawingView.prototype.clearSelection = function() {
    //alert("clearSelect");
    /* Figure */
    var figure;
    /* FigureEnumeration */
    k = this.selectionElements();
    while (k.hasMoreElements()) k.nextFigure().invalidate();
    this.fSelection = new Vector();
    this.disposeSvgHandles();
    this.selectionChanged();
}
//*************
// Dispose svg Handles [added]
//*************
StandardDrawingView.prototype.disposeSvgHandles = function() {
    // Delete all svg elements related to handles !  
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements())(k.nextElement()).dispose();
    this.fSelectionHandles.clear();
    this.fSelectionHandles = null;
}
//*************
// Gets an enumeration of the currently active handles.
//*************
/* Enumeration */
StandardDrawingView.prototype.selectionHandles = function() {
    if (this.fSelectionHandles == null) {
        this.fSelectionHandles = new Vector();
        /* FigureEnumeration */
        var k = this.selectionElements();
        while (k.hasMoreElements()) {
            /* Figure */
            var figure = k.nextFigure();
            /* Enumeration */
            var kk = figure.handles().elements();
            while (kk.hasMoreElements()) {
                this.fSelectionHandles.addElement(kk.nextElement());
            }
        }
    }
    return this.fSelectionHandles.elements();
}
//*************
// Gets the current selection as a FigureSelection. A FigureSelection can be cut, copied, pasted.
//*************
/* FigureSelection */
StandardDrawingView.prototype.getFigureSelection = function() {
    return new FigureSelection(this.selectionZOrdered());
}
//*************
// Finds a handle at the given coordinates. Return the hit handle, null if no handle is found.
//*************
/* Handle */
StandardDrawingView.prototype.findHandle = function(x, y) {
    /* Handle */
    var handle;
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements()) {
        handle = k.nextElement();
        if (handle.containsPoint(x, y)) return handle;
    }
    return null;
}
//*************
// Informs that the current selection changed. By default this event is forwarded to the drawing editor.
//*************
StandardDrawingView.prototype.selectionChanged = function() {
    this.fEditor.selectionChanged(this);
}
//*************
// Gets the position of the last click inside the view.
//*************
/* Point */
StandardDrawingView.prototype.lastClick = function() {
    return this.fLastClick;
}
//*************
// Sets the grid spacing that is used to constrain points.
//*************
StandardDrawingView.prototype.setConstrainer = function( /* PointConstrainer */ c) {
    this.fConstrainer = c;
}
//*************
// Gets the current constrainer.
//*************
/* PointConstrainer */
StandardDrawingView.prototype.getConstrainer = function() {
    return this.fConstrainer;
}
//*************
// Constrains a point to the current grid.
//*************
/* Point */
StandardDrawingView.prototype.constrainPoint = function( /* Point */ p) {
    // constrin to view size
    /* Dimension */
    var size = this.getSize();
    //p.x = Math.min(size.width, Math.max(1, p.x));
    //p.y = Math.min(size.height, Math.max(1, p.y));
    /* <======================================================= [USE THIS - BUT - NOT IMPLEMENTED]
p.x = Geom.range(1, size.width, p.x);
p.y = Geom.range(1, size.height, p.y);
*/
    if (this.fConstrainer != null) return this.fConstrainer.constrainPoint(p);
    return p;
}
//*************
// mouseStartDragged
//*************
StandardDrawingView.prototype.mouseStartDragged = function( /* MouseEvent */ e) {
    this.mouseStartDraggedStandardDrawingView(e);
}
StandardDrawingView.prototype.mouseStartDraggedStandardDrawingView = function( /* MouseEvent */ e) {
    this.hideShowHandles(false);
}
//*************
// mouseStartDragged
//*************
StandardDrawingView.prototype.mouseEndDragged = function( /* MouseEvent */ e) {
    this.hideShowHandles(true);
    this.mouseReleased(e, p.x, p.y);
}
//*************
// Handles mouse drag events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mouseDragged = function( /* MouseEvent */ e) {
    this.mouseDraggedStandardDrawingView(e);
}
StandardDrawingView.prototype.mouseDraggedStandardDrawingView = function( /* MouseEvent */ e) {
    //var p = this.constrainPoint(new Point(e.getX(), e.getY()));
    //this.tool().mouseDrag(e, p.x, p.y);
    // The grid is not supported
    this.tool().mouseDrag(e, e.x, e.y);
}
//*************
// Handles mouse move events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mouseMoved = function( /* MouseEvent */ e) {
    this.tool().mouseMove(e, e.x, e.y);
}
//*************
// Handles mouse down events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mousePressed = function( /* MouseEvent */ e) {
    this.mousePressedStandardDrawingView(e);
}
//*************
// mousePressedStandardDrawingView
//*************
StandardDrawingView.prototype.mousePressedStandardDrawingView = function( /* MouseEvent */ e) {
    this.gainFocus();
    /* Point */
    p = this.constrainPoint(new Point(e.getX(), e.getY()));
    this.fLastClick = new Point(e.getX(), e.getY());
    this.tool().mouseDown(e, p.x, p.y);
    this.checkDamage();
    this.drawAll();
}
//*************
// Handles mouse up events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.mouseReleased = function( /* MouseEvent */ e) {
    /* Point */
    var p = this.constrainPoint(new Point(e.getX(), e.getY()));
    this.tool().mouseUp(e, p.x, p.y);
    this.checkDamage();
    this.drawAll();
}
//*************
// keyTyped 
//*************
StandardDrawingView.prototype.keyTyped = function( /* KeyEvent */ event) {
    var code = event.getKeyChar();
}
//*************
// Private: 
// --------
// keyReleased 
//*************
StandardDrawingView.prototype.keyReleased = function( /* KeyEvent */ event) {}
//*************
// keyPressed 
// Handles key down events. Cursor keys are handled by the view the other key events are delegated to the
// currently active tool. Return whether the event was handled.
//*************
StandardDrawingView.prototype.keyPressed = function( /* KeyEvent */ e) {
    /* int */
    var code = e.getKeyCode();
    if ((code == VK_BACK_SPACE) || (code == VK_DELETE)) {
        var cmd = new DeleteCommand("Delete", this);
        cmd.execute();
    } else if (code == VK_DOWN || code == VK_UP || code == VK_RIGHT || code == VK_LEFT) {
        this.handleCursorKey(code);
    } else if (code == VK_PAGE_UP) {
        this.sendSelectionToFront();
    } else if (code == VK_PAGE_DOWN) {
        this.sendSelectionToBack();
    } else {
        this.tool().keyDown(e, code);
    }
    this.checkDamage();
}
//*************
// Handles cursor keys by moving all the selected figures one grid point in the cursor direction. 
//*************
StandardDrawingView.prototype.handleCursorKey = function( /* int */ key) {
    var dx = 0,
        dy = 0;
    var stepX = 1,
        stepY = 1;
    // should consider Null Object.
    if (this.fConstrainer != null) {
        stepX = this.fConstrainer.getStepX();
        stepY = this.fConstrainer.getStepY();
    }
    switch (key) {
        case VK_DOWN:
            dy = stepY;
            break;
        case VK_UP:
            dy = -stepY;
            break;
        case VK_RIGHT:
            dx = stepX;
            break;
        case VK_LEFT:
            dx = -stepX;
            break;
    }
    this.moveSelection(dx, dy);
}
//*************
// moveSelection
//*************
StandardDrawingView.prototype.moveSelection = function(dx, dy) {
    /* FigureEnumeration */
    var figures = this.selectionElements();
    while (figures.hasMoreElements()) {
        var figure = figures.nextFigure();
        figure.moveBy(dx, dy);
    }
    this.drawAll();
    this.checkDamage();
}
//*************
// Send Selection To Front
//*************
StandardDrawingView.prototype.sendSelectionToFront = function() {
    var drawing = this.drawing();
    k = this.selectionElements();
    while (k.hasMoreElements()) {
        var figure = k.nextFigure();
        drawing.bringToFront(figure);
        // **********************************************************************************************************
        // This extra event monitoring code is used to report changes on the view,... 
        if (this.changed != undefined) this.changed(figure, "OrderFront"); // <============================== [Generate View Event]
        // **********************************************************************************************************
    }
    this.drawAll();
}
//*************
// Send Selection To Back
//*************
StandardDrawingView.prototype.sendSelectionToBack = function() {
    var drawing = this.drawing();
    k = this.selectionElements();
    while (k.hasMoreElements()) {
        var figure = k.nextFigure();
        drawing.sendToBack(figure);
        // **********************************************************************************************************
        // This extra event monitoring code is used to report changes on the view,... 
        if (this.changed != undefined) this.changed(figure, "OrderBack"); // <============================== [Generate View Event]
        // **********************************************************************************************************
    }
    this.drawAll();
}
//*************
// Refreshes the drawing if there is some accumulated damage
//*************
StandardDrawingView.prototype.checkDamage = function() {}
//*************
// Draws the contents of the drawing view. The view has three layers: background, drawing, handles.
// The layers are drawn in back to front order.
//*************
StandardDrawingView.prototype.drawAll = function( /* Graphics */ g) {
    if (g == undefined) g = this.viewcontentg;
    /* boolean */
    var isPrinting = false; // (g instanceof PrintGraphics); [======= see ]
    this.drawBackground(g);
    if (this.fBackgrounds != null && !isPrinting) this.drawPainters(g, this.fBackgrounds);
    this.drawDrawing(g);
    if (this.fForegrounds != null && !isPrinting) this.drawPainters(g, this.fForegrounds);
    if (!isPrinting) this.drawHandles(g);
}
//*************
// Draws the currently active handles.
//*************
StandardDrawingView.prototype.drawHandles = function( /* Graphics */ g) {
    if (g == undefined) g = this.viewcontentg;
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements())
    (k.nextElement()).draw(g);
}
//*************
// Hide Show Handles
//*************
StandardDrawingView.prototype.hideShowHandles = function( /* boolean */ flag) {
    /* Enumeration */
    var k = this.selectionHandles();
    while (k.hasMoreElements())
    (k.nextElement()).getShape().setVisibility(flag);
}
//*************
// Draws the drawing.
//*************
StandardDrawingView.prototype.drawDrawing = function( /* Graphics */ g) {
    if (g == undefined) g = this.viewcontentg;
    this.fDrawing.draw(g);
}
//*************
// Draws the background. If a background pattern is set it is used to fill the 
// background. Otherwise the background is filled in the background color.
//*************
StandardDrawingView.prototype.drawBackground = function( /* Graphics */ g) {
    /* <======================================================================= [ NOT IMPLEMENTED ]
 g.setColor(getBackground());
 g.fillRect(0, 0, getBounds().width, getBounds().height);
*/
}
//*************
// 
//*************
StandardDrawingView.prototype.drawPainters = function( /* Graphics */ g, /* Vector */ v) {
    for (var i = 0; i < v.size(); i++)
    (v.elementAt(i)).draw(g, this);
}
//*************
// Adds a background.
//*************
StandardDrawingView.prototype.addBackground = function( /* Painter */ painter) {
    if (this.fBackgrounds == null) this.fBackgrounds = new Vector(3);
    this.fBackgrounds.addElement(painter);
    this.repaint();
}
//*************
// Removes a background.
//*************
StandardDrawingView.prototype.removeBackground = function( /* Painter */ painter) {
    if (this.fBackgrounds != null) this.fBackgrounds.removeElement(painter);
    this.repaint();
}
//*************
// Removes a foreground.
//*************
StandardDrawingView.prototype.removeForeground = function( /* Painter */ painter) {
    if (this.fForegrounds != null) this.fForegrounds.removeElement(painter);
    this.repaint();
}
//*************
// Adds a foreground.
//*************
StandardDrawingView.prototype.addForeground = function( /* Painter */ painter) {
    if (this.fForegrounds == null) this.fForegrounds = new Vector(3);
    this.fForegrounds.addElement(painter);
    this.repaint();
}
//*************
// 
//*************
StandardDrawingView.prototype.checkMinimumSize = function() {
    /* FigureEnumeration */
    var k = this.drawing().figures();
    /* Dimension */
    var d = new Dimension(0, 0);
    while (k.hasMoreElements()) {
        /* Rectangle */
        var r = k.nextFigure().displayBox();
        d.width = Math.max(d.width, r.x + r.width);
        d.height = Math.max(d.height, r.y + r.height);
    }
    if (this.fViewSize.height < d.height || this.fViewSize.width < d.width) {
        this.fViewSize.height = d.height + 10;
        this.fViewSize.width = d.width + 10;
        this.setSize(this.fViewSize);
    }
}
//*************
// isFocusTraversable
//*************
StandardDrawingView.prototype.isFocusTraversable = function() {
    return true;
}
//*************
// listener methods we are not interested in 
//*************
StandardDrawingView.prototype.mouseEntered = function( /* MouseEvent */ e) {;
}
StandardDrawingView.prototype.mouseExited = function( /* MouseEvent */ e) {;
}
StandardDrawingView.prototype.mouseClicked = function( /* MouseEvent */ e) {
    this.gainFocus();
}
//*************
// To String 
//*************
StandardDrawingView.prototype.toString = function() {
    return this.className;
}
//*************
// Freezes the view by acquiring the drawing lock.
//*************
StandardDrawingView.prototype.freezeView = function() {
    this.drawing().lock();
}
//*************
// Unfreezes the view by releasing the drawing lock.
//*************
StandardDrawingView.prototype.unfreezeView = function() {
    this.drawing().unlock();
}
//*************
// readObject
//*************
StandardDrawingView.prototype.readObject = function( /* ObjectInputStream */ s) {}
//*************
// repairDamage
//*************
StandardDrawingView.prototype.repairDamage = function() {}
//*************
// drawingInvalidated
//*************
StandardDrawingView.prototype.drawingInvalidated = function( /* DrawingChangeEvent */ e) {}
//*************
// drawingRequestUpdate
//*************
StandardDrawingView.prototype.drawingRequestUpdate = function( /* DrawingChangeEvent */ e) {
    this.repairDamage();
}
//*************
// Updates the drawing view.
//*************
StandardDrawingView.prototype.update = function( /* Graphics */ g) {
    this.paint(g);
}
//*************
// Refreshes the drawing if there is some accumulated damage
//*************
StandardDrawingView.prototype.checkDamage = function() {}
/**
 * Hotdraw.js : ToolButton
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A PaletteButton that is associated with a tool.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     11th February 2005 
 * @package   websemantics/hotdraw/standard
 */

ToolButton.prototype = new PaletteButton();

function ToolButton( /* PaletteListener */ listener, /* String */ iconName, /* String */ name, /* Tool */ tool) {
    var argv = ToolButton.arguments;
    var argc = ToolButton.length;
    this.className = "ToolButton";
    /*String */
    this.fName = null;
    /* Tool */
    this.fTool = null;
    /* PaletteIcon */
    this.fIcon = null;
    if (argv.length > 0) this.initToolButton(listener, iconName, name, tool);
}
//*************
// Constructs a tool for the given view.
//*************
ToolButton.prototype.initToolButton = function(listener, iconName, name, tool) {
    this.initPaletteButton(listener);
    this.fTool = tool;
    this.fName = name;
    this.fIconName = iconName;
    this.created = false;
}
//****************
// createSVGContent 
//****************
ToolButton.prototype.createSVGContent = function() {
    this.createSVGContentToolButton();
}
//****************
// createSVGContent 
//****************
ToolButton.prototype.createSVGContentToolButton = function() {
    this.createSVGContentPaletteButton()
    var w = 24;
    var h = 24;
    this.contentg = this.getGraphics();
    var m1 = this.contentg.drawImage(0, 0, w, h, this.fIconName + "1.gif");
    var m2 = this.contentg.drawImage(0, 0, w, h, this.fIconName + "2.gif");
    var m3 = this.contentg.drawImage(0, 0, w, h, this.fIconName + "3.gif");
    m1.setVisibility(true);
    m2.setVisibility(false);
    m3.setVisibility(false);
    this.fIcon = new PaletteIcon(new Dimension(w, h), m1, m2, m3);
}
//*************
// tool
//*************
/* Tool */
ToolButton.prototype.tool = function() {
    return this.fTool;
}
//*************
// name
//*************
/* String */
ToolButton.prototype.name = function() {
    return this.fName;
}
//*************
// attributeValue
//*************
/* Object */
ToolButton.prototype.attributeValue = function() {
    return this.tool();
}
//*************
// getMinimumSize
//*************
/* Dimension */
ToolButton.prototype.getMinimumSize = function() {
    return new Dimension(this.fIcon.getWidth(), this.fIcon.getHeight());
}
//*************
// getPreferredSize
//*************
/* Dimension */
ToolButton.prototype.getPreferredSize = function() {
    return new Dimension(this.fIcon.getWidth(), this.fIcon.getHeight());
}
//*************
// paintBackground
//*************
ToolButton.prototype.paintBackground = function( /* Graphics */ g) {}
//*************
// paintBackground
//*************
ToolButton.prototype.paintNormal = function( /* Graphics */ g) {
    this.fIcon.normal().setVisibility(true);
    this.fIcon.pressed().setVisibility(false);
    this.fIcon.selected().setVisibility(false);
}
//*************
// paintBackground
//*************
ToolButton.prototype.paintPressed = function( /* Graphics */ g) {
    this.fIcon.normal().setVisibility(false);
    this.fIcon.pressed().setVisibility(true);
    this.fIcon.selected().setVisibility(false);
}
//*************
// paintBackground
//*************
ToolButton.prototype.paintSelected = function( /* Graphics */ g) {
    this.fIcon.selected().setVisibility(true);
    this.fIcon.normal().setVisibility(false);
    this.fIcon.pressed().setVisibility(false);
}
/**
 * Hotdraw.js : PaletteIcon
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A three state icon that can be used in Palettes.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     11th February 2005 
 * @package   websemantics/hotdraw/standard
 */

// PaletteIcon.prototype= new Object();  

function PaletteIcon( /* Dimension */ size, /* Image */ normal, /* Image */ pressed, /* Image */ selected) {
    var argv = PaletteIcon.arguments;
    var argc = PaletteIcon.length;
    this.className = "PaletteIcon";
    /*Image */
    this.fNormal = null;
    /*Image */
    this.fPressed = null;
    /*Image */
    this.fSelected = null;
    /*Dimension */
    this.fName = null;
    if (argv.length > 0) this.initPaletteIcon(size, normal, pressed, selected);
}
//*************
// Constructs a tool for the given view.
//*************
PaletteIcon.prototype.initPaletteIcon = function(size, normal, pressed, selected) {
    this.fSize = size;
    this.fNormal = normal;
    this.fPressed = pressed;
    this.fSelected = selected;
}
//*************
// normal
//*************
/* Image */
PaletteIcon.prototype.normal = function() {
    return this.fNormal;
}
//*************
// pressed
//*************
/* Image */
PaletteIcon.prototype.pressed = function() {
    return this.fPressed;
}
//*************
// selected
//*************
/* Image */
PaletteIcon.prototype.selected = function() {
    return this.fSelected;
}
//*************
// getWidth
//*************
/* int */
PaletteIcon.prototype.getWidth = function() {
    return this.fSize.width;
}
//*************
// getHeight
//*************
/* int */
PaletteIcon.prototype.getHeight = function() {
    return this.fSize.height;
}
/**
 * Hotdraw.js : SelectAreaTracker
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * SelectAreaTracker implements a rubberband selection of an area
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

SelectAreaTracker.prototype = new AbstractTool();

function SelectAreaTracker( /* DrawingView */ view) {
    var argv = SelectAreaTracker.arguments;
    var argc = SelectAreaTracker.length;
    this.className = "SelectAreaTracker";
    /* gRectangle */
    this.fSelectGroup = null;
    /* Shape */
    this.shape = null;
    if (argv.length > 0) this.initSelectAreaTracker(view);
}
//*************
// Constructs a tool for the given view.
//*************
SelectAreaTracker.prototype.initSelectAreaTracker = function(view) {
    this.initAbstractTool(view);
}
//*************
// mouseDown
//*************
SelectAreaTracker.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    // use event coordinates to supress any kind of
    // transformations like constraining points to a grid
    this.fAnchorX = e.getX();
    this.fAnchorY = e.getY();
    this.rubberBand(this.fAnchorX, this.fAnchorY, this.fAnchorX, this.fAnchorY);
}
//*************
// mouseDrag
//*************
SelectAreaTracker.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.rubberBand(this.fAnchorX, this.fAnchorY, x, y);
}
//*************
// mouseUp
//*************
SelectAreaTracker.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.eraseRubberBand();
    this.selectGroup(e.isShiftDown());
}
//*************
// rubberBand
//*************
SelectAreaTracker.prototype.rubberBand = function(x1, y1, x2, y2) {
    this.fSelectGroup = new gRectangle(new Point(x1, y1));
    this.fSelectGroup.add(new Point(x2, y2));
    this.drawXORRect(this.fSelectGroup);
}
//*************
// eraseRubberBand
//*************
SelectAreaTracker.prototype.eraseRubberBand = function() {
    this.shape.dispose();
    this.shape = null;
}
//*************
// drawXORRect
//*************
SelectAreaTracker.prototype.drawXORRect = function( /* gRectangle */ r) {
    if (this.shape == null) {
        /* Graphics */
        var g = this.view().selectiong;
        g.setColor("none");
        g.setStrokeColor("black");
        g.setStrokeWidth(1);
        this.shape = g.drawRect(r.x, r.y, r.width, r.height);
        this.shape.setAttribute('style', hdSelectionRectStyle); // hdSelectionRectStyle is defined in InitiliseHotdraw.js
    } else {
        this.shape.setSize(r.width, r.height);
        this.shape.translate(r.x, r.y);
    }
}
//*************
// selectGroup
//*************
SelectAreaTracker.prototype.selectGroup = function( /* boolean */ toggle) {
    /* FigureEnumeration */
    var k = this.drawing().figuresReverse();
    while (k.hasMoreElements()) {
        /* Figure */
        var figure = k.nextFigure();
        /* gRectangle */
        var r2 = figure.displayBox();
        if (this.fSelectGroup.contains(r2.x, r2.y) && this.fSelectGroup.contains(r2.x + r2.width, r2.y + r2.height)) {
            if (toggle) this.view().toggleSelection(figure);
            else this.view().addToSelection(figure);
        }
    }
}
/**
 * Hotdraw.js : CreationTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A tool to create new figures. The figure to be created is specified by a prototype.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th February 2005
 * @package   websemantics/hotdraw/standard
 */

CreationTool.prototype = new AbstractTool();

function CreationTool( /* DrawingView */ view, /* Figure */ prototypeFig) {
    var argv = CreationTool.arguments;
    var argc = CreationTool.length;
    this.className = "CreationTool";
    /* Point */
    this.fAnchorPoint = null; // the anchor point of the interaction
    /* Figure */
    this.fCreatedFigure = null; // the currently created figure
    /* Figure */
    this.fPrototype = null; //the prototypical figure that is used to create new figures.
    if (argv.length > 0) this.initCreationTool(view, prototypeFig);
}
//*************
// Initializes a CreationTool with the given prototype.
//*************
CreationTool.prototype.initCreationTool = function(view, prototypeFig) {
    this.initAbstractTool(view);
    if (prototypeFig != undefined) this.fPrototype = prototypeFig;
}
//*************
// Sets the cross hair cursor.
//*************
CreationTool.prototype.activate = function() {
    this.activateCreationTool();
}
CreationTool.prototype.activateCreationTool = function() {
    this.activateAbstractTool();
    this.view().setCursor("crosshair");
}
//*************
// deactivate
//*************
CreationTool.prototype.deactivate = function() {
    this.deactivateCreationTool();
}
CreationTool.prototype.deactivateCreationTool = function() {
    this.deactivateAbstractTool();
}
//*************
// Creates a new figure by cloning the prototype.
//*************
/* Figure */
CreationTool.prototype.createFigure = function(p) {
    if (this.fPrototype == null) {
        alert("No protoype defined");
        return;
    }
    return this.fPrototype.clone();
}
//*************
// Gets the currently created figure
//*************
/* Figure */
CreationTool.prototype.createdFigure = function() {
    return this.fCreatedFigure;
}
//*************
// Creates a new figure by cloning the prototype.
//*************
CreationTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.creationToolMouseDown(e, x, y);
}
//*************
// Creates a new figure by cloning the prototype.
//*************
CreationTool.prototype.creationToolMouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorPoint = new Point(x, y);
    this.fCreatedFigure = this.createFigure();
    this.fCreatedFigure.displayBox(this.fAnchorPoint, new Point(x + 1, y + 1));
    this.view().add(this.fCreatedFigure);
    this.view().drawDrawing();
}
//*************
// Adjusts the extent of the created figure
//*************
CreationTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fCreatedFigure.displayBox(this.fAnchorPoint, new Point(x, y));
    // Refresh the figure,...
    if (this.fCreatedFigure.getShape()) {
        this.fCreatedFigure.draw();
    }
}
//*************
// Checks if the created figure is empty. If it is, the figure is removed from the drawing.
//*************
CreationTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fCreatedFigure == null) return;
    var create = true;
    if (this.fCreatedFigure.isEmpty()) {
        this.drawing().remove(this.fCreatedFigure);
        create = false;
    }
    this.view().drawDrawing();
    this.editor().toolDone();
    if (create) this.fireViewEvent(this.fCreatedFigure, "Create"); // <======================= [ Create View Event]
    this.fCreatedFigure = null;
}
/**
 * Hotdraw.js : ScribbleTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Tool to scribble a PolyLineFigure
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     19th February 2005 
 * @package   websemantics/hotdraw/standard
 */

ScribbleTool.prototype = new AbstractTool();

function ScribbleTool( /* DrawingView */ view) {
    var argv = ScribbleTool.arguments;
    var argc = ScribbleTool.length;
    this.className = "ScribbleTool";
    /* PolyLineFigure */
    this.fScribble = null;
    /* int */
    this.fLastX = null;
    /* int */
    this.fLastY = null;
    if (argv.length > 0) this.initScribbleTool(view);
}
//*************
// Initializes a ScribbleTool with the given prototype.
//*************
ScribbleTool.prototype.initScribbleTool = function(view) {
    this.initAbstractTool(view);
}
//*************
// Sets the cross hair cursor.
//*************
ScribbleTool.prototype.activate = function() {
    this.activateScribbleTool();
}
ScribbleTool.prototype.activateScribbleTool = function() {
    this.activateAbstractTool();
    this.view().setCursor("crosshair");
    this.view().clearSelection();
    this.fScribble = null;
}
//*************
// deactivate
//*************
ScribbleTool.prototype.deactivate = function() {
    this.deactivateScribbleTool();
}
ScribbleTool.prototype.deactivateScribbleTool = function() {
    this.deactivateAbstractTool();
    if (this.fScribble != null) {
        if (this.fScribble.size().width < 4 || this.fScribble.size().height < 4) this.drawing().remove(this.fScribble);
    }
}
//*************
// 
//*************
ScribbleTool.prototype.point = function(x, y) {
    if (this.fScribble == null) {
        this.fScribble = new PolyLineFigure(x, y);
        this.view().add(this.fScribble);
    } else if (this.fLastX != x || this.fLastY != y) this.fScribble.addPoint(x, y);
    this.fLastX = x;
    this.fLastY = y;
}
//*************
// Creates a new figure by cloning the prototype.
//*************
ScribbleTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (e.getClickCount() >= 2) {
        this.fScribble = null;
        this.editor().toolDone();
    } else {
        // use original event coordinates to avoid
        // supress that the scribble is constrained to
        // the grid
        this.point(e.getX(), e.getY());
    }
}
//*************
// Adjusts the extent of the created figure
//*************
ScribbleTool.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fScribble != null) this.point(e.getX(), e.getY());
    // Refresh the figure,...
    // if(this.fScribble.getShape()!=null){this.fScribble.draw();}
}
//*************
// 
//*************
ScribbleTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fireViewEvent(this.fScribble, "Create"); // <======================= [ Create View Event]
    this.editor().toolDone();
    this.fScribble = null;
}
/**
 * Hotdraw.js : DragTracker
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DragTracker implements the dragging of the clicked figure.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

DragTracker.prototype = new AbstractTool();

function DragTracker( /* DrawingView */ view, /* Figure */ anchor) {
    var argv = DragTracker.arguments;
    var argc = DragTracker.length;
    this.className = "DragTracker";
    /* Figure */
    this.fAnchorFigure = null;
    /* int */
    this.fLastX = null; // previous mouse position
    /* int */
    this.fLastY = null; // previous mouse position
    /* boolean */
    this.fMoved = null;
    if (argv.length > 0) this.initDragTracker(view, anchor);
}
//*************
// Constructs a tool for the given view.
//*************
DragTracker.prototype.initDragTracker = function(view, anchor) {
    this.initAbstractTool(view);
    this.fAnchorFigure = anchor;
}
//*************
// mouseDown
//*************
DragTracker.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorX = x;
    this.fAnchorY = y;
    this.fLastX = x;
    this.fLastY = y;
    if (e.isShiftDown()) {
        this.view().toggleSelection(this.fAnchorFigure);
        this.fAnchorFigure = null;
    } else if (!this.view().selection().contains(this.fAnchorFigure)) {
        this.view().clearSelection();
        this.view().addToSelection(this.fAnchorFigure);
    }
    this.view().setCursor("move");
}
//*************
// mouseDrag
//*************
DragTracker.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    if (this.fView.selectionCount() < 2) {
        this.fAnchorFigure.moveBy(x - this.fLastX, y - this.fLastY);
        this.fAnchorFigure.draw();
    } else {
        /* FigureEnumeration */
        var figures = this.view().selectionElements();
        while (figures.hasMoreElements()) {
            /* Figure */
            var f = figures.nextFigure();
            f.moveBy(x - this.fLastX, y - this.fLastY);
            f.draw();
        }
    }
    this.fLastX = x;
    this.fLastY = y;
}
//*************
// OLD mouseDrag
//*************
/*
DragTracker.prototype.mouseDrag = function( e,  x,  y){
this.fMoved = (Math.abs(x - this.fAnchorX) > 4) || (Math.abs(y - this.fAnchorY) > 4);
 if (this.fMoved) {
      var figures = this.view().selectionElements();
     while (figures.hasMoreElements()){
         var f=figures.nextFigure();
        f.moveBy(x - this.fLastX, y - this.fLastY);
        f.draw();
        }
        }
  this.fLastX = x;
  this.fLastY = y;
}
*/
//*************
// mouseUp
//*************
DragTracker.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fMoved = (Math.abs(x - this.fAnchorX) > 4) || (Math.abs(y - this.fAnchorY) > 4);
    if (this.fMoved) {
        /* FigureEnumeration */
        var figures = this.view().selectionElements();
        while (figures.hasMoreElements()) this.fireViewEvent(figures.nextFigure(), "Move"); // <======================= [ Move View Event]
    }
    this.view().setCursor("default");
}
/**
 * Hotdraw.js : AbstractHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * AbstractHandle provides defaulf implementation for the Handle interface.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005
 * @package   websemantics/hotdraw/standard
 */

AbstractHandle.prototype = new Handle();

function AbstractHandle( /* Figure */ owner) {
    var argv = AbstractHandle.arguments;
    var argc = AbstractHandle.length;
    this.className = "AbstractHandle";
    /* Color */
    this.color = "yellow";
    /* Figure */
    this.fOwner = null;
    /* Shape */
    this.shape = null;
    /* Boolean */
    this.created = false; // Turn to true once the svg content of this figure has been created.
    /* int */
    this.HANDLESIZE = 8;
    if (argv.length > 0) this.initAbstractHandle(owner);
}
//*************
// AbstractHandle
//*************
AbstractHandle.prototype.initAbstractHandle = function(owner) {
    this.fOwner = owner;
}
//*************
// Locates the handle on the figure. The handle is drawn centered around the returned point.
//*************
/* Point */
AbstractHandle.prototype.locate = function() {;
}
//*************
// Tracks the start of the interaction. The default implementation does nothing.
//*************
AbstractHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    var drawing = view.drawing();
}
//*************
// Tracks a step of the interaction.
//*************
AbstractHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    var drawing = view.drawing();
    var dx = x - anchorX;
    var dy = y - anchorY;
}
//*************
// Tracks the end of the interaction.
//*************
AbstractHandle.prototype.invokeEnd = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    var drawing = view.drawing();
    var dx = x - anchorX;
    var dy = y - anchorY;
}
//*************
// Gets the handle's owner.
//*************
/* Figure */
AbstractHandle.prototype.owner = function() {
    return this.fOwner;
}
//*************
// Gets the display box of the handle.
//*************
/* gRectangle */
AbstractHandle.prototype.displayBox = function() {
    /* Point */
    var p = this.locate();
    return new gRectangle(p.x - this.HANDLESIZE / 2, p.y - this.HANDLESIZE / 2, this.HANDLESIZE, this.HANDLESIZE);
}
//*************
// Tests if a point is contained in the handle.
//*************
/* boolean */
AbstractHandle.prototype.containsPoint = function(x, y) {
    return this.displayBox().contains(x, y);
}
//*************
// createSVGContent
//*************
AbstractHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor(this.color);
    g.setStrokeWidth(1);
    g.setStrokeColor("black");
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.shape.setAttribute('shape-rendering', 'optimizeSpeed');
    this.shape.setCursor(this.getCursorName());
}
//*************
// draw
//*************
AbstractHandle.prototype.draw = function( /* Graphics */ g) {
    this.drawAbstractHandle(g);
}
//*************
// draw a handle and its subclass.
//*************
AbstractHandle.prototype.drawAbstractHandle = function( /* Graphics */ g) {
    if (!this.created) {
        this.created = true;
        this.createSVGContent(g);
    }
    // It's assumed that the figure content (svg content,..this.shape),..has been created before this point
    // So no checks were performed to ensure that this.shape is not null (for performance)
    /* Rectangle */
    var r = this.displayBox();
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
    if (g != undefined) g.addChild(this.shape.getNode());
}
//*************
// get Shape
//*************
/* Shape */
AbstractHandle.prototype.getShape = function() {
    return this.shape;
}
//*************
// Dispose this handle.
//*************
AbstractHandle.prototype.dispose = function() {
    if (this.shape != null) this.shape.dispose();
    this.shape = null;
}
//*************
// Get Cursor Name
//*************
AbstractHandle.prototype.getCursorName = function() {
    var ret = null;
    switch (this.className) {
        case "NorthEastHandle":
            ret = "ne-resize";
            break;
        case "EastHandle":
            ret = "e-resize";
            break;
        case "NorthHandle":
            ret = "n-resize";
            break;
        case "NorthWestHandle":
            ret = "nw-resize";
            break;
        case "SouthEastHandle":
            ret = "se-resize";
            break;
        case "SouthHandle":
            ret = "s-resize";
            break;
        case "SouthWestHandle":
            ret = "sw-resize";
            break;
        case "WestHandle":
            ret = "w-resize";
            break;
        default:
            ret = "default";
            break;
    }
    return ret;
}
/**
 * Hotdraw.js : LocatorHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A LocatorHandle implements a Handle by delegating the location 
 * requests to a Locator object.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005 
 * @package   websemantics/hotdraw/standard
 */

LocatorHandle.prototype = new AbstractHandle();

function LocatorHandle( /* Figure */ owner, /* Locator */ l) {
    var argv = LocatorHandle.arguments;
    var argc = LocatorHandle.length;
    this.className = "LocatorHandle";
    /* Locator */
    this.fLocator = null;
    if (argv.length > 0) this.initLocatorHandle(owner, l);
}
//*************
// Initializes the LocatorHandle with the given Locator.
//*************
LocatorHandle.prototype.initLocatorHandle = function(owner, l) {
    this.initAbstractHandle(owner);
    this.fLocator = l;
}
//*************
// Locates the handle on the figure by forwarding the request to its figure.
//*************
/* Point */
LocatorHandle.prototype.locate = function() {
    return this.fLocator.locate(this.owner());
}
/**
 * Hotdraw.js : RadiusHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Handle to manipulate the radius of a round corner rectangle.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005 
 * @package   websemantics/hotdraw/standard
 */

RadiusHandle.prototype = new AbstractHandle();

function RadiusHandle( /* RoundRectangleFigure */ owner) {
    var argv = RadiusHandle.arguments;
    var argc = RadiusHandle.length;
    this.className = "RadiusHandle";
    /* Point */
    this.fRadius = null;
    /* RoundRectangleFigure */
    this.fOwner = null;
    /* int */
    this.OFFSET = 4;
    if (argv.length > 0) this.initRadiusHandle(owner);
}
//*************
// Initializes the RadiusHandle 
//*************
RadiusHandle.prototype.initRadiusHandle = function(owner) {
    this.initAbstractHandle(owner);
    this.fOwner = owner;
    this.color = "red";
}
//*************
// Create SVG Content
//*************
RadiusHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor(this.color);
    this.shape = g.drawOval(r.x + r.width / 2, r.y + r.height / 2, r.width, r.height);
    this.shape.setStrokeWidth(0.5);
    this.shape.setStrokeColor("black");
    this.shape.setCursor(this.getCursorName());
}
//*************
// Locates the handle on the figure by forwarding the request to its figure.
//*************
/* Point */
RadiusHandle.prototype.locate = function() {
    /* Point */
    var radius = this.fOwner.getArc();
    /* Rectangle */
    var r = this.fOwner.displayBox();
    return new Point(r.x + radius.x / 2 + this.OFFSET, r.y + radius.y / 2 + this.OFFSET);
}
//*************
// Tracks the start of the interaction. The default implementation does nothing.
//*************
RadiusHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    this.fRadius = this.fOwner.getArc();
    this.fRadius.x = this.fRadius.x / 2;
    this.fRadius.y = this.fRadius.y / 2;
}
//*************
// Tracks a step of the interaction.
//*************
RadiusHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    var dx = x - anchorX;
    var dy = y - anchorY;
    /* Rectangle */
    r = this.fOwner.displayBox();
    var rx = geom.range(0, r.width, 2 * (this.fRadius.x + dx));
    var ry = geom.range(0, r.height, 2 * (this.fRadius.y + dy));
    this.fOwner.setArc(rx, ry);
}
/**
 * Hotdraw.js : HandleTracker
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * HandleTracker implements interactions with the handles of a Figure.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th February 2005 
 * @package   websemantics/hotdraw/standard
 */

HandleTracker.prototype = new AbstractTool();

function HandleTracker( /* DrawingView */ view, /* Handle */ anchorHandle) {
    var argv = HandleTracker.arguments;
    var argc = HandleTracker.length;
    this.className = "HandleTracker";
    /* Handle */
    this.fAnchorHandle = null;
    if (argv.length > 0) this.initHandleTracker(view, anchorHandle);
}
//*************
// Constructs a tool for the given view.
//*************
HandleTracker.prototype.initHandleTracker = function(view, anchorHandle) {
    this.initAbstractTool(view);
    this.fAnchorHandle = anchorHandle;
}
//*************
// Handles mouse down events in the drawing view.
//*************
HandleTracker.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorX = x;
    this.fAnchorY = y;
    this.fAnchorHandle.invokeStart(x, y, this.view());
    this.view().setCursor(this.fAnchorHandle.getCursorName());
    this.fAnchorHandle.shape.setVisibility(true);
}
//*************
// Handles mouse drag events in the drawing view.
//*************
HandleTracker.prototype.mouseDrag = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorHandle.invokeStep(x, y, this.fAnchorX, this.fAnchorY, this.view());
    this.fAnchorHandle.owner().draw();
    this.fAnchorHandle.shape.setVisibility(true);
    this.fAnchorHandle.draw();
}
//*************
// Handles mouse up in the drawing view.
//*************
HandleTracker.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.fAnchorHandle.invokeEnd(x, y, this.fAnchorX, this.fAnchorY, this.view());
    this.view().setCursor("default");
    this.fireViewEvent(this.fAnchorHandle.fOwner, "Update"); // <======================= [ Update View Event]
}
/**
 * Hotdraw.js : AbstractLocator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * AbstractLocator provides default implementations for the Locator interface.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005
 * @package   websemantics/hotdraw/standard
 */

AbstractLocator.prototype = new Locator(); // implements Locator, Storable, Cloneable

function AbstractLocator() {
    this.className = "AbstractLocator";
}
//*************
// clone.
//*************
/* Object */
AbstractLocator.prototype.clone = function() {
    return null;
}
//*************
// Stores the arrow tip to a StorableOutput.
//*************
/* Object */
AbstractLocator.prototype.write = function( /* StorableOutput */ dw) {
    return null;
}
//*************
// Stores the arrow tip to a StorableOutput.
//*************
/* Object */
AbstractLocator.prototype.read = function( /* StorableInput */ dr) {
    return null;
}
/**
 * Hotdraw.js : RelativeLocator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A locator that specfies a point that is relative to the bounds of a figure.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005 
 * @package   websemantics/hotdraw/standard
 */

RelativeLocator.prototype = new AbstractLocator();

function RelativeLocator( /* double */ relativeX, /* double */ relativeY) {
    var argv = RelativeLocator.arguments;
    var argc = RelativeLocator.length;
    this.className = "RelativeLocator";
    /* double */
    this.fRelativeX = 0.0;
    /* double */
    this.fRelativeY = 0.0;
    if (argv.length > 0) this.initRelativeLocator(relativeX, relativeY);
}
//*************
// Initializes 
//*************
RelativeLocator.prototype.initRelativeLocator = function(relativeX, relativeY) {
    this.fRelativeX = relativeX;
    this.fRelativeY = relativeY;
}
//*************
// locate
//*************
/* Point */
RelativeLocator.prototype.locate = function( /* Figure */ owner) {
    /* Rectangle */
    var r = owner.displayBox();
    return new Point(r.x + (r.width * this.fRelativeX), r.y + (r.height * this.fRelativeY));
}
//*************
// east
//*************
/* Locator */
RelativeLocator.prototype.east = function() {
    return new RelativeLocator(1.0, 0.5);
}
//*************
// north
//*************
/* Locator */
RelativeLocator.prototype.north = function() {
    return new RelativeLocator(0.5, 0.0);
}
//*************
// west
//*************
/* Locator */
RelativeLocator.prototype.west = function() {
    return new RelativeLocator(0.0, 0.5);
}
//*************
// northEast
//*************
/* Locator */
RelativeLocator.prototype.northEast = function() {
    return new RelativeLocator(1.0, 0.0);
}
//*************
// northWest
//*************
/* Locator */
RelativeLocator.prototype.northWest = function() {
    return new RelativeLocator(0.0, 0.0);
}
//*************
// south
//*************
/* Locator */
RelativeLocator.prototype.south = function() {
    return new RelativeLocator(0.5, 1.0);
}
//*************
// southEast
//*************
/* Locator */
RelativeLocator.prototype.southEast = function() {
    return new RelativeLocator(1.0, 1.0);
}
//*************
// southWest
//*************
/* Locator */
RelativeLocator.prototype.southWest = function() {
    return new RelativeLocator(0.0, 1.0);
}
//*************
// center
//*************
/* Locator */
RelativeLocator.prototype.center = function() {
    return new RelativeLocator(0.5, 0.5);
}
//**************************************************************************************
// An instance of the class RelativeLocator called relativeLocator to be used by JHotdraw [static]
//**************************************************************************************
var relativeLocator = new RelativeLocator();
//**************************************************************************************
/**
 * Hotdraw.js : BoxHandleKit
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A set of utility methods to create Handles for the common locations on a 
 * figure's display box.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     16th February 2005
 * @package   websemantics/hotdraw/standard
 */

//=======================================================
// Class: NorthEastHandle
//=======================================================
NorthEastHandle.prototype = new LocatorHandle();

function NorthEastHandle( /* Figure */ owner) {
    var argv = NorthEastHandle.arguments;
    var argc = NorthEastHandle.length;
    this.className = "NorthEastHandle";
    if (argv.length > 0) this.initNorthEastHandle(owner);
}
//*************
// Initializes 
//*************
NorthEastHandle.prototype.initNorthEastHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.northEast());
}
//*************
// Tracks a step of the interaction.
//*************
NorthEastHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(r.x, Math.min(r.y + r.height, y)), new Point(Math.max(r.x, x), r.y + r.height));
}
//=======================================================
// Class: EastHandle
//=======================================================
EastHandle.prototype = new LocatorHandle();

function EastHandle( /* Figure */ owner) {
    var argv = EastHandle.arguments;
    var argc = EastHandle.length;
    this.className = "EastHandle";
    if (argv.length > 0) this.initEastHandle(owner);
}
//*************
// Initializes 
//*************
EastHandle.prototype.initEastHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.east());
}
//*************
// Tracks a step of the interaction.
//*************
EastHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(r.x, r.y), new Point(Math.max(r.x, x), r.y + r.height));
}
//=======================================================
// Class: NorthHandle
//=======================================================
NorthHandle.prototype = new LocatorHandle();

function NorthHandle( /* Figure */ owner) {
    var argv = NorthHandle.arguments;
    var argc = NorthHandle.length;
    this.className = "NorthHandle";
    if (argv.length > 0) this.initNorthHandle(owner);
}
//*************
// Initializes 
//*************
NorthHandle.prototype.initNorthHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.north());
}
//*************
// Tracks a step of the interaction.
//*************
NorthHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(r.x, Math.min(r.y + r.height, y)), new Point(r.x + r.width, r.y + r.height));
}
//=======================================================
// Class: NorthWestHandle
//=======================================================
NorthWestHandle.prototype = new LocatorHandle();

function NorthWestHandle( /* Figure */ owner) {
    var argv = NorthWestHandle.arguments;
    var argc = NorthWestHandle.length;
    this.className = "NorthWestHandle";
    if (argv.length > 0) this.initNorthWestHandle(owner);
}
//*************
// Initializes 
//*************
NorthWestHandle.prototype.initNorthWestHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.northWest());
}
//*************
// Tracks a step of the interaction.
//*************
NorthWestHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(Math.min(r.x + r.width, x), Math.min(r.y + r.height, y)), new Point(r.x + r.width, r.y + r.height));
}
//=======================================================
// Class: SouthEastHandle
//=======================================================
SouthEastHandle.prototype = new LocatorHandle();

function SouthEastHandle( /* Figure */ owner) {
    var argv = SouthEastHandle.arguments;
    var argc = SouthEastHandle.length;
    this.className = "SouthEastHandle";
    if (argv.length > 0) this.initSouthEastHandle(owner);
}
//*************
// Initializes 
//*************
SouthEastHandle.prototype.initSouthEastHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.southEast());
}
//*************
// Tracks a step of the interaction.
//*************
SouthEastHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(r.x, r.y), new Point(Math.max(r.x, x), Math.max(r.y, y)));
}
//=======================================================
// Class: SouthHandle
//=======================================================
SouthHandle.prototype = new LocatorHandle();

function SouthHandle( /* Figure */ owner) {
    var argv = SouthHandle.arguments;
    var argc = SouthHandle.length;
    this.className = "SouthHandle";
    if (argv.length > 0) this.initSouthHandle(owner);
}
//*************
// Initializes 
//*************
SouthHandle.prototype.initSouthHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.south());
}
//*************
// Tracks a step of the interaction.
//*************
SouthHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(r.x, r.y), new Point(r.x + r.width, Math.max(r.y, y)));
}
//=======================================================
// Class: SouthWestHandle
//=======================================================
SouthWestHandle.prototype = new LocatorHandle();

function SouthWestHandle( /* Figure */ owner) {
    var argv = SouthWestHandle.arguments;
    var argc = SouthWestHandle.length;
    this.className = "SouthWestHandle";
    if (argv.length > 0) this.initSouthWestHandle(owner);
}
//*************
// Initializes 
//*************
SouthWestHandle.prototype.initSouthWestHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.southWest());
}
//*************
// Tracks a step of the interaction.
//*************
SouthWestHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(Math.min(r.x + r.width, x), r.y), new Point(r.x + r.width, Math.max(r.y, y)));
}
//=======================================================
// Class: WestHandle
//=======================================================
WestHandle.prototype = new LocatorHandle();

function WestHandle( /* Figure */ owner) {
    var argv = WestHandle.arguments;
    var argc = WestHandle.length;
    this.className = "WestHandle";
    if (argv.length > 0) this.initWestHandle(owner);
}
//*************
// Initializes 
//*************
WestHandle.prototype.initWestHandle = function(owner) {
    this.initLocatorHandle(owner, relativeLocator.west());
}
//*************
// Tracks a step of the interaction.
//*************
WestHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* Rectangle */
    var r = this.owner().displayBox();
    this.owner().displayBox(new Point(Math.min(r.x + r.width, x), r.y), new Point(r.x + r.width, r.y + r.height));
}
//=======================================================
//
//
// Class: BoxHandleKit
//
//
//=======================================================
function BoxHandleKit() {
    var argv = BoxHandleKit.arguments;
    var argc = BoxHandleKit.length;
    this.className = "BoxHandleKit";
    if (argv.length > 0) this.initBoxHandleKit();
}
//*************
// Initializes 
//*************
BoxHandleKit.prototype.initBoxHandleKit = function() {}
//*************
// Fills the given Vector with handles at each corner of a figure.
//*************
BoxHandleKit.prototype.addCornerHandles = function( /* Figure */ f, /* Vector */ handles) {
    handles.addElement(this.southEast(f));
    handles.addElement(this.southWest(f));
    handles.addElement(this.northEast(f));
    handles.addElement(this.northWest(f));
}
//*************
// Fills the given Vector with handles at each corner and the north, south, east, and west of the figure.
//*************
BoxHandleKit.prototype.addHandles = function( /* Figure */ f, /* Vector */ handles) {
    this.addCornerHandles(f, handles);
    handles.addElement(this.south(f));
    handles.addElement(this.north(f));
    handles.addElement(this.east(f));
    handles.addElement(this.west(f));
}
//*************
// south
//*************
/* Handle */
BoxHandleKit.prototype.south = function( /* Figure */ owner) {
    return new SouthHandle(owner);
}
//*************
// southEast
//*************
/* Handle */
BoxHandleKit.prototype.southEast = function( /* Figure */ owner) {
    return new SouthEastHandle(owner);;
}
//*************
// southWest
//*************
/* Handle */
BoxHandleKit.prototype.southWest = function( /* Figure */ owner) {
    return new SouthWestHandle(owner);
}
//*************
// north
//*************
/* Handle */
BoxHandleKit.prototype.north = function( /* Figure */ owner) {
    return new NorthHandle(owner);
}
//*************
// northEast
//*************
/* Handle */
BoxHandleKit.prototype.northEast = function( /* Figure */ owner) {
    return new NorthEastHandle(owner);
}
//*************
// northWest
//*************
/* Handle */
BoxHandleKit.prototype.northWest = function( /* Figure */ owner) {
    return new NorthWestHandle(owner);
}
//*************
// east
//*************
/* Handle */
BoxHandleKit.prototype.east = function( /* Figure */ owner) {
    return new EastHandle(owner);
}
//*************
// west
//*************
/* Handle */
BoxHandleKit.prototype.west = function( /* Figure */ owner) {
    return new WestHandle(owner);
}
//*************
// toString
//*************
BoxHandleKit.prototype.toString = function() {
    return this.className;
}
//**************************************************************************************
// An instance of the class BoxHandleKit called BoxHandleKit to be used by JHotdraw [static]
//**************************************************************************************
var boxHandleKit = new BoxHandleKit();
//**************************************************************************************
/**
 * Hotdraw.js : TextHolder
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * The interface of a figure that has some editable text contents
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     28th February 2005 
 * @package   websemantics/hotdraw/standard
 */

function TextHolder() {
    this.className = "TextHolder";
}
//*************
// textDisplayBox
//*************
/* Rectangle */
TextHolder.prototype.textDisplayBox = function() {;
}
//*************
//  Gets the text shown by the text figure.
//*************
/* String */
TextHolder.prototype.getText = function() {;
}
//*************
// Sets the text shown by the text figure.
//*************
TextHolder.prototype.setText = function( /* String */ newText) {;
}
//*************
// Tests whether the figure accepts typing.
//*************
/* boolean */
TextHolder.prototype.acceptsTyping = function() {;
}
//*************
// Gets the number of columns to be overlaid when the figure is edited.
//*************
/* int */
TextHolder.prototype.overlayColumns = function() {;
}
//*************
// Connects a figure to another figure.
//*************
TextHolder.prototype.connect = function( /* Figure */ connectedFigure) {;
}
//*************
// Gets the font.
//*************
/* Font */
TextHolder.prototype.getFont = function() {;
}
/**
 * Hotdraw.js : NullHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A handle that doesn't change the owned figure. 
 * Its only purpose is to show feedback that a figure is selected.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     3rd August 2005 
 * @package   websemantics/hotdraw/standard
 */

NullHandle.prototype = new LocatorHandle();

function NullHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = NullHandle.arguments;
    var argc = NullHandle.length;
    this.className = "NullHandle";
    if (argv.length > 0) this.initNullHandle(owner, locator);
}
//*************
// Initializes 
//*************
NullHandle.prototype.initNullHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
}
//*************
// Create SVG Content
//*************
NullHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor("none");
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.shape.setStrokeWidth(1);
    this.shape.setStrokeColor("black");
    this.shape.setAttribute('shape-rendering', 'optimizeSpeed'); //shape-rendering( auto | optimizeSpeed | crispEdges | geometricPrecision | inherit )
    this.shape.setCursor(this.getCursorName());
}
/**
 * Hotdraw.js : ActionTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A tool that performs an action when it is active and the mouse is clicked.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2005
 * @package   websemantics/hotdraw/standard
 */

ActionTool.prototype = new AbstractTool();

function ActionTool( /* DrawingView */ itsView) {
    var argv = ActionTool.arguments;
    var argc = ActionTool.length;
    this.className = "ActionTool";
    if (argv.length > 0) this.initActionTool(itsView);
}
//*************
// Constructs a tool for the given view.
//*************
ActionTool.prototype.initActionTool = function(itsView) {
    this.initAbstractTool(itsView);
}
//*************
// Add the touched figure to the selection an invoke action
//*************
ActionTool.prototype.mouseDown = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    /* Figure */
    var target = this.drawing().findFigure(x, y);
    if (target != null) {
        this.view().addToSelection(target);
        this.action(target);
    }
}
//*************
// Handles mouse up in the drawing view.
//*************
ActionTool.prototype.mouseUp = function( /* MouseEvent */ e, /* int */ x, /* int */ y) {
    this.editor().toolDone();
}
//*************
// Performs an action with the touched figure.
//*************
ActionTool.prototype.action = function( /* Figure */ figure) {}
/**
 * Hotdraw.js : FigureAttributes
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */

function FigureAttributes() { /* extend Object and implements Cloneable, Serializable  */
    var argv = FigureAttributes.arguments;
    var argc = FigureAttributes.length;
    this.className = "FigureAttributes";
    this.fMap = new Hashtable();
    if (argv.length > 0) this.initFigureAttributes();
}
//*************
// initFigureAttributes
//*************
FigureAttributes.prototype.initFigureAttributes = function() {}
//*************
// Gets the attribute with the given name.
//*************
/* Object */
FigureAttributes.prototype.get = function( /* String */ name) {
    return this.fMap.get(name);
}
//*************
// Sets the attribute with the given name and overwrites its previous value.
//*************
FigureAttributes.prototype.set = function( /* String */ name, /* Object */ value) {
    this.fMap.put(name, value);
}
//*************
// Tests if an attribute is defined.
//*************
/* boolean */
FigureAttributes.prototype.hasDefined = function( /* String */ name) {
    return this.fMap.containsKey(name);
}
//*************
// Clones the attributes.
//*************
/* FigureAttributes */
FigureAttributes.prototype.clone = function() {
    var ret = new FigureAttributes();
    ret.fMap = this.fMap.clone();
    return ret;
}
//*************
// Read : NOT IMPLEMENTED 
//*************
FigureAttributes.prototype.read = function( /* StorableInput */ dr) {}
//*************
// WRITE : NOT IMPLEMENTED 
//*************
FigureAttributes.prototype.write = function( /* StorableOutput */ dw) {}
/**
 * Hotdraw.js : AttributeFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A figure that can keep track of an open ended set of attributes.
 * The attributes are stored in a dictionary implemented by FigureAttributes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     10th January 2005
 * @package   websemantics/hotdraw/figures
 */

AttributeFigure.prototype = new AbstractFigure();

function AttributeFigure() { /* implements Figure */
    var argv = AttributeFigure.arguments;
    var argc = AttributeFigure.length;
    this.className = "AttributeFigure";
    // The default attributes associated with a figure. 
    // If a figure doesn't have an attribute set, a default value from this shared attribute set is returned.
    /* FigureAttributes */
    this.fgDefaultAttributes = null;
    /* FigureAttributes */
    this.fAttributes = null;
    if (argv.length > 0) this.initAttributeFigure();
}
//*************
// initAttributeFigure
//*************
AttributeFigure.prototype.initAttributeFigure = function() {
    this.initAbstractFigure();
}
//*************
// draw
//*************
AttributeFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
AttributeFigure.prototype.drawAttributeFigure = function( /* Graphics */ g) {
    this.drawAbstractFigure(g);
}
//*************
// Gets the fill color of a figure. This is a convenience method.
//*************
/* Color */
AttributeFigure.prototype.getFillColor = function() {
    return this.getAttribute("FillColor");
}
//*************
// Gets the frame color of a figure. This is a convenience method.
//*************
/* Color */
AttributeFigure.prototype.getFrameColor = function() {
    return this.getAttribute("FrameColor");
}
//*************
// figure attributes
//*************
AttributeFigure.prototype.initializeAttributes = function() {
    this.fgDefaultAttributes = new FigureAttributes();
    this.fgDefaultAttributes.set("Opacity", 1);
    this.fgDefaultAttributes.set("FrameWidth", 1);
    this.fgDefaultAttributes.set("FrameColor", "black");
    this.fgDefaultAttributes.set("FillColor", (new Color(0x70DB93)).getRGBAsString()); // returns => rgb(112,219,147)
    this.fgDefaultAttributes.set("TextColor", "black");
    this.fgDefaultAttributes.set("ArrowMode", 0);
    this.fgDefaultAttributes.set("FontName", "Helvetica");
    this.fgDefaultAttributes.set("FontSize", 12);
    this.fgDefaultAttributes.set("FontStyle", (new Font()).PLAIN);
}
//*************
// Gets a the default value for a named attribute
//*************
/* Object */
AttributeFigure.prototype.getDefaultAttribute = function( /* String */ name) {
    if (this.fgDefaultAttributes == null) this.initializeAttributes();
    return this.fgDefaultAttributes.get(name);
}
//*************
// Returns the named attribute or null if a a figure doesn't have an attribute.
//
// All figures support the attribute names FillColor and FrameColor
//*************
/* Object */
AttributeFigure.prototype.getAttribute = function( /* String */ name) {
    return this.getAttributeAttributeFigure(name);
}
//*************
// Returns the named attribute or null if a a figure doesn't have an attribute.
//
// All figures support the attribute names FillColor and FrameColor
//*************
/* Object */
AttributeFigure.prototype.getAttributeAttributeFigure = function( /* String */ name) {
    if (this.fAttributes != null) {
        if (this.fAttributes.hasDefined(name)) return this.fAttributes.get(name);
    }
    return this.getDefaultAttribute(name);
}
//*************
// Sets the named attribute to the new value
//*************
AttributeFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    this.setAttributeAttributeFigure(name, value);
}
//*************
// Sets the named attribute to the new value
//*************
AttributeFigure.prototype.setAttributeAttributeFigure = function( /* String */ name, /* Object */ value) {
    if (this.fAttributes == null) this.fAttributes = new FigureAttributes();
    this.fAttributes.set(name, value);
    this.updateShapeAttributes();
    this.changed();
}
//*************
// Update the figure attributes (i.e. color, strokeWidth, etc)
//*************
AttributeFigure.prototype.updateShapeAttributes = function() {
    this.updateShapeAttributesAttributeFigure();
}
//*************
// updateShapeAttributesAttributeFigure
//*************
AttributeFigure.prototype.updateShapeAttributesAttributeFigure = function() {
    if (this.isCreated()) this.shape.setColor(this.getAttribute("FillColor"));
    if (this.isCreated()) this.shape.setStrokeColor(this.getAttribute("FrameColor"));
    if (this.isCreated()) this.shape.setOpacity(this.getAttribute("Opacity"));
    if (this.isCreated()) this.shape.setStrokeWidth(this.getAttribute("FrameWidth"));
}
//*************
// Stores the Figure to a StorableOutput.
//*************
AttributeFigure.prototype.write = function( /* StorableOutput */ dw) {
    // Not Implemented
}
//*************
// Reads the Figure from a StorableInput.
//*************
AttributeFigure.prototype.read = function( /* StorableInput */ dr) {
    // Not Implemented
}
//*************
// serialize
//*************
/* String */
AttributeFigure.prototype.serialize = function() {
    return this.serializeAttributeFigure();
}
//*************
// serializeAttributeFigure
//*************
/* String */
AttributeFigure.prototype.serializeAttributeFigure = function() {
    var ret = new Hashtable;
    ret.put("fillColor", this.getAttribute("FillColor"));
    ret.put("frameColor", this.getAttribute("FrameColor"));
    ret.put("frameWidth", this.getAttribute("FrameWidth"));
    ret.put("opacity", this.getAttribute("Opacity"));
    return this.serializeAbstractFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
AttributeFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeAttributeFigure(str);
}
//*************
// deserializeAttributeFigure
//*************
/* Hashtable */
AttributeFigure.prototype.deserializeAttributeFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAbstractFigure(str);
    this.setAttribute("FillColor", inp.get("fillColor"));
    this.setAttribute("FrameColor", inp.get("frameColor"));
    this.setAttribute("FrameWidth", inp.get("frameWidth"));
    this.setAttribute("Opacity", inp.get("opacity"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
AttributeFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFAttributeFigure(contextUri, command);
}
//*************
// serializeAsRDFAttributeFigure [NEW: 17-3-2006]
//*************
/* String */
AttributeFigure.prototype.serializeAsRDFAttributeFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = '';
    content += history + " svg:fill \"" + this.getAttribute("FillColor") + "\" . ";
    content += history + " svg:stroke \"" + this.getAttribute("FrameColor") + "\" . ";
    content += history + " svg:stroke-width " + this.getAttribute("FrameWidth") + " . ";
    content += history + " svg:opacity " + this.getAttribute("Opacity") + " . ";
    content = this.serializeAsRDFAbstractFigure(contextUri, command) + content;
    return content;
}
/**
 * Hotdraw.js : DecoratorFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DecoratorFigure can be used to decorate other figures with
 * decorations like borders. Decorator forwards all the
 * methods to their contained figure. Subclasses can selectively
 * override these methods to extend and filter their behavior.
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2005
 * @package   websemantics/hotdraw/standard
 */

DecoratorFigure.prototype = new AttributeFigure();

function DecoratorFigure( /* Figure */ figure) { /* implements FigureChangeListener */
    var argv = DecoratorFigure.arguments;
    var argc = DecoratorFigure.length;
    this.className = "DecoratorFigure";
    /* Figure */
    this.fComponent = null;
    if (argv.length > 0) this.initDecoratorFigure(figure);
}
//*************
// Constructs a DecoratorFigure and decorates the passed in figure.
//*************
DecoratorFigure.prototype.initDecoratorFigure = function(figure) {
    this.initAbstractFigure();
    if (figure != undefined || figure != null) this.decorate(figure);
}
//*************
// Forwards the connection insets to its contained figure..
//*************
/* Insets */
DecoratorFigure.prototype.connectionInsets = function() {
    return this.connectionInsetsDecoratorFigure();
}
/* Insets */
DecoratorFigure.prototype.connectionInsetsDecoratorFigure = function() {
    return this.fComponent.connectionInsets();
}
//*************
// Forwards the canConnect to its contained figure..
//*************
/* boolean */
DecoratorFigure.prototype.canConnect = function() {
    return this.fComponent.canConnect();
}
//*************
// Forwards containsPoint to its contained figure.
//*************
/* boolean */
DecoratorFigure.prototype.containsPoint = function( /* int */ x, /* int */ y) {
    return this.fComponent.containsPoint(x, y);
}
//*************
// Decorates the given figure.
//*************
DecoratorFigure.prototype.decorate = function( /* Figure */ figure) {
    this.fComponent = figure;
    this.fComponent.addToContainer(this);
}
//*************
// Removes the decoration from the contained figure.
//*************
/* Figure */
DecoratorFigure.prototype.peelDecoration = function() {
    this.fComponent.removeFromContainer(this); //??? set the container to the listener()?
    return this.fComponent;
}
//*************
// Forwards displayBox to its contained figure.
//*************
/* gRectangle */
DecoratorFigure.prototype.displayBox = function() {
    return this.fComponent.displayBox();
}
//*************
// Forwards basicDisplayBox to its contained figure.
//*************
DecoratorFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fComponent.basicDisplayBox(origin, corner);
}
//*************
// Forwards draw to its contained figure.
//*************
DecoratorFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawDecoratorFigure(g);
}
//*************
// Forwards draw to its contained figure.
//*************
DecoratorFigure.prototype.drawDecoratorFigure = function( /* Graphics */ g) {
    this.fComponent.draw(g);
    this.drawAbstractFigure(g);
}
//*************
// Forwards findFigureInside to its contained figure.
//*************
/* Figure */
DecoratorFigure.prototype.findFigureInside = function( /* int */ x, /* int */ y) {
    return this;
    //return this.fComponent.findFigureInside(x, y); [OLD]
}
//*************
// Forwards handles to its contained figure.
//*************
/* Vector */
DecoratorFigure.prototype.handles = function() {
    return this.handlesDecoratorFigure();
}
//*************
// Forwards handles to its contained figure.
//*************
/* Vector */
DecoratorFigure.prototype.handlesDecoratorFigure = function() {
    //return this.fComponent.handles(this);
    return this.fComponent.handles();
}
//*************
// Forwards includes to its contained figure.
//*************
/* Boolean */
DecoratorFigure.prototype.includes = function( /* Figure */ figure) {
    return (this.includesAbstractFigure(figure) || this.fComponent.includes(figure));
}
//*************
// Forwards moveBy to its contained figure.
//*************
DecoratorFigure.prototype.moveBy = function( /* int */ x, /* int */ y) {
    this.fComponent.moveBy(x, y);
}
//*************
// Forwards basicMoveBy to its contained figure.
//*************
DecoratorFigure.prototype.basicMoveBy = function( /* int */ x, /* int */ y) {
    // this will never be called
}
//*************
// figureChanged
//*************
DecoratorFigure.prototype.figureChanged = function( /* FigureChangeEvent */ e) {}
//*************
// figureRemoved
//*************
DecoratorFigure.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {}
//*************
// Propagates figureRequestUpdate up the container chain.
//*************
DecoratorFigure.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestUpdate(e);
}
//*************
// Propagates the removeFromDrawing request up to the container.
//*************
DecoratorFigure.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestRemove(new FigureChangeEvent(this));
}
//*************
// Forwards figures to its contained figure.
//*************
/* FigureEnumeration */
DecoratorFigure.prototype.figures = function() {
    return this.fComponent.figures();
}
//*************
// Forwards decompose to its contained figure.
//*************
/* FigureEnumeration */
DecoratorFigure.prototype.decompose = function() {
    return this.fComponent.decompose();
}
//*************
// Forwards setAttribute to its contained figure.
//*************
DecoratorFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    this.fComponent.setAttribute(name, value);
}
//*************
// Forwards getAttribute to its contained figure.
//*************
/* Object */
DecoratorFigure.prototype.getAttribute = function( /* String */ name) {
    return this.fComponent.getAttribute(name);
}
//*************
// Returns the locator used to located connected text.
//*************
/* Locator */
DecoratorFigure.prototype.connectedTextLocator = function( /* Figure */ text) {
    return this.fComponent.connectedTextLocator(text);
}
//*************
// Returns the Connector for the given location.
//*************
/* Connector */
DecoratorFigure.prototype.connectorAt = function( /* int */ x, /*int */ y) {
    return this.fComponent.connectorAt(x, y);
}
//*************
// Forwards the connector visibility request to its component.
//*************
DecoratorFigure.prototype.connectorVisibility = function( /* boolean */ isVisible) {
    this.fComponent.connectorVisibility(isVisible);
}
//*************
// Delete a shape
//*************
DecoratorFigure.prototype.dispose = function() {
    this.disposeDecoratorFigure()
}
DecoratorFigure.prototype.disposeDecoratorFigure = function() {
    this.fComponent.dispose();
    this.disposeAbstractFigure();
}
//*************
// Releases itself and the contained figure.
//*************
DecoratorFigure.prototype.release = function() {
    this.fComponent.removeFromContainer(this);
    this.fComponent.release();
    this.abstractFigureRelease();
}
//*************
// Writes itself and the contained figure to the StorableOutput.
//*************
DecoratorFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// 
//*************
DecoratorFigure.prototype.read = function( /* StorableInput */ dr) {}
/**
 * Hotdraw.js : RectangleFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A figure that can keep track of an open ended set of attributes.
 * The attributes are stored in a dictionary implemented by FigureAttributes.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

RectangleFigure.prototype = new AttributeFigure();

function RectangleFigure( /* Point */ origin, /* Point */ corner) {
    var argv = RectangleFigure.arguments;
    var argc = RectangleFigure.length;
    this.className = "RectangleFigure";
    /* Rectangle */
    this.fDisplayBox = null;
    if (argv.length > 0) this.initRectangleFigure(origin, corner);
}
//*************
// initRectangleFigure
// 
// Forms:
// ======
// (1) RectangleFigure();
// (2) RectangleFigure(Point origin,Point corner);
//*************
RectangleFigure.prototype.initRectangleFigure = function( /* Point */ origin, /* Point */ corner) {
    this.initAttributeFigure();
    if (origin == undefined && corner == undefined) {
        this.initRectangleFigure(new Point(0, 0), new Point(0, 0));
        return;
    }
    this.basicDisplayBox(origin, corner);
}
//*************
// 
//*************
RectangleFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fDisplayBox = new gRectangle(origin);
    this.fDisplayBox.add(corner);
}
//*************
// 
//*************
/* Vector */
RectangleFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    var handles = new Vector();
    boxHandleKit.addHandles(owner, handles);
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
RectangleFigure.prototype.ret_displayBox = function() {
    return new gRectangle(this.fDisplayBox.x, this.fDisplayBox.y, this.fDisplayBox.width, this.fDisplayBox.height);
}
//*************
// 
//*************
RectangleFigure.prototype.basicMoveBy = function(x, y) {
    this.fDisplayBox.translate(x, y);
}
//*************
// createSVGContent
//*************
RectangleFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
RectangleFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawRectangleFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
RectangleFigure.prototype.drawRectangleFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the rectangle figure
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
}
//*************
// NOT IMPLEMENTED  
//*************
RectangleFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
RectangleFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// clone
//*************
RectangleFigure.prototype.clone = function() {
    return new RectangleFigure(new Point(0, 0), new Point(0, 0));
}
/**
 * Hotdraw.js : PolyLineFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A poly line figure consists of a list of points.
 * It has an optional line decoration at the start and end.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     17th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

var ARROW_TIP_NONE = 0;
var ARROW_TIP_START = 1;
var ARROW_TIP_END = 2;
var ARROW_TIP_BOTH = 3;

PolyLineFigure.prototype = new AbstractFigure();

function PolyLineFigure( /* int */ x, /* int */ y) {
    var argv = PolyLineFigure.arguments;
    var argc = PolyLineFigure.length;
    this.className = "PolyLineFigure";
    /* String */
    this.d = "M -1 -1";
    /* Shape */
    this.shape = null;
    /* Vector */
    this.fPoints = null;
    /* LineDecoration */
    this.fStartDecoration = null;
    /* LineDecoration */
    this.fEndDecoration = null;
    /* Color */
    this.fFrameColor = "black";
    /* int */
    this.fFrameWidth = 1;
    /*  float */
    this.fOpacity = 1;
    /*  Boolean */
    this.pathChanged = false;
    if (argv.length > 0) this.initPolyLineFigure(x, y);
}
//*************
// initPolyLineFigure
// 
// Forms:
// ======
// (1) PolyLineFigure();
// (2) PolyLineFigure(int size);
// (2) PolyLineFigure(int x,int y);
//*************
PolyLineFigure.prototype.initPolyLineFigure = function(x, y) {
    this.initAbstractFigure();
    /* 1 */
    if (x == undefined && y == undefined) {
        this.initPolyLineFigure(4);
        return;
    }
    /* 2 */
    if (x != undefined && y == undefined) {
        var size = x;
        this.fPoints = new Vector(size);
        return;
    }
    /* 3 */
    this.fPoints = new Vector();
    this.fPoints.addElement(new Point(x, y));
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
PolyLineFigure.prototype.ret_displayBox = function() {
    /* Enumeration */
    var k = this.points();
    /* Rectangle */
    var r = new gRectangle(k.nextElement());
    while (k.hasMoreElements()) r.add(k.nextElement());
    return r;
}
//*************
// basicDisplayBox
//*************
PolyLineFigure.prototype.basicDisplayBox = function( /* int */ origin, /* Point */ corner) {}
//*************
// isEmpty
//*************
/* boolean */
PolyLineFigure.prototype.isEmpty = function() {
    return (this.size().width < 3) && (this.size().height < 3);
}
//*************
// handles 
//*************
/* Vector */
PolyLineFigure.prototype.handles = function() {
    /*
var handles = new Vector(this.fPoints.size());
 for (var i = 0; i < this.fPoints.size(); i++)
   handles.addElement(new PolyLineHandle(this, this.locator(i), i));
*/
    /* Vector */
    var handles = new Vector();
    handles.addElement(new NullHandle(this, relativeLocator.northWest()));
    handles.addElement(new NullHandle(this, relativeLocator.northEast()));
    handles.addElement(new NullHandle(this, relativeLocator.southEast()));
    handles.addElement(new NullHandle(this, relativeLocator.southWest()));
    return handles;
}
//*************
// Adds a node to the list of points. 
//*************
PolyLineFigure.prototype.addPoint = function(x, y) {
    this.fPoints.addElement(new Point(x, y));
    this.addNewPointToPath(x, y);
    this.changed();
}
//*************
// AddNewPointToPath 
//*************
PolyLineFigure.prototype.addNewPointToPath = function(x, y) {
    if (this.shape != null) {
        this.d = this.shape.getAttribute("d");
        if (this.d == "M -1 -1") this.d = " M " + x + " " + y;
        else this.d += " L " + x + " " + y;
        this.shape.setAttribute("d", this.d);
    }
}
//*************
//  updatePath
//*************
/* Enumeration */
PolyLineFigure.prototype.updatePath = function() {
    if (!this.pathChanged) {
        this.shape.setAttribute("d", this.d);
        return;
    }
    this.pathChanged = false;
    var k = this.fPoints.elements();
    var p = k.nextElement();
    this.d = " M " + (p.x - this.shape.x) + " " + (p.y - this.shape.y);
    while (k.hasMoreElements()) {
        p = k.nextElement();
        this.d += " L " + (p.x - this.shape.x) + " " + (p.y - this.shape.y);
    }
    this.shape.setAttribute("d", this.d);
}
//*************
//  points
//*************
/* Enumeration */
PolyLineFigure.prototype.points = function() {
    return this.fPoints.elements();
}
//*************
//  pointCount
//*************
/* int */
PolyLineFigure.prototype.pointCount = function() {
    return this.fPoints.size();
}
//*************
//  basicMoveBy
//*************
PolyLineFigure.prototype.basicMoveBy = function(dx, dy) {
    /* Enumeration */
    var k = this.fPoints.elements(); // [ Those lines slow the movement]
    while (k.hasMoreElements()) k.nextElement().translate(dx, dy);
    if (this.getShape() != null) this.getShape().moveBy(dx, dy); // [ ADDED ] 
}
//*************
//  Changes the position of a node.
//*************
PolyLineFigure.prototype.setPointAt = function( /* Point */ p, /* int */ i) {
    this.willChange();
    this.fPoints.setElementAt(p, i);
    this.pathChanged = true;
    this.changed();
}
//*************
//  Insert a node at the given point.
//*************
PolyLineFigure.prototype.insertPointAt = function( /* Point */ p, /* int */ i) {
    this.fPoints.insertElementAt(p, i);
    this.changed();
}
//*************
//  removePointAt
//*************
PolyLineFigure.prototype.removePointAt = function(i) {
    this.willChange();
    this.fPoints.removeElementAt(i);
    this.changed();
}
//*************
// Splits the segment at the given point if a segment was hit.
// @return the index of the segment or -1 if no segment was hit.
//*************
PolyLineFigure.prototype.splitSegment = function(x, y) {
    var i = this.findSegment(x, y);
    if (i != -1) this.insertPointAt(new Point(x, y), i + 1);
    return i + 1;
}
//*************
//  pointAt
//*************
/* Point */
PolyLineFigure.prototype.pointAt = function(i) {
    return this.fPoints.elementAt(i);
}
//*************
// Joins to segments into one if the given point hits a node of the polyline.
// @return true if the two segments were joined.
//*************
/* boolean */
PolyLineFigure.prototype.joinSegments = function(x, y) {
    for (var i = 1; i < this.fPoints.size() - 1; i++) {
        /* Point */
        var p = this.pointAt(i);
        if (Geom.length(x, y, p.x, p.y) < 3) { // <========================================= NOT IMPL. 
            this.removePointAt(i);
            return true;
        }
    }
    return false;
}
//*************
//  connectorAt
//*************
/* Connector */
PolyLineFigure.prototype.connectorAt = function(x, y) {
    return new PolyLineConnector(this);
}
//*************
// updatePolyLineAttributes
//*************
PolyLineFigure.prototype.updatePolyLineAttributes = function() {
    this.shape.setColor("none");
    this.shape.setStrokeWidth(this.getFrameWidth());
    this.shape.setStrokeColor(this.getFrameColor());
    this.shape.setOpacity(this.getOpacity());
}
//*************
// createSVGContent
//*************
PolyLineFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    this.shape = g.drawPath(0, 0, "M -1 -1");
    this.updatePolyLineAttributes();
}
//*************
// draw
//*************
PolyLineFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawPolyLineFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
PolyLineFigure.prototype.drawPolyLineFigure = function( /* Graphics */ g) {
    this.drawAbstractFigure(g);
    this.updatePath();
}
//*************
//  Creates a locator for the point with the given index.
//*************
/* Locator */
PolyLineFigure.prototype.locator = function( /* int */ pointIndex) {
    return new PolyLineLocator(pointIndex);
}
//*************
//  getAttribute
//*************
/* String */
PolyLineFigure.prototype.getAttribute = function( /* String */ name) {
    if (name == "FrameColor") return this.getFrameColor();
    if (name == "FillColor") return "none";
    if (name == "FrameWidth") return this.getFrameWidth();
    if (name == "Opacity") return this.getOpacity();
}
//*************
//  setAttribute
//*************
/* String */
PolyLineFigure.prototype.setAttribute = function( /* String */ name, /* String */ value) {
    if (name == "FrameColor") this.setFrameColor(value);
    if (name == "FillColor");
    if (name == "FrameWidth") this.setFrameWidth(value);
    if (name == "Opacity") this.setOpacity(value);
}
//*************
//  getFrameColor
//*************
/*Color */
PolyLineFigure.prototype.getFrameColor = function() {
    return this.fFrameColor;
}
//*************
// setFrameColor
//*************
PolyLineFigure.prototype.setFrameColor = function( /* Color */ c) {
    this.fFrameColor = c;
    if (this.shape != null) this.shape.setStrokeColor(c);
}
//*************
//  getFrameColor
//*************
/*Color */
PolyLineFigure.prototype.getFrameWidth = function() {
    return this.fFrameWidth;
}
//*************
// setFrameColor
//*************
PolyLineFigure.prototype.setFrameWidth = function( /* int */ w) {
    this.fFrameWidth = w;
    if (this.shape != null) this.shape.setStrokeWidth(w);
}
//*************
//  getFrameColor
//*************
/*Color */
PolyLineFigure.prototype.getOpacity = function() {
    return this.fOpacity;
}
//*************
// setFrameColor
//*************
PolyLineFigure.prototype.setOpacity = function( /* int */ o) {
    this.fOpacity = o;
    if (this.shape != null) this.shape.setOpacity(o);
}
//*************
// NOT IMPLEMENTED  
//*************
PolyLineFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
PolyLineFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// clone
//*************
PolyLineFigure.prototype.clone = function() {
    return new PolyLineFigure(0, 0);
}
//*************
//  containsPoint
//*************
/* boolean */
PolyLineFigure.prototype.containsPoint = function(x, y) {
    /* Rectangle */
    var bounds = this.displayBox();
    bounds.grow(4, 4);
    //if (!bounds.contains(x, y)) return false; [Original]
    if (bounds.contains(x, y)) return true;
    /* Point */
    var p1, p2;
    for (var i = 0; i < this.fPoints.size() - 1; i++) {
        p1 = this.fPoints.elementAt(i);
        p2 = this.fPoints.elementAt(i + 1);
        if (geom.lineContainsPoint(p1.x, p1.y, p2.x, p2.y, x, y)) return true;
    }
    return false;
}
//*************
// Gets the segment of the polyline that is hit by the given point.
// @return the index of the segment or -1 if no segment was hit.
//*************
/* int */
PolyLineFigure.prototype.findSegment = function(x, y) {
    /* Point */
    /*var p1, p2; <========================================= NOT IMPL.
for (var i = 0; i < this.fPoints.size()-1; i++) {
 p1 =  this.fPoints.elementAt(i);
 p2 =  this.fPoints.elementAt(i+1);
  if (geom.lineContainsPoint(p1.x, p1.y, p2.x, p2.y, x, y)) return i;
 }
return -1;*/
}
//*************
//  getPoints
//*************
/* Strning */
PolyLineFigure.prototype.getPoints = function() {
    var str = ""
    /* Enumeration */
    var k = this.fPoints.elements(); // [ Those lines slow the movement]
    while (k.hasMoreElements()) {
        var point = k.nextElement();
        str += point.x + "@" + point.y + ",";
    }
    return str;
}
//*************
//  setPoints
//*************
/* Strning */
PolyLineFigure.prototype.setPoints = function( /* String */ points) {
    this.pathChanged = true;
    this.fPoints = new Vector();
    var s = points.split(',');
    for (var i = 0; i < s.length; i++) {
        var m = s[i].split("@");
        if (m != undefined && m != null && m.length > 1) {
            var x = parseFloat(m[0]);
            var y = parseFloat(m[1]);
            if (!isNaN(x) && !isNaN(y)) this.addPoint(x, y);
        }
    }
}
//*************
// serialize
//*************
/* String */
PolyLineFigure.prototype.serialize = function() {
    return this.serializePolyLineFigure();
}
//*************
// serializePolyLineFigure
//*************
/* String */
PolyLineFigure.prototype.serializePolyLineFigure = function() {
    var ret = new Hashtable;
    ret.put("fillColor", this.getAttribute("FillColor"));
    ret.put("frameColor", this.getAttribute("FrameColor"));
    ret.put("frameWidth", this.getAttribute("FrameWidth"));
    ret.put("opacity", this.getAttribute("Opacity"));
    if (this instanceof PolyLineFigure) ret.put("points", this.getPoints());
    return this.serializeAbstractFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
PolyLineFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializePolyLineFigure(str);
}
//*************
// deserializePolyLineFigure
//*************
/* Hashtable */
PolyLineFigure.prototype.deserializePolyLineFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAbstractFigure(str);
    this.setAttribute("FillColor", inp.get("fillColor"));
    this.setAttribute("FrameColor", inp.get("frameColor"));
    this.setAttribute("FrameWidth", inp.get("frameWidth"));
    this.setAttribute("Opacity", inp.get("opacity"));
    if (this instanceof PolyLineFigure) this.setPoints(inp.get("points"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
PolyLineFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFPolyLineFigure(contextUri, command);
}
//*************
// serializeAsRDFPolyLineFigure [NEW: 17-3-2006]
//*************
/* String */
PolyLineFigure.prototype.serializeAsRDFPolyLineFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = '';
    content += history + " svg:fill \"" + this.getAttribute("FillColor") + "\" . ";
    content += history + " svg:stroke \"" + this.getAttribute("FrameColor") + "\" . ";
    content += history + " svg:stroke-width " + this.getAttribute("FrameWidth") + " . ";
    content += history + " svg:opacity " + this.getAttribute("Opacity") + " . ";
    // **************************************************************************************************************
    // ************** [ This is wrong!!! but I had to do it as a quick fix until I come up with a better way] *******
    // **************************************************************************************************************
    if (this.className == "PolyLineFigure" || this.className == "FireBoundaryFigure") content += history + " svg:points \"" + this.getPoints() + "\" . ";
    // **************************************************************************************************************
    content = this.serializeAsRDFAbstractFigure(contextUri, command) + content;
    return content;
}
/**
 * Hotdraw.js : EllipseFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * An ellipse figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */

EllipseFigure.prototype = new AttributeFigure();

function EllipseFigure( /* Point */ origin, /* Point */ corner) {
    var argv = EllipseFigure.arguments;
    var argc = EllipseFigure.length;
    this.className = "EllipseFigure";
    /* Rectangle */
    this.fDisplayBox = null;
    if (argv.length > 0) this.initEllipseFigure(origin, corner);
}
//*************
// initEllipseFigure
// 
// Forms:
// ======
// (1) EllipseFigure();
// (2) EllipseFigure(Point origin,Point corner);
//*************
EllipseFigure.prototype.initEllipseFigure = function(origin, corner) {
    this.initAttributeFigure();
    if (!origin && !corner) {
        this.initEllipseFigure(new Point(0, 0), new Point(0, 0));
        return;
    }
    this.basicDisplayBox(origin, corner);
}
//*************
// basicDisplayBox
//*************
EllipseFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fDisplayBox = new gRectangle(origin);
    this.fDisplayBox.add(corner);
}
//*************
// handles 
//*************
/* Vector */
EllipseFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    var handles = new Vector();
    boxHandleKit.addHandles(owner, handles);
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
EllipseFigure.prototype.ret_displayBox = function() {
    return new gRectangle(this.fDisplayBox.x, this.fDisplayBox.y, this.fDisplayBox.width, this.fDisplayBox.height);
}
//*************
// basicMoveBy
//*************
EllipseFigure.prototype.basicMoveBy = function(x, y) {
    this.fDisplayBox.translate(x, y);
    var r = this.displayBox();
}
//*************
// createSVGContent
//*************
EllipseFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawOval(r.x, r.y, r.width / 2, r.height / 2);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
EllipseFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawEllipseFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
EllipseFigure.prototype.drawEllipseFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the ellipse figure
    this.shape.setRadius(r.width / 2, r.height / 2);
    this.shape.translate(r.x, r.y);
}
//*************
// NOT IMPLEMENTED  
//*************
EllipseFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
EllipseFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// 
//*************
EllipseFigure.prototype.clone = function() {
    return new EllipseFigure(new Point(0, 0), new Point(0, 0));
}
/**
 * Hotdraw.js : ImageFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Figure that shows an Image.
 * Images shown by an image figure are shared by using the Iconkit.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */

ImageFigure.prototype = new RectangleFigure();

function ImageFigure( /* Point */ origin, /* Point */ corner, /* String */ fileName) {
    var argv = ImageFigure.arguments;
    var argc = ImageFigure.length;
    this.className = "ImageFigure";
    /* String */
    this.fFileName = null;
    /* String */
    this.preserveAspectRatio = "none";
    if (argv.length > 0) this.initImageFigure(origin, corner, fileName);
}
//*************
// initImageFigure
// 
// Forms:
// ======
// (1) ImageFigure();
// (2) ImageFigure(Point origin,Point corner);
//*************
ImageFigure.prototype.initImageFigure = function(origin, corner, fileName) {
    this.initRectangleFigure(origin, corner);
    if (fileName == undefined) this.fFileName = hdImageURL;
    else this.fFileName = fileName;
}
//*************
// createSVGContent
//*************
ImageFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawImage(r.x, r.y, r.width, r.height, this.fFileName);
    this.shape.setAttribute("preserveAspectRatio", this.preserveAspectRatio);
}
//*************
// getURL
//*************
ImageFigure.prototype.getURL = function() {
    return this.fFileName;
}
//*************
// getURL
//*************
ImageFigure.prototype.setURL = function( /* String */ url) {
    this.fFileName = url;
    if (this.shape != null) this.shape.changeHref(this.fFileName);
}
//*************
// clone  
//*************
ImageFigure.prototype.clone = function() {
    return new ImageFigure(new Point(0, 0), new Point(0, 0), this.fFileName);
}
//*************
// serialize
//*************
/* String */
ImageFigure.prototype.serialize = function() {
    return this.serializeImageFigure();
}
//*************
// serializeImageFigure
//*************
/* String */
ImageFigure.prototype.serializeImageFigure = function() {
    var ret = new Hashtable;
    ret.put("url", this.getURL());
    ret.put("opacity", this.getAttribute("Opacity"));
    return this.serializeAbstractFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
ImageFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeImageFigure(str);
}
//*************
// deserializeImageFigure
//*************
/* Hashtable */
ImageFigure.prototype.deserializeImageFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAbstractFigure(str);
    this.setURL(inp.get("url"));
    this.setAttribute("Opacity", inp.get("opacity"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
ImageFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFImageFigure(contextUri, command);
}
//*************
// serializeAsRDFImageFigure [NEW: 17-3-2006]
//*************
/* String */
ImageFigure.prototype.serializeAsRDFImageFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = history + " xlink:href \"" + this.getURL() + "\" . ";
    content += history + " svg:opacity " + this.getAttribute("Opacity") + " . ";
    content = this.serializeAsRDFAbstractFigure(contextUri, command) + content;
    return content;
}
/**
 * Hotdraw.js : RoundRectangleFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A round rectangle figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

RoundRectangleFigure.prototype = new AttributeFigure();

function RoundRectangleFigure( /* Point */ origin, /* Point */ corner) {
    var argv = RoundRectangleFigure.arguments;
    var argc = RoundRectangleFigure.length;
    this.className = "RoundRectangleFigure";
    /* Rectangle */
    this.fDisplayBox = null;
    /* int */
    this.DEFAULT_ARC = 15;
    /* int */
    this.fArcWidth = this.DEFAULT_ARC;
    /* int */
    this.fArcHeight = this.DEFAULT_ARC;
    if (argv.length > 0) this.initRoundRectangleFigure(origin, corner);
}
//*************
// initRoundRectangleFigure
// 
// Forms:
// ======
// (1) RoundRectangleFigure();
// (2) RoundRectangleFigure(Point origin,Point corner);
//*************
RoundRectangleFigure.prototype.initRoundRectangleFigure = function(origin, corner) {
    this.initAttributeFigure();
    if (!origin && !corner) {
        this.initRoundRectangleFigure(new Point(0, 0), new Point(0, 0));
        return;
    }
    this.basicDisplayBox(origin, corner);
}
//*************
// 
//*************
RoundRectangleFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.fDisplayBox = new gRectangle(origin);
    this.fDisplayBox.add(corner);
}
//*************
// Sets the arc's witdh and height.
//*************
RoundRectangleFigure.prototype.setArc = function(width, height) {
    this.willChange();
    this.fArcWidth = width;
    this.fArcHeight = height;
    this.changed();
}
//*************
// Gets the arc's witdh and height.
//*************
/* Point */
RoundRectangleFigure.prototype.getArc = function() {
    return new Point(this.fArcWidth, this.fArcHeight);
}
//*************
// 
//*************
/* Vector */
RoundRectangleFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    var handles = new Vector();
    boxHandleKit.addHandles(owner, handles);
    handles.addElement(new RadiusHandle(this));
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* Rectangle */
RoundRectangleFigure.prototype.ret_displayBox = function() {
    return new gRectangle(this.fDisplayBox.x, this.fDisplayBox.y, this.fDisplayBox.width, this.fDisplayBox.height);
}
//*************
// 
//*************
RoundRectangleFigure.prototype.basicMoveBy = function(x, y) {
    this.fDisplayBox.translate(x, y);
}
//*************
// createSVGContent
//*************
RoundRectangleFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawRoundRect(r.x, r.y, r.width, r.height, this.fArcWidth, this.fArcHeight);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
RoundRectangleFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawRoundRectangleFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
RoundRectangleFigure.prototype.drawRoundRectangleFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the rectangle figure
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
    this.shape.setRadius(this.fArcWidth, this.fArcHeight);
}
//*************
// connectionInsets
//*************
/* Insets */
RoundRectangleFigure.prototype.connectionInsets = function() {
    return new Insets(this.fArcHeight / 2, this.fArcWidth / 2, this.fArcHeight / 2, this.fArcWidth / 2);
}
//*************
// connectorAt
//*************
/* Connector */
RoundRectangleFigure.prototype.connectorAt = function(x, y) {
    return new ShortestDistanceConnector(this); // just for demo purposes
}
// NOT IMPLEMENTED  
//*************
RoundRectangleFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
RoundRectangleFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// NOT IMPLEMENTED  
//*************
RoundRectangleFigure.prototype.clone = function() {
    return new RoundRectangleFigure(new Point(0, 0), new Point(0, 0));
}
//*************
// serialize
//*************
/* String */
RoundRectangleFigure.prototype.serialize = function() {
    return this.serializeRoundRectangleFigure();
}
//*************
// serializeRoundRectangleFigure
//*************
/* String */
RoundRectangleFigure.prototype.serializeRoundRectangleFigure = function() {
    var ret = new Hashtable;
    ret.put("arcWidth", this.fArcWidth);
    ret.put("arcHeight", this.fArcHeight);
    return this.serializeAttributeFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
RoundRectangleFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeRoundRectangleFigure(str);
}
//*************
// deserializeRoundRectangleFigure
//*************
RoundRectangleFigure.prototype.deserializeRoundRectangleFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAttributeFigure(str);
    var arcWidth = parseFloat(inp.get("arcWidth"));
    var arcHeight = parseFloat(inp.get("arcHeight"));
    this.setArc(arcWidth, arcHeight);
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
RoundRectangleFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFRoundRectangleFigure(contextUri, command);
}
//*************
// serializeAsRDFRoundRectangleFigure [NEW: 17-3-2006]
//*************
/* String */
RoundRectangleFigure.prototype.serializeAsRDFRoundRectangleFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = '';
    content += history + " svg:rx " + this.fArcWidth + " . ";
    content += history + " svg:ry " + this.fArcHeight + " . ";
    content = this.serializeAsRDFAttributeFigure(contextUri, command) + content;
    return content;
}
/**
 * Hotdraw.js : TextFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A text figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

TextFigure.prototype = new AttributeFigure(); // implements FigureChangeListener, TextHolder 

function TextFigure() {
    var argv = TextFigure.arguments;
    var argc = TextFigure.length;
    this.className = "TextFigure";
    /* int */
    this.fOriginX = 0;
    /* int */
    this.fOriginY = 0;
    // cache of the TextFigure's size
    /* boolean */
    this.fSizeIsDirty = true;
    /* int */
    this.fWidth = 0;
    /* int */
    this.fHeight = 0;
    /* String */
    this.fText = "";
    /* boolean */
    this.fIsReadOnly = false;
    /* Figure */
    this.fObservedFigure = null;
    /* OffsetLocator */
    this.fLocator = null;
    /* String */
    this.fgCurrentFontName = "Helvetica";
    /* int */
    this.fgCurrentFontSize = 10;
    /* int */
    this.fgCurrentFontStyle = "Normal";
    /* Font */
    this.fFont = this.createCurrentFont();
    if (argv.length > 0) this.initTextFigure();
}
//*************
// initTextFigure
//*************
TextFigure.prototype.initTextFigure = function() {
    this.initAttributeFigure();
    this.setAttribute("FrameColor", "none");
    this.setAttribute("FillColor", "black");
}
//*************
// moveBy
//*************
TextFigure.prototype.moveBy = function(x, y) {
    this.willChange();
    this.basicMoveBy(x, y);
    if (this.fLocator != null) this.fLocator.moveBy(x, y);
    this.changed();
}
//*************
// basicMoveBy
//*************
TextFigure.prototype.basicMoveBy = function(x, y) {
    this.fOriginX += x;
    this.fOriginY += y;
}
//*************
// basicDisplayBox
//*************
TextFigure.prototype.basicDisplayBox = function( /* Point */ newOrigin, /* Point */ newCorner) {
    this.fOriginX = newOrigin.x;
    this.fOriginY = newOrigin.y;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* gRectangle */
TextFigure.prototype.ret_displayBox = function() {
    /* Dimension */
    var extent = this.textExtent();
    return new gRectangle(this.fOriginX, this.fOriginY, extent.width, extent.height);
}
//*************
// textDisplayBox
//*************
/* Rectangle */
TextFigure.prototype.textDisplayBox = function() {
    return this.displayBox();
}
//*************
// Tests whether this figure is read only.
//*************
/* boolean */
TextFigure.prototype.readOnly = function() {
    return this.fIsReadOnly;
}
//*************
// Sets the read only status of the text figure.
//*************
TextFigure.prototype.setReadOnly = function( /* boolean */ isReadOnly) {
    this.fIsReadOnly = isReadOnly;
}
//*************
// Gets the font.
//*************
/* Font */
TextFigure.prototype.getFont = function() {
    return this.fFont;
}
//*************
// Sets the font.
//*************
TextFigure.prototype.setFont = function( /* Font */ newFont) {
    this.willChange();
    this.fFont = newFont;
    if (this.shape != null) this.shape.setFont(this.fFont);
    this.changed();
}
//*************
// Updates the location whenever the figure changes itself.
//*************
TextFigure.prototype.changed = function() {
    // super.changed(); // <======================================================= [ Not Impl.] 
    this.updateLocation();
}
//*************
// Creates the current font to be used for new text figures.
//*************
/* Font */
TextFigure.prototype.createCurrentFont = function() {
    return new Font(this.fgCurrentFontName, this.fgCurrentFontStyle, this.fgCurrentFontSize + "pt");
}
//*************
// Sets the current font name
//*************
TextFigure.prototype.setCurrentFontName = function( /* String */ name) {
    this.fgCurrentFontName = name;
}
//*************
// Sets the current font size.
//*************
TextFigure.prototype.setCurrentFontSize = function( /* int */ size) {
    this.fgCurrentFontSize = size;
}
//*************
// Sets the current font style.
//*************
TextFigure.prototype.setCurrentFontStyle = function( /* int */ style) {
    this.fgCurrentFontStyle = style;
}
//*************
// A text figure understands the "FontSize", "FontStyle", and "FontName" attributes.
//*************
/* Object! or not */
TextFigure.prototype.getAttribute = function( /* String */ name) {
    /* Font */
    var font = this.getFont();
    if (name == "FontSize") return font.getSize();
    if (name == "FontStyle") return font.getNamedStyle();
    if (name == "FontName") return font.getName();
    return this.getAttributeAttributeFigure(name);
}
//*************
// A text figure understands the "FontSize", "FontStyle", and "FontName" attributes.
//*************
TextFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    /* Font */
    var font = this.getFont();
    if (name == "FontSize") this.setFont(new Font(font.getName(), font.getNamedStyle(), parseInt(value)));
    else if (name == "FontStyle") {
        font.setStyle(parseInt(value));
        this.setFont(new Font(font.getName(), font.getNamedStyle(), font.getSize()));
    } else if (name == "FontName") this.setFont(new Font(value, font.getNamedStyle(), font.getSize()));
    else this.setAttributeAttributeFigure(name, value);
}
//*************
// Gets the text shown by the text figure.
//*************
/* String */
TextFigure.prototype.getText = function() {
    return this.fText;
}
//*************
// Sets the text shown by the text figure.
//*************
TextFigure.prototype.setText = function( /* String */ newText) {
    if (newText == undefined || newText == null) return;
    if (newText != this.fText) {
        this.willChange();
        this.fText = newText;
        if (this.shape != null) this.shape.setText(newText);
        this.changed();
    }
}
//*************
// Tests whether the figure accepts typing.
//*************
TextFigure.prototype.acceptsTyping = function() {
    return !this.fIsReadOnly;
}
//*************
// createSVGContent
//*************
TextFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    var r = this.displayBox();
    this.shape = g.drawText(r.x, r.y, this.fText);
    this.shape.setToBaseLine();
    this.updateShapeAttributes();
}
//*************
// draw
//*************
TextFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawTextFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
TextFigure.prototype.drawTextFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the text figure
    this.shape.setFont(this.getFont());
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
}
//*************
// textExtent
//*************
/* Dimension */
TextFigure.prototype.textExtent = function() {
    if (this.shape == null) return new Dimension(0, 0);
    this.fWidth = this.shape.getStringWidth();
    this.fHeight = this.shape.getStringHeight();
    return new Dimension(this.fWidth, this.fHeight);
}
//*************
// markDirty
//*************
TextFigure.prototype.markDirty = function() {
    this.fSizeIsDirty = true;
}
//*************
// Gets the number of columns to be overlaid when the figure is edited.
//*************
/* int */
TextFigure.prototype.overlayColumns = function() {
    /* int */
    var len = this.getText().length;
    var columns = 20;
    if (len != 0) columns = this.getText().length + 3;
    return columns;
}
//*************
// handles
//*************
/* Vector */
TextFigure.prototype.handles = function() {
    /* Vector */
    var handles = new Vector();
    handles.addElement(new NullHandle(this, relativeLocator.northWest()));
    handles.addElement(new NullHandle(this, relativeLocator.northEast()));
    handles.addElement(new NullHandle(this, relativeLocator.southEast()));
    handles.addElement(new FontSizeHandle(this, relativeLocator.southWest()));
    return handles;
}
//*************
// connect
//*************
TextFigure.prototype.connect = function( /* Figure */ figure) {
    /*  <==============================================================[ NOT IMPL]
        if (fObservedFigure != null)
            fObservedFigure.removeFigureChangeListener(this);

        fObservedFigure = figure;
        fLocator = new OffsetLocator(figure.connectedTextLocator(this));
        fObservedFigure.addFigureChangeListener(this);
        updateLocation();
 
*/
}
//*************
// figureChanged
//*************
TextFigure.prototype.figureChanged = function( /* FigureChangeEvent */ e) {
    this.updateLocation();
}
//*************
// figureRemoved
//*************
TextFigure.prototype.figureRemoved = function( /* FigureChangeEvent */ e) {
    if (this.listener() != null) this.listener().figureRequestRemove(new FigureChangeEvent(this));
}
TextFigure.prototype.figureRequestRemove = function( /* FigureChangeEvent */ e) {;
}
TextFigure.prototype.figureInvalidated = function( /* FigureChangeEvent */ e) {;
}
TextFigure.prototype.figureRequestUpdate = function( /* FigureChangeEvent */ e) {;
}
//*************
// Updates the location relative to the connected figure. The TextFigure is centered around the located point.
//*************
TextFigure.prototype.updateLocation = function() {
    /*  <==============================================================[ NOT IMPL]

        if (fLocator != null) {
            Point p = fLocator.locate(fObservedFigure);
            p.x -= size().width/2 + fOriginX;
            p.y -= size().height/2 + fOriginY;

            if (p.x != 0 || p.y != 0) {
                willChange();
                basicMoveBy(p.x, p.y);
                changed();
            }
        }
*/
}
//*************
// release
//*************
TextFigure.prototype.release = function() {
    this.abstractFigureRelease();
    if (this.fObservedFigure != null) this.fObservedFigure.removeFigureChangeListener(this);
}
//*************
// Disconnects the text figure.
//*************
TextFigure.prototype.disconnect = function() {
    /*  <==============================================================[ NOT IMPL]

       fObservedFigure.removeFigureChangeListener(this);
        fObservedFigure = null;
        fLocator = null;
 */
}
//*************
// NOT IMPLEMENTED  
//*************
TextFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
TextFigure.prototype.read = function( /* StorableInput dr */ ) {}
//*************
// clone 
//*************
TextFigure.prototype.clone = function() {
    return new TextFigure(true);
}
//*************
// serialize
//*************
/* String */
TextFigure.prototype.serialize = function() {
    return this.serializeTextFigure();
}
//*************
// serializeTextFigure
//*************
/* String */
TextFigure.prototype.serializeTextFigure = function() {
    var ret = new Hashtable;
    ret.put("fontName", this.getAttribute("FontName"));
    ret.put("fontSize", this.getAttribute("FontSize"));
    ret.put("fontStyle", this.getAttribute("FontStyle"));
    if (this.getText() != null) ret.put("text", this.getText());
    return this.serializeAttributeFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
TextFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeTextFigure(str);
}
//*************
// deserializeTextFigure
//*************
/* Hashtable */
TextFigure.prototype.deserializeTextFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAttributeFigure(str);
    if (inp.containsKey("text")) this.setText(inp.get("text"));
    else this.setText(" ");
    this.setFont(new Font(inp.get("fontName"), inp.get("fontStyle"), inp.get("fontSize")));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
TextFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFTextFigure(contextUri, command);
}
//*************
// serializeAsRDFTextFigure [NEW: 20-3-2006]
//*************
/* String */
TextFigure.prototype.serializeAsRDFTextFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = history + " svg:font-family \"" + this.getAttribute("FontName") + "\" . ";
    content += history + " svg:font-style \"" + this.getAttribute("FontStyle") + "\" . ";
    content += history + " svg:font-size \"" + this.getAttribute("FontSize") + "\" . ";
    if (this.getText() != null) content += history + " svg:content \"" + this.getText() + "\" . ";
    content = this.serializeAsRDFAttributeFigure(contextUri, command) + content;
    return content;
}
/**
 * Hotdraw.js : TextTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Tool to create new or edit existing text figures. The editing behavior is implemented by overlaying the
 * Figure providing the text with a FloatingTextField.  A tool interaction is done once a Figure that is not
 * a TextHolder is clicked.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
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
/**
 * Hotdraw.js : FontSizeHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Handle to change the font size by direct manipulation.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     3rd August 2005
 * @package   websemantics/hotdraw/figures
 */

FontSizeHandle.prototype = new LocatorHandle();

function FontSizeHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = FontSizeHandle.arguments;
    var argc = FontSizeHandle.length;
    this.className = "FontSizeHandle";
    /* Font */
    this.fFont = null;
    /* int */
    this.fSize = 0;
    /* Color */
    this.color = "yellow";
    if (argv.length > 0) this.initFontSizeHandle(owner, locator);
}
//*************
// Initializes 
//*************
FontSizeHandle.prototype.initFontSizeHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
}
//*************
// Create SVG Content
//*************
FontSizeHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor(this.color);
    this.shape = g.drawOval(r.x + r.width / 2, r.y + r.height / 2, r.width, r.height);
    this.shape.setStrokeWidth(0.5);
    this.shape.setStrokeColor("black");
    this.shape.setCursor(this.getCursorName());
}
//*************
// invokeStart
//*************
FontSizeHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    /* TextFigure */
    var textOwner = this.owner();
    this.fFont = textOwner.getFont();
    this.fSize = this.fFont.getSizeValue();
}
//*************
// Tracks a step of the interaction.
//*************
FontSizeHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* TextFigure */
    var textOwner = this.owner();
    /* int */
    var newSize = this.fSize + y - anchorY;
    if (newSize > 5) textOwner.setFont(new Font(this.fFont.getName(), this.fFont.getStyle(), newSize + "pt"));
}
/**
 * Hotdraw.js : PolyLineHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A handle for a node on the polyline.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

PolyLineHandle.prototype = new LocatorHandle();

function PolyLineHandle( /* PolyLineFigure */ owner, /* Locator */ locator, /* int */ indx) {
    var argv = PolyLineHandle.arguments;
    var argc = PolyLineHandle.length;
    this.className = "PolyLineHandle";
    /* Point */
    this.fAnchor = null;
    /* int */
    this.fIndex = 0;
    if (argv.length > 0) this.initPolyLineHandle(owner, locator, indx);
}
//*************
// Initializes 
//*************
PolyLineHandle.prototype.initPolyLineHandle = function(owner, locator, indx) {
    this.initLocatorHandle(owner, locator);
    this.fIndex = indx;
}
//*************
// invokeStart
//*************
PolyLineHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    this.fAnchor = new Point(x, y);
}
//*************
// Tracks a step of the interaction.
//*************
PolyLineHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    this.myOwner().setPointAt(new Point(x, y), this.fIndex);
    //this.myOwner().draw();
}
//*************
// myOwner
//*************
PolyLineHandle.prototype.myOwner = function() {
    return this.owner();
}
/**
 * Hotdraw.js : PolyLineLocator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A poly line figure consists of a list of points.
 * It has an optional line decoration at the start and end.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th January 2005
 * @package   websemantics/hotdraw/figures
 */ 

PolyLineLocator.prototype = new AbstractLocator(); // implements Locator, Storable, Cloneable

function PolyLineLocator( /* int */ indx) {
    /* String */
    this.className = "PolyLineLocator";
    /* int */
    this.fIndex = 0;
    this.initPolyLineLocator(indx);
}
//*************
// initPolyLineLocator
//*************
PolyLineLocator.prototype.initPolyLineLocator = function(indx) {
    this.fIndex = indx;
}
//*************
// locate.
//*************
/* Point */
PolyLineLocator.prototype.locate = function( /* Figure */ owner) {
    /* PolyLineFigure */
    var plf = owner;
    // guard against changing PolyLineFigures -> temporary hack
    if (this.fIndex < plf.pointCount()) return owner.pointAt(this.fIndex);
    return new Point(0, 0);
}
/**
 * Hotdraw.js : LineFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A line figure.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     4th August 2005
 * @package   websemantics/hotdraw/figures
 */

LineFigure.prototype = new PolyLineFigure();

function LineFigure() {
    var argv = LineFigure.arguments;
    var argc = LineFigure.length;
    this.className = "LineFigure";
    if (argv.length > 0) this.initLineFigure();
}
//*************
// initLineFigure: Constructs a LineFigure with both start and end set to Point(0,0).
//*************
LineFigure.prototype.initLineFigure = function() {
    this.initPolyLineFigure(0, 0);
    this.addPoint(0, 0);
}
//*************
// Gets a copy of the start point. OR .  Sets the start point.
//
// Forms:
//======
// (1) Point startPoint();
// (2) startPoint(10,10);
//*************
/* Point */
LineFigure.prototype.startPoint = function( /* int */ x, /* int */ y) {
    if (x != undefined && y != undefined) this.setPointAt(new Point(x, y), 0);
    else return this.pointAt(0);
}
//*************
// Gets a copy of the end point. OR . Sets the end point.
//
// Forms:
//======
// (1) Point endPoint();
// (2) endPoint(10,10);
//*************
LineFigure.prototype.endPoint = function( /* int */ x, /* int */ y) {
    if (x != undefined && y != undefined) this.setPointAt(new Point(x, y), 1);
    else return this.pointAt(1);
}
//*************
// Sets the start and end point.
//*************
LineFigure.prototype.setPoints = function( /* Point */ start, /* Point */ end) {
    this.setPointAt(start, 0);
    this.setPointAt(end, 1);
}
//*************
// basicDisplayBox
//*************
LineFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    this.setPoints(origin, corner);
}
//*************
// createSVGContent
//*************
LineFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    this.shape = g.drawLine(this.startPoint().x, this.startPoint().y, this.startPoint().x + 100, this.startPoint().y + 100);
    this.updatePolyLineAttributes();
    //this.shape.setAttribute("marker-end","url(#Tail)");
    //this.shape.setAttribute("marker-start","url(#Arrow1Lstart)");
}
//*************
// draw
//*************
LineFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawLineFigure(g);
}
//*************
// draw a figure and its subclass.
//*************
LineFigure.prototype.drawLineFigure = function( /* Graphics */ g) {
    this.drawAbstractFigure(g);
    var p1 = this.startPoint();
    var p2 = this.endPoint();
    this.shape.x = p1.x;
    this.shape.y = p1.y;
    this.shape.x2 = p2.x;
    this.shape.y2 = p2.y;
    this.shape.update();
}
//*************
// handles 
//*************
/* Vector */
LineFigure.prototype.handles = function() {
    var handles = new Vector(this.fPoints.size());
    for (var i = 0; i < this.fPoints.size(); i++) handles.addElement(new PolyLineHandle(this, this.locator(i), i));
    return handles;
}
//*************
//   clone
//*************
LineFigure.prototype.clone = function() {
    return new LineFigure(true);
}
//*************
// serialize
//*************
/* String */
LineFigure.prototype.serialize = function() {
    return this.serializeLineFigure();
}
//*************
// serializeLineFigure
//*************
/* String */
LineFigure.prototype.serializeLineFigure = function() {
    var ret = new Hashtable;
    var sPoint = this.startPoint();
    var ePoint = this.endPoint();
    ret.put("x1", sPoint.getX());
    ret.put("y1", sPoint.getY());
    ret.put("x2", ePoint.getX());
    ret.put("y2", ePoint.getY());
    return this.serializePolyLineFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
LineFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializeLineFigure(str);
}
//*************
// deserializeLineFigure
//*************
/* Hashtable */
LineFigure.prototype.deserializeLineFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializePolyLineFigure(str);
    var x1 = parseFloat(inp.get("x1"));
    var y1 = parseFloat(inp.get("y1"));
    var x2 = parseFloat(inp.get("x2"));
    var y2 = parseFloat(inp.get("y2"));
    this.startPoint(x1, y1);
    this.endPoint(x2, y2);
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
LineFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFLineFigure(contextUri, command);
}
//*************
// serializeAsRDFLineFigure [NEW: 17-3-2006]
//*************
/* String */
LineFigure.prototype.serializeAsRDFLineFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var sPoint = this.startPoint();
    var ePoint = this.endPoint();
    var content = '';
    content += history + " svg:x1 " + sPoint.getX() + " . ";
    content += history + " svg:y1 " + sPoint.getY() + " . ";
    content += history + " svg:x2 " + ePoint.getX() + " . ";
    content += history + " svg:y2 " + ePoint.getY() + " . ";
    content = this.serializeAsRDFPolyLineFigure(contextUri, command) + content;
    return content;
}
/**
 * Hotdraw.js : BorderDecorator
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * BorderDecorator decorates an arbitrary Figure with a border.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2005 
 * @package   websemantics/hotdraw/figures
 */

BorderDecorator.prototype = new DecoratorFigure();

function BorderDecorator( /* Figure */ figure) {
    var argv = BorderDecorator.arguments;
    var argc = BorderDecorator.length;
    this.className = "BorderDecorator";
    if (argv.length > 0) this.initBorderDecorator(figure);
}
//*************
// Constructs a BorderDecorator and decorates the passed in figure.
//*************
BorderDecorator.prototype.initBorderDecorator = function(figure) {
    this.initDecoratorFigure(figure);
}
//*************
// border
//*************
/* Point */
BorderDecorator.prototype.border = function() {
    return new Point(3, 3);
}
//*************
// createSVGContent
//*************
BorderDecorator.prototype.createSVGContent = function( /* Graphics */ g) {
    /* gRectangle */
    var r = this.displayBox();
    this.shape = g.drawStepBorder(r.x, r.y, r.width, r.height);
}
//*************
// Forwards draw to its contained figure.
//*************
BorderDecorator.prototype.draw = function( /* Graphics */ g) {
    this.drawBorderDecorator(g);
}
//*************
// Forwards draw to its contained figure.
//*************
BorderDecorator.prototype.drawBorderDecorator = function( /* Graphics */ g) {
    this.drawDecoratorFigure(g);
    var r = this.displayBox();
    // Update the location and the size od the rectangle figure
    this.shape.setSize(r.width, r.height);
    this.shape.translate(r.x, r.y);
}
//*************
// Forwards the connection insets to its contained figure..
//*************
/* Insets */
BorderDecorator.prototype.connectionInsets = function() {
    return this.connectionInsetsBorderDecorator();
}
/* Insets */
BorderDecorator.prototype.connectionInsetsBorderDecorator = function() {
    /* Insets */
    var i = this.connectionInsetsDecoratorFigure();
    i.top -= 3;
    i.bottom -= 3;
    i.left -= 3;
    i.right -= 3;
    return i;
}
//*************
// Forwards displayBox to its contained figure.
//*************
/* gRectangle */
BorderDecorator.prototype.displayBox = function() {
    /* gRectangle */
    var r = this.fComponent.displayBox();
    r.grow(this.border().x, this.border().y);
    return r;
}
//*************
// Forwards draw to its contained figure.
//*************
BorderDecorator.prototype.clone = function() {
    return new BorderDecorator();
}
/**
 * Hotdraw.js : BorderTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * BorderTool decorates the clicked figure with a BorderDecorator.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2005 
 * @package   websemantics/hotdraw/figures
 */

BorderTool.prototype = new ActionTool();

function BorderTool( /* DrawingView */ itsView) {
    var argv = BorderTool.arguments;
    var argc = BorderTool.length;
    this.className = "BorderTool";
    if (argv.length > 0) this.initBorderTool(itsView);
}
//*************
// Constructs a tool for the given view.
//*************
BorderTool.prototype.initBorderTool = function(itsView) {
    this.initActionTool(itsView);
}
//*************
// Performs an action with the touched figure.
//*************
BorderTool.prototype.action = function( /* Figure */ figure) {
    var border = new BorderDecorator(figure);
    this.drawing().replace(figure, border);
}
/**
 * Hotdraw.js : GroupFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Figure that groups a collection of figures.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/figures
 */

GroupFigure.prototype = new CompositeFigure();

function GroupFigure() {
    var argv = GroupFigure.arguments;
    var argc = GroupFigure.length;
    this.className = "GroupFigure";
    if (argv.length >= 0) this.initGroupFigure();
}
//*************
// initGroupFigure
//*************
GroupFigure.prototype.initGroupFigure = function() {
    this.initCompositeFigure();
}
//*************
// GroupFigures cannot be connected
//*************
GroupFigure.prototype.canConnect = function() {
    return false;
}
//*************
// 
//*************
GroupFigure.prototype.basicDisplayBox = function( /* Point */ origin, /* Point */ corner) {
    // do nothing
    // we could transform all components proportionally
}
//*************
// 
//*************
/* FigureEnumeration */
GroupFigure.prototype.decompose = function() {
    return new FigureEnumerator(this.fFigures);
}
//*************
// Sets the attribute of all the contained figures.
//*************
GroupFigure.prototype.setAttribute = function( /* String */ name, /* Object */ value) {
    var k = this.figures();
    while (k.hasMoreElements()) k.nextFigure().setAttribute(name, value);
}
//*************
// Gets the handles for the GroupFigure. 
//*************
/* Vector */
GroupFigure.prototype.handles = function() {
    var handles = new Vector();
    handles.addElement(new GroupHandle(this, relativeLocator.northWest()));
    handles.addElement(new GroupHandle(this, relativeLocator.northEast()));
    handles.addElement(new GroupHandle(this, relativeLocator.southWest()));
    handles.addElement(new GroupHandle(this, relativeLocator.southEast()));
    return handles;
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
// Gets the display box. The display box is defined as the union of the contained figures.
//*************
/* Rectangle */
GroupFigure.prototype.ret_displayBox = function() {
    /* FigureEnumeration */
    var k = this.figures();
    /* gRectangle */
    var r = k.nextFigure().displayBox();
    while (k.hasMoreElements()) r.add(k.nextFigure().displayBox());
    return r;
}
/**
 * Hotdraw.js : GroupHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A Handle to change the font size by direct manipulation.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     3rd August 2005
 * @package   websemantics/hotdraw/figures
 */

GroupHandle.prototype = new NullHandle();

function GroupHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = GroupHandle.arguments;
    var argc = GroupHandle.length;
    this.className = "GroupHandle";
    if (argv.length > 0) this.initGroupHandle(owner, locator);
}
//*************
// Initializes 
//*************
GroupHandle.prototype.initGroupHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
}
//*************
// Create SVG Content
//*************
GroupHandle.prototype.createSVGContent = function( /* Graphics */ g) {
    /* Rectangle */
    var r = this.displayBox();
    g.setColor("none");
    this.shape = g.drawRect(r.x, r.y, r.width, r.height);
    this.shape.setStrokeWidth(1);
    this.shape.setStrokeColor("white");
    this.shape.setAttribute('shape-rendering', 'optimizeSpeed'); //shape-rendering( auto | optimizeSpeed | crispEdges | geometricPrecision | inherit )
    this.shape.setCursor(this.getCursorName());
}
/**
 * Hotdraw.js : PolygonFigure
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A scalable, rotatable polygon with an arbitrary number of points
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     4th August 2005
 * @package   websemantics/hotdraw/contrib
 */

var TOO_CLOSE = 2;

PolygonFigure.prototype = new AttributeFigure();

function PolygonFigure( /* int or gPolygon */ x, /* int */ y) {
    var argv = PolygonFigure.arguments;
    var argc = PolygonFigure.length;
    this.className = "PolygonFigure";

    /* gPolygon */
    this.fPoly = null;
    
    if (argv.length > 0) this.initPolygonFigure(x, y);
}
//*************
// initPolygonFigure
// 
// Forms:
// ======
// (1) PolygonFigure(gPolygon p);
// (2) PolygonFigure(int x,int y);
//*************
PolygonFigure.prototype.initPolygonFigure = function( /* int or gPolygon */ x, /* int */ y) {
    this.initAttributeFigure();
    if (x instanceof gPolygon) {
        var p = x;
        this.fPoly = new gPolygon(p.xpoints, p.ypoints, p.npoints);
        return;
    } else this.fPoly = new gPolygon(true);
    this.fPoly.addPoint(x, y);
}
//*************
// Use (ret_displayBox) istead of displayBox to return the current displaybox (see AbstractFigure [ displayBox ])
//*************
/* gRectangle */
PolygonFigure.prototype.ret_displayBox = function() {
    return this.bounds(this.fPoly);
}
//*************
// isEmpty
//*************
/* boolean */
PolygonFigure.prototype.isEmpty = function() {
    return (this.fPoly.npoints < 3 || (this.size().width < TOO_CLOSE) && (this.size().height < TOO_CLOSE));
}
//*************
// handles 
//*************
/* Vector */
PolygonFigure.prototype.handles = function( /* Figure */ owner) {
    if (owner == undefined || owner == null) owner = this; // Sometimes a decorator figure needs to be the owner of a handle
    /* Vector */
    var handles = new Vector(this.fPoly.npoints);
    for (var i = 0; i < this.fPoly.npoints; i++) handles.addElement(new PolygonHandle(owner, this.locator(i), i));
    //handles.addElement(new PolygonScaleHandle(this));
    //handles.addElement(new PolygonPointAddHandle(this));
    return handles;
}
//*************
// basicDisplayBox
//*************
PolygonFigure.prototype.basicDisplayBox = function( /* int */ origin, /* Point */ corner) {
    var r = this.displayBox();
    var dx = origin.x - r.x;
    var dy = origin.y - r.y;
    this.fPoly.translate(dx, dy);
    r = this.displayBox();
    var oldCorner = new Point(r.x + r.width, r.y + r.height);
    var p = this.getPolygon();
    this.scaleRotate(oldCorner, p, corner);
}
//*************
// return a copy of the raw polygon
//*************
/* gPolygon */
PolygonFigure.prototype.getPolygon = function() {
    return new gPolygon(this.fPoly.xpoints, this.fPoly.ypoints, this.fPoly.npoints);
}
//*************
// center
// 
// Forms:
// ======
// (1) center()
// (2) center(Polygon  p);
//*************
/* Point */
PolygonFigure.prototype.center = function( /* gPolygon */ p) {
    if (p == undefined) return this.center(this.fPoly);
    var sx = 0;
    var sy = 0;
    var n = p.npoints;
    for (var i = 0; i < n; i++) {
        sx += p.xpoints[i];
        sy += p.ypoints[i];
    }
    return new Point(parseInt(sx / n), parseInt(sy / n));
}
//*************
// points
//*************
/* Enumeration */
PolygonFigure.prototype.points = function() {
    var pts = new Vector(this.fPoly.npoints);
    for (var i = 0; i < this.fPoly.npoints; ++i) pts.addElement(new Point(this.fPoly.xpoints[i], this.fPoly.ypoints[i]));
    return pts.elements();
}
//*************
// pointCount
//*************
/* int */
PolygonFigure.prototype.pointCount = function() {
    return this.fPoly.npoints;
}
//*************
// basicMoveBy
//*************
PolygonFigure.prototype.basicMoveBy = function( /* int */ dx, /* int */ dy) {
    this.fPoly.translate(dx, dy);
}
//*************
// createSVGContent
//*************
PolygonFigure.prototype.createSVGContent = function( /* Graphics */ g) {
    this.shape = g.drawPolygon(0, 0, this.fPoly.xpoints, this.fPoly.ypoints);
    this.updateShapeAttributes();
}
//*************
// draw
//*************
PolygonFigure.prototype.draw = function( /* Graphics */ g) {
    this.drawPolygonFigure(g);
}
//*************
// draw a polygon and its subclass.
//*************
PolygonFigure.prototype.drawPolygonFigure = function( /* Graphics */ g) {
    this.drawAttributeFigure(g);
    this.shape.setXYPoints(this.fPoly.xpoints, this.fPoly.ypoints);
    // Update the location and the size od the ellipse figure
    //this.shape.setRadius(rx,ry);
    //this.shape.translate(x,y);
}
//*************
// containsPoint
//*************
PolygonFigure.prototype.containsPoint = function( /* int */ x, /* int */ y) {
    return this.fPoly.contains(x, y);
}
//*************
// connectorAt
//*************
/* Connector */
PolygonFigure.prototype.connectorAt = function( /* int */ x, /* int */ y) {
    return new ChopPolygonConnector(this);
}
//*************
// Adds a node to the list of points.
//*************
PolygonFigure.prototype.addPoint = function( /* int */ x, /* int */ y) {
    this.fPoly.addPoint(x, y);
    this.changed();
}
//*************
// Changes the position of a node.
//*************
PolygonFigure.prototype.setPointAt = function( /* Point */ p, /* int */ i) {
    this.willChange();
    this.fPoly.xpoints[i] = p.x;
    this.fPoly.ypoints[i] = p.y;
    this.changed();
}
//*************
// Insert a node at the given point.
//*************
PolygonFigure.prototype.insertPointAt = function( /* Point */ p, /* int */ i) {
    this.willChange();
    var n = this.fPoly.npoints + 1;
    var xs = new Array();
    var ys = new Array();
    for (var j = 0; j < i; ++j) {
        xs[j] = this.fPoly.xpoints[j];
        ys[j] = this.fPoly.ypoints[j];
    }
    xs[i] = p.x;
    ys[i] = p.y;
    for (var j = i; j < this.fPoly.npoints; ++j) {
        xs[j + 1] = this.fPoly.xpoints[j];
        ys[j + 1] = this.fPoly.ypoints[j];
    }
    this.fPoly = new gPolygon(xs, ys, n);
    this.changed();
}
//*************
// Remove a node at the given point.
//*************
PolygonFigure.prototype.removePointAt = function( /* int */ i) {
    this.willChange();
    var n = this.fPoly.npoints - 1;
    var xs = new Array();
    var ys = new Array();
    for (var j = 0; j < i; ++j) {
        xs[j] = this.fPoly.xpoints[j];
        ys[j] = this.fPoly.ypoints[j];
    }
    for (var j = i; j < n; ++j) {
        xs[j] = this.fPoly.xpoints[j + 1];
        ys[j] = this.fPoly.ypoints[j + 1];
    }
    this.fPoly = new gPolygon(xs, ys, n);
    this.changed();
}
//*************
// Scale and rotate relative to anchor
//*************
PolygonFigure.prototype.scaleRotate = function( /* Point */ anchor, /* gPolygon */ originalPolygon, /* Point */ p) {
    this.willChange();
    // use center to determine relative angles and lengths
    var ctr = this.center(originalPolygon);
    var anchorLen = geom.length(ctr.x, ctr.y, anchor.x, anchor.y);
    if (anchorLen > 0.0) {
        var newLen = geom.length(ctr.x, ctr.y, p.x, p.y);
        var ratio = newLen / anchorLen;
        var anchorAngle = Math.atan2(anchor.y - ctr.y, anchor.x - ctr.x);
        var newAngle = Math.atan2(p.y - ctr.y, p.x - ctr.x);
        var rotation = newAngle - anchorAngle;
        var n = originalPolygon.npoints;
        var xs = new Array()
        var ys = new Array();
        for (var i = 0; i < n; ++i) {
            var x = originalPolygon.xpoints[i];
            var y = originalPolygon.ypoints[i];
            var l = geom.length(ctr.x, ctr.y, x, y) * ratio;
            var a = Math.atan2(y - ctr.y, x - ctr.x) + rotation;
            xs[i] = parseInt(ctr.x + l * Math.cos(a) + 0.5);
            ys[i] = parseInt(ctr.y + l * Math.sin(a) + 0.5);
        }
        this.fPoly = new gPolygon(xs, ys, n);
    }
    this.changed();
}
//*************
// Remove points that are nearly colinear with others
//*************
PolygonFigure.prototype.smoothPoints = function() {
    return; // Fix a bug: ,.. problem when delete a node
    this.willChange();
    var removed = false;
    var n = this.fPoly.npoints;
    do {
        removed = false;
        var i = 0;
        while (i < n && n >= 3) {
            var nxt = (i + 1) % n;
            var prv = (i - 1 + n) % n;
            if ((this.distanceFromLine(this.fPoly.xpoints[prv], this.fPoly.ypoints[prv], this.fPoly.xpoints[nxt], this.fPoly.ypoints[nxt], this.fPoly.xpoints[i], this.fPoly.ypoints[i]) < TOO_CLOSE)) {
                removed = true;
                --n;
                for (var j = i; j < n; ++j) {
                    this.fPoly.xpoints[j] = this.fPoly.xpoints[j + 1];
                    this.fPoly.ypoints[j] = this.fPoly.ypoints[j + 1];
                }
            } else ++i;
        }
    } while (removed);
    if (n != this.fPoly.npoints) this.fPoly = new gPolygon(this.fPoly.xpoints, this.fPoly.ypoints, n);
    this.changed();
}
//*************
// Splits the segment at the given point if a segment was hit.
// @return the index of the segment or -1 if no segment was hit.
//*************
/* int */
PolygonFigure.prototype.splitSegment = function( /* int */ x, /* int */ y) {
    var i = this.findSegment(x, y);
    if (i != -1) {
        this.insertPointAt(new Point(x, y), i + 1);
        return i + 1;
    } else return -1;
}
//*************
// pointAt
//*************
/* Point */
PolygonFigure.prototype.pointAt = function( /* int */ i) {
    return new Point(this.fPoly.xpoints[i], this.fPoly.ypoints[i]);
}
//*************
// Return the point on the polygon that is furthest from the center
//*************
/* Point */
PolygonFigure.prototype.outermostPoint = function() {
    var ctr = this.center();
    var outer = 0;
    var dist = 0;
    for (var i = 0; i < this.fPoly.npoints; ++i) {
        var d = geom.length2(ctr.x, ctr.y, this.fPoly.xpoints[i], this.fPoly.ypoints[i]);
        if (d > dist) {
            dist = d;
            outer = i;
        }
    }
    return new Point(this.fPoly.xpoints[outer], this.fPoly.ypoints[outer]);
}
//*************
// Gets the segment that is hit by the given point.
// @return the index of the segment or -1 if no segment was hit.
//*************
/* int */
PolygonFigure.prototype.findSegment = function( /* int */ x, /* int */ y) {
    /*
    double dist = TOO_CLOSE;
    int best = -1;

    for (int i = 0; i < fPoly.npoints; i++) {
      int n = (i + 1) % fPoly.npoints;
      double d =  distanceFromLine(fPoly.xpoints[i], fPoly.ypoints[i],
                                   fPoly.xpoints[n], fPoly.ypoints[n],
                                   x, y);
      if (d < dist) {
        dist = d;
        best = i;
      }
    }
    return best;
*/
}
//*************
// chop
//*************
/* Point */
PolygonFigure.prototype.chop = function( /* Point */ p) {
    return this.chop(this.fPoly, p);
}
//*************
// Creates a locator for the point with the given index.
//*************
/* Locator */
PolygonFigure.prototype.locator = function( /* int */ pointIndex) {
    return new PolygonFigureLocator(pointIndex);
}
//#########################################################################
// Class [used by method locator of PolygonFigure Class] : PolygonFigureLocator
//#########################################################################
PolygonFigureLocator.prototype = new AbstractLocator();

function PolygonFigureLocator( /* int */ pointIndex) {
    this.className = "PolygonFigureLocator";
    this.pointIndex = pointIndex;
}
/* Point */
PolygonFigureLocator.prototype.locate = function( /* Figure */ owner) {
    /* PolygonFigure */
    var plf = owner;
    // guard against changing PolygonFigures -> temporary hack
    if (this.pointIndex < plf.pointCount()) return owner.pointAt(this.pointIndex);
    return new Point(-1, -1);
}
/* String */
PolygonFigureLocator.prototype.toString = function() {
    return this.className;
}
//####################[End Of PolygonFigureLocator]############################
//*************
// compute distance of point from line segment, or
// Double.MAX_VALUE if perpendicular projection is outside segment; or
// If pts on line are same, return distance from point
//*************
/* double */
PolygonFigure.prototype.distanceFromLine = function( /* int */ xa, ya, xb, yb, xc, yc) {
    // source:http://vision.dai.ed.ac.uk/andrewfg/c-g-a-faq.html#q7
    //Let the point be C (XC,YC) and the line be AB (XA,YA) to (XB,YB).
    //The length of the
    //      line segment AB is L:
    //
    //                    ___________________
    //                   |        2         2
    //              L = \| (XB-XA) + (YB-YA)
    //and
    //
    //                  (YA-YC)(YA-YB)-(XA-XC)(XB-XA)
    //              r = -----------------------------
    //                              L**2
    //
    //                  (YA-YC)(XB-XA)-(XA-XC)(YB-YA)
    //              s = -----------------------------
    //                              L**2
    //
    //      Let I be the point of perpendicular projection of C onto AB, the
    //
    //              XI=XA+r(XB-XA)
    //              YI=YA+r(YB-YA)
    //
    //      Distance from A to I = r*L
    //      Distance from C to I = s*L
    //
    //      If r < 0 I is on backward extension of AB
    //      If r>1 I is on ahead extension of AB
    //      If 0<=r<=1 I is on AB
    //
    //      If s < 0 C is left of AB (you can just check the numerator)
    //      If s>0 C is right of AB
    //      If s=0 C is on AB
    var xdiff = xb - xa;
    var ydiff = yb - ya;
    var l2 = xdiff * xdiff + ydiff * ydiff;
    if (l2 == 0) return Geom.length(xa, ya, xc, yc);
    var rnum = (ya - yc) * (ya - yb) - (xa - xc) * (xb - xa);
    var r = rnum / l2;
    if (r < 0.0 || r > 1.0) return Number.MAX_VALUE;
    var xi = xa + r * xdiff;
    var yi = ya + r * ydiff;
    var xd = xc - xi;
    var yd = yc - yi;
    return Math.sqrt(xd * xd + yd * yd);
    /*  ================= [Original: Keep this ] ============================
      for directional version, instead use
      double snum =  (ya-yc) * (xb-xa) - (xa-xc) * (yb-ya);
      double s = snum / l2;

      double l = Math.sqrt((double)l2);
      return = s * l;
      */
}
//*************
// replacement for builtin gPolygon.getBounds that doesn't always update?
//*************
/* gRectangle */
PolygonFigure.prototype.bounds = function( /* gPolygon */ p) {
    var minx = Number.MAX_VALUE; // 0x80000000;//Integer.MIN_VALUE;
    var miny = Number.MAX_VALUE; // 0x80000000;//Integer.MIN_VALUE;
    var maxx = Number.MIN_VALUE; // 0x7fffffff;// Integer.MAX_VALUE;
    var maxy = Number.MIN_VALUE; // 0x7fffffff;// Integer.MAX_VALUE;
    var n = p.npoints;
    for (var i = 0; i < n; i++) {
        var x = p.xpoints[i];
        var y = p.ypoints[i];
        if (x > maxx) maxx = x;
        if (x < minx) minx = x;
        if (y > maxy) maxy = y;
        if (y < miny) miny = y;
    }
    return new gRectangle(minx, miny, maxx - minx, maxy - miny);
}
//*************
// 
//*************
/* Point */
PolygonFigure.prototype.chop = function( /* gPolygon */ poly, /* Point */ p) {
    /*
   Point ctr = center(poly);
    int cx = -1;
    int cy = -1;
    long len = Long.MAX_VALUE;

    // Try for points along edge

    for (int i = 0; i < poly.npoints; ++i) {
      int nxt = (i + 1) % poly.npoints;
      Point chop = Geom.intersect(poly.xpoints[i],
                             poly.ypoints[i],
                             poly.xpoints[nxt],
                             poly.ypoints[nxt],
                             p.x,
                             p.y,
                             ctr.x,
                             ctr.y);
      if (chop != null) {
        long cl = Geom.length2(chop.x, chop.y, p.x, p.y);
        if (cl < len) {
          len = cl;
          cx = chop.x;
          cy = chop.y;
        }
      }
    }
    // if none found, pick closest vertex
    //if (len ==  Long.MAX_VALUE) {
    { // try anyway
      for (int i = 0; i < poly.npoints; ++i) {
        long l = Geom.length2(poly.xpoints[i], poly.ypoints[i], p.x, p.y);
        if (l < len) {
          len = l;
          cx = poly.xpoints[i];
          cy = poly.ypoints[i];
        }
      }
    }
    return new Point(cx, cy);
*/
}
//*************
// NOT IMPLEMENTED  
//*************
PolygonFigure.prototype.write = function( /* StorableOutput */ dw) {}
//*************
// NOT IMPLEMENTED  
//*************
PolygonFigure.prototype.read = function( /* StorableInput */ dr) {}
//*************
// NOT IMPLEMENTED  
//*************
PolygonFigure.prototype.clone = function() {
    return new PolygonFigure(0, 0);
}
//*************
// serialize
//*************
/* String */
PolygonFigure.prototype.serialize = function() {
    return this.serializePolygonFigure();
}
//*************
// serializePolygonFigure
//*************
/* String */
PolygonFigure.prototype.serializePolygonFigure = function() {
    var ret = new Hashtable;
    ret.put("points", this.fPoly.serialize());
    return this.serializeAttributeFigure() + ret.serialize();
}
//*************
// deserialize
//*************
/* Hashtable */
PolygonFigure.prototype.deserialize = function( /* String */ str) {
    return this.deserializePolygonFigure(str);
}
//*************
// deserializePolygonFigure
//*************
/* Hashtable */
PolygonFigure.prototype.deserializePolygonFigure = function( /* String */ str) {
    /* Hashtable */
    var inp = this.deserializeAttributeFigure(str);
    this.fPoly = new gPolygon(true);
    this.fPoly.deserialize(inp.get("points"));
    return inp;
}
//*************
// serializeAsRDF [NEW: 17-3-2006]
//*************
/* String */
PolygonFigure.prototype.serializeAsRDF = function( /* String */ contextUri, command) {
    return this.serializeAsRDFPolygonFigure(contextUri, command);
}
//*************
// serializeAsRDFPolygonFigure [NEW: 17-3-2006]
//*************
/* String */
PolygonFigure.prototype.serializeAsRDFPolygonFigure = function( /* String */ contextUri, command) {
    var nodeName = this.shape.getNode().nodeName;
    var history = "<" + contextUri + nodeName + "_" + this.myCount + "/historyNode_" + this.historyNodeCounter + "> ";
    var content = history + " svg:points \"" + this.fPoly.serialize() + "\" . ";
    content = this.serializeAsRDFAttributeFigure(contextUri, command) + content;
    return content;
}
/**
 * Hotdraw.js : PolygonHandle
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A handle for a node on the polygon.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
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

/**
 * Hotdraw.js : PolygonTool
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 * 
 * Tool to draw a PolygonTool
 * 
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
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




/**
 * Hotdraw.js : FloatingTextArea
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * A FloatingTextArea overlays an editor on top of an area in a drawing
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
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
/**
 * Hotdraw.js :
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * Tool to create new or edit existing text figures. The editing behavior is implemented by overlaying the
 * Figure providing the text with a FloatingTextField.  A tool interaction is done once a Figure that is not
 * a TextHolder is clicked.
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
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
/**
 * Hotdraw.js : OpacityHandle
 *
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     9th August 2005
 * @package   websemantics/hotdraw/contrib
 */

OpacityHandle.prototype = new LocatorHandle();

function OpacityHandle( /* Figure */ owner, /* Locator */ locator) {
    var argv = OpacityHandle.arguments;
    var argc = OpacityHandle.length;
    this.className = "OpacityHandle";
    
    /* int */
    this.opacity = 0;
    /* int */
    this.min = -100;
    /* int */
    this.max = 100;
    if (argv.length > 0) this.initOpacityHandle(owner, locator);
}
//*************
// Initializes 
//*************
OpacityHandle.prototype.initOpacityHandle = function(owner, locator) {
    this.initLocatorHandle(owner, locator);
    this.color = "Teal";
}
//*************
// invokeStart
//*************
OpacityHandle.prototype.invokeStart = function( /* int */ x, /* int */ y, /* DrawingView */ view) {
    /* TextFigure */
    var owner = this.owner();
    this.opacity = 0;
}
//*************
// Tracks a step of the interaction.
//*************
OpacityHandle.prototype.invokeStep = function( /* int */ x, /* int */ y, /* int */ anchorX, /* int */ anchorY, /* DrawingView */ view) {
    /* TextFigure */
    var owner = this.owner();
    /* int */
    var newOpacity = this.opacity + y - anchorY;
    if (newOpacity > this.max) newOpacity = this.max;
    if (newOpacity < this.min) newOpacity = this.min;
    newOpacity = (newOpacity - this.min) / (this.max - this.min)
    owner.setOpacity(newOpacity);
}
/**
 * Hotdraw.js : TextAlignHandle
 *
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     9th August 2005
 * @package   websemantics/hotdraw/contrib
 */

TextAlignHandle.prototype= new LocatorHandle();  
//
function TextAlignHandle(/* Figure */ owner, /* Locator */ locator){
var argv = TextAlignHandle.arguments;
var argc = TextAlignHandle.length;
this.className="TextAlignHandle";
/* Array */ this.textAlign ={0:"left",1:"right",2:"center",3:"justify"};
/* int */   this.counter=0;
if(argv.length>0)this.initTextAlignHandle(owner,locator);
}
//*************
// Initializes 
//*************
TextAlignHandle.prototype.initTextAlignHandle = function(owner,locator){
this.initLocatorHandle(owner,locator);
this.color="olive";
}
//*************
// invokeStart
//*************
TextAlignHandle.prototype.invokeStart = function(/* int */ x, /* int */ y, /* DrawingView */ view){
/* TextFigure */ var owner = this.owner();
                    owner.setTextAlign(this.textAlign[this.counter]);
										this.counter++;
										if(this.counter>3)this.counter=0;
}
//*************
// Tracks a step of the interaction.
//*************
TextAlignHandle.prototype.invokeStep = function(/* int */ x, /* int */ y,/* int */ anchorX, /* int */anchorY, /* DrawingView */ view){
     
}
/**
 * Hotdraw.js : TextAreaDecorator (NEW)
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 * 
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
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
/**
 * Hotdraw.js : DrawApplication
 *
 * {Comments are copied from the Java Implementation of HotDraw}
 *
 * DrawApplication defines a standard presentation for standalone drawing editors.
 * The presentation is customized in subclasses. The application is started as follows:
 * public static void main(String[] args) {
 * MayDrawApp window = new MyDrawApp();
 * window.open();
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/application
 */

// Extends Frame implements DrawingEditor, PaletteListener

// DrawApplication.prototype= new Frame();  

function DrawApplication() {
    var argv = DrawApplication.arguments;
    var argc = DrawApplication.length;

    /* String */
    this.name = "DrawApplication";
    /* String */
    this.className = "DrawApplication";

    /* Drawing */
    this.fDrawing = null;
    /* Tool */
    this.fTool = null;
    /* Iconkit */
    this.fIconkit = null;
    /* TextField */
    this.fStatusLine = null;
    /* StandardDrawingView */
    this.fView = null;
    /* ToolButton */
    this.fDefaultToolButton = null;
    /* ToolButton */
    this.fSelectedToolButton = null;
    /* String */
    this.fDrawingFilename = null;
    /* String */
    this.fgUntitled = "untitled";
    /* String */
    this.fgDrawPath = "";
    /* String */
    this.IMAGES = this.fgDrawPath + "../../img/";
}
//*************
// Opens the window and initializes its contents.
// Clients usually only call but don't override it.
//*************
DrawApplication.prototype.open = function(x, y, w, h, title) { // tools is a panel type
    this.openDrawApplication(x, y, w, h);
}
//*************
// drawApplicationOpen
//*************
DrawApplication.prototype.openDrawApplication = function(x, y, w, h, title) { // tools is a panel type
    this.width = w;
    this.height = h;
    // Create Tools Window,...
    var buttons = 11;
    var buttonsw = buttons * 28;
    this.tools = new Window(innerWidth - 50 - buttonsw, 10, 23 + buttonsw, 55, title, null, false);
    this.tools.setToFixedSize();
    this.tools.setLayout(new FlowLayout(CENTER));
    // Create View
    this.fView = this.createDrawingView();
    this.fView.translate(x, y);
    this.createTools(this.tools);
    // Paint the Tools Window
    this.tools.paint();
    this.fStatusLine = this.createStatusLine(this.tools);
    /* Dimension */
    var d = this.defaultSize();
    this.initDrawing();
    this.tools.putWindowOnTop();
}
//*************
// Initilize Drawing 
//*************
DrawApplication.prototype.initDrawing = function() {
    this.fDrawing = this.createDrawing();
    this.fDrawingFilename = this.fgUntitled;
    this.fView.setDrawing(this.fDrawing);
    this.toolDone();
}
//*************
// Creates the drawing view used in this application.  You need to override this 
// method to use a DrawingView subclass in your application. By default a standard 
// DrawingView is returned.
//*************
/* StandardDrawingView */
DrawApplication.prototype.createDrawingView = function() {
    /* Dimension */
    var d = this.getDrawingViewSize();
    return new StandardDrawingView(this, d.width, d.height);
}
//*************
// Creates the tools. By default only the selection tool is added.
// Override this method to add additional tools.
// Call the inherited method to include the selection tool.
//*************
DrawApplication.prototype.createTools = function( /* Panel */ palette) { // palette is the tools window
    this.createToolsDrawApplication(palette);
}
//*************
// createToolsDrawApplication
//*************
DrawApplication.prototype.createToolsDrawApplication = function( /* Panel */ palette) { // palette is the tools window
    /* Tool */
    var tool = this.createSelectionTool();
    this.fDefaultToolButton = this.createToolButton(this.IMAGES + "SEL", "Selection Tool", tool);
    palette.add(this.fDefaultToolButton);
}
//*************
// Creates the selection tool used in this editor. Override to use a custom selection tool.
//*************
/* Tool */
DrawApplication.prototype.createSelectionTool = function() {
    return new SelectionTool(this.view());
}
//*************
// Creates a tool button with the given image, tool, and text
//*************
/* ToolButton */
DrawApplication.prototype.createToolButton = function( /* String*/ iconName, /*String*/ toolName, /*Tool*/ tool) {
    return new ToolButton(this, iconName, toolName, tool);
}
//*************
// Override to define the dimensions of the drawing view.
//*************
/* Dimension */
DrawApplication.prototype.getDrawingViewSize = function() {
    return new Dimension(this.width, this.height);
}
//*************
// Creates the drawing used in this application.
// You need to override this method to use a Drawing subclass in your application.
// By default a standard Drawing is returned.
//*************
/* Drawing */
DrawApplication.prototype.createDrawing = function() {
    return new StandardDrawing(true); // true is used to make the StandardDrawing run initStandardDrawing to intilize
}
//*************
// Sets the drawing to be edited.
//*************
DrawApplication.prototype.setDrawing = function( /* Drawing */ drawing) {
    this.fView.setDrawing(drawing);
    this.fDrawing = drawing;
}
//*************
// Gets the default size of the window.
//*************
/* Dimension */
DrawApplication.prototype.defaultSize = function() {
    return new Dimension(430, 406);
}
//*************
// Gets the current drawing.
//*************
/* Drawing */
DrawApplication.prototype.drawing = function() {
    return this.fDrawing;
}
//*************
// Gets the current tool.
//*************
/* Tool */
DrawApplication.prototype.tool = function() {
    return this.fTool;
}
//*************
// Gets the current drawing view.
//*************
/* DrawingView */
DrawApplication.prototype.view = function() {
    return this.fView;
}
//*************
// Sets the default tool of the editor.
//*************
DrawApplication.prototype.toolDone = function() {
    if (this.fDefaultToolButton != null) {
        this.setTool(this.fDefaultToolButton.tool(), this.fDefaultToolButton.name());
        this.setSelected(this.fDefaultToolButton);
    }
}
//*************
// Handles a change of the current selection. Updates all menu items that are selection sensitive.
//*************
DrawApplication.prototype.selectionChanged = function( /* DrawingView */ view) {}
//*************
// setTool
//*************
DrawApplication.prototype.setTool = function( /* Tool */ t, /* String */ name) {
    if (this.fTool != null) this.fTool.deactivate();
    this.fTool = t;
    if (this.fTool != null) {
        this.showStatus(name);
        this.fTool.activate();
    }
}
//*************
// Handles a user selection in the palette.
//*************
DrawApplication.prototype.paletteUserSelected = function( /* PaletteButton */ button) {
    /* ToolButton */
    var toolButton = button;
    this.setTool(toolButton.tool(), toolButton.name());
    this.setSelected(toolButton);
}
//*************
// setSelected
//*************
DrawApplication.prototype.setSelected = function( /* ToolButton */ button) {
    if (this.fSelectedToolButton != null) this.fSelectedToolButton.reset();
    this.fSelectedToolButton = button;
    if (this.fSelectedToolButton != null) this.fSelectedToolButton.select();
}
//*************
// Handles when the mouse enters or leaves a palette button.
//*************
DrawApplication.prototype.paletteUserOver = function( /* PaletteButton */ button, /* boolean */ inside) {
    /* ToolButton */
    var toolButton = button;
    if (inside) this.showStatus(toolButton.name());
    else
    if (this.fSelectedToolButton != null) this.showStatus(this.fSelectedToolButton.name());
}
//*************
// Shows a status message.
//*************
DrawApplication.prototype.showStatus = function( /* String */ string) {
    this.fStatusLine.setText(string);
} //*************
// createStatusLine
//*************
DrawApplication.prototype.createStatusLine = function( /* Window */ tools) {
    var w = tools.getWidth() - tools.left - tools.right;
    var h = 24;
    tools.setSize(tools.getWidth(), tools.h + h);
    var g = tools.getGraphics();
    var x = tools.left;
    var y = tools.getHeight() - tools.bottom - h;
    //g.setColor("white");
    //g.drawRect(x+3,y+3,w-6,h-6);
    var wb = g.drawStepBorder(x + 3, y + 3, w - 6, h - 6);
    wb.setFaceDown();
    g.setColor("black");
    g.setFont(new Font("Helvetica", "normal", "10pt"));
    var text = g.drawText(x + 5, y + 3, " ");
    text.setToBaseLine();
    return text;
}
/**
 * Hotdraw.js : DemoDrawingView
 *
 * The Collaborative implementation of DrawingView. Support PopUpMenu
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/demo
 */

DemoDrawingView.prototype = new StandardDrawingView();

function DemoDrawingView( /* DrawingEditor */ editor, /* int */ width, /* int */ height) {
    var argv = DemoDrawingView.arguments;
    var argc = DemoDrawingView.length;
    this.className = "DemoDrawingView";
    /* boolean */
    this.changeEventFlag = true;
    /* Figure */
    this.targetFigure = true;
    /* Component */
    this.popUpMenu2 = null;
    if (argv.length > 0) this.initDemoDrawingView(editor, width, height);
}
//*************
// 
//*************
DemoDrawingView.prototype.initDemoDrawingView = function(editor, width, height) {
    this.initStandardDrawingView(editor, width, height);
    // Setup the first popUp menu
    this.addMenuItem("Attributes");
    // We will create another PopUp Menu to deal with Figures
    var temp = this.popUpMenu;
    this.popUpMenu = null;
    this.addMenuItem("Send To Front");
    this.addMenuItem("Send To Back");
    this.addMenuSeparator();
    this.addMenuItem("Delete");
    this.addMenuItem("Duplicate");
    this.addMenuItem("Group");
    this.addMenuItem("Ungroup");
    this.addMenuSeparator();
    this.addMenuItem("Attributes");
    this.popUpMenu2 = this.popUpMenu;
    this.popUpMenu = temp;
}
//*************
// createSVGContent
//*************
DemoDrawingView.prototype.createSVGContent = function() {
    this.createSVGContentDemoDrawingView();
}
//*************
// createSVGContentDemoDrawingView
//*************
DemoDrawingView.prototype.createSVGContentDemoDrawingView = function() {
    this.createSVGContentStandardDrawingView();
    if (this.popUpMenu2 != null) {
        this.popUpMenu2.paint();
        menuLayer.addGraphics(this.popUpMenu2);
        this.popUpMenu2.hide();
    }
}
//*************
// recalc 
//*************
DemoDrawingView.prototype.recalc = function() {
    this.recalcDemoDrawingView();
}
//*************
// recalcDemoDrawingView 
//*************
DemoDrawingView.prototype.recalcDemoDrawingView = function() {
    this.recalcStandardDrawingView();
    if (this.popUpMenu2 != null) this.popUpMenu2.recalc();
}
//*************
// Handles mouse down events. The event is delegated to the currently active tool. Return whether the event was handled.
//*************
DemoDrawingView.prototype.mousePressed = function( /* MouseEvent */ e) {
    this.mousePressedDemoDrawingView(e);
}
//*************
// mousePressedStandardDrawingView
//*************
DemoDrawingView.prototype.mousePressedDemoDrawingView = function( /* MouseEvent */ e) {
    if (e.isAltDown() || e.isControlDown()) return; // Alt and Ctrl are special keys used by ASV 
    this.mousePressedStandardDrawingView(e);
    var figure = this.drawing().findFigure(e.getX(), e.getY());
    /* Point */
    var p = this.getAbsoluteLocation();
    // PopUpMenu
    if (e.getButton() == BUTTON2) {
        var popUpMenu = null;
        var x = p.x + e.getX() + 5;
        var y = p.y + e.getY() + 5;
        // Display the second PopUp Menu
        if (figure != null && this.selection().contains(figure) && this.popUpMenu2 != null) {
            popUpMenu = this.popUpMenu2;
            this.targetFigure = figure;
        } else if (this.popUpMenu != null) { // Else, display the PopUp Menu of the container
            popUpMenu = this.popUpMenu;
            this.clearSelection();
        }
        if (popUpMenu != null) {
            var w = popUpMenu.getWidth();
            var h = popUpMenu.getHeight();
            if (x + w > innerWidth) x = x - w - 10;
            if (y + h > innerHeight) y = y - h - 10;
            popUpMenu.translate(x, y);
            popUpMenu.show();
        }
    }
}
//*************
// mousePressed : We overridden econtMousePressed so we can gain control over the PopUp Menu,...
//*************
DemoDrawingView.prototype.econtMousePressed = function( /* MouseEvent */ e) {
    var d = this.getComponentAt(e.getX(), e.getY());
    this.pressX = e.getX();
    this.pressY = e.getY();
    if (this.isEventable(d)) this.fireMouseEventToComponent(d, "mousePressed", e);
}
//*************
// actionPerformedWindow 
//*************
DemoDrawingView.prototype.actionPerformed = function( /* ActionEvent */ e) {
    var src = e.source;
    var comm = e.getActionCommand();
    if (comm == "menuItemSelected") {
        switch (src.name) {
            case "Send To Front":
                this.sendSelectionToFront();
                break;
            case "Send To Back":
                this.sendSelectionToBack();
                break;
            case "Delete":
                var cmd = new DeleteCommand("Delete", this);
                cmd.execute();
                break;
            case "Duplicate":
                var cmd = new DuplicateCommand("Duplicate", this);
                cmd.execute();
                break;
            case "Group":
                var cmd = new GroupCommand("Group", this);
                cmd.execute();
                break;
            case "Ungroup":
                var cmd = new UngroupCommand("Ungroup", this);
                cmd.execute();
                break;
                //
                // Second PopUpMenu
                //
            case "Attributes":
                this.editor().attributesWindow.show();
                this.editor().selectionChanged(this.editor().view());
                break;
        }
    }
    // Pass the event to all listeners
    // Action Listeners 
    if (this.actionListeners != null) {
        var k = new Enumerator(this.actionListeners);
        while (k.hasMoreElements())
        /* ActionListener */
            k.nextElement().actionPerformed(e);
    }
}
/**
 * Hotdraw.js : DemoApplication
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     8th Sept 2005
 * @package   websemantics/hotdraw/demo
 */

DemoApplication.prototype = new DrawApplication(); // Implements DrawingViewChangeListener

function DemoApplication() {
    var argv = DemoApplication.arguments;
    var argc = DemoApplication.length;
    /* String */
    this.name = "DemoApplication";
    /* String */
    this.className = "DemoApplication";
    /* Hashtable */
    this.figures = new Hashtable();
    /* Figure */
    this._curFig = null;
    /* Window */
    this.tools = null; // This is the tools window
    /* Window */
    this.attributesWindow = null; // This is the property window.
}
//*************
// Opens the window and initializes its contents.
// Clients usually only call but don't override it.
//*************
DemoApplication.prototype.open = function(x, y, w, h) {
    this.openDemoApplication(x, y, w, h);
    this.attributesWindow = new DemoAttributes(10, 10);
    this.attributesWindow.paint();
    this.attributesWindow.hide();
}
//*************
// Creates the drawing view used in this application.  You need to override this 
// method to use a DrawingView subclass in your application. By default a standard 
// DrawingView is returned.
//*************
/* StandardDrawingView */
DrawApplication.prototype.createDrawingView = function() {
    /* Dimension */
    var d = this.getDrawingViewSize();
    return new DemoDrawingView(this, d.width, d.height);
}
//*************
// openDemoApplication
//*************
DemoApplication.prototype.openDemoApplication = function(x, y, w, h) {
    this.openDrawApplication(x, y, w, h, "SVG Hotdraw Demo v1.0: Tools,.."); // The this.tools window will be created from here onwards.
}
//*************
// Creates the tools. By default only the selection tool is added.
// Override this method to add additional tools.
// Call the inherited method to include the selection tool.
//*************
DemoApplication.prototype.createTools = function( /* Panel */ palette) {
    this.createToolsDemoApplication(palette);
}
//*************
// createToolsDemoApplication
//*************
DemoApplication.prototype.createToolsDemoApplication = function( /* Panel */ palette) {
    this.createToolsDrawApplication(palette);
    var tool;
    tool = new TextTool(this.view(), new TextFigure());
    palette.add(this.createToolButton(this.IMAGES + "TEXT", "Text Tool", tool));
    tool = new CreationTool(this.view(), new ImageFigure());
    palette.add(this.createToolButton(this.IMAGES + "IMAGE", "Image Tool", tool));
    tool = new CreationTool(this.view(), new RectangleFigure());
    palette.add(this.createToolButton(this.IMAGES + "RECT", "Rectangle Tool", tool));
    tool = new CreationTool(this.view(), new EllipseFigure());
    palette.add(this.createToolButton(this.IMAGES + "ELLIPSE", "Ellipse Tool", tool));
    tool = new CreationTool(this.view(), new RoundRectangleFigure());
    palette.add(this.createToolButton(this.IMAGES + "RRECT", "Round Rectangle Tool", tool));
    tool = new PolygonTool(this.view());
    palette.add(this.createToolButton(this.IMAGES + "POLYGON", "Polygon Tool", tool));
    tool = new CreationTool(this.view(), new LineFigure());
    palette.add(this.createToolButton(this.IMAGES + "LINE", "Line Tool", tool));
    tool = new ScribbleTool(this.view());
    palette.add(this.createToolButton(this.IMAGES + "SCRIBBL", "Scribble Tool", tool));
    tool = new BorderTool(this.view());
    palette.add(this.createToolButton(this.IMAGES + "BORDDEC", "Border Tool", tool));
    tool = new TextAreaTool(this.view(), new TextAreaDecorator());
    palette.add(this.createToolButton(this.IMAGES + "TEXTAREA", "TextArea Decorator Tool", tool));
}
//*************
// actionPerformedWindow 
//*************
DemoApplication.prototype.actionPerformed = function( /* ActionEvent */ e) {
    var src = e.source;
    var comm = e.getActionCommand();
    if (comm == "menuItemSelected") {
        switch (src.name) {
            case "Tools":
                this.tools.show();
                break;
        }
    }
}
//*************
// toString 
//*************
DemoApplication.prototype.recalc = function() {
    this.view().recalc();
    if (this.tools != null) this.tools.recalc();
    if (this.attributesWindow != null) {
        this.attributesWindow.show();
        this.attributesWindow.recalc();
        this.attributesWindow.hide();
    }
}
//*************
// Handles a change of the current selection. Updates all menu items that are selection sensitive.
//*************
DemoApplication.prototype.selectionChanged = function( /* DrawingView */ view) {
    if (this.attributesWindow == null || this.attributesWindow.isHidden()) return;
    this.attributesWindow.open(view.selectionZOrdered());
}
//*************
// toString 
//*************
DemoApplication.prototype.toString = function() {
    return "DemoApplication";
}
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
/**
 * Hotdraw.js
 *
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2004-2015 Web Semantics, Inc. (http://websemantics.ca)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://oeasvg.com/hotdrawjs
 * @since     5th August 2004
 * @package   websemantics/hotdraw/demo
 */

var demoApplication;

function runHotdrawjs(){
	// Summary:
	// Execute the Demo App

	// Each user should have a unique name,...for testing this is done automatically
	userName="User("+Math.floor(Math.random()*1000)+")";

	// Initilized all the packages [SvgDraw2d and SvgSwing ans set viewerMode to either ASV or Batik]
	initialise(); 

	// Initialise HotDraw Package
	InitialiseHotDraw(); 

	ds_getDesktop().setColor("#C0C0C0");

	hdChangeImageURL("../../img/joe.surf.yellow.small.gif");

	run();
}

function run(){
	// Summary:
	// Run the Demo App
	demoApplication = new DemoApplication();
	demoApplication.open(0,0,innerWidth,innerHeight);
	demoApplication.recalc();
}
