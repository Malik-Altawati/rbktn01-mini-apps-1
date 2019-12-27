$(document).ready(function () {
  var turn = 0
  var array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  //// checking for players names
  while (!first) {
    var first = prompt("Enter first player name : ")
  };
  while (!second) {
    var second = prompt("Enter second player name : ")
  };
  // adding players names to the DOM
  $("#player1").text(first)
  $("#vs").text(" VS ")
  $("#player2").text(second)
  // declaring reset function
  var reset = function () {
    $(".board").html("-")
    array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    turn = 0
  }
  $(".board").on("click", function (event) {
    if (turn === 8) {
      alert("its a tie")
    }
    var theID = $(this).attr('id');
    var theID = parseInt(theID)
    if ($("#" + theID).text() === "-") { // validating used buttons
      if (turn % 2 === 0) { // checking turns 
        $("#" + theID).html("X"); // even turns will become X 
        if (theID === 0 || theID === 1 || theID === 2) {
          array[0][theID] = "X"
        }
        if (theID === 3 || theID === 4 || theID === 5) {
          array[1][theID - 3] = "X"
        }
        if (theID === 6 || theID === 7 || theID === 8) {
          array[2][theID - 6] = "X"
        }
      } else {
        $("#" + theID).html("O"); // odd turns will become O 
        if (theID === 0 || theID === 1 || theID === 2) {
          array[0][theID] = "O"
        }
        if (theID === 3 || theID === 4 || theID === 5) {
          array[1][theID - 3] = "O"
        }
        if (theID === 6 || theID === 7 || theID === 8) {
          array[2][theID - 6] = "O"
        }
      }
      /////////////////////////////////////////////////// ~ checking part
      //winner condition here for //// Major diagonal
      if (array[0][0] === "X" & array[1][1] === "X" & array[2][2] === "X") {
        alert("The Winner is : " + first)
      }
      if (array[0][0] === "O" & array[1][1] === "O" & array[2][2] === "O") {
        alert("The Winner is : " + second)
      }
      //winner condition here for //// Minor diagonal
      if (array[0][2] === "X" & array[1][1] === "X" & array[2][0] === "X") {
        alert("The Winner is : " + first)
      }
      if (array[0][2] === "O" & array[1][1] === "O" & array[2][0] === "O") {
        alert("The Winner is : " + second)
      }
      //winner condition here for //// horizantal
      for (var i = 0; i < array.length; i++) {
        if (array[i][0] === "X" & array[i][1] === "X" & array[i][2] === "X") {
          alert("The Winner is : " + first)
        }
        if (array[i][0] === "O" & array[i][1] === "O" & array[i][2] === "O") {
          alert("The Winner is : " + second)
        }
      }
      //winner condition here for //// vertical
      if (array[0][0] === "X" & array[1][0] === "X" & array[2][0] === "X" ||
        array[0][1] === "X" & array[1][1] === "X" & array[2][1] === "X" ||
        array[0][2] === "X" & array[1][2] === "X" & array[2][2] === "X"
      ) {
        alert("The Winner is : " + first)
      }
      if (array[0][0] === "O" & array[1][0] === "O" & array[2][0] === "O" ||
        array[0][1] === "O" & array[1][1] === "O" & array[2][1] === "O" ||
        array[0][2] === "O" & array[1][2] === "O" & array[2][2] === "O"
      ) {
        alert("The Winner is : " + second)
      }
      turn++
    } // reset button calls the reset function to reset ~ turn , array and board
    $("#reset").on("click", function () {
      reset()
    })
  })
});


