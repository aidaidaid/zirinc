const array = ['c', 'a', 't', ' ', 'p', 'e', 'n', ' ', 'a', 'p', 'p', 'l', 'e'];

function reverseWords(arr) {
    let start = 0;
    let end = arr.length - 1;
    reverse(arr, start, end);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            reverse(arr, start, i - 1);
            start = i + 1;
        }
    }
    reverse(arr, start, end);
    return arr;
}

function reverse(arr, start, end) {
    for (start; start < end; start++) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        end--;
    }
}

console.log(reverseWords(array));