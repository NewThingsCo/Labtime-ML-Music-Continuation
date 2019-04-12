import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as uiReducer} from 'redux-ui'
import modelTrainingReducer from "./components/train-model/reducer";
import musicReducer from "./components/music-maker/reducer";

export default combineReducers({
  modelTrainingReducer: modelTrainingReducer,
  musicReducer : musicReducer,
  router,
  ui: uiReducer
})
