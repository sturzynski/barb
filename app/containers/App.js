const React         = require('react');
const { Component } = require('react');
const Header        = require('./Header');

//------------------------------------------------------------------------------

class App extends Component {
    render()
    {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

//------------------------------------------------------------------------------

module.exports = App;