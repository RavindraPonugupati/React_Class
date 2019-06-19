import React ,{ Component } from 'react';
import Table from '../table-component/table';
class State extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName : "Tamil",
      lastName : "Mani",
      header : ["First Name","Last Name","Address","City","Pincode"],
      body : [{
          firstName : "tamil",
          lastName : "mani",
          Address : "Madurai",
          City : "Usilampatti",
          pincode : "625532"
      },{
        firstName : "tamil",
        lastName : "mani",
        Address : "Madurai",
        City : "Usilampatti",
        pincode : "625532"
      },{
        firstName : "tamil",
        lastName : "mani",
        Address : "Madurai",
        City : "Usilampatti",
        pincode : "625532"
      },{
      firstName : "tamil",
      lastName : "mani",
      Address : "Madurai",
      City : "Usilampatti",
      pincode : "625532"
      }]
    }
  }
  changeName = () => {
    this.setState({
      firstName : "Mani",
      lastName : "Tamilarasan"
    });
  }
  render(){
    const {firstName , lastName} = this.state;
    return (
      <div className="App">
        <h1>State</h1>
        <button onClick={this.changeName}>Change Name</button>
        <span>{firstName} {lastName}</span>
        <Table header={this.state.header} body={this.state.body}/>
      </div>
    );
  }
}

export default State;
