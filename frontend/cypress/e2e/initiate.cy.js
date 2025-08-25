describe('initiate home menu', () => {
    
    it('open home menu', () => {
        cy.visit('/');

        cy.xpath('//*[@id="root"]/div[2]/header/div').should('have.text','BookTracker');
    });
});