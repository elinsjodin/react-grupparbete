describe("test navabr", () => {
  it("should click on 'Booking'-link and navigate to correct route", () => {
    cy.visit("http://localhost:3000");
    cy.get("#nav-links-container").children().should("have.length", 3);
    cy.get(".bookings-link").click();
    cy.url().should("eq", "http://localhost:3000/bookings");
  });
  it("should click on 'Home'-link and navigate back to start page", () => {
    cy.get(".home-link").click();
    cy.url().should("eq", "http://localhost:3000");
  });
  it("should click on 'Contact'-link and navigate to correct route", () => {
    cy.get(".contact-link").click();
    cy.url().should("eq", "http://localhost:3000/contact");
  });
});
