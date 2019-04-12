import * as actions from "./actions";
import * as feedbackActions from "../feedback/actions"
import * as usageActions from "../use-model/actions"
import {execute, startTraining, update} from "../../utils/brain";


const initialState = {
    trainedNet: null,
    currentOutput: {},
    testDisabled: true,
    currentInput: ""
};


const modelTrainingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FIRE_START_TRAINING:
            return ({
           ...state,
            trainedNet : startTraining(),
            testDisabled : false
        });
        case usageActions.REGISTER_INPUT:
            return ({
            ...state,
            currentInput: action.input
        });
        case usageActions.EXECUTE_INPUT_ON_MODEL:
            return({
                ...state,
                currentOutput: execute(action.input, state.trainedNet)
            });
        case feedbackActions.TRAIN_MODEL_WITH_INPUT:
            return({
                ...state,
                trainedNet : update(action.tobeAdded)
            });
        default:
            return state;
    }
};

export default modelTrainingReducer;