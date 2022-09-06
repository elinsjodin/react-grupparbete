describe("admin functionality", () => {
  it("should create a booking", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".react-calendar__month-view__days > :nth-child(26)");
    cy.get(".second-seating-btn").should("have.text", "21:00").click();
    cy.get(".inc-guest-amount").click();
    cy.get(".full-name-field").type("Testing Name");
    cy.get(".email-field").type("test@testingemail.test");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".create-booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/confirm");
  });
  it("should display all bookings", () => {
    cy.visit("http://localhost:3000/bookings");
  });
  it("should edit a booking", () => {
    cy.visit("http://localhost:3000/admin/edit/:id");
    cy.get(".react-calendar__month-view__days > :nth-child(26)");
    cy.get(".second-seating-btn").should("have.text", "21:00").click();
    cy.get(".inc-guest-amount").click();
    cy.get(".full-name-field").type("Testing Name");
    cy.get(".email-field").type("test@testingemail.test");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".create-booking-btn").click();
  });
  it("should delete a booking", () => {
    cy.get(".delete-booking-btn").click();
  });
});
