describe("Test suite for cypress-jest-expect",()=>{
    it("can use expect from jest",()=>{
        cy.visit("http://example.com");
        cy.title().then(_title => 
            cy.task("_expect",{ 
                matcher: "toEqual",
                actual: "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the  in the subject property, as reflected by all of the comparables. Thus, no adjustments were required.", 
                expected: "The purpose of this adjustment is to account for differences in the property rights transferred with the sale. We are valuing the leased fee interest in the subject property, as reflected by all of the comparables. Thus, no adjustments were required." 
            })
        )
    })
})