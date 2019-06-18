import React ,{ Component } from 'react';
import Users from '../state-less-component/state-less-component';
class StateFullContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ["sadfsd","sadfasdf","Sadfasdfasdf","asdfasdf"],
            data : "welcome to Statefull component"
        }
    }
    
    componentWillMount(){
        
    }

    render() {
      return (<div>
          <div className="row">
            <h5>Statefull / Container / Class</h5>
          </div>
          <div className="row">
            <h2>{this.state.data}</h2>
          </div>
          <Users users={this.state.users} />
        </div>)
    }
}

export default StateFullContainer;