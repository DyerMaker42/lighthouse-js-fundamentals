const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

 function finalPosition(moves) {
  const finalMoves = [0,0];
  
  for (i = 0; i < (moves.length) ; i++){
    if (moves [i]==='north') {
      finalMoves[1] += 1 ;
    } else if(moves[i]==='south') {
      finalMoves[1] += -1;
    } else if (moves[i]==='east'){
      finalMoves[0] += 1;
    } else if (moves[i]==='west'){
      finalMoves[0] += -1 ;
    }
  }
  
  
  
  return finalMoves
}
console.log(finalPosition(moves))
