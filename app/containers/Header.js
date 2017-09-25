const React                  = require('react');
const { Component }          = require('react');
const { bindActionCreators } = require('redux');
const { connect }            = require('react-redux');
const { selectExample }      = require('../selectors/example');
const { exampleAction }      = require('../actions/examples');

//------------------------------------------------------------------------------

class Header extends Component {
    render()
    {
        return (
            <div>
                <button onClick={() => this.props.actions.exampleAction(this.input.value)} >fire example action</button>
                <input ref={(input) => this.input = input} />
                { this.props.example }
            </div>
        )
    }
}

//------------------------------------------------------------------------------

Header = connect((state) => {
    return {
        example: selectExample(state)
    }
}, (dispatch) => {
    return { actions: bindActionCreators({ exampleAction }, dispatch) }
})(Header);

//------------------------------------------------------------------------------

module.exports = Header