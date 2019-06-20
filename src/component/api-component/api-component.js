import React ,{ Component } from 'react';
import Table from '../table-component/table';
class ApiComponent extends Component {
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
    componentWillMount() {
        
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                console.log(JSON.stringify(myJson));
                this.setState({
                    header : myJson.length && Object.keys(myJson[0]) || [],
                    body : myJson
                })
            });

    }
    render() {
      return (<div>
          <h1>API Component</h1>
          <div className="row api-component">
              <Table header={this.state.header} body={this.state.body} />
          </div>
        </div>)
    }
}

export default ApiComponent;