import React ,{ Component } from 'react';
import Child from '../child-for-CTP';
class ChildToParent extends Component {
  constructor(props){
    super(props)
    this.state = {
        childObj : {
            firstName : "Tamil",
            lastName : "Mani",
            designation : "Software Engineer",
            city : "Madurai",
            pinCode : "625532"
        }
    }
  }
  
  childToParentData = (obj) => {
    this.setState({
        childObj : obj
    });
  }

  render(){
    const {firstName,lastName,designation,city,pinCode} = this.state.childObj;
    return (
      <div className="App">
        <h1>Child To Parent</h1>
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
        </div>
        <Child data={this.state.childObj} passData={this.childToParentData} />
      </div>
    );
  }
}

export default ChildToParent;
