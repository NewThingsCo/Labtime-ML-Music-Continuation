import React from 'react'
import TrainModel from './components/train-model'
import UseModel from './components/use-model';
import Results from './components/results';
import Feedback from './components/feedback';
import MusicMaker from './components/music-maker';

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TrainModel />
                <UseModel />
                <Results />
                <Feedback />
                <MusicMaker />>
            </div>
        )
    }
}

export default App;