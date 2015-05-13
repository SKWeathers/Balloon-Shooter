#pragma strict

var radius = 5.0;
var power = 10.0;

private var boxTop : Transform;

function Start () 
	{
	boxTop = this.gameObject.transform.Find("BoxTopInterior");
	}

function Update () {

}

function Collapse ()
	{
	var boxChunks : Rigidbody[];
	boxChunks = boxTop.GetComponentsInChildren(Rigidbody) as Rigidbody[];
	for (var rb : Rigidbody in boxChunks)
		{
		rb.useGravity = true;
		print ("hello");
		}
	var explosionPos : Vector3 = Vector3(transform.position.x, transform.position.y - 2, transform.position.z);
	var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);
		
	for (var hit : Collider in colliders) 
		{
		if (hit && hit.rigidbody)
			{
			hit.rigidbody.AddExplosionForce(power, explosionPos, radius, 3.0);
			}
		}
	}