var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('handleStatusChange', () => {
        it('should start with 0', () => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            expect(timer.state.seconds).toBe(0);
        });

        it('should set state to started and count up', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatusChange('started');
            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('started');
                expect(timer.state.seconds).toBe(1);
                done();
            }, 1000);
        });

        it('should pause timer on a paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatusChange('started');
            setTimeout(() => {
                timer.handleStatusChange('paused');
                setTimeout(() => {
                    expect(timer.state.seconds).toBe(1);
                    expect(timer.state.timerStatus).toBe('paused');
                    done();
                }, 1000);
            }, 1000);
        });

        it('should stop timer on stopped status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatusChange('started');
            setTimeout(() => {
                timer.handleStatusChange('stopped');
                setTimeout(() => {
                    expect(timer.state.seconds).toBe(0);
                    expect(timer.state.timerStatus).toBe('stopped');
                    done();
                }, 1000);
            }, 1000);
        });
    });

});
