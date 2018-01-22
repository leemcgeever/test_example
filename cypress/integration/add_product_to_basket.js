// //Verify that the shop link works and that the correct page loads

// describe('Visit shop', function () {
// 	it('Vists Cook Book Product and buy it', function() {
// 	// https://build.harighotra.co.uk/shop/easy-indian-slow-cooker-cook-book-copy
// 	cy.visit('https://www.harighotra.co.uk/shop/easy-indian-slow-cooker-cook-book-copy')

// 	// Verify that the cook page has been rendered
// 	cy.contains('The Easy Indian Cookbook')

// 	// Click the Add to basket 
// 	cy.contains('£12.99')

// 	// Button is in iframe - not able to easily select this in Cypress yet
// 	// best to put on hold until https://github.com/cypress-io/cypress/issues/685 merged
// 	// Code below wraps ifrmae but I still get an error with Dead DOM item (can't get this to work)
// 	cy.get("iframe").then(($iframe) => {
// 		const doc = $iframe.contents()

// 		doc.find('button').click(() => {
// 			console.log('Clicked Add to Cart Button')			
// 		})
// 	cy.wrap(doc.find("button")).click({ force: true })

// 	})
//   })
// })