const { EXAMPLE_ACTION } = require('../actions/examples');
const { Map }            = require('immutable');

//------------------------------------------------------------------------------

const initial_state = null;

module.exports = (state=initial_state, action) => {
    switch(action.type)
    {
        case EXAMPLE_ACTION:
            return action.value;
        default:
            return state;
    }
}