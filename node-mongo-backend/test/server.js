var chai = require('chai')
, chaiHttp = require('chai-http')
, expect = require("chai").expect
, should = chai.should();

chai.use(chaiHttp);

const userDetails = {"firstName": "test",
    "lastName": "user",
    "username": "test@user",
    "password": "testuser"
}
, url = 'http://localhost:4000';

var id
, token;
describe("Binary Tree MaxSum API", () => {

    it("Register New User", (done) => {
        chai.request(url)
            .post('/users/register')
            .send(userDetails)
            .end((err, res) => {
                should.not.exist(err);
                expect(res).to.have.status(200);
                done();
            })
    })

    it("Authenticate User", (done) => {
            chai.request(url)
            .post('/users/authenticate')
            .send(userDetails)
            .end((err, res) => {
                should.not.exist(err);
                expect(res).to.have.status(200);
                res.should.have.status(200);
                res.body.should.have.property('token');
                token = res.body.token;
                id = res.body._id;
                done();
            })
    })

    it("Get All Users", (done) => {
        chai.request(url)
            .get('/users')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);
                res.body[0].should.be.an('object');
                done();
            })
    })

});

describe("Binary Tree TreeSum API", () => {

    it("should return 9", (done) => {
        chai.request(url)
        .post('/treesum/sum')
        .set('Authorization', `Bearer ${token}`)
        .send({"tree": "1 2 e 5 1 e e e 3 6 e e 7"})
        .end((err, res) => {
            should.not.exist(err);
            expect(res).to.have.status(200);

            expect(res.body).to.equal(9);
            done();
        })
    })
    
    it("should return error message", (done) => {
        chai.request(url)
        .post('/treesum/sum')
        .set('Authorization', `Bearer ${token}`)
        .send({"tree" : ""})
        .end((err, res) => {
            should.not.exist(err);
            expect(res).to.have.status(400);

            expect(res.body.message).to.contain("Invalid input");
            done();
        })
    })

});

describe("Clean Up", () => {

    it("Delete Created Test User", (done) => {
        chai.request(url)
            .delete(`/users/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                should.not.exist(err);
                expect(res).to.have.status(200);
                done();
            })
    })

});
