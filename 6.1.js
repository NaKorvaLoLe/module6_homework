let arr = [0, 12, 42, 63,  , "hello", null];

function evenAndOddElements(arr) {
  let sumOdd = 0;
  let sumPar = 0;
  let zeroElem = 0

  for (let i = 0; i < arr.length; i++) {
    if(Number(arr[i]) === 0 ){
        zeroElem++;
    } else if (Number(arr[i]) % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }
  console.log("Zero : " + zeroElem);
  console.log("Odd : " + sumOdd);
  console.log("Par : " + sumPar);
}

evenAndOddElements(arr);