import React from 'react'
import {Link, Route, Redirect, Switch} from 'react-router-dom';


import About from './About';
import Repos from './Repos';

export default class App extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                    <li><Link to="/other">To Other Page.</Link></li>
                    <li><Link target="_blank" to="/other">Other With New Window</Link></li>
                    <li><Link to="/redirect">Test Redirect</Link></li>
                </ul>

                <hr />
                <div>This is App Content.</div>

                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/repos" component={Repos} />
                    <Route component={() => <h1>NO no no no no match...</h1>} />
                </Switch>
 

            </div>
        )
    }
}


