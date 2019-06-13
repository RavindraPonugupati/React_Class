import React ,{ Component } from 'react';
class Props extends Component {
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
        <h1>Props</h1>
        <button onClick={this.changeName}>Change Name</button>
        <span>{firstName} {lastName}</span>
        <Content data={this.state}></Content>
      </div>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <div className="data">
        <h1>Child Component</h1>
        {this.props.data.firstName}
      </div>
    )
  }
}

export default Props;
