Cypress.Commands.add("_expect", ({matcher, actual, expected})=>{
    cy.task("_expect",{ matcher: matcher, actual: actual, expected: expected })
})

/* global Cypress */