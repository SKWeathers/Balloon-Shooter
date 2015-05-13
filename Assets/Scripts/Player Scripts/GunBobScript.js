#pragma strict

var gunBobSpeed : int = 3;

private var thisTransform : Transform;
private var minLocation : Vector3 = Vector3(0, -0.78, 1.35);
private var maxLocation : Vector3 = Vector3(0, -0.68, 1.35);
private var currentLocation : Vector3;
private var isRising : boolean;

function Start () 
	{
	thisTransform = this.transform;
	}

function Update () 
	{
	//if player is moving
	if (Input.GetAxis("Horizontal") || Input.GetAxis("Vertical"))
		{
		currentLocation = thisTransform.localPosition;
		if (currentLocation.y <= -0.76) //if gun is at low position
			{
			isRising = true;
			}
		else if (currentLocation.y >= -0.70) //if gun is at high position
			{
			isRising = false;
			}
			
		if (isRising == true) //raise gun
			{
			thisTransform.localPosition = Vector3.Lerp(currentLocation, maxLocation, Time.deltaTime * gunBobSpeed);
			}
		else if (isRising == false) //lower gun
			{
			thisTransform.localPosition = Vector3.Lerp(currentLocation, minLocation, Time.deltaTime * gunBobSpeed);
			}
		
		}
	//if player is not moving
	else if (!Input.GetAxis("Horizontal") && !Input.GetAxis("Vertical"))
		{
		currentLocation = thisTransform.localPosition;
		if (currentLocation.y >= -0.70) //lower gun if necessary
			{
			thisTransform.localPosition = Vector3.Lerp(currentLocation, minLocation, Time.deltaTime * gunBobSpeed);
			}
		
		}
	}