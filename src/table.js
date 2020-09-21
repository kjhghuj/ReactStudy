import React from 'react';
class Table extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let list = this.props.Data.map(item=><li key={item.toString()}>{item}</li>)
        return (
            <>
            {list}
            </>
        )
           
        
    }
}
export default Table