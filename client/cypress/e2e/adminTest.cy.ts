// Testing admin page
describe("testing admin page for create, update and delete booking", () => {
  it("should go to admin page and create booking", () => {
    cy.visit("http://localhost:3000/admin");
    cy.get(".react-calendar__month-view__days > :nth-child(23)")
      .should("have.text", "20")
      .click();
    cy.get(".second-seating-btn").should("have.text", "21:00").click();
    cy.get(".inc-guest-amount").should("have.html", "+").click();
    cy.get(".guest-amount").should("have.html", "2");
    cy.get(".full-name-field").type("Admin Testing");
    cy.get(".email-field").type("admin@testingemail.test");
    cy.get(".phone-field").type("0701234567");
    cy.get(".message-field").type("Message");
    cy.get(".create-booking-btn").click();

    it("should display booking and guest info on admin page", () => {});
    // Edit booking
    //     cy.visit("http://localhost:3000/admin/edit/:id");
    //     cy.get(".react-calendar__month-view__days > :nth-child(22)")
    //       .should("have.text", "19")
    //       .click();
    //     cy.get(".second-seating-btn").should("have.text", "21:00").click();
    //     cy.get(".inc-guest-amount")
    //       .should("have.html", "+")
    //       .click()
    //       .click()
    //       .click();
    //     cy.get(".guest-amount").should("have.html", "8");
    //     cy.get(".update-booking-btn").click();
    //   });
    //   it("should display all bookings", () => {
    //     cy.visit("http://localhost:3000/bookings");
    //   });

    //   it("should delete a booking", () => {
    //     cy.get(".delete-booking-btn").click();
  });
});
