// Your code here
function mapToNegativize(src)
{
    const output = []

    src.forEach(element => { output.push(element * -1)});

    return output
}
function mapToNoChange(src)
{
    const output = []

    src.forEach(element => { output.push(element)});

    return output
}
function mapToDouble(src)
{
    const output = []

    src.forEach(element => { output.push(element * 2)});

    return output
}
function mapToSquare(src)
{
    const output = []

    src.forEach(element => { output.push(element * element)});

    return output
}

function reduceToTotal(src, start = 0)
{
    let accum = start
    src.forEach(element => { accum += element });
    return accum
}
function reduceToAllTrue(src)
{
    let accum = true
    src.forEach(element => { element === false || accum == false ? accum = false : accum = true });
    return accum
}
function reduceToAnyTrue(src)
{
    let accum = false
    src.forEach(element => { element === true || accum == true ? accum = true : accum = false });
    return accum
}