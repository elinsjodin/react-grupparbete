describe("cancel booking", () => {
  it("should create new booking to cancel", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".react-calendar__month-view__days > :nth-child(26)").should(
      "have.text",
      "23"
    );
    cy.get(".second-seating-btn").should("have.text", "18:00").click();
    cy.get(".inc-guest-amount").click();
    cy.get(".full-name-field").type("Testing Cancel");
    cy.get(".email-field").type("cancel@testingcancelingemail.test");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".gdpr-accept-btn").click();
    cy.get(".booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/confirm");
  });
  it("should cancel booking by clicking on 'Confirm Cancel'-button", () => {
    cy.visit("http://localhost:3000/bookings/cancel/:id");
    cy.get(".confirm-cancel-booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/booking-canceled");
  });
});
