import { drawOuterBorders, drawElements, drawInstructions } from './util.js';
import { HumanPlayer, getHumanElements, deleteHuman, destroyAllHumanElements } from './humanplayer.js';
import { ComputerPlayer, getEnemyElements, deleteComputer, destroyAllEnemyElements } from './computerplayer.js';
import { Element, returnCurrentListOfElements, deleteElement, destroyAllElements } from './element.js';
import { getAllPlayers, deletePlayer, destroyAllPlayers } from './player.js';

const elements = [
  'Fire',
  'Earth',
  'Lightning',
  'Water'
];

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');
  gameCanvas.width = window.innerWidth * 0.98;
  gameCanvas.height = window.innerHeight * 0.98;

  let imagesLoaded = 0;

  const firePng = new Image();
  firePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/fire.png';
  firePng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  const earthPng = new Image();
  earthPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/earth.png';
  earthPng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  const lightningPng = new Image();
  lightningPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/lightning.png';
  lightningPng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  const waterPng = new Image();
  waterPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/water.png';
  waterPng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  const explosionPng = new Image();
  explosionPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/explosion.png';
  explosionPng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  }

  const fireSpritePng = new Image();
  fireSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/fireSprite.png';
  fireSpritePng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  }

  const earthSpritePng = new Image();
  earthSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/earthSprite.png';
  earthSpritePng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  }

  const lightningSpritePng = new Image();
  lightningSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/lightningSprite.png';
  lightningSpritePng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  }

  const waterSpritePng = new Image();
  waterSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/waterSprite.png';
  waterSpritePng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  }

  const humanSpritePng = new Image();
  humanSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/human.png';
  humanSpritePng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded);
  }

  const instructionPng = new Image();
  instructionPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/instruct.png';
  instructionPng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded)
  }

  const movementPng = new Image();
  movementPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/movement.png';
  movementPng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded)
  }

  const gameoverPng = new Image();
  gameoverPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/gameover.png';
  gameoverPng.onload = () => {
    imagesLoaded += 1;
    update(imagesLoaded)
  }

  let humanPlayer;
  let generated = false;
  let start = false;
  let endlessInterval = setInterval(() => generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1), 1000);
  clearInterval(endlessInterval);

  const restartButton = document.getElementById('restart-button');
  restartButton.addEventListener('click', () => {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    destroyAllPlayers();
    destroyAllElements();
    destroyAllHumanElements();
    destroyAllEnemyElements();
    humanPlayer = new HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
  });

  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    restartButton.style.visibility='visible';
    startButton.style.visibility='hidden';
    start = true;
  })

  const easyButton = document.getElementById('easy-button');
  easyButton.addEventListener('click', () => {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    destroyAllPlayers();
    destroyAllElements();
    destroyAllHumanElements();
    destroyAllEnemyElements();
    humanPlayer = new HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
  });

  const mediumButton = document.getElementById('medium-button');
  mediumButton.addEventListener('click', () => {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    destroyAllPlayers();
    destroyAllElements();
    destroyAllHumanElements();
    destroyAllEnemyElements();
    humanPlayer = new HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 2);
  });

  const hardButton = document.getElementById('hard-button');
  hardButton.addEventListener('click', () => {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    destroyAllPlayers();
    destroyAllElements();
    destroyAllHumanElements();
    destroyAllEnemyElements();
    humanPlayer = new HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 4);
  });

  const extremeButton = document.getElementById('extreme-button');
  extremeButton.addEventListener('click', () => {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    destroyAllPlayers();
    destroyAllElements();
    destroyAllHumanElements();
    destroyAllEnemyElements();
    humanPlayer = new HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 10);
  });

  const endlessButton = document.getElementById('endless-button');
  endlessButton.addEventListener('click', () => {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    destroyAllPlayers();
    destroyAllElements();
    destroyAllHumanElements();
    destroyAllEnemyElements();
    humanPlayer = new HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1)
    endlessInterval = setInterval(() => generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1), 5000);
  });

  function update(imagesLoaded) {
    if (imagesLoaded >= 12 && !generated && start) {
      humanPlayer = new HumanPlayer(gameContext, gameCanvas, humanSpritePng);
      generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
      generated = true;
    }

    if (imagesLoaded >= 12) {
      requestAnimationFrame(update);
      gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
      gameContext.beginPath();
      gameContext.rect(0, 0, gameCanvas.width, gameCanvas.height);
      gameContext.fillStyle = 'black';
      gameContext.fill();
      gameContext.closePath();
      if (humanPlayer != undefined && !humanPlayer.alive){
       generateGame(gameContext, gameCanvas);
       generateGameover(gameContext, gameCanvas, gameoverPng);
      }
      if (Object.values(getAllPlayers())[0] instanceof HumanPlayer) {
        Object.values(getAllPlayers()).forEach((player) => {
          player.changePosition();
        });

        let els;

        let currentListOfElements = returnCurrentListOfElements();
        if (currentListOfElements != undefined) {
          els = Object.values(returnCurrentListOfElements()).map((el) => {
            if (el.lifeline > 0) {
              el.drawElement();
              return el;
            };
          });
          drawElements(
            gameContext,
            gameCanvas,
            elements[humanPlayer.element],
            firePng,
            earthPng,
            lightningPng,
            waterPng
          );
          // generateGame(gameContext, gameCanvas);
        }

        if (Object.values(getAllPlayers()).length > 1) {
          checkPlayerCollisions();
          checkElementCollisions(els, Object.values(getAllPlayers()), explosionPng, gameContext);
        }
      }
      generateGame(gameContext, gameCanvas);
    }
    drawInstructions(gameContext, gameCanvas, instructionPng, movementPng);
  }
});

