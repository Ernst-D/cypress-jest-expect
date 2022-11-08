describe("Test suite for cypress-jest-expect",()=>{
    it("can use expect from jest",()=>{
        cy.visit("http://example.com");
        cy.title().then(_title => 
            cy.task("_expect",{ actual: _title, expected: "Google" })
        )
        
        // this is initial design
        // cy.expect("toBe",actual,expected)
    })
})