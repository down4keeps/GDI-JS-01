var age = 35;
var maxAge = 97;
var glassesPerDay = 8;

function calculate() {
	var total = ((maxAge - age) * glassesPerDay) * 365;
	var answer = "You will need " + total + " glasses of water to last you until your old age of " + maxAge + ".";

	alert(answer);

	if (total > 40000) {
		alert("Wow! That's a lot!");
	}
	 	else {
	 		alert("You seem pretty reasonable!");
	 	}

	}

function favoriteThings() {
	var faveThings = " ";
	var things = ['Music', 'Laughter', 'Love'];
	for (var i = 0; i < things.length; i++) {
		faveThings += things[i] + ", ";
	}

	alert("My favorite things are" + faveThings);

	}