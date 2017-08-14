var React = require('react');

var Clock = require('Clock');
var TimerControl = require('TimerControls');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            timerStatus: 'stopped',
            seconds: 0
        };
    },
    handleStatusChange: function(newStatus) {
        return () => {
            this.setState({
                timerStatus: newStatus
            });
        };
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var previousTimeInSeconds = this.state.seconds;
            this.setState({
                seconds: previousTimeInSeconds + 1
            });
        }, 1000);
    },
    componentDidUpdate: function(prevProps, prevState) {
        if(this.state.timerStatus !== prevState.timerStatus) {
            switch(this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        seconds: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
            }
        }
    },
    componentWillUnmount: function() {
        this.setState({
            seconds: 0,
            timerStatus: 'stopped'
        });
    },
    render: function() {
        var {seconds, timerStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={seconds} />
                <TimerControl onStatusChange={this.handleStatusChange} timerStatus={timerStatus} />
            </div>
        );
    }
});

module.exports = Timer;
