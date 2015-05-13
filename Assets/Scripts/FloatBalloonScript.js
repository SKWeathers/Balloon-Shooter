#pragma strict

var balloonBurst : ParticleSystem;

private var floatSpeed : float;
private var thisRigidbody : Rigidbody;
private var gameCommander : GameObject;

function Start () 
	{
	thisRigidbody = this.rigidbody;
	floatSpeed = Random.Range (0.25,1.0);
	gameCommander = GameObject.Find("GameCommander");
	}

function Update () 
	{
	thisRigidbody.AddForce (Vector3.up * floatSpeed);
	}
	
function Pop (byBullet : boolean)
	{
	if (byBullet == true)
		{
		gameCommander.SendMessage("IncrementBalloonsPopped");
		}
	Instantiate (balloonBurst, thisRigidbody.position, thisRigidbody.rotation);
	Destroy(this.gameObject);
	}