import React from 'react';
import ReactDOM from 'react-dom';
import KinoKorea from './KinoKorea';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-less/semantic.less'

ReactDOM.render(<KinoKorea />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
