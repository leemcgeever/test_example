//AMP Single Page test
describe('AMP Page Test', function () {
	describe('load AMP test page and verify page url', function() {
		it('passed amp verification', function() {	
			// loads page URL (need to find out how to pass in a selection of pages via sheet or file)
			cy.visit('https://validator.ampproject.org/#url=https://build.harighotra.co.uk/healthy-indian-recipes/healthy-chicken-korma/amp')
			cy.get('.CodeMirror-code > div:nth-of-type(14) > pre.CodeMirror-line > span').should('not.contain', 'Hello, AMP World')
			cy.get('.ampproject-pass').contains('PASS')
			cy.get('.CodeMirror-code > div:nth-of-type(14) > pre.CodeMirror-line > span').should('contain', 'Healthy Chicken Korma Recipe | Hari Ghotra')
			//cy.contains('Healthy Chicken Korma Recipe | Hari Ghotra')
		})
	})
})