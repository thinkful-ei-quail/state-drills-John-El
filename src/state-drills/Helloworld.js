import React,{Component} from 'react';




class HelloWorld extends React.Component{
    state ={
    who:"User"
    };

render(){
    return(
    <div>
        <p>Hello {this.state.who}!</p>
        <button onClick={() =>{this.setState({who:'World'})}}>World</button>
        <button onClick={() =>{this.setState({who:'Friend'})}}>Friend</button>
        <button onClick={() =>{this.setState({who:'React'})}}>React</button>
    </div>)
}
}


export default HelloWorld;
