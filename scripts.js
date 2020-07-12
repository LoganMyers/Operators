var score = 100;

function addValue() {
	var addition = window.prompt('How much would you like to add?');
	document.getElementById('scoreTracker').innerHTML = score += +addition;
}
function subValue() {
	var sub = window.prompt('How much would you like to subtract?');
	document.getElementById('scoreTracker').innerHTML = score -= +sub;
}
function multiplyValue() {
	var multiply = window.prompt('What would you like to multiply 100 by?');
	document.getElementById('scoreTracker').innerHTML = score *= +multiply;
}
function devideValue() {
	var devide = window.prompt('What would you like to devide 100 by?');
	document.getElementById('scoreTracker').innerHTML = score /= +devide;
}
function addOne() {
	document.getElementById('scoreTracker').innerHTML = score++;
}
function subOne() {
	document.getElementById('scoreTracker').innerHTML = score--;
}

