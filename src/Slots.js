import React from 'react'
function SplitPane(props){
    return (
        <div className='SP'>
            {props.first}
            <div>{props.second}</div>
        </div>
    );
}
export default SplitPane