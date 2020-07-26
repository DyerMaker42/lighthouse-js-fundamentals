
function range(start, end, step){
  let array = [];
  for ( let i = start; i <= end; i ++ ){
    if (i % step === 0 && step > 0 && start < end){
      array.push(i)
    }
  }
  let numberAdded = 0;

  return array
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range())
/* for (j =0; j < 20; j++){
  array = array + 1
}

console.log(array[3])
*/