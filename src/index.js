import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import route from './router/route'
import store from './redux/store'


import registerServiceWorker from './registerServiceWorker';


registerServiceWorker();

const App = () => {
    return (
        <Provider store={store}>
            {route}
        </Provider>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('container'));






