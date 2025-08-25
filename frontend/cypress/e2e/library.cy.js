describe('open all menu in library', () => {
    it('open browse menu', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(2)').click();
        cy.get('.space-x-1 > .text-gray-600').click();

        cy.xpath('//*[@id="root"]/div[2]/main/div/div[2]/div[2]/input').should('exist');
    });

    it('browse books per category', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(2)').click();
        cy.get('.space-x-1 > .text-gray-600').click();
        cy.get('.space-y-4 > .space-x-2 > :nth-child(2)').click();
        cy.get('.space-x-2 > :nth-child(3)').click();
        cy.get('.space-x-2 > :nth-child(4)').click();
        cy.get('.space-x-2 > :nth-child(5)').click();
        cy.get('.space-x-2 > :nth-child(6)').click();
        cy.get('.space-x-2 > :nth-child(7)').click();
        cy.get('.space-x-2 > :nth-child(8)').click();
    });

    it('search book as name', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(2)').click();
        cy.get('.space-x-1 > .text-gray-600').click();
        cy.get('[data-component-line="99"] > .w-full').should('be.empty')
        cy.get('[data-component-line="99"] > .w-full').type('1984');
        cy.xpath('//*[@id="root"]/div[2]/main/div/div[2]/div[4]/div/div[1]/div/div[2]/h3').should('have.text','1984')
    });

    it('search book as name', () => {
        cy.visit('/');
        cy.get('.justify-around > :nth-child(2)').click();
        cy.get('.space-x-1 > .text-gray-600').click();
        cy.get('[data-component-line="99"] > .w-full').should('be.empty')
        cy.get('[data-component-line="99"] > .w-full').type('Dune');
        cy.xpath('//*[@id="root"]/div[2]/main/div/div[2]/div[4]/div/div[1]/div/div[2]/h3').should('have.text','Dune')
    });
});