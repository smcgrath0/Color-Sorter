export default function bubbleSort(stateArray, round) {
  let array = stateArray.slice(0);
  for (let i = 0; i < array.length - 1 - round; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  round++
  return { array, round };
}
