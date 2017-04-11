deck = ['https://upload.wikimedia.org/wikipedia/commons/3/36/Playing_card_club_A.svg',
'https://upload.wikimedia.org/wikipedia/commons/f/f5/Playing_card_club_2.svg',
'https://upload.wikimedia.org/wikipedia/commons/6/6b/Playing_card_club_3.svg',
'https://upload.wikimedia.org/wikipedia/commons/3/3d/Playing_card_club_4.svg',
'https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_club_5.svg',
'https://upload.wikimedia.org/wikipedia/commons/a/a0/Playing_card_club_6.svg',
'https://upload.wikimedia.org/wikipedia/commons/4/4b/Playing_card_club_7.svg',
'https://upload.wikimedia.org/wikipedia/commons/e/eb/Playing_card_club_8.svg',
'https://upload.wikimedia.org/wikipedia/commons/2/27/Playing_card_club_9.svg',
'https://upload.wikimedia.org/wikipedia/commons/3/3e/Playing_card_club_10.svg', 
'https://upload.wikimedia.org/wikipedia/commons/b/b7/Playing_card_club_J.svg',
'https://upload.wikimedia.org/wikipedia/commons/f/f2/Playing_card_club_Q.svg',
'https://upload.wikimedia.org/wikipedia/commons/2/22/Playing_card_club_K.svg', 
'https://upload.wikimedia.org/wikipedia/commons/d/d3/Playing_card_diamond_A.svg',
'https://upload.wikimedia.org/wikipedia/commons/5/59/Playing_card_diamond_2.svg', 
'https://upload.wikimedia.org/wikipedia/commons/8/82/Playing_card_diamond_3.svg', 
'https://upload.wikimedia.org/wikipedia/commons/2/20/Playing_card_diamond_4.svg', 
'https://upload.wikimedia.org/wikipedia/commons/f/fd/Playing_card_diamond_5.svg', 
'https://upload.wikimedia.org/wikipedia/commons/8/80/Playing_card_diamond_6.svg', 
'https://upload.wikimedia.org/wikipedia/commons/e/e6/Playing_card_diamond_7.svg',  
'https://upload.wikimedia.org/wikipedia/commons/7/78/Playing_card_diamond_8.svg', 
'https://upload.wikimedia.org/wikipedia/commons/9/9e/Playing_card_diamond_9.svg', 
'https://upload.wikimedia.org/wikipedia/commons/3/34/Playing_card_diamond_10.svg', 
'https://upload.wikimedia.org/wikipedia/commons/a/af/Playing_card_diamond_J.svg', 
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Playing_card_diamond_Q.svg', 
'https://upload.wikimedia.org/wikipedia/commons/7/78/Playing_card_diamond_K.svg']

function drawCard() 
	{
	var card =  parseInt(Math.random() * 26);
	return card;
	}

var button = document.getElementById('gamestart');

/*on click, draw two cards from the deck - don't let them be the same card.*/ 
button.addEventListener('click', function() 
	{
	card1 = drawCard()
	card2 = drawCard()
	while (card2 === card1) 
		{
		card2 = drawCard ()
		}

/*Log Cards for Testing Purposes */ 
	console.log(card1);
	console.log(card2);

/*display the image of card1*/ 

	var src1 = deck[card1];	
	var card1img = document.createElement("img");
	card1img.src = src1;
	card1img.className = "card1img";
	console.log(card1img);
	document.getElementById('card1img').appendChild(card1img);

/*display the image of card2*/ 

	var src2 = deck[card2];	
	var card2img = document.createElement("img");
	card2img.src = src2;
	card2img.className = "card2img";
	console.log(card2img)
	document.getElementById('card2img').appendChild(card2img); 

/*prompt the user to guess whether the 3rd card will be inside the other two or not.*/ 

	setTimeout(function() 
		{
		var guess = prompt("Will the next card be inside or outside the current range?")
		guess = String(guess.toLowerCase());
		console.log(guess);
		
/*If they don't guess inside or outside, keep prompting until they do.*/

		while ((guess !== 'inside') && (guess != 'outside')) 
			{
			var guess = prompt("Please type inside or outside.");
			guess = String(guess.toLowerCase());
			console.log(guess);
			}
		},750); 

	setTimeout(function() 
		{
		guessbutton = document.createElement('button');
		var guessbuttontext = document.createTextNode("Are you right?");
		guessbutton.className = "guessbutton";
		guessbutton.appendChild(guessbuttontext);
		document.getElementById('guess').appendChild(guessbutton);
		guessbutton = document.getElementById('guessbutton');

		guessbutton.addEventListener('click', function() 
			{
			card3 = drawCard();
			console.log(card3);
			while ((card3 === card1) || (card3 === card2)) 
				{
				card3 = drawCard ()
				}
		var src3 = deck[card3];	
		var card3img = document.card3imgreateElement("img");
		card3img.src = src3;
		card3img.className = "card3img";
		console.log(card3img);
		document.getElementById('card3img').appendChild(card3img); 
			});
		},1500);
	});
