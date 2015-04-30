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