// ! Quick-Sort

// Link: https://www.youtube.com/watch?v=0SkOjNaO1XY&list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H&index=11&ab_channel=CSDojo

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

// ! Hash-Function

/**
 * Creates a hash map to count the occurrences of elements in an array.
 * @param {T[]} array - The input array.
 * @returns {Map<T, number>} - The resulting hash map with element counts.
 */
function hashMap<T>(array: T[]): Map<T, number> {
    const elementCountMap = new Map<T, number>();

    // Iterate through the array to count element occurrences
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];

        // Check if the element is already in the map
        if (elementCountMap.has(currentElement)) {
            // Increment the count if the element exists
            elementCountMap.set(
                currentElement,
                elementCountMap.get(currentElement)! + 1
            );
        } else {
            // Set the count to 1 if the element is encountered for the first time
            elementCountMap.set(currentElement, 1);
        }
    }

    // Return the resulting hash map with element counts
    return elementCountMap;
}

hashMap<number>([1, 2, 3, 4, 5, 6]);
