//Verify that the shop link works and that the correct page loads

describe('Visit shop', function () {
	it('Vists home page then clicks the link to the shop', function() {
    // https:///build.harighotra.co.uk
    cy.visit('/')

    // Click on shop link in header
    cy.contains('Shop').click()

    // Verify that the shop page is rendered
    cy.contains('Hari Ghotra Shop')

    // Verify that the 4 products are displayed
    cy.contains('Cookbooks')
    cy.contains('Curry Kits')
    cy.contains('Indian Spices')
    cy.contains('Gifts')

    // Click the Gifts option
    cy.contains('Gifts').click()
	
	})
})