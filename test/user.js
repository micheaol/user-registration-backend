import chai from "chai";
import chaiHttp from 'chai-http'
import server from '../index.js';

chai.should();

chai.use(chaiHttp);

describe('User API', () => {
    describe("Register new user", () => {
        it("It should register a new user", (done) => {
            const user = {
                firstName: "Sunday",
                lastName: "Seedhub",
                email: "sunday@gmail.com"
            };
            chai.request(server)
                .post('/api/v1/users')
                .send(user)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done();
                })
        })
    })

});