const EXAMPLE_ACTION = "EXAMPLE_ACTION";
function exampleAction(value)
{
    return {
        type: EXAMPLE_ACTION,
        value
    }
}

//------------------------------------------------------------------------------

function exampleThunkAction()
{
    return function(dispatch, getState)
    {
        console.log('example thunk action');
    }
}

//------------------------------------------------------------------------------

module.exports = {
    EXAMPLE_ACTION,
    exampleAction,
    exampleThunkAction
}