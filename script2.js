let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var i = 0; i < numbersArray.length; i++) {
  if(numbersArray[i] % 3 === 0 && numbersArray[i] % 5 === 0) {
    console.log('Bing Bong');
  } else if(numbersArray[i] % 3 === 0) {
    console.log('Bing');
  } else if(numbersArray[i] % 5 === 0) {
    console.log('Bong');
  }
}
