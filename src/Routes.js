import React, {Component} from 'react';
import Home from './component/home/home';
import State from './component/state/state';
import Props from './component/props/props';
import Lifecycle from './component/lifecycle/lifecycle';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class RouteComponent extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <nav>
                        <ul>
                            <li><Link to="/state">State Component</Link></li>
                            <li><Link to="/props">Props Component</Link></li>
                            <li><Link to="/lifecycle">Lifecycle Component</Link></li>
                        </ul>
                    </nav>
                    <article>
                        <Route path="/" exact component={Home} />
                        <Route path="/state" component={State} />
                        <Route path="/props" component={Props} />
                        <Route path="/lifecycle" component={Lifecycle} />
                    </article>
                </Router>
            </div>

        );
    }
}

export default RouteComponent;