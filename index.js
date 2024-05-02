
function reduceEvens(array){
    return array.reduce((acc, curr) => {
        curr % 2 === 0 ? acc.push(curr) : acc;
        return acc;
    }, []);
}