
$(document).ready(function () {
  $(".board").html("-")
  var turn = 0
  var array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  var first = prompt("Enter first player name : ")
  var second = prompt("Enter second player name : ")

  $(".board").on("click", function (event) {
    if (turn === 8) {
      alert("its a tie")
    }
    var theID = $(this).attr('id');
    var theID = parseInt(theID)
    if ($("#" + theID).text() === "-") {
      if (turn % 2 === 0) {
        $("#" + theID).html("X");
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
        $("#" + theID).html("O");
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
      //////////////////////////////////////////////////////////////////////////////////checking part
      //winner condition here for //// Major diagonal
      var test = 0
      var counter = 0
      for (var i = 0; i < array.length; i++) {
        if (array[i][test] === "X") {
          counter++
          if (counter === 3) { alert("The Winner is : " + first) }
        }
        test++
      }

      test = 0;
      counter = 0
      for (var i = 0; i < array.length; i++) {
        if (array[i][test] === "O") {
          counter++
          if (counter === 3) { alert("The Winner is : " + second) }
        }
        test++
      }
      //winner condition here for //// Minor diagonal
      test = 2
      counter = 0
      for (var i = 0; i < array.length; i++) {
        if (array[i][test] === "X") {
          counter++
          if (counter === 3) { alert("The Winner is : " + first) }
        }
        test--
      }

      test = 2
      counter = 0
      for (var i = 0; i < array.length; i++) {
        if (array[i][test] === "O") {
          counter++
          if (counter === 3) { alert("The Winner is : " + second) }
        }
        test--
      }

      //winner condition here for //// horizantal

      for (var i = 0; i < array.length; i++) {
        counter = 0
        for (var j = 0; j < array.length; j++) {
          if (array[i][j] === "X") {
            counter++
            if (counter === 3) { alert("The Winner is : " + first) }
          }
        }
        counter = 0
        for (var k = 0; k < array.length; k++) {
          if (array[i][k] === "O") {
            counter++
            if (counter === 3) { alert("The Winner is : " + second) }
          }
        }
      }

      //winner condition here for //// vertical
      var tester = 0
      counter = 0
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
          if (array[j][tester] === "X") {
            counter++
            if (counter === 3) { alert("The Winner is : " + first) }
          }
        }
        counter = 0
        tester++
      }
      //

      var tester = 0
      counter = 0
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
          if (array[j][tester] === "O") {
            counter++
            if (counter === 3) { alert("The Winner is : " + second) }
          }
        }
        counter = 0
        tester++
      }


      //////////////////////////////
      console.log(array)
      turn++
    }

    $("#reset").on("click", function () {
      $(".board").html("-")
      array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
      turn = 0
    })

  })


});


