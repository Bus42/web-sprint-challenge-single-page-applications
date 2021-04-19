describe('Lambda Eats', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it ('sanity checks', () => {
        expect(42).to.equal(42);
    })
})