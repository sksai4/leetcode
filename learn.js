
/* Reference Array for the followig questions */
const arr = [1, 2, 3, 4, 5, 6]

/* Q. Find the sum of odd numbers in the given array */

const secarray = arr.filter((num) => num % 2 !== 0).reduce((acc, num) => acc + num, 0)
console.log(secarray)

// method 2
function sumofodd(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];// 4
        }
    }
    return sum;
}

console.log(sumofodd(arr));

const oddNumArray = arr.filter((item) => item % 2 !== 0);
console.log(oddNumArray);

const oddNumSum = function (array) {
    let oddNumArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumArray.push(array[i]);
        }
    }
    return oddNumArray;
}

console.log(oddNumSum(arr));


/* Q. Multiply all numbers in the array with 10 */

const array10 = arr.map((item) => item * 10);
console.log(array10)

const arrayM10 = function (array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * 10);
    }
    return newArr;
}

console.log(arrayM10(arr));

/* Q. Reverse the given array */

function reverseArray(array) {
    let half = array.length / 2;
    if (half % 2 !== 0) {
        half = (array.length - 1) / 2;
    }

    for (let i = 0; i < half; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

console.log('reversed array:', reverseArray(arr));

/* Q. Extract prime numbers from the given array */

function primeCheck(num) {
    if (num < 2) { return false; };
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimes(array) {
    let primeArr = array.filter((item) => primeCheck(item));
    return primeArr;
}

console.log('prime array', getPrimes(arr));


/* Q. Rotate given array 3 steps towards left 
    original array = [1, 2, 3, 4, 5, 6, 7, 8];
    rotated array = [6, 7, 8, 1, 2, 3, 4, 5];
*/

/* THIS ANSWER SHOULD NOT BE FOLLOWED; WRONG METHOD */

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];

function rotateArray(array, direction, count) {

    // when we expect [6, 7, 8, 1, 2, 3, 4, 5];
    if (direction === 'left') {
        for (let i = 0; i < count; i++) {
            const last = array.pop();
            array.unshift(last);
        }   
        return array;
    }

    // when we expect [4, 5, 6, 7, 8, 1, 2, 3]
    if (direction === 'right') {
        for (let i = 0; i < count; i++) {
            const last = array.shift();
            array.push(last);
        }   
        return array;
    }   
}

console.log("rotated array:", rotateArray(originalArray, 'right', 3));

/* constraints: 
1) user gives -ve count 
2) user gives decimal count (currently rounds to next highest number) 
3) user gives count greater than array.length (works now, need to make better)
*/



