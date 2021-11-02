/// <reference types="cypress" />


describe("signing in modal works", () => {

    beforeEach(() => {

    })

    it("visits the main page", () => {
        //visit the page 
        cy.visit()
        //assert title is correct
        cy.title().should('include', 'TOURIT')

        //cookie 
        cy.contains('I agree')
        .click()

        cy.intercept('GET', '/vtapi/v1/virtualtours/*').as("getMap")
        //click dropdown
        cy.get('.anon > .user-button')
        .click()

        //see if dropdown there
        cy.get('[title="Login"] > .user-button').should('be.visible')
        .click()

        //google sign in 
        cy.get('.btn-wrapper > :nth-child(2)').should('be.visible')

        cy.wait(500)
        cy.wait('@getMap')
    })
})