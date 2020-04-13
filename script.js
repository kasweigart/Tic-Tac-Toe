const event = (function () {
  let gameGuide = document.getElementById("gameGuide");
  let playersTurn = true;
  let currClass = "X";

  let triggerSpace = $("#board").on("click", "#boardSpace", function (e) {
    if (e.target.innerText == "X" || e.target.innerText == "O") {
      return;
    } else e.target.innerText == "";
    switch (playersTurn) {
      case true:
        e.target.innerText = "X";
        e.target.classList.add("X");
        playersTurn = false;
        currClass = "X";
        gameGuide.innerText = "Player Two: Your turn";
        if (checkWin(currClass)) {
          gameGuide.innerText = 'Player One Wins!  Click "Clear" to play again.';
        }
        break;
      case false:
        e.target.innerText = "O";
        e.target.classList.add("O");
        playersTurn = true;
        currClass = "O";
        gameGuide.innerText = "Player One: Your turn";
        if (checkWin(currClass)) {
          gameGuide.innerText = 'Player Two Wins!  Click "Clear" to play again.';
        }
        break;
    }
  });

  let clearBtn = document.querySelector("#clear");
  let board = document.querySelectorAll("#boardSpace");

  clearBtn.addEventListener("click", function () {
    [...board].forEach((space) => (space.innerText = ""));
    playersTurn = true;
    currClass = 'X';
    gameGuide.innerText = "Player One is first. Click any space to start!";
  });

  const winArr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
  ];

  function checkWin(currClass) {
    return winArr.some((comb) => {
      return comb.every((ind) => {
        return board[ind].classList.contains(currClass);
      });
    });
  }

  return {
    triggerSpace,
  };
})();
