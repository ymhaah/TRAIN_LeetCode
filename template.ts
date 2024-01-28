// ! Quick-Sort

// Improved code with clarified variable names and comments for explanation

let numbersToSort = [0, 1, 0, 3, 12];

/**
 * Function to perform Quick Sort on an array of numbers.
 * @param {number[]} array - The array to be sorted.
 * @param {number} start - The starting index of the array or subarray.
 * @param {number} end - The ending index of the array or subarray.
 * @returns {number[]} - The sorted array.
 */
function quickSort(
    array: number[],
    start: number = 0,
    end: number = array.length - 1
): number[] {
    // Base case: If the start index is less than the end index, continue sorting
    if (start < end) {
        // Partition the array and get the pivot index
        let pivotIndex = partition(array, start, end);

        // Recursively sort the sub-arrays before and after the pivot
        quickSort(array, start, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, end);
    }

    // Return the sorted array
    return array;

    /**
     * Function to partition the array and return the pivot index.
     * @param {number[]} array - The array to be partitioned.
     * @param {number} start - The starting index of the partitioning range.
     * @param {number} end - The ending index of the partitioning range.
     * @returns {number} - The pivot index.
     */
    function partition(array: number[], start: number, end: number): number {
        let pivotIndex = start - 1; // Initialize pivot index to the left of the partition

        // Iterate through the partitioning range
        for (
            let currentIndex = start;
            currentIndex <= end - 1;
            currentIndex++
        ) {
            // If the current element is less than the pivot element (last element), swap them
            if (array[currentIndex] < array[end]) {
                pivotIndex++;
                // Swap elements at pivotIndex and currentIndex
                let temp1 = array[pivotIndex];
                let temp2 = array[currentIndex];
                array[currentIndex] = temp1;
                array[pivotIndex] = temp2;
            }
        }

        // Swap the pivot element (last element) with the element at pivotIndex + 1
        let temp3 = array[end];
        let temp4 = array[pivotIndex + 1];
        array[pivotIndex + 1] = temp3;
        array[end] = temp4;

        // Return the pivot index
        return pivotIndex + 1;
    }
}

// Call the quickSort function to sort the array
quickSort(numbersToSort);

// ####################################################
