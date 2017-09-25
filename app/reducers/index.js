const { combineReducers } = require('redux-immutable');
const routing             = require('./custom_router_reducer');
const example             = require('./example_reducer');

//------------------------------------------------------------------------------

module.exports = combineReducers({
    routing,
    example
})