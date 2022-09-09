// Clears database
beforeEach(() => {
  cy.request("DELETE", "http://localhost:8000/testing").then((res) => {
    expect(res.status).to.eq(200);
  });
});
// Testing put req api call to database when admin updates booking
describe("update booking", () => {
  it("should create a booking and then edit it to check update-functionality and booking for more than 6 people", () => {
    // Create booking to update
    cy.request({
      method: "POST",
      url: "http://localhost:3000/admin",
      body: {
        date: "Fri Oct 11 2022",
        time: "21:00",
        numberOfGuests: "6",
        bookedBy: {
          name: "Admin Testing",
          email: "admin@testing.test",
          phone: "0701234567",
          bookingMessage: "Testing in Admin",
        },
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("date", "Fri Oct 11 2022");
      expect(res.body).has.property("time", "21:00");
      expect(res.body).has.property("numberOfGuests", 6);
      expect(res.body).has.property("bookedBy");
      const bookingId = res.body._id;
      cy.log("booking-id", bookingId);
      cy.request({
        method: "GET",
        url: "http://localhost:3000/admin/edit/" + bookingId,
      });
      // Update booking
      cy.request({
        method: "PUT",
        url: "http://localhost:3000/admin/edit/" + bookingId,
        body: {
          date: "Sat Oct 12 2022",
          time: "21:00",
          numberOfGuests: "8",
        },
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(200);
      });
    });
  });
});
