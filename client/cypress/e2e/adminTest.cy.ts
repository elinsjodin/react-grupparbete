// Clears database
before(() => {
  cy.request("DELETE", "http://localhost:8000/testing").then((res) => {
    expect(res.status).to.eq(200);
  });
});
// Testing admin page
describe("testing admin page for create, update and delete booking and guest info", () => {
  it("should create booking", () => {
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
  it("should go to admin page and test CRUD", () => {
    cy.visit("http://localhost:3000/admin");
    // Here we can see the booking being displayed
    cy.get(".booking-link").should("be.visible");
    // Creates a new booking
    cy.get(".react-calendar__month-view__days > :nth-child(20)")
      .should("have.text", "17")
      .click();
    cy.get(".second-seating-btn").should("have.text", "21:00").click();
    cy.get(".inc-guest-amount").should("have.html", "+").click();
    cy.get(".guest-amount").should("have.html", "2");
    cy.get(".full-name-field").type("Admin Booking1");
    cy.get(".email-field").type("adminbooking1@testingemail.se");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".create-booking-btn").click();
    // We now see two bookings being displayed
    cy.get(".booking-link").should("have.length", "2");
    // Creates a second new booking
    cy.get(".react-calendar__month-view__days > :nth-child(26)")
      .should("have.text", "23")
      .click({ force: true });
    cy.get(".first-seating-btn").should("have.text", "18:00").click();
    cy.get(".inc-guest-amount").should("have.html", "+").click();
    cy.get(".guest-amount").should("have.html", "2");
    cy.get(".full-name-field").type("Admin Booking2");
    cy.get(".email-field").type("adminbooking2@testingemail.se");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".create-booking-btn").click();
    // We now see three bookings being displayed
    cy.get(".booking-link").should("have.length", "3");
    // Goes to sepcific booking page for that booking and clicks on delete to remove from database
    cy.get(".booking-link").last().click();
    // Delete booking
    cy.get(".delete-booking-btn").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Deleted!");
    });
    // Back to /admin and now there is one less booking being displayed which means we successfully deleted booking from database
    cy.get(".back-to-admin-btn").click();
    cy.get(".booking-link").should("have.length", "2");
    // Edit booking
    cy.get(".booking-link").last().click();
    cy.get(".react-calendar__month-view__days > :nth-child(23)").should(
      "have.text",
      "20"
    );
    cy.get(".second-seating-btn").should("have.text", "21:00").click();
    // Changing guest amount in booking to more than 6 people
    cy.get(".inc-guest-amount")
      .should("have.html", "+")
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();
    cy.get(".guest-amount").should("have.html", "8");
    cy.get(".update-booking-btn").click();
    cy.get(".back-to-admin-btn").click();
    cy.get(".booking-link").should("have.length", "2");
    // Delete guest info
    cy.get(".guest-name-on-link").should("have.length", "3");
    cy.get(".guest-name-on-link").last().click();
    cy.get(".delete-guest-btn").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Deleted!");
    });
    // Back to /admin and now there is one less guest being displayed which means we successfully deleted guest from database
    cy.get(".back-to-admin-btn").click();
    cy.get(".guest-name-on-link").should("have.length", "2");
    // Edit guest info
    cy.get(".guest-name-on-link").last().click();
    cy.get(".full-name-field").type("Admin Edited");
    cy.get(".email-field").type("adminedited@testingemail.se");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Guest info updated successfully");
    cy.get(".update-guest-btn").click();
    cy.get(".back-to-admin-btn").click();
    cy.get(".guest-name-on-link").should("have.length", "2");
    cy.get(".guest-name-on-link").last().should("have.html", "Admin Edited");
  });
});
