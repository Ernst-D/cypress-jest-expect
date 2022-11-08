const { expect } = require("expect");

let a = "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the  in the subject property, as reflected by all of the comparables. Thus, no adjustments were required."
let b = "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the leased fee interest in the subject property, as reflected by all of the comparables. Thus, no adjustments were required."

expect(a).toEqual(b)