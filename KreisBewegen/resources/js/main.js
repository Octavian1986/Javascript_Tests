"use strict";

//Erfasst Aktivierung der Pfeiltasten je nach Browserversion und ruft Bewegungsfunktion auf

function init() {
  window.addEventListener("keydown", (event) => {
    if (event.key !== undefined) {
      //Für Firefox und Internet Explorer
      console.log(event.key);
      switch (event.key) {
        case "ArrowUp":
          moveUp();
          break;
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "ArrowDown":
          moveDown();
          break;
        default: return;
      }
    } else if (event.keyIdentifier !== undefined) {
      //Für Safari und Chrome
      console.log(event.keyIdentifier);
      switch (event.keyIdentifier) {
        case "Up":
          moveUp();
          break;
        case "Left":
          moveLeft();
          break;
        case "Right":
          moveRight();
          break;
        case "Down":
          moveDown();
          break;
        default: return;
      }
    } else if (event.keyCode !== undefined) {
      console.log("Veraltet!");
    }
  });

  //Auf das circle-element wird zugegriffen
  let circle = document.getElementById("circle");
  let position = [100, 100];
  function move() {
    circle.style.top = position[0] + "px";
    circle.style.left = position[1] + "px";
  }

  function moveUp() {
    position[0] -= 10;
    move();
  }

  function moveRight() {
    position[1] += 10;
    move();
  }

  function moveLeft() {
    position[1] -= 10;
    move();
  }

  function moveDown() {
    position[0] += 10;
    move();
  }
}

//Event-Listener wird zum Dokument hinzugefügt, wenn DOM-Baum vollständig geladen.
document.addEventListener("DOMContentLoaded", init);
