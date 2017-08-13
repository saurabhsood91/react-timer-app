var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },
    componentDidUpdate: function(prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                    // we don't break, as we also want to clear the interval
                case 'paused':
                    clearInterval(this.timer);
                    break;
            }
        }
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function(newStatus) {
        // update the state
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function() {
        var {count, countdownStatus} = this.state;

        var renderControlArea = () => {
            if(countdownStatus !== 'stopped') {
                // started or paused
                // return Controls
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
            } else {
                // return CountdownForm
                return (
                    <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>
                );
            }
        };

        return (
            <div>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;
