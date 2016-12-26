const chai = require('chai');
const expect = chai.expect;

describe('test', () => {
    it('given two numbers when add then the sum is calculated', () => {
        const a = 1;
        const b = 2;

        expect(a + b).to.equal(3);
    })
});