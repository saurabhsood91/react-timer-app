var React = require('react');

var TimerControls = (props) => {
    var {timerStatus, onStatusChange} = props;

    var renderPauseOrStartButton = function() {
        if(timerStatus === 'started') {
            return (
                <button className="button primary" onClick={onStatusChange('paused')}>Pause</button>
            );
        }
        return (
            <button className="button primary" onClick={onStatusChange('started')}>Start</button>
        );
    };

    return (
        <div className="timer-controls">
            {renderPauseOrStartButton()}
            <button className="button secondary hollow" onClick={onStatusChange('stopped')}>Clear</button>
        </div>
    );
};

module.exports = TimerControls;
