var gamenum = 0;
var winnings = 1000;

function getGameNum(){
  return gamenum;
}

function setGameNum(a){
  gamenum = a;
  console.log('Game Number: ', a);
}

function getWinnings(){
  return winnings;
}

function setWinnings(a){
  winnings = a;
}

export {getGameNum, setGameNum, getWinnings, setWinnings};
