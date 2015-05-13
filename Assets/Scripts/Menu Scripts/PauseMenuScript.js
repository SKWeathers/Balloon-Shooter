#pragma strict

var pauseMenuObject : GameObject;
var mouseLookH : MouseLook;
var mouseLookV : MouseLook;
var scoreScript : ScoreScript;

private var isPaused : boolean = false;

function Start ()
	{
	Screen.lockCursor = true;
	}

function Update () 
	{
	if (Input.GetButtonUp("Pause") && !scoreScript.gameOver)
		{
		if (isPaused)
			{
			pauseMenuObject.SetActive(false);
			Time.timeScale = 1;
			isPaused = false;
			mouseLookH.isPaused = false;
			mouseLookV.isPaused = false;
			Screen.lockCursor = true;
			}
		else if (!isPaused)
			{
			pauseMenuObject.SetActive(true);
			Time.timeScale = 0;
			isPaused = true;
			mouseLookH.isPaused = true;
			mouseLookV.isPaused = true;
			Screen.lockCursor = false;
			}
		}
	if (!isPaused && !scoreScript.gameOver)
		{
		Screen.lockCursor = true;
		}
	}
	
function ClickResume ()
	{
	pauseMenuObject.SetActive(false);
	Time.timeScale = 1;
	isPaused = false;
	mouseLookH.isPaused = false;
	mouseLookV.isPaused = false;
	Screen.lockCursor = true;
	}
	
function ClickNewGame ()
	{
	Application.LoadLevel ("World");
	Time.timeScale = 1;
	isPaused = false;
	}
	
function ClickSettings ()
	{
	print ("open settings");
	}
	
function ClickQuit ()
	{
	Application.Quit();
	}