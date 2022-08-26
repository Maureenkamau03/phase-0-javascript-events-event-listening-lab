let input = document.getElementById("button");

function addingEventListener() {
	input.addEventListener("click", addingEventListener);
}

// function addingEventListener() {
// 	const input = document.getElementById("input");

// 	function clickAlert() {
// 		alert("I was clicked!");
// 	}

// 	input.addEventListener("click", clickAlert);
// }
// addingEventListener();
