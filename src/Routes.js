import React, {Component} from 'react';
import Home from './component/home/home';
import State from './component/state/state';
import Props from './component/props/props';
import Lifecycle from './component/lifecycle/lifecycle';
import ParentToChild from './component/parent-to-child/parentToChild';
import ChildToParent from './component/child-to-parent/childToParent';
import StateFullContainer from './component/state-full-component/state-full-component';
import ReusableComponent from './component/reusable-component/reusable-component';
import ApiComponent from './component/api-component/api-component';

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
                            <li><Link to="/parentToChild">Parent To Child</Link></li>
                            <li><Link to="/childToParent">Child To Parent</Link></li>
                            <li><Link to="/components">Component Types</Link></li>
                            <li><Link to="/reusable">Reusable Component</Link></li>
                            <li><Link to="/api">Api Component</Link></li>
                        </ul>
                    </nav>
                    <article>
                        <Route path="/" exact component={Home} />
                        <Route path="/state" component={State} />
                        <Route path="/props" component={Props} />
                        <Route path="/lifecycle" component={Lifecycle} />
                        <Route path="/parentToChild" component={ParentToChild} />
                        <Route path="/childToParent" component={ChildToParent} />
                        <Route path="/components" component={StateFullContainer} />
                        <Route path="/reusable" component={ReusableComponent} />
                        <Route path="/api" component={ApiComponent} />
                    </article>
                </Router>
            </div>

        );
    }
}

export default RouteComponent;