import bubbleSort from "../main/bubble/bubble";
import heepSort from "../main/heep/heep";
import mergeSort from "../main/merge/merge";
import quickSort from "../main/quick/quick";

export default function changeSort(e) {
  if (e.target.classList.has("bubble")) {
    return bubbleSort;
  } else if (e.target.classList.has("heep")) {
    return heepSort;
  } else if (e.target.classList.has("merge")) {
    return mergeSort;
  } else if (e.target.classList.has("quick")) {
    return quickSort;
  }
}
