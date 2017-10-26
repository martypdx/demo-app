const request = require('./request');
// const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    // beforeEach(() => mongoose.connection.dropDatabase());

    it('says hello', () => {
        request.get('/')
            .then(({ text }) => {
                assert.equal(text, 'Hello World');
            });
    });

});