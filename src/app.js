import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/LogIn'
class App extends Component {

    render() {
        return (
            <div className="padding20 bg-gray4 col-xs-12 ">
                <div className="bg-white col-xs-12 padding20">
                    <div className="col-xs-offset-3 col-xs-6">
                        <LogIn />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))