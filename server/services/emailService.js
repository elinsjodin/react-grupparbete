const nodemailer = require("nodemailer");
require("dotenv").config();
const img = require("fs").readFileSync("public/images/images-11.jpeg");

// const { readFile } = require("fs/promises");

// const img = async () => {
//   try {
//     const result = await readFile("public/images/images-11.jpeg");
//     console.log("Result from readFile", result);
//   } catch (err) {
//     //const filePath = fs.readFileSync("public/images/images-11.jpeg");
//     console.log(err);
//   }
// };

module.exports = class EmailService {
  async sendConfirmationEmail(bookingConfirmation) {
    try {
      console.log("Nodemailer");

      console.log("Confirmed Booking", bookingConfirmation);

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const message = {
        from: '"Sorkins", <restaurantsorkins@gmail.com>',
        to: bookingConfirmation.bookedBy.email,
        subject: "Booking Confirmed",
        html: `<html>
              <body>
              <h2>Thank you ${bookingConfirmation.bookedBy.name} for your booking at Sorkins, we are so excited to see you!
              </h2>
              <div>
              <p><b>Date: </b>${bookingConfirmation.date}</p>
              <p><b>Time: </b>${bookingConfirmation.time}</p>
              <p><b>How many: </b>${bookingConfirmation.numberOfGuests}</p>
              <p><b>Name in booking: </b>${bookingConfirmation.bookedBy.name}</p>
              <p><b>Email: </b>${bookingConfirmation.bookedBy.email}</p>
              <p><b>Phone: </b>${bookingConfirmation.bookedBy.phone}</p>
              <p><b>Message for us: </b>${bookingConfirmation.bookedBy.bookingMessage}</p>
              <div><img src="cid:images-11.jpeg"/></div>
              </div>
              <h3>Questions regarding your booking? Send us your question by answering this email.</h3>
              </body>
              </html>`,
        attachments: [
          {
            filename: "images-11.jpeg",
            content: img,
            cid: "images-11.jpeg",
          },
        ],
      };
      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log("Email not sent, error occurs: ", err);
        } else {
          console.log(info, "Message sent: ", info.messageId);
        }
      });
    } catch (error) {
      console.log("Confirmation-email failed", error);
    }
  }
};

//path: __dirname + "/../public/images/images-11.jpeg",
