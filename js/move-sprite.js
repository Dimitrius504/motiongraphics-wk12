// Thanks to http://www.codesynthesis.co.uk/code-snippets/move-an-element-with-arrow-keys-using-jquery
$(document).ready(function () {
  /* STEP 6a: Capture the keydown event for moving the sprite */
  document.addEventListener("keydown", (event) => {
    let keyCode = event.code;
    console.log(keyCode);

    switch (keyCode) {
      case "ArrowUp":
        document.getElementById("dude").className = "up";
        break;
      case "ArrowDown":
        document.getElementById("dude").className = "down";
        break;

      case "ArrowLeft":
        document.getElementById("dude").className = "left";
        break;

      case "ArrowRight":
        document.getElementById("dude").className = "right";
        break;
    }
    /* STEP 8a: Build out the cases for each of the arrow keys */
    /* STEP 8b: Return false so keys don't return anything */
  return false;

});
  document.addEventListener("keyup", () => {

	document.getElementById('dude').className('go');

    });
});
