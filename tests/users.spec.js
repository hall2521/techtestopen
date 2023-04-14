
import request from 'supertest';
import app from '../app.js';

describe("POST /login", () => {
    describe("given a username and password", () => {

        test("it should respond with a 200 status code and a json web token", async () => {
            const response = await request(app).post("/api/users/login").send({
                name: 'test2',
                password: 'test'
            })
            expect(response.statusCode).toBe(200);
            
        })
    })
    describe("no username and password given", () => {
        test("it should respond with a 400 status code", async () => {
            const response = await request(app).post("/api/users/login").send({

            })
            expect(response.statusCode).toBe(400);
        })
    })

})

describe("/POST register", () => {
  describe("given a username and password", () => {
    test("it should respond with status code 200", async () => {
        const response = await request(app).post("/api/users/register").send({
            name: 'Jane Smith',
            password: 'test_password'
        })
    })
  })  
})