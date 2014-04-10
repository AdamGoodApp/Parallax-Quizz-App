
result = localStorage.getItem("result")

switch (result)
	{
	case "Champion":
	  $('.answer-title, .answer-description, .answer-image').html('');
	  $( "#slide11" ).css( {"background":"url(../business-brand-quiz/img/champion-background.jpg) no-repeat center center fixed", "-webkit-background-size": "cover",
    "-moz-background-size": "cover", "-o-background-size": "cover;", "background-size": "cover" });
	  $( ".answer-title" ).prepend( "The People's Champion" );
	  $( ".answer-description" ).prepend( "A brand 'for the people', this sector is about challenging the motives of the established and taking the moral high-ground. If your brand is about championing consumer issues, then this is probably you.<br><br> Success will come through maintaining an open and honest dialogue with the public, through their chosen medium. Follow conversations across social networks, engaging where appropriate. Install a spokesperson, someone with passion, with flair and who people can relate to. <br><br>Take this narrative and you'll be following in the footsteps of Virgin, Linux, Change.org and Kulula.com." );
	  $( ".answer-image" ).prepend( "<img id='linux' src='img/linux.png'>" );
	  $( ".answer-image" ).prepend( "<img id='kulula' src='img/kulula.png'>" );
	  $( ".answer-image" ).prepend( "<img id='change' src='img/change.png'>" );
	  $( ".answer-image" ).prepend( "<img id='virgin' src='img/virgin.png'>" );
	  break;
	case "Missionary":
	  $('.answer-title, .answer-description, .answer-image').html('');
	  $( "#slide11" ).css( {"background":"url(../business-brand-quiz/img/missionary.jpg) no-repeat center center fixed", "-webkit-background-size": "cover",
    "-moz-background-size": "cover", "-o-background-size": "cover;", "background-size": "cover" });
	  $( ".answer-title" ).prepend( "The Missionary" );
	  $( ".answer-description" ).prepend( "This narrative takes a far more serious stance, challenging a perceived wrong and looking to correct it. It focuses as much on recruiting converts to a cause, as it does to product purchasers.<br><br> Often, this narrative begins at a grass roots level, challenging something locally and building momentum gradually. Based on having an opinion and refreshing it constantly, brands who wish to take this stance should look to break down the story into small steps, allowing everyone to follow the story. <br><br> Great examples of this narrative include Aljeezera, Huit Denim and An Inconvenient Truth." );
	  $( ".answer-image" ).prepend( "<img id='inconvenienttruth' src='img/inconvenienttruth.png'>" );
	  $( ".answer-image" ).prepend( "<img id='huitdenim' src='img/huitdenim.png'>" );
	  $( ".answer-image" ).prepend( "<img id='aljazeera' src='img/aljeezera.png'>" );
	  break;
	case "Maverick":
	  $('.answer-title, .answer-description, .answer-image').html('');
	  $( "#slide11" ).css( {"background":"url(../business-brand-quiz/img/maverick-background.jpg) no-repeat center center fixed", "-webkit-background-size": "cover",
    "-moz-background-size": "cover", "-o-background-size": "cover;", "background-size": "cover" });
	  $( ".answer-title" ).prepend( "The Irreverent Maverick" );
	  $( ".answer-description" ).prepend( "One of the more-lighted approaches revolves around The Irreverent Maverick. Designed to shock and awe, brands that follow this path are looking to challenge the boring and often measure success with 'the gasp'.<br><br> To be successful here, crackle with attitude, have a daring spirit and do not about whether you are liked; you want to create controversy. Equally important is the ability to move fast, acting on topical stories or events and making a mark with a viral content piece. <br><br> You can probably guess who the examples of this are: Paddy Power, RedBull and Nando's." );
	  $( ".answer-image" ).prepend( "<img id='nandos' src='img/nandos.png'>" );
	  $( ".answer-image" ).prepend( "<img id='redbull' src='img/redbull.png'>" );
	  $( ".answer-image" ).prepend( "<img id='paddypower' src='img/paddypower.png'>" );
	  break;
	case "Democratiser":
	  $('.answer-title, .answer-description, .answer-image').html('');
	  $( "#slide11" ).css( {"background":"url(../business-brand-quiz/img/democratiser-background.jpg) no-repeat center center fixed", "-webkit-background-size": "cover",
    "-moz-background-size": "cover", "-o-background-size": "cover;", "background-size": "cover" });
	  $( ".answer-title" ).prepend( "The Democratiser" );
	  $( ".answer-description" ).prepend( "Brands such as Zara, Ted and H&M fit in to this category, each offering something that was readily available only to the elite, and disseminating it to the many. <br><br> To be a success in this space, brands need to be able to offer radically lower prices than their competitors, which may even involve rethinking their business strategy to sustain the business. It is about heralding a new era, using influencers to build awareness. Most importantly it's about broadcasting success and celebrating it." );
	  $( ".answer-image" ).prepend( "<img id='h&m' src='img/h&m.png'>" );
	  $( ".answer-image" ).prepend( "<img id='ted' src='img/ted.png'>" );
	  $( ".answer-image" ).prepend( "<img id='zara' src='img/zara.png'>" );
	  break;
	case "Generation":
	  $('.answer-title, .answer-description, .answer-image').html('');
	  $( "#slide11" ).css( {"background":"url(../business-brand-quiz/img/generation-background.jpg) no-repeat center center fixed", "-webkit-background-size": "cover",
    "-moz-background-size": "cover", "-o-background-size": "cover;", "background-size": "cover" });
	  $( ".answer-title" ).prepend( "The Next Generation" );
	  $( ".answer-description" ).prepend( "Looking to change the way we live, brands that fit in to this narrative are future focused and looking to change the way we live.<br><br> Challenging the status quo and the concept of yesterday's choices for today, this narrative is about being future facing. It uses high profile advocates to share the message and builds influence by integrating disciplines. <br><br> Audi, Pepsi and Emirates are all examples here." );
	  $( ".answer-image" ).prepend( "<img id='audi' src='img/audi.png'>" );
	  $( ".answer-image" ).prepend( "<img id='pepsi' src='img/pepsi.png'>" );
	  $( ".answer-image" ).prepend( "<img id='emirates' src='img/emirates.png'>" );
	  break;
	};