export default function bubbleSort(stateArray) {
  let array = stateArray.slice(0),
    sorted = false,
    round = 0;
  while (!sorted) {
    sorted = true;

      for (let i = 0; i < array.length - 1 - round; i++) {
        if (array[i] > array[i + 1]) {

          setTimeout(() => {
            console.log('we waited .9s')
          }, 900);
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          sorted = false;
        }
      }
    round++;
  }
  return array;
}

// function handleDispatch(toDispatch, dispatch, array, speed) {
//   if (!toDispatch.length) {
//     dispatch(setCurrentBubbleTwo(array.map((num, index) => index)));
//     setTimeout(() => {
//       dispatch(setCurrentBubbleTwo([]));
//       dispatch(setCurrentSorted(array.map((num, index) => index)));
//       dispatch(setRunning(false));
//     }, 900);
//     return;
//   }
//   let dispatchFunction =
//     toDispatch[0].length > 3
//       ? setArray
//       : toDispatch[0].length === 3 || toDispatch[0].length === 0
//       ? setCurrentSwappers
//       : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
//       ? setCurrentSorted
//       : setCurrentBubbleTwo;
//   dispatch(dispatchFunction(toDispatch.shift()));
//   setTimeout(() => {
//     handleDispatch(toDispatch, dispatch, array, speed);
//   }, speed);
// }
