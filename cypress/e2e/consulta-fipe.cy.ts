describe("Consulta o valor de um veículo na tabela fipe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    cy.wrap(Cypress.env("BASE_API_URL")).as("baseApiUrl");
  });

  const selecionarOpcao = (dataTestId: string, valor: string) => {
    cy.get(`[data-testid="${dataTestId}"]`).click();
    cy.get(`[data-testid="${dataTestId}"] input`).type(valor, { force: true });
    cy.get('[role="option"]', { timeout: 10000 })
      .should("be.visible")
      .contains(valor)
      .click({ force: true });
    cy.get(`[data-testid="${dataTestId}"] input`).should("have.value", valor);
  };

  it("erro na requisição de buscar marcas", () => {
    cy.get("@baseApiUrl").then((baseApiUrl) => {
      cy.intercept("GET", `${baseApiUrl}`, {
        statusCode: 500,
        body: { message: "Erro no servidor" },
      }).as("failedDataRetrieval");
    });

    cy.get(`[data-testid="Marca"]`).click();
    cy.get(`[data-testid="Marca"] input`).type("Hyundai", { force: true });
    cy.get('[role="presentation"]').should(
      "contain",
      "Nenhuma opção disponível"
    );

    cy.get(`[data-testid="Modelo"] input`).should("be.disabled");
    cy.get(`[data-testid="submitButton"]`).should("be.disabled");
  });

  it("reseta o modelo e ano quando a marca é selecionada novamente", () => {
    selecionarOpcao("Marca", "Hyundai");
    selecionarOpcao("Modelo", "Creta N Line Night Ed. 2.0 16V Flex Aut.");
    selecionarOpcao("Ano", "2024 Gasolina");
    selecionarOpcao("Marca", "Honda");

    cy.get('[data-testid="Modelo"]').find("input").should("have.value", "");

    cy.get('[data-testid="Ano"]').should("not.exist");
  });

  it("reseta o ano quando o modelo é selecionado novamente", () => {
    selecionarOpcao("Marca", "Hyundai");
    selecionarOpcao("Modelo", "Creta N Line Night Ed. 2.0 16V Flex Aut.");
    selecionarOpcao("Ano", "2024 Gasolina");

    selecionarOpcao("Modelo", "HB20X Diamond 1.6 Flex 16V Aut.");

    cy.get('[data-testid="Ano"]').find("input").should("have.value", "");
  });

  it("seleciona a marca, modelo e ano no autocomplete e clica no botão", () => {
    cy.get('[data-testid="Ano"]').should("not.exist");
    selecionarOpcao("Marca", "Hyundai");
    selecionarOpcao("Modelo", "Creta N Line Night Ed. 2.0 16V Flex Aut.");
    selecionarOpcao("Ano", "2024 Gasolina");
    cy.get(`[data-testid="submitButton"]`).click();

    cy.url().should("contain", `http://localhost:3000/resultado/`);

    cy.get(`[data-testid="carInfo"]`).should(
      "contain",
      "Tabela Fipe: Preço Hyundai Creta N Line Night Ed. 2.0 16V Flex Aut. 2024"
    );

    cy.get(`[data-testid="carPrice"]`).should("contain", "R$ 155.917");
  });
});
