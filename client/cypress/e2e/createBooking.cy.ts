describe("create booking", () => {
  it("should test form validation for required fields and return error", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".booking-btn").click();
  });
  it("should test validaton for booking over 6 people and return not possible", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".react-calendar__month-view__days > :nth-child(26)")
      .should("have.text", "23")
      .click();
    cy.get(".first-seating-btn").should("have.text", "18:00").click();
    cy.get(".inc-guest-amount").click().click().click().click().click().click();
  });
  it("should fill out all required fields in form, click on booking-button to create a new booking and go to 'Confirmed Booking'-page", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".react-calendar__month-view__days > :nth-child(26)");
    cy.get(".second-seating-btn").should("have.text", "21:00").click();
    cy.get(".inc-guest-amount").click();
    cy.get(".full-name-field").type("Testing Name");
    cy.get(".email-field").type("test@testingemail.test");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/confirm");
  });
});
