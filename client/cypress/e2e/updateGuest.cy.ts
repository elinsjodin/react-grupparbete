// Clears database
beforeEach(() => {
  cy.request("DELETE", "http://localhost:8000/testing").then((res) => {
    expect(res.status).to.eq(200);
  });
});
// Testing put req api call to database when admin updates guest
describe("update guest", () => {
  it("should create a booking and then edit guest info to check update-functionality", () => {
    // Create booking to update guest info on
    cy.request({
      method: "POST",
      url: "http://localhost:3000/admin",
      body: {
        date: "Fri Oct 11 2022",
        time: "21:00",
        numberOfGuests: "2",
        bookedBy: {
          name: "Name Update",
          email: "update@test.test",
          phone: "0701234567",
          bookingMessage: "Updating in Admin",
        },
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("date", "Fri Oct 11 2022");
      expect(res.body).has.property("time", "21:00");
      expect(res.body).has.property("numberOfGuests", 2);
      expect(res.body).has.property("bookedBy");
      const guestId = res.body.bookedBy;
      cy.log("guest-id", guestId);
      // Update guest info
      cy.request({
        method: "PUT",
        url: "http://localhost:3000/admin/edit/guest/" + guestId,
        body: {
          name: "Modification Successful",
          email: "updatedemail@success.test",
          phone: "0701234567",
          bookingMessage: "Guest has been updated",
        },
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(200);
      });
    });
  });
});
