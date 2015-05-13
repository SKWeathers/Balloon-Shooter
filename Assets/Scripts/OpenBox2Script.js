#pragma strict

var balloon : Rigidbody;

private var balloonCount : int;
private var balloonSpawnPositions : Vector3[] = [Vector3(-1.2817,-0.2,-1.2978), Vector3(1.2111,-0.2,-0.3584), Vector3(-1.4719,-0.2,-0.2119),
												 Vector3(-0.6557,-0.2,0.4464), Vector3(0.4064,-0.2,0.3486), Vector3(-0.4744,-0.2,-0.5751),
												 Vector3(1.4467,-0.2,0.6973), Vector3(0.6598,-0.2,1.3939), Vector3(-0.3969,-0.2,1.4555), 
												 Vector3(-1.4489,-0.2,1.4655), Vector3(0.4259,-0.2,-1.0896), Vector3(1.4463,-0.2,-1.3811)];
private var isOpen : boolean = false;

function Start () 
	{
	balloonCount = Random.Range(8, 13);
	}

function Update () {

}

function Open ()
	{
	if (!isOpen)
		{
		animation.Play();
		isOpen = true;
		for (var i : int = 0; i < balloonCount; i++)
			{
			Instantiate (balloon, this.transform.parent.localPosition + balloonSpawnPositions[i], Quaternion.identity);
			}
		}
	}