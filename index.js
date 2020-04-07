// Your code here

const mapToNegativize = (array) => {
    const arr = []
    array.forEach(element => {
        arr.push(element * -1)
    });
    return arr
}

const mapToNoChange = (array) => {
    const arr = array
    return arr
}

const mapToDouble = (array) => {
    const arr = []
    array.forEach(element => {
        arr.push(element * 2)
    });
    return arr
}

const mapToSquare = (array) => {
    const arr = []
    array.forEach(element => {
        arr.push(element ** 2)
    });
    return arr
}

const reduceToTotal = (array, startingPoint=0 ) => {
    let aggregator = startingPoint
    array.forEach(element => {
        aggregator = aggregator + element
    });
    return aggregator
}

const reduceToAllTrue = (array) => {
    let result = true
    array.forEach(element => {
        if (element == false) {
            result = false
        }
    });
    return result
}

const reduceToAnyTrue = (array) => {
    let result = false
    array.forEach(element => {
        if (element == true) {
            result = true
        }
    });
    return result
}