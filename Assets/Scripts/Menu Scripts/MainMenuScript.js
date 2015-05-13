#pragma strict

var mainPanel : GameObject;
var namePanel : GameObject;
var settingsPanel : GameObject;
var highScoresPanel : GameObject;
var inputPlayerNameText : UnityEngine.UI.Text;
var highScoresText : UnityEngine.UI.Text;
var playerNameText : UnityEngine.UI.Text;

//mainPanel buttons
function ClickPlay ()
	{
	Application.LoadLevel ("World");
	}
	
function ClickSetPlayerName ()
	{
	mainPanel.SetActive(false);
	namePanel.SetActive(true);
	}
	
function ClickHighScores ()
	{
	mainPanel.SetActive(false);
	highScoresPanel.SetActive(true);
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
	
function ClickSettings ()
	{
	mainPanel.SetActive(false);
	settingsPanel.SetActive(true);
	}
	
function ClickQuit ()
	{
	Application.Quit();
	print ("Quitter");
	}
	
//namePanel buttons
function ClickApplyPlayerName ()
	{
	PlayerPrefs.SetString("CurrentPlayerName", inputPlayerNameText.text);
	print (PlayerPrefs.GetString("CurrentPlayerName"));
	mainPanel.SetActive(true);
	namePanel.SetActive(false);
	}
	
//settingsPanel buttons
function ClickBack ()
	{
	mainPanel.SetActive(true);
	settingsPanel.SetActive(false);
	highScoresPanel.SetActive(false);
	}