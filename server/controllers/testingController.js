const TestingService = require("../services/testingService.js");
const testingService = new TestingService();

module.exports = class TestingController {
  async DeleteDataFromDataBase(req, res, next) {
    try {
      const results = await testingService.DeleteDataFromDatabase();
      res.send(results).status(200);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }
};
