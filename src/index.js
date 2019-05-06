import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './index.css';
import App from './App';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <LocaleProvider locale={zh_CN}>
            {/* <Provider> */}
                <App />
            {/* </Provider> */}
        </LocaleProvider>
    </BrowserRouter>,
    document.getElementById('root'));
    registerServiceWorker();

