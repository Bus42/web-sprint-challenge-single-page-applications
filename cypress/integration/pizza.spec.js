/* eslint-disable no-undef */
describe('Lambda Eats', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it ('sanity checks', () => {
        expect(42).to.equal(42);
    })
})

const textArea = () => cy.get(`textarea[name=specialInstructions]`)
// add text to the box
it('can add text to the box', () => {
    textArea().should('exist')
})

// select multiple toppings

// submit the form
