import React, { Component } from 'react';
import './Metronomicon.css';

class Metronomicon extends Component {
    render() {
        let bpm = 100; // initialize bpm variable at 100 beats per min
        let playing = false; // prevent metronome from auto-start

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <input type="range" min="60" max="240" value={bpm} />
                </div>
                <button>{playing ? 'Stop' : 'Start'}</button> 
            </div>
        ); 
    }
}

export default Metronomicon;