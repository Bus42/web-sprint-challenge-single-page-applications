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
const submitButton = () => cy.get(`#submitButton`)
const size = () => cy.get(`[name="size"]`)
const sauce = () => cy.get(`[type="radio"]`)
const name = () => cy.get(`input[name="name"]`)

// add text to the box
const words = 'wear a stupid hat';
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
it('can submit the form', () => {
    submitButton().should('exist')
    submitButton().should('be.disabled')
    size().select('Small - 8"')
    sauce().first().check()
    checkBoxes().check()
    textArea().type(words)
    name().type('Bocephus')
    submitButton().should('be.enabled')
    submitButton().click()
} )

})
