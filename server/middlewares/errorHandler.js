// const ErrorHandler = (req, res, next) => {
//   console.log("Error", Error.status);
//   res.status(Error.status || 500);
//   res.send({ error: true, message: Error.message || "Internal Server Error" });
// };

const ErrorHandler = (status, message) => {
  const err = new Error();
  (err.status = status), (err.message = message);
  return err;
};

module.exports = ErrorHandler;
