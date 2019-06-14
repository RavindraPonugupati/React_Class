import React ,{ Component } from 'react';
class Child extends Component {
  constructor(props){
    super(props)
    this.state = {
        obj : props.data
    }
    console.log(props)
  }
  componentWillMount(){
    this.setState({
        obj : {
            firstName : "Ravindra",
            lastName : "Ponugupati",
            designation : "Software Engineer",
            city : "Ongole",
            pinCode : "523001"
        }
    })
  }
  render(){
    const {firstName,lastName,designation,city,pinCode} = this.state.obj;
    return (
      <div className="App">
        <h1>Child Component</h1>
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
            <div className="col-2"><button type="button" onClick={() => this.props.passData(this.state.obj)} className="btn btn-primary">Edit</button></div>
        </div>

      </div>
    );
  }
}

export default Child;
