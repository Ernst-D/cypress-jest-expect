const { expect } = require("expect");

const JEST_MATCHERS_OBJECT = Symbol.for('$$jest-matchers-object');
const getMatchers = () => globalThis[JEST_MATCHERS_OBJECT].matchers;
const allMatchers = getMatchers()

debugger
console.log(allMatchers["toBe"])

// let a = "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the  in the subject property, as reflected by all of the comparables. Thus, no adjustments were required."
// let b = "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the leased fee interest in the subject property, as reflected by all of the comparables. Thus, no adjustments were required."

// expect(a).toEqual(b)