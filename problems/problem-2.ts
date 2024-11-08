{
    const removeDuplicates = (array: number[]): number[] => {
        const newArray = array.filter((item, index) => array.indexOf(item) === index);
        return newArray;
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);
}