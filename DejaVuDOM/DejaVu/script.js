var answer = Math.floor(Math.random() * 100) + 1;
var guess = 1;

document.getElementById("submitguess").onclick = function () {
  var x = document.getElementById("guessField").value;

  if (x == answer) {
    alert("CONGRATULATIONS!!! It took you " + guess + " guesses ");
  } else if (x > answer) {
    guess++;
    alert("SORRY! TRY A SMALLER NUMBER");
  } else {
    guess++;
    alert("SORRY! TRY A GREATER NUMBER");
  }
};
