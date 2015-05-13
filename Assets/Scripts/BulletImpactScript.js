#pragma strict

private var countdown : float = 2;

function Update ()
	{
	countdown -= Time.deltaTime;
	if (countdown <= 0)
		{
		Explode();
		}
	}

function OnCollisionEnter (col : Collision)
	{
	var obj = col.gameObject;
	if (obj.tag == "Box")
		{
		obj.SendMessage("Open");
		}
	else if (obj.tag == "Balloon")
		{
		obj.SendMessage("Pop", true);
		}
	else if (obj.tag == "Upgrade")
		{
		obj.SendMessage("UpgradeMe");
		}
	Explode();
	}
	
function Explode ()
	{
	Destroy(this.gameObject);
	}