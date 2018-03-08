import * as chai from 'chai';
import { Greeter } from "../src/greeter";

const expect = chai.expect;

describe('Greeter Unit Tests', () => {
    it ('should have no errors', () => {
        require('../src/index');
    });

    it ('should say hello', () => {
        const greeter = new Greeter();
        expect(greeter.greet()).to.equal('Hello node');
    });
});
