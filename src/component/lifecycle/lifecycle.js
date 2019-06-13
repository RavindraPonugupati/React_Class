import React, { Component } from 'react';

class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "RAVINDRA"
        }
        console.log("inital name is "+this.state.name);
    }
    componentWillMount() {
        this.setState({
            name : "Mani Tamilarasan"
        });
        console.log('Component WILL MOUNT!----FIRST');
    }
    componentDidMount() {
        console.log('Component DID MOUNT!----SECOND')
    }
    componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('Component WILL shouldComponentUpdate!')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    changeName = () => {
        this.setState({
            name : "RAVINDRA"
        });
    }
    render(){
        return(
            <div className="container">
                <h1>Lifecycle</h1>
                <h1>Hi {this.state.name} welcome to React</h1>
                <button onClick={this.changeName}>Change Name</button>
                <Content data={this.state}></Content>
            </div>
        )
    }
}



class Content extends Component{
    componentWillReceiveProps(newProps) {    
        console.log('Child Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('Child Component WILL shouldComponentUpdate!')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Child Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Child Component DID UPDATE!')
    }
    render(){
        return(
        <div className="data">
            <h1>Child Component</h1>
            {this.props.data.name}
        </div>
        )
    }
}

export default Lifecycle;