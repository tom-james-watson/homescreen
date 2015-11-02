var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
var Controller = require('./components/Controller');
import configureStore from './store/configureStore';
let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Controller />
    </Provider>,
    document.getElementById('homescreen')
);
