describe('open all menu in taskbar', () => {

    it('from home, open library menu in taskbar', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(2)').click();

        cy.get('.border-b > .justify-between').should('have.text','My Library')
    });

    it('from home, open discover menu in taskbar', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(3)').click();

        cy.get('.border-b > .justify-between').should('have.text','Discover')
        
    });

    it('from home, open reading menu in taskbar', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(4)').click();

        cy.get('.border-b > .justify-between').should('have.text','Reading')
    });

    it('from home, open profile menu in taskbar', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(5)').click();
        
        cy.get('.border-b > .justify-between').should('have.text','Profile')
        
    });

});