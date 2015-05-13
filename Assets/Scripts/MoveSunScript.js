#pragma strict

private var thisTransform : Transform;

function Start () 
	{
	thisTransform = this.transform;
	}

function Update () 
	{
	thisTransform.Rotate (Time.deltaTime, 0, 0);
	}