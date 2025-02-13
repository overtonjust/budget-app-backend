// Dependencies
const superTest = require("supertest");
const transactions = require('../controllers/transactionController');

describe("Get /", () => {
    it("Should respond with a 200 status", async () => {
        const response = await superTest(transactions).get("/");

        expect(response.statusCode(200))
    })
})