import React ,{ Component } from 'react';
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
        name : "RAVINDRA"
    }
  }
  
  render(){
    return (
      <div className="App">
        <h1>Hi {this.state.name} welcome to React</h1>
      </div>
    );
  }
}
export default Home;
