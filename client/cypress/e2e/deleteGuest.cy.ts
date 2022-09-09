// Clears database
beforeEach(() => {
  cy.request("DELETE", "http://localhost:8000/testing").then((res) => {
    expect(res.status).to.eq(200);
  });
});
// Testing delete req api call to database when admin deletes guest
describe("delete guest", () => {
  it("should create a booking and then delete guest info from it", () => {
    // Create booking to delete guest info from
    cy.request({
      method: "POST",
      url: "http://localhost:3000/bookings",
      body: {
        date: "Fri Sep 23 2022",
        time: "18:00",
        numberOfGuests: "2",
        bookedBy: {
          name: "Name Testing",
          email: "email@testing.test",
          phone: "0701234567",
          bookingMessage: "Testing",
        },
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("date", "Fri Sep 23 2022");
      expect(res.body).has.property("time", "18:00");
      expect(res.body).has.property("numberOfGuests", 2);
      expect(res.body).has.property("bookedBy");
      const guestId = res.body.bookedBy;
      cy.log("guest-id", guestId);
      // Delete guest info
      cy.request({
        method: "DELETE",
        url: "http://localhost:3000/admin/guest/delete/" + guestId,
      }).then((res) => expect(res.status).to.eq(200));
    });
  });
});
