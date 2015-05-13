#pragma strict

function OnTriggerEnter (col : Collider)
	{
	if (col.tag == "Balloon")
		{
		col.transform.position.y = -30;
		}
	}