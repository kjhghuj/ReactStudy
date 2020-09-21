import React from 'react'
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClcik = this.handleClcik.bind(this);
    }
    handleClcik(){
        // this.setState(state=>({
        //     isToggleOn:!state.isToggleOn
        // }))
        this.setState({
            isToggleOn:!this.state.isToggleOn
        })
    }
    render(){
        return <button onClick={this.handleClcik}>{this.state.isToggleOn?"NO":"OFF"}</button>
    }
}
export default Toggle