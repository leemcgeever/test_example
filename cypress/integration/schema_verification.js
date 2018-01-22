//Schema Single Page test
describe('Google Strucuted Data Testing tool Page Test', function () {
	describe('load schema test page and verify page url', function() {
		it('passed schema test verification', function() {	
			// loads the schema test tool URL
			cy.visit('https://search.google.com/structured-data/testing-tool')
			// input the page url to be tested into the test URL field
			cy.get('#new-test-url-input')
			  .type('https://www.harighotra.co.uk/healthy-indian-recipes/healthy-chicken-korma')	
			// clikc submit
			cy.get('#new-test-submit-button').click()
			// As this is using an external tool, need to give it 10 seconds to finish before verifying results
			cy.wait(10000)
			// confirm RH pane contains the text  Detected 0 errors and 0 warnings
			cy.get('.sKfxWe-BeDmAc-r4nke > span').contains('Detected')
			cy.get('.sKfxWe-BeDmAc-ma6Yeb-qwU8Me-WiHQyb > .K4efff-fmcmS:nth-of-type(1)').contains('0 ERRORS')
			cy.get('.sKfxWe-BeDmAc-ma6Yeb-qwU8Me-WiHQyb > .K4efff-fmcmS:nth-of-type(2)').contains('0 WARNINGS')
		})
	})
})