function maxElement() {
    let array = [2, 5, 8, 66, 1, 6, 0]
    console.log('Input: ', array)
    let maxValue = array[0]
    for (let i = 0; i < array.length; i++) {
        if (maxValue < array[i])
            maxValue = array[i]
    }
    console.log('Output: ', maxValue)
}