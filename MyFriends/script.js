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
	var faveThings = ['Music', 'Laughter', 'Love'];
	for (var i = 0; i < faveThings.length; i++) {
		var msg = "My favorite things are " + faveThings[0] + ", " + faveThings[1] + " and " + faveThings[2] + ".";
		}
	alert(msg);
	}

function myFriends() {

	var friends = [
	{name: "Tom",
	 hair: "Blonde"},
	{name: "Dick",
	 hair: "Brown"},
	{name: "Hary",
	 hair: "Purple"}
	 ];

	for (var i = 0; i < friends.length; i++) {
		var friend = friends[i];
		alert(friend.name + " has " + friend.hair + " hair.");
		}
	}