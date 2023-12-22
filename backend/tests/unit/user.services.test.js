import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

import * as UserServices from '../../src/services/user.services.js';
import mongoose from 'mongoose';

var sandbox = sinon.createSandbox();

describe('user service tests', () => {

    let newUserStub, newUser, user;

    // user = new UserServices();

    beforeEach(() => {
        newUser = {
            _id: "123456789",
            firstName: "Test",
            lastName: "Cleese",
            userName: "testycleese",
            email: "test@test.com",
            password: "password",
            save: sandbox.stub().resolves()
        }


    })

    afterEach(() => {
        sandbox.restore();
    })

    describe('Creating a new user', () => {
        it('should should create a new user', async () => {
            newUserStub = sandbox.stub(mongoose.Model, 'create').resolves(newUser)
            const res = await UserServices.addNewUser(newUser)

            console.log(res);

            expect(newUserStub).to.have.been.calledOnce;
            expect(res).to.have.property('firstName').to.equal(newUser.firstName)
            // expect(res.password).to.not.equal(newUser.password)

        })
        it('should throw an error if new user details are incorrect', async () => {
            newUserStub.restore()
            const errorUser = {
                lastName: "Cleese",
                userName: "testycleese",
                email: "test@test.com",
                password: "password",
                save: sandbox.stub().resolves()
            }
            newUserStub = sandbox.stub(mongoose.Model, 'create').rejects(new Error("Problem"));

            await expect(UserServices.addNewUser(newUser)).to.eventually.be.rejectedWith('Problem')


        })
    })
})
