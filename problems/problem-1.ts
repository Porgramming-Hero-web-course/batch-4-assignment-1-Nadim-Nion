const sumArray = (array: number[]): number => {
    const sum = array.reduce((total, item) => total + item, 0);
    return sum;
}

const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);