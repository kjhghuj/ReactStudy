import React from 'react'
class Form extends React.Component{
    constructor(porps){
        super(porps)
        this.state = {
            name:'',
            textarea:'',
            select:['coconut']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(type,e){
        console.log(e.target.value)
        let obj = {};
        obj[type] = e.target.value;
        this.setState(obj)
        // this.setState({type:e.target.value})
    }
    handleSubmit(e){
        alert('提交的名字是：'+this.state.name)
        alert('提交的文章是：'+this.state.textarea)
        e.preventDefault();
    }
    render(){
        return (
            <form>
                <label>名字：</label>
                <input type='text' value={this.state.value} onChange={(e)=>this.handleChange('name',e)} />
                
                <textarea value={this.state.textarea} placeholder='开始撰写文章' onChange={(e)=>this.handleChange('textarea',e)} />

                <label>
                选择你喜欢的风味:
                <select  multiple={true} value={this.state.select} onChange={(e)=>this.handleChange('select',e)}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
                </label>
                <input type='submit' value='提交' onClick={this.handleSubmit} />
            </form>
        )
    }
}
export default Form