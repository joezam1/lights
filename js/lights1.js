


	var currentColorLight = document.getElementById('lightsID');	
	var colorButtonPressed = document.getElementsByTagName("input");
	var buttonsCount = colorButtonPressed.length;
	
	
	
	
	for (var i = 0; i < buttonsCount; ++i ) 
	{	
		colorButtonPressed[i].onclick = function(e) 
		{
			var buttonClicked = document.getElementById(this.id);
			if((currentColorLight.src).includes(buttonClicked.value))
			{
				document.getElementById('lightsID').src="images/black.png";
			}
			else
			{
				document.getElementById('lightsID').src="images/"+buttonClicked.value+".png";
			}	
		};
	}
