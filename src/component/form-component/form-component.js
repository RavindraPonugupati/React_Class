import React ,{ Component } from 'react';
class FormComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
          inputValue: 'Ravindra',
          textareaValue : '',
          selectValue : '',
          isGoing : '',
          numberOfGuests : 1
      };
  
    }
  
    handleChange = (event,key) => {
      this.setState({[key]: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A name was submitted: ' + JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" value={this.state.inputValue} onChange={(e) => this.handleChange(e,'inputValue')} />
            </div>
            <div className="form-group">
                <label>Essay:</label>
                <textarea className="form-control" value={this.state.textareaValue} onChange={(e) => this.handleChange(e,'textareaValue')} />
            </div> 
            <div className="form-group">
                <label>Pick your favorite flavor:</label>
                <select className="form-control" value={this.state.selectValue} onChange={(e) => this.handleChange(e,'selectValue')}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </div>
            <div className="form-group">
                <label>Is going:</label>
                <input className="form-control" name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={(e) => this.handleChange(e,'isGoing')} />
            </div>
            <div className="form-group">
                <label>Number of guests:</label>
                <input className="form-control" name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={(e) => this.handleChange(e,'numberOfGuests')} />
            </div>   
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }
  }

  export default FormComponent;