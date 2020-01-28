import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../';

chai.use(chaiHttp);

const { expect } = chai;

describe('Authentication', () => {

    it('should return a 201 status with a new jwt token when a user signs up with valid credentials', (done) => {
        chai
            .request(app)
            .post('/api/v1/signup')
            .set('Content-type', 'application/json')
            .send({})
            .end((err, res) => {
                if(err) done(err);
                expect(res.status).to.equal(201);
                expect(res.body).to.have.property('token');
                done();
        });

    });
});
