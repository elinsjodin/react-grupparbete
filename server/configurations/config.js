require("dotenv").config();

module.exports = {
  port: process.env.PORT || 8000,
  connectionString: process.env.CONNECTION_STRING,
};
