const { createStore,
        applyMiddleware,
        compose }              = require('redux');
const thunk                    = require('redux-thunk').default;
const { routerMiddleware }     = require('react-router-redux');
const { hashHistory }          = require('react-router');
const { Map }                  = require('immutable');
const rootReducer              = require('../reducers');
const { createLogger }         = require('redux-logger');
const { createBrowserHistory } = require('history');
const { syncHistoryWithStore } = require('react-router-redux');

//------------------------------------------------------------------------------

const logger = createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: state => state.toJS()
});

const history = createBrowserHistory();

const router = routerMiddleware(history);

const enhancer = compose(
    applyMiddleware(thunk, router, logger)
)

//------------------------------------------------------------------------------

const createCustomStore = (initial_state=Map({})) => {
    const store = createStore(rootReducer, initial_state, enhancer);

    syncHistoryWithStore(history, store, {
        selectLocationState: state => state.get('routing')
    })

    return store;
}

//------------------------------------------------------------------------------

module.exports = {
    createCustomStore,
    history
}