#pragma strict

var balloonsPoppedCounter : UnityEngine.UI.Text;
var timeLimitCounter : UnityEngine.UI.Text;
var timeLimit : float = 120;

var infoPanel : GameObject;
var scoresPanel : GameObject;
var highScoresText : UnityEngine.UI.Text;
var playerNameText : UnityEngine.UI.Text;
var belowThresholdScoreText : UnityEngine.UI.Text;
var belowThresholdPlayerNameText : UnityEngine.UI.Text;

var gun : GameObject;
var mainCamera : Transform;
var gameOverCameraSpot : Transform;
var gameOver : boolean = false;

private var balloonsPopped : int = 0;
private var scoreRank : int;

function Start ()
	{
//	PlayerPrefs.SetInt("HighScore9", 5);
//	PlayerPrefs.SetInt("HighScore8", 10);
//	PlayerPrefs.SetInt("HighScore7", 15);
//	PlayerPrefs.SetInt("HighScore6", 20);
//	PlayerPrefs.SetInt("HighScore5", 25);
//	PlayerPrefs.SetInt("HighScore4", 30);
//	PlayerPrefs.SetInt("HighScore3", 35);
//	PlayerPrefs.SetInt("HighScore2", 40);
//	PlayerPrefs.SetInt("HighScore1", 45);
//	PlayerPrefs.SetInt("HighScore0", 50);
//	PlayerPrefs.SetString("PlayerName9", "Jimmy");
//	PlayerPrefs.SetString("PlayerName8", "Jimmy");
//	PlayerPrefs.SetString("PlayerName7", "Jimmy");
//	PlayerPrefs.SetString("PlayerName6", "Jimmy");
//	PlayerPrefs.SetString("PlayerName5", "Jimmy");
//	PlayerPrefs.SetString("PlayerName4", "Jimmy");
//	PlayerPrefs.SetString("PlayerName3", "Jimmy");
//	PlayerPrefs.SetString("PlayerName2", "Jimmy");
//	PlayerPrefs.SetString("PlayerName1", "Jimmy");
//	PlayerPrefs.SetString("PlayerName0", "Jimmy");
	}

function Update () 
	{
	timeLimit -= Time.deltaTime;
	timeLimitCounter.text = "Time: " + Mathf.Round(timeLimit);
	if (timeLimit <= 0)
		{
		GameOver();
		}
	}

function IncrementBalloonsPopped ()
	{
	balloonsPopped += 1;
	balloonsPoppedCounter.text = "Score: " + balloonsPopped;
	}
	
