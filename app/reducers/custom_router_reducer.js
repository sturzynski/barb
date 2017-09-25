const Immutable           = require('immutable');
const { LOCATION_CHANGE } = require('react-router-redux');

//------------------------------------------------------------------------------

const initialState = Immutable.fromJS({
    locationBeforeTransitions: null
});

module.exports = (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        });
    }

    return state;
};