const generateGameover = (context, canvas, gameoverPng) => {
  context.drawImage(
    gameoverPng,
    ((330/1440) * canvas.width),
    ((5/810) * canvas.height),
    ((1105/1440) * canvas.width),
    ((803/810) * canvas.height)
  )

}

let arrayOfPlayers = {};

const generateGame = (context, canvas) => {
  drawOuterBorders(context, canvas);
}

const checkElementCollisions = (els, players, explosionPng, context) => {

  for(let i = 0; i < els.length; i++) {
    for(let j = 0; j < players.length; j++) {
      if (
        ((els[i].human == true && !(players[j] instanceof HumanPlayer)) ||
         (els[i].human == false && players[j] instanceof HumanPlayer))&&
        players[j].coordX < els[i].posX + 20 &&
        players[j].coordX > els[i].posX - 20 &&
        players[j].coordY < els[i].posY + 20 &&
        players[j].coordY > els[i].posY - 20
      ) {
        if (players[j] instanceof HumanPlayer) {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          players[j].alive = false;
          deletePlayer(players[j].id);
        } else if (els[i].element == 'Fire' && players[j].currentElement == 'Earth') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          deletePlayer(players[j].id);
        } else if (els[i].element == 'Earth' && players[j].currentElement == 'Lightning') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          deletePlayer(players[j].id);
        } else if (els[i].element == 'Lightning' && players[j].currentElement == 'Water') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          deletePlayer(players[j].id);
        } else if (els[i].element == 'Water' && players[j].currentElement == 'Fire') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          deletePlayer(players[j].id);
        }

      }
    }
  }
}

const generateExplosion = (explosionPng, posX, posY, context) => {
  let timer = 0;
  for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 6; j++) {
      if (i == 5 && j >= 4) {
        return;
      } else if (i == 0) {
        timer += 300;
        setTimeout(() => {
          context.drawImage(
            explosionPng,
            ((1/j) * (200/11)),
            0,
            200/11,
            200/11,
            posX,
            posY,
            200/11,
            200/11
          )
        }, timer)
      } else if (j == 0) {
        timer += 300;
        setTimeout(() => {
          context.drawImage(
            explosionPng,
            0,
            ((1/i) * (200/11)),
            200/11,
            200/11,
            posX,
            posY,
            200/11,
            200/11
          )
        }, timer)
      } else {
        timer += 300;
        setTimeout(() => {
          context.drawImage(
            explosionPng,
            ((1/j) * (200/11)),
            ((1/i) * (200/11)),
            200/11,
            200/11,
            posX,
            posY,
            200/11,
            200/11
          )
        }, timer)
      }
    }
  }
}

