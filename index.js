/**
 * Mask floating point values on input.
 * This creates a 'backwards' text entry effect, which enforces
 * whatever input format you specify.
 * @author Tom McIntosh
 * @licence MIT
 * @param {string} inputString
 * @param {string} mask
 * @return {string} outputString - The formatted string
 */
export const floatMask = (inputString, mask) => {

    if(!RegExp('^0+.0+$').test(mask)) {
        console.warn('Invalid mask. Must be of the form: 0.00, 000.0, 0.000, etc.')
        return ''
    }

    const [preDecimalString, postDecimalString] = mask.split('.')

    const postDecimalLength = postDecimalString.length
    const preDecimalLength = preDecimalString.length
    const minStringLength = postDecimalLength + preDecimalLength

    // Remove any decimals and create a copy of the input string
    let numbersOnlyInputString = inputString.replace('.', '')

    //Trim off 0's from the start
    const inputStringArray = numbersOnlyInputString.split('')
    let trimmedInputString = ''
    let foundFirstInteger = false

    inputStringArray.forEach(split => {
        if (foundFirstInteger) {
            trimmedInputString += split
        } else if (split !== '0') {
            trimmedInputString = split
            foundFirstInteger = true
        }
    })

    // If there are not at least 3 characters, we need to prepend
    // 0's to form the price correctly.
    // For example: 3 -> 003.
    // The string must have a length of >= minStringLength to proceed

    // Add 0's
    while (trimmedInputString.length < minStringLength) {
        trimmedInputString = `0${trimmedInputString}`
    }

    // Now the length of the string is >= minStringLength, we can splice in a decimal point
    const decimalSuffix = trimmedInputString.slice(- postDecimalLength)
    const decimalPrefix = trimmedInputString.slice(0, (trimmedInputString.length - postDecimalLength))

    return `${decimalPrefix}.${decimalSuffix}`
}
