/**
 * Hotdraw.js
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
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