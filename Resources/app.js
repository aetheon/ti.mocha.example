// creates the "mocha" global necessary to run a test suite anywhere in your app
require('ti-mocha');

// create the test suite
describe('ti-mocha', function() {

    describe('suite 1', function() {

        it('shows passing tests (fast)', function(){});

        it('shows passing tests (slow)', function(done){
            setTimeout(done, 1500);
        });

    });

    describe('suite 2', function() {

        it('shows pending tests');

        it('fails a test', function() {
            //throw new Error('this shoud fail');
        });

    });

});

// run the tests
mocha.run();