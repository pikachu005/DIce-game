if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  var a = document.getElementById("player1");
  var d = document.getElementById("player2");
  console.log(a.src);
  var x = Math.floor(Math.random() * 6 + 1);
  var y = Math.floor(Math.random() * 6 + 1);
  var b = document.getElementById("wins");

  if (x > y) {
    b.textContent = "player 1 wins";
  }
  if (x < y) {
    b.textContent = "player 2 wins";
  }
  if (x == y) {
    b.textContent = "DRAW";
  }
  a.src = `./dice${x}.png`;
  d.src = `./dice${y}.png`;

  console.log(a.src);
  console.log(d.src);
}
