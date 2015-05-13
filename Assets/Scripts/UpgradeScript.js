#pragma strict

var upgradeBurst : ParticleSystem;

private var thisTransform : Transform;
private var randomX : float;
private var randomY : float;
private var randomZ : float;
private var randomUpgrade : int;
private var stats : StatsScript;

function Start () 
	{
	thisTransform = this.transform;
	randomX = Random.Range(5.0,10.0);
	randomY = Random.Range(5.0,10.0);
	randomZ = Random.Range(5.0,10.0);
	randomUpgrade = Random.Range(0,3);
	stats = GameObject.FindWithTag("Player").GetComponent("StatsScript") as StatsScript;
	}

function Update () 
	{
	thisTransform.Rotate (randomX * Time.deltaTime, randomY * Time.deltaTime, randomZ * Time.deltaTime);
	}
	
function UpgradeMe ()
	{
	if (randomUpgrade == 0 && stats.bulletSpeed != 200) //increase speed of bullets
		{
		stats.bulletSpeed = 200;
		}
	else if (randomUpgrade == 1 && stats.cooldown != 0.1) //decrease cooldown time
		{
		stats.cooldown = 0.1;
		}
	else if (randomUpgrade == 2 && stats.multiBullet != 6) //increase number of bullets fired
		{
		if (stats.multiBullet == 1)
			{
			stats.multiBullet = 2;
			}
		else if (stats.multiBullet == 2)
			{
			stats.multiBullet = 4;
			}
		else if (stats.multiBullet == 4)
			{
			stats.multiBullet = 6;
			}
		}
	else
		{
		randomUpgrade = Random.Range(0,3);
		UpgradeMe();
		}
	Instantiate (upgradeBurst, thisTransform.position, thisTransform.rotation);
	Destroy (this.gameObject);
	}