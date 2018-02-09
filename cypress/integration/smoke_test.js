//Basic is the site alive test
describe('Basic smoke test', function () {
	describe('loads the home page', function() {
		it('load successfully', function() {	
			// loads base URL + /
			cy.visit('/')
			cy.contains('Copyright © 2018 Hari Ghotra')
		})
	})

	// Opens the footer page to verify the site is responding
	describe('load the privacy page from the footer and verify correct page loads', function() {
		it('visits footer and opens Privacy Policy Page', function() {
		    // https:///build.harighotra.co.uk
		    cy.visit('/')
		    // click the privacy policy link
		    cy.contains('Privacy Policy').click()
		    // confirm the correct 
		    cy.contains('At Hari Ghotra Ltd we respect your privacy and we promise to')
		})
	})

	// Opens the contact form, verifies the elements. NOTE: Can't submit due to captcha on the site
	describe('load the contact page and verify all elements are present', function() {
		it('Visits contact page and confirm correct', function() {
		    // https:///build.harighotra.co.uk/contact
		    cy.visit('/contact')
		    // check each expected input field is visible
		    cy.contains('Contact')
		    cy.get('#Name').should('be.visible')
		    cy.get('#Surname').should('be.visible')
		    cy.get('#Email').should('be.visible')
		    cy.get('#Phone').should('be.visible')
		    cy.get('#Message').should('be.visible')
		    cy.get('div#g-recaptcha-10').should('be.visible')
		    cy.get('#Submit').should('be.visible')
		})
	})

	// input incorrect url to ensure 404 page is loading
	describe('load an incorrect page url to verify that the 404 page is displayed', function() {
		it('visits footer and opens Privacy Policy Page', function() {
		    //visit invalid url: https:///build.harighotra.co.uk/notapage
		    cy.visit('/notapage', {failOnStatusCode: false})

		    // confirm the 404 page loaded by checking for 404 message on page
		    cy.get('h1').contains('404')
		})
	})
})