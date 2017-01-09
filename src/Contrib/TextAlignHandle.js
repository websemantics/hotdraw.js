/**
 * Hotdraw.js : TextAlignHandle
 *
 *
 * @author    Adnan M.Sagar, Phd. <adnan@websemantics.ca>
 * @copyright 2004-2017 Web Semantics, Inc.
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
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