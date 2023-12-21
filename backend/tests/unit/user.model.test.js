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

        console.log(user);

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
            repeatedPassword: "password"
        }
        const user = new User(newUser);

        console.log(user);

        expect(user).to.have.property("firstName").to.equal(newUser.firstName);
        expect(user).to.have.property("lastName").to.equal(newUser.lastName);
        expect(user).to.have.property("userName").to.equal(newUser.userName);
        expect(user).to.have.property("email").to.equal(newUser.email);
        expect(user).to.have.property("_id").to.a('object')
        done()

    })
})
