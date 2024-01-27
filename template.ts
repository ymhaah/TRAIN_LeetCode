// ! Quick-Sort

let num = [0, 1, 0, 3, 12];

function quickSort(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
) {
    if (start < end) {
        let pos = partition(arr, start, end);
        quickSort(arr, start, pos - 1);
        quickSort(arr, pos + 1, end);
    }
    return arr;

    function partition(arr: number[], start: number, end: number): number {
        let newStart = start - 1;
        let newEnd = end;

        for (let i = start; i <= newEnd - 1; i++) {
            if (arr[i] < arr[newEnd]) {
                newStart++;
                let swap1 = arr[newStart];
                let swap2 = arr[i];
                arr[i] = swap1;
                arr[newStart] = swap2;
            }
        }
        let swap3 = arr[newEnd];
        let swap4 = arr[newStart + 1];
        arr[newStart + 1] = swap3;
        arr[newEnd] = swap4;
        return newStart + 1;
    }
}

quickSort(num);
