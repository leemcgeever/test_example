// Navigate to Privacy Policy page and check that the breadcrumb is correct

describe('Breadcrumb Check', function () {
	it('Vists privacy policy and checks breadcrumb', function() {
    // https://build.harighotra.co.uk/privacy-policy
    cy.visit('/privacy-policy')

    // verify that the breadcrumb matches the visited page
    cy.get('div.breadcrumb').contains('Privacy Policy')
 }) 

})