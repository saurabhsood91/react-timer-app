var React = require('react');

var TimerControls = React.createClass({
    propTypes: {
        timerStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        };
    },
    render: function() {
        var {timerStatus, onStatusChange} = this.props;

        var renderPauseOrStartButton = () => {
            if(timerStatus === 'started') {
                return (
                    <button className="button primary" onClick={this.onStatusChange('paused')}>Pause</button>
                );
            }
            return (
                <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            );
        };

        return (
            <div className="timer-controls">
                {renderPauseOrStartButton()}
                <button className="button secondary hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = TimerControls;
