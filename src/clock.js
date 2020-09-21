import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }
    render(){
        return <h1>Time is {this.state.date.toLocaleTimeString()} </h1>
    }
    componentDidMount(){//挂载dom
        this.timeID = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){//将要卸载dom
        clearInterval(this.timeID);
    }
    tick(){
        this.setState({date:new Date()})
    }
}

export default Clock;