const generatePlayers = (context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, difficulty) => {
  console.log('yeah');
  for(let i = 0; i < difficulty; i++) {
    console.log('yeah');
    let cplayer = new ComputerPlayer(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng)
    for(let j = 0; j < Object.values(arrayOfPlayers).length; j++) {
      let x1 = Object.values(arrayOfPlayers)[j].coordX;
      let y1 = Object.values(arrayOfPlayers)[j].coordY;
      let x2 = cplayer.coordX;
      let y2 = cplayer.coordY;

      let xPow = Math.pow(x2 - x1, 2);
      let yPow = Math.pow(y2 - y1, 2);
      let distance = Math.sqrt(xPow + yPow);
      if (distance <= 26) {
        cplayer.generatePosition();
        j = -1;
      }
    }
  }
}

const checkPlayerCollisions = () => {
  let arrOfPlayers = Object.values(getAllPlayers());
  if (arrOfPlayers.length < 2) {
    return;
  }
  for(let i = 0; i < arrOfPlayers.length; i++) {
    for(let j = 0; j < arrOfPlayers.length; j++) {
      if (i == j) {
        continue;
      } else {
        checkCollision(arrOfPlayers[i], arrOfPlayers[j]);
      }
    }
  }
}

const checkCollision = (player1, player2) => {
  let x1 = player1.coordX;
  let y1 = player1.coordY;
  let x2 = player2.coordX;
  let y2 = player2.coordY;

  let xPow = Math.pow(x2 - x1, 2);
  let yPow = Math.pow(y2 - y1, 2);
  let distance = Math.sqrt(xPow + yPow);

  let xVelDiff = player2.velocityX - player1.velocityX;
  let yVelDiff = player2.velocityY - player1.velocityY;
  let xDistDiff = player2.coordX - player1.coordX;
  let yDistDiff = player2.coordY - player1.coordY;

  if (distance <= 26) {
    let xPow = Math.pow(x2 - x1, 2);
    let yPow = Math.pow(y2 - y1, 2);
    let distance = Math.sqrt(xPow + yPow);
    handleOverlap(player1, player2);
  }
};

const handleOverlap = (player1, player2) => {
  let xPow = Math.pow(player2.coordX - player1.coordX, 2);
  let yPow = Math.pow(player2.coordY - player1.coordY, 2);
  let distance = Math.sqrt(xPow + yPow);
  while (distance <= 26) {
    player1.coordX -= (2/3) * player1.velocityX;
    player1.coordY -= (2/3) * player1.velocityY;
    player2.coordX -= (2/3) * player2.velocityX;
    player2.coordY -= (2/3) * player2.velocityY;
    xPow = Math.pow(player2.coordX - player1.coordX, 2);
    yPow = Math.pow(player2.coordY - player1.coordY, 2);
    distance = Math.sqrt(xPow + yPow);
  }
  handleCollision(player1, player2)
};

const handleCollision = (player1, player2) => {
  let x1 = player1.coordX;
  let y1 = player1.coordY;

  let x2 = player2.coordX;
  let y2 = player2.coordY;

  let dx = x2 - x1;
  let dy = y2 - y1;

  let rotatedAngle = -Math.atan2(dy, dx);

  let u1 = rotate({ x: player1.velocityX, y: player1.velocityY }, rotatedAngle);
  let u2 = rotate({ x: player2.velocityX, y: player2.velocityY }, rotatedAngle);

  let v1 = { x: u2.x, y: u1.y };
  let v2 = { x: u1.x, y: u2.y };

  let finalVel1 = rotate(v1, -rotatedAngle);
  let finalVel2 = rotate(v2, -rotatedAngle);

  player1.velocityX = finalVel1.x;
  player1.velocityY = finalVel1.y;

  player2.velocityX = finalVel2.x;
  player2.velocityY = finalVel2.y;

  let xPow = Math.pow(player2.coordX - player1.coordX, 2);
  let yPow = Math.pow(player2.coordY - player1.coordY, 2);
  let distance = Math.sqrt(xPow + yPow);

};

const rotate = (velocity, angle) => {
  const rotatedVelocities = {
      x: velocity.x * Math.cos(angle * (180/Math.PI)) - velocity.y * Math.sin(angle * (180/Math.PI)),
      y: velocity.x * Math.sin(angle * (180/Math.PI)) + velocity.y * Math.cos(angle * (180/Math.PI))
  };

  return rotatedVelocities;
}
