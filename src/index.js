const { default: expect } = require("expect")


function _expect ({matcher ,actual, expected}){
    console.debug(`actual: ${actual}`)
    console.debug(`expected: ${expected}`)

    expect(actual)[`${matcher}`](expected)
    return null;
}

module.exports = { _expect }