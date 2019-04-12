import {applyMiddleware, createStore} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {composeWithDevTools} from "redux-devtools-extension";
import {createEpicMiddleware} from "redux-observable";
import {ajax} from 'rxjs/observable/dom/ajax'


import {epicAdapter as adapter} from './util'
import reducers from './reducers'
import epics from './epics'

const routeMiddleware = routerMiddleware(createHistory())


const epicMiddleware = createEpicMiddleware(epics, {
    dependencies: {
        getJSON: ajax.getJSON,
        del: ajax.delete,
        post: (url, data) =>
            ajax.post(url, data, {
                'Content-Type': 'application/json; charset=utf-8'
            })
    },
    adapter
})

const composeEnhancers = composeWithDevTools({})


export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(routeMiddleware, epicMiddleware))
   )
