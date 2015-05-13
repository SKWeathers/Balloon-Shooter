#pragma strict

var bulletPrefab : Rigidbody;
var bulletSpawnPoint : Transform[];
var shootParticles : ParticleSystem;
var stats : StatsScript;

private var timeSinceLastShot : float = 0;

function Update () 
	{
	timeSinceLastShot += Time.deltaTime;
	if (Input.GetButtonDown("Fire1")&& timeSinceLastShot >= stats.cooldown)
		{
		for (var i : int = 0; i < stats.multiBullet; i++)
			{
			var bullet : Rigidbody;
			bullet = Instantiate (bulletPrefab, bulletSpawnPoint[i].position, bulletSpawnPoint[i].rotation);
			bullet.velocity = bulletSpawnPoint[i].forward * stats.bulletSpeed;
			Instantiate (shootParticles, bulletSpawnPoint[0].position, bulletSpawnPoint[0].rotation);
			}
		timeSinceLastShot = 0;
		}
	}