// Navigates to /bookings from landingpage
// Creates booking and redirects to comfirmation page
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
// Testar frontend-delen för hur en användare ser avboka-sidan. OBS!! Kommer ej ta bort från databasen (se annat test för det i cancelBooking.cy.ts).
it("should create new booking and then cancel it by clicking on 'Confirm Cancel'-button", () => {
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
// Testar Admin-sidan och navigeringen där
