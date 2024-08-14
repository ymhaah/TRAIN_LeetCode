const array = [1, 2, 3, 4, 5];
const obj = { a: 1, b: 2, c: 3 };
const string = "abc";

for (const char of string) {
    // char takes the values 'a', 'b', 'c' in each iteration
}

for (let i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
}

// Reverse for loop
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// Iterates over the enumerable properties of an object
for (let key in obj) {
    console.log(key, obj[key]);
}

//  Iterates over the indices (or keys) of an array.
for (const value in array) {
    console.log(value);
}

// Iterates over the values of an iterable array
for (const value of array) {
    console.log(value);
}

// Iterates over the values of an iterable object (e.g., strings, maps, sets).
for (const char of string) {
    console.log(char);
}

// ####################################################

// how to get a value with an index in a map & set

const map = new Map();
const set = new Set();

let firstValueOfMap = [...map.values()][0];
let firstValueOfSet = [...set][0];

// ####################################################

// convert a text to an array
function textToArray(text: string): string[] {
    return text.split("");
}

// ####################################################

// check if a number is even or odd
function isEven(number: number): boolean {
    return number % 2 === 0;
}

// ####################################################

// convert a number to a string & string to number

let str = "1568";

let number = parseInt(str, 10); // string to number
str = number.toString(); // number to a string

// ####################################################

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

// ####################################################

// ! Recursive function

/**
 * Recursive function to perform some operation on an input number.
 * @param {number} input - The input number.
 * @returns {number} - The result of the operation.
 */
function recursiveFunction(input: number): number {
    // Base case: Check if the recursion should stop
    if (input <= 0) {
        // Return a base value or perform some final operation
        return 1;
    }

    // Recursive case: Call the function with a modified parameter
    const result = recursiveFunction(input - 1);

    // Perform some operation with the result if needed
    // For example, multiply the result by the current parameter
    const modifiedResult = result * input;

    return modifiedResult;
}
recursiveFunction(5);

// ####################################################

// ! Two Pointers

function twoPointers(arr: number[]) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
}

// ! Binary Search

function BinarySearch(arr: number[], target: number): number {
    let start = 0;
    let end = arr.length - 1;
    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        }
    }
    return -1;
}
