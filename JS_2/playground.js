let string = prompt('Give me your string:');

function isEmptyStringValidator(string) {
    let isString = typeof string === 'string'
    string ? console.log(`String length is ${string.length}`) : console.log('String is empty!');
    return isString
}

function minLengthValidation(string) {
    let isValid = string.length > 4
    !isValid ? console.log('String length less than 5') : null;
    return isValid
}

function maxLengthValidation(string) {
    let isValid = string.length < 65
    !isValid ? console.log('String length more that 64 symbols') : null;
    return isValid
}

function lettersContainingValidator(string) {
    let isValid = /[a-zA-Z]/g.test(string)
    !isValid ? console.log('String should contain letters') : null;
    return isValid
}

function capitalLettersValidator(string) {
    let isValid = /[A-Z]/g.test(string)
    !isValid ? console.log('String should contain at least 1 capital letter') : null;
    return isValid
}

function numberContainingValidator(string) {
    let isValid = /\d/g.test(string)
    !isValid ? console.log('String should contain at least 1 number') : null;
    return isValid
}

function dogSymbolContainingValidator(string) {
    let isValid = /@/g.test(string)
    !isValid ? console.log('String should contain at least 1 @ symbol') : null;
    return isValid
}


function stringValidator(string) {
    let validationResults = [];
    validationResults.push(isEmptyStringValidator(string))
    validationResults.push(minLengthValidation(string))
    validationResults.push(maxLengthValidation(string))
    validationResults.push(lettersContainingValidator(string))
    validationResults.push(capitalLettersValidator(string))
    validationResults.push(numberContainingValidator(string))
    validationResults.push(dogSymbolContainingValidator(string))
    console.log(validationResults)
    validationResults.includes(false) ? console.log('Sorry, fix your string') : console.log(`Your string is fine!`)
}

stringValidator(string)
