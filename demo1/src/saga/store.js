
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'

import Demo from './Demo'
import reducer from './reducer'

import createSagaMiddleware from 'redux-saga'
// import mySaga from "./sagas";



// function render() {
//     ReactDOM.render(
//         <Demo
//             value = {store.getState()}
//             onSayHello = {() => action('SAY_HELLO', "HELLO!")}
//             onSayGoodbye = {() => action('SAY_GOODBYE', 'goodbye')} />
//     )
// }

const sagaMiddleware = createSagaMiddleware()

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const init = {
    state: {a:1}
}

const store = createStore(
    reducer,
    init,
    applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(mySaga)

const action = (type, payload) => store.dispatch({
    type,
    payload
})

export default class Demo1 extends Component {
    

    render() {
        return(
            <Demo
            value = {store.getState()}
            onSayHello = {() => action('SAY_HELLO', "HELLO!")}
            onSayGoodbye = {() => action('SAY_GOODBYE', 'goodbye')} />
        )
    }

}