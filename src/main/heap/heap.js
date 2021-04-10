export default function heapSort(arr, length, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if(left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if(right < length && arr[right] > arr[largest]) {
        largest = right
    }

    if(largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        return heapSort(arr, length, largest);
    } else {
        return arr
    }
}
