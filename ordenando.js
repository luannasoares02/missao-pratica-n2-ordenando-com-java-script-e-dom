const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const shuffle = (arr, numSwaps) => {
    numSwaps = numSwaps || arr.length * 2;
    for (let i = 0; i < numSwaps; i++) {
        const r1 = Math.floor(Math.random() * arr.length);
        const r2 = Math.floor(Math.random() * arr.length);
        swap(arr, r1, r2);
    }
};

const bubble_sort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
};

const selection_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

const quick_sort = (arr, left, right) => {
    if (left < right) {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, right);
        const pivotIndex = i + 1;
        quick_sort(arr, left, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, right);
    }
};
