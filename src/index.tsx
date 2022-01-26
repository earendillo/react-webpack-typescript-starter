import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home/Home.component';

// const SSR = <Home />;
ReactDOM.render(
    <Home />,
    document.getElementById('app')
);

// if (typeof document === 'undefined') {
//     module.exports = SSR
// } else {
//     ReactDOM.hydrate(SSR, document.getElementById('app'));
// }
