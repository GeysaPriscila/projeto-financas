describe('Transações', () => {
    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/")
    });

    it('Cadastrar uma entrada', () => {
        criarTransacao("Freela", 2500)

        cy.get('tbody tr td.description').should("have.text", "Freela")
    }),

    it('Cadastrar uma saída', () => {
        criarTransacao("Shopping", -500)

        cy.get('tbody tr td.description').should("have.text", "Shopping")
    }),

    it('Excluir uma transação', () => {
        criarTransacao("Internet", -100)
        criarTransacao("Mesada", 200)
        cy.wait(1000)

        // cy.contains(".description", "Internet").parent().find('img').click()

        cy.contains(".description", "Internet").siblings().children('img').click()

        cy.get('tbody tr').should("have.length", "1")
    });
});

function criarTransacao(descricao, valor){
    cy.contains('Nova Transação').click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-04-27") // yyyy-mm-dd
    cy.contains('button', 'Salvar').click()
}