const event = (function () {
  let gameGuide = document.getElementById("gameGuide");
  let playersTurn = true;

  let triggerSpace = $("#board").on("click", ".boardSpace", function (e) {
    if (e.target.innerText == "X" || e.target.innerText == "O") {
      return;
    } else e.target.innerText == "";
    switch (playersTurn) {
      case true:
        e.target.innerText = "X";
        playersTurn = false;
        gameGuide.innerText = "Player Two: Your turn";
        break;
      case false:
        e.target.innerText = "O";
        playersTurn = true;
        gameGuide.innerText = "Player One: Your turn";
        break;
    }
  });

  let clearBtn = document.querySelector("#clear");
  let board = document.querySelectorAll(".boardSpace");

  clearBtn.addEventListener("click", function () {
    [...board].forEach((space) => (space.innerText = ""));
    playersTurn = true;
    gameGuide.innerText = "Player One is first. Click any space to start!";
  });

  return {
    triggerSpace,
  };
})();

const deterWinner = (function () {})();