function GameOver ()
	{
	gameOver = true;
	Time.timeScale = 0;
	gun.SetActive(false);
	Screen.lockCursor = false;
	mainCamera.position = gameOverCameraSpot.position;
	mainCamera.rotation = gameOverCameraSpot.rotation;
	scoresPanel.SetActive(true);
	infoPanel.SetActive(false);
	if (!scoreRank)
		{
		if (PlayerPrefs.GetInt("HighScore0") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", PlayerPrefs.GetInt("HighScore6"));
			PlayerPrefs.SetInt("HighScore6", PlayerPrefs.GetInt("HighScore5"));
			PlayerPrefs.SetInt("HighScore5", PlayerPrefs.GetInt("HighScore4"));
			PlayerPrefs.SetInt("HighScore4", PlayerPrefs.GetInt("HighScore3"));
			PlayerPrefs.SetInt("HighScore3", PlayerPrefs.GetInt("HighScore2"));
			PlayerPrefs.SetInt("HighScore2", PlayerPrefs.GetInt("HighScore1"));
			PlayerPrefs.SetInt("HighScore1", PlayerPrefs.GetInt("HighScore0"));
			PlayerPrefs.SetInt("HighScore0", balloonsPopped);
			scoreRank = 0;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("PlayerName6"));
			PlayerPrefs.SetString("PlayerName6", PlayerPrefs.GetString("PlayerName5"));
			PlayerPrefs.SetString("PlayerName5", PlayerPrefs.GetString("PlayerName4"));
			PlayerPrefs.SetString("PlayerName4", PlayerPrefs.GetString("PlayerName3"));
			PlayerPrefs.SetString("PlayerName3", PlayerPrefs.GetString("PlayerName2"));
			PlayerPrefs.SetString("PlayerName2", PlayerPrefs.GetString("PlayerName1"));
			PlayerPrefs.SetString("PlayerName1", PlayerPrefs.GetString("PlayerName0"));
			PlayerPrefs.SetString("PlayerName0", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore1") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", PlayerPrefs.GetInt("HighScore6"));
			PlayerPrefs.SetInt("HighScore6", PlayerPrefs.GetInt("HighScore5"));
			PlayerPrefs.SetInt("HighScore5", PlayerPrefs.GetInt("HighScore4"));
			PlayerPrefs.SetInt("HighScore4", PlayerPrefs.GetInt("HighScore3"));
			PlayerPrefs.SetInt("HighScore3", PlayerPrefs.GetInt("HighScore2"));
			PlayerPrefs.SetInt("HighScore1", balloonsPopped);
			scoreRank = 1;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("PlayerName6"));
			PlayerPrefs.SetString("PlayerName6", PlayerPrefs.GetString("PlayerName5"));
			PlayerPrefs.SetString("PlayerName5", PlayerPrefs.GetString("PlayerName4"));
			PlayerPrefs.SetString("PlayerName4", PlayerPrefs.GetString("PlayerName3"));
			PlayerPrefs.SetString("PlayerName3", PlayerPrefs.GetString("PlayerName2"));
			PlayerPrefs.SetString("PlayerName2", PlayerPrefs.GetString("PlayerName1"));
			PlayerPrefs.SetString("PlayerName1", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore2") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", PlayerPrefs.GetInt("HighScore6"));
			PlayerPrefs.SetInt("HighScore6", PlayerPrefs.GetInt("HighScore5"));
			PlayerPrefs.SetInt("HighScore5", PlayerPrefs.GetInt("HighScore4"));
			PlayerPrefs.SetInt("HighScore4", PlayerPrefs.GetInt("HighScore3"));
			PlayerPrefs.SetInt("HighScore3", PlayerPrefs.GetInt("HighScore2"));
			PlayerPrefs.SetInt("HighScore2", balloonsPopped);
			scoreRank = 2;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("PlayerName6"));
			PlayerPrefs.SetString("PlayerName6", PlayerPrefs.GetString("PlayerName5"));
			PlayerPrefs.SetString("PlayerName5", PlayerPrefs.GetString("PlayerName4"));
			PlayerPrefs.SetString("PlayerName4", PlayerPrefs.GetString("PlayerName3"));
			PlayerPrefs.SetString("PlayerName3", PlayerPrefs.GetString("PlayerName2"));
			PlayerPrefs.SetString("PlayerName2", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore3") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", PlayerPrefs.GetInt("HighScore6"));
			PlayerPrefs.SetInt("HighScore6", PlayerPrefs.GetInt("HighScore5"));
			PlayerPrefs.SetInt("HighScore5", PlayerPrefs.GetInt("HighScore4"));
			PlayerPrefs.SetInt("HighScore4", PlayerPrefs.GetInt("HighScore3"));
			PlayerPrefs.SetInt("HighScore3", balloonsPopped);
			scoreRank = 3;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("PlayerName6"));
			PlayerPrefs.SetString("PlayerName6", PlayerPrefs.GetString("PlayerName5"));
			PlayerPrefs.SetString("PlayerName5", PlayerPrefs.GetString("PlayerName4"));
			PlayerPrefs.SetString("PlayerName4", PlayerPrefs.GetString("PlayerName3"));
			PlayerPrefs.SetString("PlayerName3", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore4") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", PlayerPrefs.GetInt("HighScore6"));
			PlayerPrefs.SetInt("HighScore6", PlayerPrefs.GetInt("HighScore5"));
			PlayerPrefs.SetInt("HighScore5", PlayerPrefs.GetInt("HighScore4"));
			PlayerPrefs.SetInt("HighScore4", balloonsPopped);
			scoreRank = 4;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("PlayerName6"));
			PlayerPrefs.SetString("PlayerName6", PlayerPrefs.GetString("PlayerName5"));
			PlayerPrefs.SetString("PlayerName5", PlayerPrefs.GetString("PlayerName4"));
			PlayerPrefs.SetString("PlayerName4", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore5") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", PlayerPrefs.GetInt("HighScore6"));
			PlayerPrefs.SetInt("HighScore6", PlayerPrefs.GetInt("HighScore5"));
			PlayerPrefs.SetInt("HighScore5", balloonsPopped);
			scoreRank = 5;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("PlayerName6"));
			PlayerPrefs.SetString("PlayerName6", PlayerPrefs.GetString("PlayerName5"));
			PlayerPrefs.SetString("PlayerName5", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore6") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", PlayerPrefs.GetInt("HighScore6"));
			PlayerPrefs.SetInt("HighScore6", balloonsPopped);
			scoreRank = 6;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("PlayerName6"));
			PlayerPrefs.SetString("PlayerName6", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore7") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", PlayerPrefs.GetInt("HighScore7"));
			PlayerPrefs.SetInt("HighScore7", balloonsPopped);
			scoreRank = 7;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("PlayerName7"));
			PlayerPrefs.SetString("PlayerName7", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore8") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", PlayerPrefs.GetInt("HighScore8"));
			PlayerPrefs.SetInt("HighScore8", balloonsPopped);
			scoreRank = 8;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("PlayerName8"));
			PlayerPrefs.SetString("PlayerName8", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else if (PlayerPrefs.GetInt("HighScore9") < balloonsPopped)
			{
			PlayerPrefs.SetInt("HighScore9", balloonsPopped);
			scoreRank = 9;
			PlayerPrefs.SetString("PlayerName9", PlayerPrefs.GetString("CurrentPlayerName"));
			}
		else
			{
			scoreRank = -1;
			belowThresholdScoreText.text = balloonsPopped.ToString();
			belowThresholdPlayerNameText.text = PlayerPrefs.GetString("CurrentPlayerName");
			}
		PlayerPrefs.Save();
		}
	
	highScoresText.text = PlayerPrefs.GetInt("HighScore0") + "\n" + 
						  PlayerPrefs.GetInt("HighScore1") + "\n" + 
						  PlayerPrefs.GetInt("HighScore2") + "\n" + 
						  PlayerPrefs.GetInt("HighScore3") + "\n" + 
						  PlayerPrefs.GetInt("HighScore4") + "\n" + 
						  PlayerPrefs.GetInt("HighScore5") + "\n" + 
						  PlayerPrefs.GetInt("HighScore6") + "\n" + 
						  PlayerPrefs.GetInt("HighScore7") + "\n" + 
						  PlayerPrefs.GetInt("HighScore8") + "\n" + 
						  PlayerPrefs.GetInt("HighScore9");
	playerNameText.text = PlayerPrefs.GetString("PlayerName0") + "\n" + 
						  PlayerPrefs.GetString("PlayerName1") + "\n" + 
						  PlayerPrefs.GetString("PlayerName2") + "\n" + 
						  PlayerPrefs.GetString("PlayerName3") + "\n" + 
						  PlayerPrefs.GetString("PlayerName4") + "\n" + 
						  PlayerPrefs.GetString("PlayerName5") + "\n" + 
						  PlayerPrefs.GetString("PlayerName6") + "\n" + 
						  PlayerPrefs.GetString("PlayerName7") + "\n" + 
						  PlayerPrefs.GetString("PlayerName8") + "\n" + 
						  PlayerPrefs.GetString("PlayerName9");
	}
	
//button functions
function ClickRetry ()
	{
	Application.LoadLevel ("World");
	}
	
function ClickMenu ()
	{
	Application.LoadLevel ("MainMenu");
	}
	
function ClickQuit ()
	{
	Application.Quit();
	}