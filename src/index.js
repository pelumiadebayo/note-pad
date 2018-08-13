import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from './Reducers/index';
import { Provider } from "react-redux";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducer)}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
