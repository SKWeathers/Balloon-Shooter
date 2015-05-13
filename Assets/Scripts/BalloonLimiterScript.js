#pragma strict

function OnTriggerEnter (col : Collider)
	{
	if (col.tag == "Balloon")
		{
		col.SendMessage("Pop", false);
		}
	}