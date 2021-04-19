/* eslint-disable no-undef */
describe('Lambda Eats', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it ('sanity checks', () => {
        expect(42).to.equal(42);
    })
    

const textArea = () => cy.get(`textarea[name=specialInstructions]`);
const checkBoxes = () => cy.get('[type="checkbox"]');


// add text to the box
const words = 'words and stuff';
it('can add text to the box', () => {
    textArea().should('exist')
    textArea().type(words)
    textArea().should('have.value', words)
})

// select multiple toppings
it('can select multiple toppings', () => {
    checkBoxes().check()
} )


// submit the form
})
