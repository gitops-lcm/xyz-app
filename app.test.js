const request = require("supertest");
const app = require("./app");

describe("The application", () => {
  it("should respond to a GET request", async () => {
    await request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  });
});
