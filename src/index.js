import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
document.title = '健康宣传'
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();