import React ,{ Component } from 'react';
class State extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName : "Tamil",
      lastName : "Mani"
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
      </div>
    );
  }
}

export default State;
