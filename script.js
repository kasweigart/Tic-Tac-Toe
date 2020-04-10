const event = (function () {
  let gameGuide = document.getElementById("gameGuide");
  let playersTurn = true;
  let currClass;

  let triggerSpace = $("#board").on("click", "#boardSpace", function (e) {
    if (e.target.innerText == "X" || e.target.innerText == "O") {
      return;
    } else e.target.innerText == "";
    switch (playersTurn) {
      case true:
        e.target.innerText = "X";
        e.target.classList.add('X');
        playersTurn = false;

        gameGuide.innerText = "Player Two: Your turn";
        break;
      case false:
        e.target.innerText = "O";
        e.target.classList.add('O');
        playersTurn = true;
        gameGuide.innerText = "Player One: Your turn";
        break;
    }
  });

  let clearBtn = document.querySelector("#clear");
  let board = document.querySelectorAll("#boardSpace");

  clearBtn.addEventListener("click", function () {
    [...board].forEach((space) => (space.innerText = ""));
    playersTurn = true;
    gameGuide.innerText = "Player One is first. Click any space to start!";
  });


  const winArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [3, 5, 7],

  ];

  function checkWin(currClass) {
      return winArr.some(comb => {
          return comb.every(ind => {
              return board[ind].classList.contains(currClass)
          })
      })
  }
    
  return {
    triggerSpace
  };
})();
