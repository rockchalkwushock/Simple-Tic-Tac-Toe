// ########################################
/*
*	Table of Contents
*	  1)	Initialization of Variables
*   2)  Parent Function
*   3)  Child Functions
*       a) initLoad ( )
*       b) startGame ( )
*       c) setMessage ( )
*       d) nextMove ( )
*       e) switchTurn ( )
*       f) getBox ( )
*       g) clearBox ( )
*       h) reset ( )
*   4)  Validation Checks
*       a) checkRow ( )
*       a) checkForWinner ( )
*/
// ########################################

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################



// ########################################
/* ---------- Parent Function ---------- */
// ########################################

$(document).ready(initLoad);

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

/* ---------- a) initLoad ---------- */

function initLoad()
{
  startGame();
};

/* ---------- b) startGame ---------- */

function startGame()
{
  reset();
  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + "get's to start.");
};

/* ---------- c) setMessage ---------- */

function setMessage(msg)
{
  document.getElementById("message").innerText = msg;
};

/* ---------- d) nextMove ---------- */

function nextMove(square)
{
  if (document.winner !== null)
  {
      setMessage(document.winner + " already won the game.")
  }
  else if (square.innerText == "")
  {
    square.innerText = document.turn;
    switchTurn();
  }
  else
  {
    setMessage("That square is already marked!")
  };
};

/* ---------- e) switchTurn ---------- */

function switchTurn()
{
  if (checkForWinner(document.turn))
  {
      setMessage("Congratulations, " + document.turn + "! You win!");
      document.winner = document.turn;
  }
  else if (document.turn == 'X')
  {
      document.turn = "O";
      setMessage("It's " + document.turn + "'s turn!");
  }
  else
  {
      document.turn = "X";
      setMessage("It's " + document.turn + "'s turn!");
  };
};

/* ---------- f) getBox ---------- */

function getBox(number)
{
  document.getElementById('s' + number).innerText;
};

/* ---------- g) clearBox ---------- */

function clearBox(number)
{
  document.getElementById('s' + number).innerText = "";
};

/* ---------- h) reset ---------- */

function reset()
{
  for (var i = 1; i <= 9; i+=1)
  {
    clearBox(i);
  }
};

// ##########################################
/* ---------- Validation Checks ---------- */
// ##########################################

/* ---------- a) checkRow ---------- */

function checkRow(a, b, c, move)
{
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move)
  {
    result = true;
  }
  return result;
};

/* ---------- b) checkForWinner ---------- */

function checkForWinner(move)
{
  var result = false;
  if (checkRow(1,2,3, move) ||
      checkRow(4,5,6, move) ||
      checkRow(7,8,9, move) ||
      checkRow(1,4,7, move) ||
      checkRow(2,5,8, move) ||
      checkRow(3,6,9, move) ||
      checkRow(1,5,9, move) ||
      checkRow(3,5,7, move))
  {
      result = true;
  }
  return result;
};
