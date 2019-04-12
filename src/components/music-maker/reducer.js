import {MusicRNN, MusicVAE, Player, sequences} from "@magenta/music";


const initialState = {
    audioContext: new (window.AudioContext || window.webkitAudioContext)(),
    player: new Player()
};


const musicReducer = (state = initialState, action) => {
    const {player} = state

    switch (action.type) {
        case PLAY_WITH_RNN:
            return ({
                ...state
            })
        case PLAY_WITH_VAE:
            return ({
                ...state
            })
        default:
            return state;
    }
};

export default musicReducer;