describe("cancel booking", () => {
  it("should cancel booking by clicking on 'Confirm Cancel'-button", () => {
    cy.visit("http://localhost:3000/bookings/cancel/:id");
    cy.get(".confirm-cancel-booking-btn").click();
    cy.url().should("eq", "http://localhost:3000/booking-canceled");
  });
});
