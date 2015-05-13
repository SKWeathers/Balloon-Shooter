#pragma strict

var lifeTime : float = 0.5;

function Start () 
	{
	Destroy (this.gameObject, lifeTime);
	}