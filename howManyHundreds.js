function howManyHundreds(number){
  number = number / 100
  number = Math.floor(number)
  return number
}
console.log(howManyHundreds(101))
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);