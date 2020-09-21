import {ThemeContext} from './theme';
import React from 'react';
class ThemeButton extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const props = this.props;
        const theme = this.context;
        return <button {...props} style={{background:theme.background}}></button>
    }
}
ThemeButton.contextType = ThemeContext;
export default ThemeButton;