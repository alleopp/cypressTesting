/// <reference types="cypress" />

describe("testing zoom functionality", () => {

    it("visits page", () => {
        cy.visit("https://www.finstc.com/virtualtours_dev/").as("loadpage")

        //cookie 
        cy.contains('I agree')
        .click()
        
        cy.get('.warning-popup > p').should('be.visible')

        
    })
})