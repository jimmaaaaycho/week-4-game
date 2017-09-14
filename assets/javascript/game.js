// Nice job putting all of your code in a document ready block 👌
$(document).ready(function() {

//{$("#random-button").on("click", function() 

	var winNum = 0;
	var lossNum = 0;
	var randomNumber = 0;

	// See my note below all of your listeners to see why 
	// I've moved these variables into an object.
	//
	var gemValues = {
		'blue-gem': 0,
		'green-gem': 0,
		'purple-gem': 0,
		'red-gem': 0
	}

	var userTotal = 0;

	// I really like how you split up your game logic into functions.
	// It's a much easier style to understand 🤓
	initiate();


	$("#winScore").text(winNum);
	$("#lossScore").text(lossNum);
	$("#randomNum").text(randomNumber);
	$("#score").text(userTotal);

	function display() {
		$("#winScore").text(winNum);
		$("#lossScore").text(lossNum);
		$("#randomNum").text(randomNumber);
		$("#score").text(userTotal);
	}

	function initiate() {
		// Since the string of code for generating random numbers
		// is rather unwieldy I'd suggest placing it in a utility function
		randomNumber = getRandomNum(100, 19)
		gemValues['blue-gem'] = getRandomNum(12, 1)
		gemValues['green-gem'] = getRandomNum(12, 1)
		gemValues['purple-gem'] = getRandomNum(12, 1)
		gemValues['red-gem'] = getRandomNum(12, 1)
		userTotal = 0;
	}

	function getRandomNum (max, min) {
		return Math.floor(Math.random() * (max - min) + min)
	}


	// You aren't actually calling this function anywhere
	// function reset() {
	// 	randomNumber = Math.floor(Math.random() * 100) + 1;
	// 	blueGemPt = Math.floor(Math.random() * 12) + 1;
	// 	greenGemPt = Math.floor(Math.random() * 12) + 1;
	// 	purpleGemPt = Math.floor(Math.random() * 12) + 1;
	// 	redGemPt = Math.floor(Math.random() * 12) + 1;
	// 	userTotal = 0;
	// 	winNum = 0;
	// 	lossNum = 0;
	// }

	function compare() {
		if(userTotal === randomNumber) {
			alert("You Win!!");
			winNum++;
			initiate();

		} else if (userTotal > randomNumber) {
			alert("You Lose!!");
			lossNum++;
			initiate();
		}
	}

	// Your  event listener code was pretty repetitive, so in an effort to DRY it up I'd suggest combining
	// them all into 1 and then determining the value of the clicked crystal by checking its id.
	// I moved all of the crystal values into an object for this so I could leverage bracket notation
	// which will try to access the property that the expression inside of the brackets evaluates to.
	// Take the following object:
	// 
	// var obj = { name: 'Jimmy' }
	// 
	// You could do the following to access the name property:
	// 
	// var firstHalf = 'na'
	// var secondHalf = 'me'
	// 
	// obj[ firstHalf + secondHalf ] // would return 'Jimmy'
	// 

	$('.gem').on('click', function() {

		// grab the elements id
		var gemId = $(this).attr('id') 

		// access the corresponding value using the id and add it to the userTotal
		userTotal += gemValues[ gemId ]

		compare()

		display()

	})


});
    