describe("Test suite for cypress-jest-expect",()=>{
    it("can use expect from jest",()=>{
        cy.visit("http://example.com");
        let actual = "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the  in the subject property, as reflected by all of the comparables. Thus, no adjustments were required."
        let expected = "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the leased fee interest in the subject property, as reflected by all of the comparables. Thus, no adjustments were required."
        
        // cy._expect("toBe", actual, expected);
        cy.task('_expect', { matcher: "toBe", actual: "test", expected: "non-test" })
    })
})