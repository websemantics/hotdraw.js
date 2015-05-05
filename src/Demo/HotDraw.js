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
