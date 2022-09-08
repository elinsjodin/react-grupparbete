// Testing delete req api call to database when guest clicks on "Confirm cancel booking"-button
describe("delete booking", () => {
  it("should create and delete booking", () => {
    // Create booking to delete
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
      const bookingId = res.body._id;
      cy.log("booking-id", bookingId);
      // Delete booking
      cy.request({
        method: "DELETE",
        url: "http://localhost:3000/bookings/cancel/" + bookingId,
      }).then((res) => expect(res.status).to.eq(200));
    });
  });
});
