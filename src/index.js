// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
// 引入App
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))