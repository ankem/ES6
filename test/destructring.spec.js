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
    });
});