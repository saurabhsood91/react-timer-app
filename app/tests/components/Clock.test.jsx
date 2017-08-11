var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
});

describe('render', () => {
    it('should render clock to output', () => {
        var clock = TestUtils.renderIntoDocument(<Clock  totalSeconds={62} />);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();
        expect(actualText).toBe("01:02");
    });
});

describe('formatSeconds', () => {
    it('should format seconds', () => {
        // Render the component
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var secondsToTestWith = 615;
        var expected = "10:15";
        expect(clock.formatSeconds(secondsToTestWith)).toBe(expected);
    });
    it('should format seconds when min/sec < 10', () => {
        // Render the component
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var secondsToTestWith = 61;
        var expected = "01:01";
        expect(clock.formatSeconds(secondsToTestWith)).toBe(expected);
    });
});
