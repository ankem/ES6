import {expect} from 'chai';
import {Chance} from 'chance';

describe('destructuring', () => {
    let chance,
        expectedFirstName,
        expectedLastName;

    beforeEach(() => {
        chance = new Chance(),
            expectedFirstName = chance.string(),
            expectedLastName = chance.string();
    });

    describe('Object Destructuring', () => {
        it('should destructure from object', () => {
            let obj = { firstName: expectedFirstName, lastName: expectedLastName };

            let {firstName: f, lastName: l} = obj;

            expect(f).to.be.equal(expectedFirstName);
            expect(l).to.be.equal(expectedLastName);
        });

        it('destructuring while assignment', () => {
            let f = chance.string(),
                l = chance.string();

            ({ x: f, y: l } = { x: expectedFirstName, y: expectedLastName });
            expect(f).to.be.equal(expectedFirstName);
            expect(l).to.be.equal(expectedLastName);
        });

        it('argument destructring', () => {
            function destructringObjectsInArguments({firstName: f, lastName: l}) {
                expect(f).to.be.equal(expectedFirstName);
                expect(l).to.be.equal(expectedLastName);
            }

            destructringObjectsInArguments({
                firstName: expectedFirstName, 
                lastName: expectedLastName
            });
        });

    });

    describe('Array Destructuring', () => {

        it('should destructure from array', () => {
            let [first, last] = [expectedFirstName, expectedLastName];
            expect(first).to.be.equal(expectedFirstName);
            expect(last).to.be.equal(expectedLastName);
        });

        it('destructing while assignment', () => {
            let first = chance.string(),
                last = chance.string();
            [first, last] = [expectedFirstName, expectedLastName];
            expect(first).to.be.equal(expectedFirstName);
            expect(last).to.be.equal(expectedLastName);
        });

        it('argument destructring', () => {
            function destructringArraysInArguments([f, l]) {
                expect(f).to.be.equal(expectedFirstName);
                expect(l).to.be.equal(expectedLastName);
            }

            destructringArraysInArguments([expectedFirstName, expectedLastName]);
        });
    });
});