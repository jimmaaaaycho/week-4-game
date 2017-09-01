$(document).ready(function() {

//{$("#random-button").on("click", function() 

	var winNum = 0;
	var lossNum = 0;
	var randomNumber = 0;
	var blueGemPt = 0;
	var greenGemPt = 0;
	var purpleGemPt = 0;
	var redGemPt = 0;
	var userTotal = 0;

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
		randomNumber = Math.floor(Math.random() * 100) + 1;
		blueGemPt = Math.floor(Math.random() * 12) + 1;
		greenGemPt = Math.floor(Math.random() * 12) + 1;
		purpleGemPt = Math.floor(Math.random() * 12) + 1;
		redGemPt = Math.floor(Math.random() * 12) + 1;
		userTotal = 0;
	}

	function reset() {
		randomNumber = Math.floor(Math.random() * 100) + 1;
		blueGemPt = Math.floor(Math.random() * 12) + 1;
		greenGemPt = Math.floor(Math.random() * 12) + 1;
		purpleGemPt = Math.floor(Math.random() * 12) + 1;
		redGemPt = Math.floor(Math.random() * 12) + 1;
		userTotal = 0;
		winNum = 0;
		lossNum = 0;
	}

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

		$("#blue-gem").on("click", function() {
			userTotal += blueGemPt; 
			compare();
	    	console.log(userTotal);
			display();});

		$("#green-gem").on("click", function() {
	        userTotal += greenGemPt;
	        compare();
	    	console.log(userTotal);
	    	display();});

		$("#purple-gem").on("click", function() {
	        userTotal += purpleGemPt; 
	        compare();
	    	console.log(userTotal);
	    	display();});

		$("#red-gem").on("click", function() {
	        userTotal += redGemPt; 
	    	compare();
	       	console.log(userTotal);
	    	display();});



});
    