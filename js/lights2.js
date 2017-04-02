
function buttonLightClick(clicked_id)
{
	var currentColorLight = document.getElementById('lightsID');
	
	if((currentColorLight.src).includes(clicked_id))
	{
		document.getElementById('lightsID').src="images/black.png";		
	}
    else
	{	
		var buttonClicked =document.getElementById(clicked_id);
		document.getElementById('lightsID').src="images/"+(buttonClicked.value).toString()+".png";
	}	
}