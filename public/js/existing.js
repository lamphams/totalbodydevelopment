'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
    $(".days li").click(dayClicked);
}

function dayClicked(day) {
    console.log(this.text);
}
