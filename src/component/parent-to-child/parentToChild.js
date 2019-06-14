import React ,{ Component } from 'react';
import Child from '../child-for-PTC';

class ParentToChild extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName : "Tamil",
      lastName : "Mani",
      designation : "Software Engineer",
      city : "Madurai",
      pinCode : "625532"
    }
  }

  passDataToChild = () => {
    this.setState({
        childObj : {
            firstName : "Tamil",
            lastName : "Mani",
            designation : "Software Engineer",
            city : "Madurai",
            pinCode : "625532"
        }
      });
  }

  render(){
    const {firstName,lastName,designation,city,pinCode} = this.state;
    return (
      <div className="App">
        <h1>Parent To Child</h1>
        <div className="row">
            <div className="col-2"><b>firstName</b></div>
            <div className="col-2">{firstName}</div>
            <div className="col-2"><b>lastName</b></div>
            <div className="col-1">{lastName}</div>
            <div className="col-2"><b>designation</b></div>
            <div className="col-3">{designation}</div>
            <div className="col-2"><b>city</b></div>
            <div className="col-2">{city}</div>
            <div className="col-2"><b>pinCode</b></div>
            <div className="col-2">{pinCode}</div>
            <div className="col-2"><button type="button" onClick={this.passDataToChild} className="btn btn-primary">Edit</button></div>
        </div>
        {this.state.childObj && <Child data={this.state.childObj} />}
      </div>
    );
  }
}

export default ParentToChild;
