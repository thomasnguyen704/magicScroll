// Docs: https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-How-to-use-ScrollMagic

// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();


// Scene Handler
var scene = new ScrollMagic.Scene({
	triggerElement: "#pinned-trigger1",  // point of execution
	duration: $(window).height() - 100,  // pin element for the window height - 1
	triggerHook: 0,  // don't trigger until #pinned-trigger1 hits the top of the viewport
	reverse: true  // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#pinned-element1"); // the element we want to pin


// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
	triggerElement: "#pinned-element2",  // point of execution
	duration: 400  // pin the element for a total of 400px
})
.setPin("#pinned-element2");  // the element we want to pin


// Scene3 Handler
var scene3 = new ScrollMagic.Scene({
	triggerElement: "#pinned-element3",  // point of execution
	duration: $(window).height()  // pin the element for a total of 100px
})
.setPin("#pinned-element3");  // the element we want to pin


// Add Scenes to ScrollMagic Controller
controller.addScene([
	scene,
	scene2,
	scene3
]);