describe("create booking", () => {
  it("should test form validation for required fields and return error", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".gdpr-btn").click();
    cy.get(".gdpr-accept-btn").click();
    // Fill out required fields validation needed
  });
  it("should test validaton for booking over 6 people and return not possible", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".react-calendar__month-view__days > :nth-child(20)")
      .should("have.text", "17")
      .click();
    cy.get(".first-seating-btn").should("have.text", "18:00").click();
    cy.get(".inc-guest-amount")
      .should("have.html", "+")
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains(
        "You can't book for more than 6 people, if you need more please contact us"
      );
    });
  });
  it("should fill out all required fields in form, click on booking-button to create a new booking and go to 'Confirmed Booking'-page", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".react-calendar__month-view__days > :nth-child(20)")
      .should("have.text", "17")
      .click();
    cy.get(".second-seating-btn").should("have.text", "21:00").click();
    cy.get(".inc-guest-amount").should("have.html", "+").click();
    cy.get(".guest-amount").should("have.html", "2");
    cy.get(".full-name-field").type("Testing Name");
    cy.get(".email-field").type("test@testingemail.com");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".gdpr-btn").click();
    cy.get(".gdpr-accept-btn").click();
    cy.get(".booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/confirm");
  });
});
