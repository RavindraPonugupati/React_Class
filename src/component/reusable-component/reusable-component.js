import React ,{ Component } from 'react';
import Table from '../table-component/table';
class ReusableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : ["S.no", "Name", "Job", "Role"],
            body : [{
                index: 1,
                name: "Charlie",
                job: "Janitor",
                role: "manager"
            }, {
                index: 2,
                name: "Mac",
                job: "Bouncer",
                role: "senior manager"
            }, {
                index: 3,
                name: "Dee",
                job: "Aspiring actress",
                role: "manager"
            }, {
                index: 4,
                name: "Dennis",
                job: "Bartender",
                role: "manager"
            }]
        }
    }

    render() {
      return (<div>
          <h1>Table Component</h1>
          <Table header={this.state.header} body={this.state.body} />
        </div>)
    }
}

export default ReusableComponent;