// Clears database
beforeEach(() => {
  cy.request("DELETE", "http://localhost:8000/testing").then((res) => {
    expect(res.status).to.eq(200);
  });
});
// Complete test
describe("testing app", () => {
  // Navigates to /bookings from landingpage
  it("should direct client from landing page to /bookings and create a new booking", () => {
    cy.visit("http://localhost:3000");
    cy.get(".bookings-link").click();
    cy.url().should("eq", "http://localhost:3000/bookings");
    // Creates booking and redirects to comfirmation page
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
  // Testing how a client would see "cancel booking" page from link in email (FYI!! This will not delete doc from database - see test cancelBooking.cy.ts for this)
  it("should create new booking and then 'mock'-cancel it by clicking on 'Confirm Cancel'-button", () => {
    cy.visit("http://localhost:3000/bookings");
    cy.get(".react-calendar__month-view__days > :nth-child(26)")
      .should("have.text", "23")
      .click();
    cy.get(".first-seating-btn").should("have.text", "18:00").click();
    cy.get(".inc-guest-amount").should("have.html", "+").click();
    cy.get(".guest-amount").should("have.html", "2");
    cy.get(".full-name-field").type("Testing Cancel");
    cy.get(".email-field").type("cancel@testingcancelingemail.test");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".gdpr-btn").click();
    cy.get(".gdpr-accept-btn").click();
    cy.get(".booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/confirm");
    cy.visit("http://localhost:3000/bookings/cancel/:id");
    cy.get(".confirm-cancel-booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/booking-canceled");
  });
});
