// Dependencies
const superTest = require("supertest");
const app = require("../app.js");

describe("GET /", () => {
  it("should respond with status 200", async () => {
    const response = await superTest(app).get("/");

    expect(response.status).toBe(200);
  });
  it("should respond with correct message", async () => {
    const response = await superTest(app).get("/");
    
    expect(response.text).toBe("Welcome to Budgeting");
  });
});