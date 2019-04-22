import React, { Component } from 'react';
import './Metronomicon.css';

class Metronomicon extends Component {
    constructor(props) { //initialize state here and use in render
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };
    }
    
    // Handler Function to make slider function
    handleBpmChange = event => {
        const bpm = event.target.value;
        this.setState({ bpm });
    }

    render() {
        const { playing, bpm } = this.state;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <input 
                        type="range" 
                        min="60" 
                        max="240" 
                        value={bpm} 
                        onChange={this.handleBpmChange} />
                </div>
                <button>{playing ? 'Stop' : 'Start'}</button> 
            </div>
        ); 
    }
}

export default Metronomicon;