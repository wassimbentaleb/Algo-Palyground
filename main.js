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

function minElement() {
    let array = [2, 5, 8, 66, 1, 6, 0]
    console.log('Input: ', array)

    let minValue = array[0]
    for (let i = 0; i < array.length; i++) {
        if (minValue > array[i])
            minValue = array[i]
    }

    console.log('Output: ', minValue)
}

function minmaxElement() {
    let array = [2, 5, 8, 66, 1, 6, 0]
    console.log('Input: ', array)

    let minValue = array[0]
    let maxValue = array[0]

    for (let i = 0; i < array.length; i++) {
        if (minValue > array[i])
            minValue = array[i]

        if (maxValue < array[i])
            maxValue = array[i]
    }

    console.log(`Output: Max = ${maxValue}, Min =${minValue} `)

}
function isSorted() {
    let array = [2, 3, 5]
    console.log('Input: ', array)

    let sorted = true
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            sorted = false
            break

        }


    }

    console.log(`Output: sorted = ${sorted}`)
}