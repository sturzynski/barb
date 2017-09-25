const React                      = require('react');
const { render }                 = require('react-dom');
const { Provider }               = require('react-redux');
const { Router }                 = require('react-router');
const { createBrowserHistory }   = require('history');
const { createCustomStore,
        history }                = require('./store');
const App                        = require('./containers/App');

//------------------------------------------------------------------------------

const store = createCustomStore();

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)