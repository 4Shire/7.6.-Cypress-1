const book = {
  title: "Рождение Мага",
  description:
    "Пророчество мира Эвиал предвещает скорое пришествие Разрушителя.",
  author: "Ник Перумов",
};

it("Should open the books page", () => {
  cy.visit("/");
  //cy.contains("Books list").should("be.visible");
});

beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать").should("be.visible");
  cy.contains("Books list").click();
  cy.visit("/favorites");
});

it("Should adding a book to favorites", () => {
  cy.contains(book).contains("Add to favorite").click();
  cy.contains("Favorites").click();
  cy.contains(book).should("be.visible");
});

it("Should delete book from favorites", () => {
  cy.contains("Books list").click();
  cy.visit("/favorites");
  cy.contains(book).contains("Delete from favorite").click();
  cy.contains(book).should("not.exist");
});

it("Should book download", () => {
  cy.contains("Books list").click();
  cy.visit("/favorites");
  cy.get("card-body").contains(book).click;
  cy.contains("Dowload book").click;
  cy.contains("Not Found").should("be.visible");
});
