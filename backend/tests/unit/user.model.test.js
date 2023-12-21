import { expect } from 'chai';

import User from "../../src/models/user.model.js";


describe('User Model Tests', () => {
    it('should create an instance of User', (done) => {

        // Arrange
        const newUser = {
            firstName: "Dave",
            lastName: "Test",
            userName: "testyDave",
            email: "dave@test.com",
            password: "password"

        }

        // Act
        const user = new User(newUser);

        // Assert
        expect(user).to.have.property("firstName").to.equal(newUser.firstName);
        expect(user).to.have.property("lastName").to.equal(newUser.lastName);
        expect(user).to.have.property("userName").to.equal(newUser.userName);
        expect(user).to.have.property("email").to.equal(newUser.email);
        expect(user).to.have.property("_id").to.a('object')
        done()

    })

    it('should create another instance of User', (done) => {

        // Arrange
        const newUser = {
            firstName: "Joe",
            lastName: "Bloggs",
            userName: "BloJoe",
            email: "joe@test.com",
            password: "password",

        }

        // Act
        const user = new User(newUser);

        // Assert
        expect(user).to.have.property("firstName").to.equal(newUser.firstName);
        expect(user).to.have.property("lastName").to.equal(newUser.lastName);
        expect(user).to.have.property("userName").to.equal(newUser.userName);
        expect(user).to.have.property("email").to.equal(newUser.email);
        expect(user).to.have.property("_id").to.a('object')
        done()

    })

    it('should return errors for each field not filled in ', async () => {

        // Arrange
        const testUser = new User({})

        await testUser.validate().catch(err => {
            expect(err.errors.firstName).to.exist;
            expect(err.errors.lastName).to.exist;
            expect(err.errors.userName).to.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.password).to.exist;
        })
    })
})
