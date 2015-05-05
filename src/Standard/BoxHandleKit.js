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