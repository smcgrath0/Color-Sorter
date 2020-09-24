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
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        return { arr, length, largest }
    }
    return arr
}
