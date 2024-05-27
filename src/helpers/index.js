function format(str) {
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    })
    return strWithSpaces
}

export function transformeObj(data) {
    const newObj = {}

    for (let key in data) {
        const num = parseFloat(data[key])
        //console.log(num)
        if (!isNaN(num)) {
            //console.log(typeof String(num.toFixed(2)))
            newObj[key] = format(String(num.toFixed(2)))
        } else {
            newObj[key] = data[key]
        }
    }
    //console.log(newObj)
    return newObj
};
