function myFunction() {
	Campaigns = { Champion: 0, Missionary: 0, Maverick: 0, Democratiser: 0, Generation: 0};
	
	var answer_1 = $('input[name=question_1]:checked').val(); 
	switch (answer_1)
	{
		case "a":
		Campaigns.Champion +=1;
		break;
		case "b":
		Campaigns.Missionary +=1;
		break;
		case "c":
		Campaigns.Maverick +=1;
		break;
		case "d":
		Campaigns.Democratiser +=1;
		break;
		case "e":
		Campaigns.Generation +=1;
		break;
	};

	var answer_2 = $('input[name=question_2]:checked').val(); 
	switch (answer_2)
	{
		case "f":
		Campaigns.Democratiser +=1;
		Campaigns.Generation +=1;
		break;
		case "g":
		Campaigns.Champion +=1;
		Campaigns.Missionary +=1;
		Campaigns.Maverick +=1;
		break;
	};

	var answer_3 = $('input[name=question_3]:checked').val();
	if (answer_3 == "h"){
		Campaigns.Champion +=1;
	};

	var answer_4 = $('input[name=question_4]:checked').val(); 
	switch (answer_4)
	{
		case "j":
		Campaigns.Champion +=1;
		Campaigns.Maverick +=1;
		Campaigns.Democratiser +=1;
		break;
		case "k":
		Campaigns.Missionary +=1;
		break;
		case "l":
		Campaigns.Generation +=1;
		break;
	};

	var answer_5 = $('input[name=question_5]:checked').val(); 
	switch (answer_5)
	{
		case "m":
		Campaigns.Democratiser +=1;
		break;
		case "n":
		Campaigns.Missionary +=1;
		Campaigns.Champion +=1;
		Campaigns.Maverick +=1;
		Campaigns.Generation +=1;
		break;
	};

	var answer_6 = $('input[name=question_6]:checked').val(); 
	switch (answer_6)
	{
		case "o":
		Campaigns.Maverick +=1;
		Campaigns.Democratiser +=1;
		break;
		case "p":
		Campaigns.Generation +=1;
		break;
		case "q":
		Campaigns.Champion +=1;
		break;
		case "r":
		Campaigns.Missionary +=1;
		break;
	};

	var answer_7 = $('input[name=question_7]:checked').val(); 
	switch (answer_7)
	{
		case "s":
		Campaigns.Missionary +=1;
		break;
		case "t":
		Campaigns.Champion +=1;
		Campaigns.Maverick +=1;
		Campaigns.Democratiser +=1;
		Campaigns.Generation +=1;
		break;
	};

	var answer_8 = $('input[name=question_8]:checked').val(); 
	switch (answer_8)
	{
		case "u":
		Campaigns.Champion +=1;
		Campaigns.Democratiser +=1;
		break;
		case "v":
		Campaigns.Generation +=1;
		Campaigns.Maverick +=1;
		break;
		case "w":
		Campaigns.Missionary +=1;
		break;
		case "x":
		Campaigns.Maverick +=1;
		Campaigns.Champion +=1;
		Campaigns.Democratiser +=1;
		break;
		case "y":
		Campaigns.Democratiser +=1;
		break;
	};

	largest = Math.max(Campaigns.Champion, Campaigns.Missionary, Campaigns.Maverick, Campaigns.Democratiser, Campaigns.Generation);

	switch (largest)
	{
	case Campaigns.Champion:
	  localStorage.setItem('result', "Champion");
	  break;
	case Campaigns.Missionary:
	  localStorage.setItem('result', "Missionary");
	  break;
	case Campaigns.Maverick:
	  localStorage.setItem('result', "Maverick");
	  break;
	case Campaigns.Democratiser:
	  localStorage.setItem('result', "Democratiser");
	  break;
	case Campaigns.Generation:
	 	localStorage.setItem('result', "Generation");
	  break;
	};

};

// function stop(){
// 	return false;
// }
// document.onmousewheel=stop;





