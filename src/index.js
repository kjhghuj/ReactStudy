import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Clock from './clock'
// import Button from './button'
// import Table from './table'
// import Form from './form'
// import Calculator from './Calculator'
// import Slot from './slot'
// import Slots from './Slots'
import {ThemeContext, themes} from './theme';
import ThemeButton from './themeButtton'
import * as serviceWorker from './serviceWorker';

//一个使用ThemeButton的中间组件
function Toobar(props){
  return (<ThemeButton onClick={props.changeTheme}>
            Change Theme
          </ThemeButton>)
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      theme : themes.light
    }
    this.toggleTheme = () =>{
      this.setState(state => ({
        theme : state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
  }
  render(){
    return (
      <div>
        <div>
          Provider中的button：
          <ThemeContext.Provider value={this.state.theme}>
            <Toobar changeTheme={this.toggleTheme}></Toobar>
          </ThemeContext.Provider>
          
        </div>
        <div>
          不在Provider中的button：
          <ThemeContext.Provider value={this.state.theme === themes.light?themes.dark:themes.light}>
            <ThemeButton>aaaa</ThemeButton>
          </ThemeContext.Provider>
          
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App />
  ,document.getElementById('root')
)

// const Theme = React.createContext({theme:'light',aa:'aa'});
// class FirstLevel extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//       <Theme.Provider value={{theme:'dark',aa:'ss'}}>
//         <SecondLevel/>
//       </Theme.Provider>
//     )
//   }
// }
// function SecondLevel(){
//   return (
//       <div>第二级
//         <TrdLevel/>
//       </div>
//   )
// }
// class TrdLevel extends React.Component{
//   static contextType = Theme;
//   render(){
//     return (
//     <div >{this.context.aa}</div>
//     )
//   }
// }
// ReactDOM.render(
//   <FirstLevel />
//   ,document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Slots 
//       first={<Calculator/>}
//       second={<p>这里是Second内容</p>}
//     />
//     {/* </Slots> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// class Clock extends React.Component {
//   constructor(props){
//       super(props)
//       this.state = {date:new Date()}
//   }
//   render(){
//       return <h1>Time is {this.state.date.toLocaleTimeString()} </h1>
//   }
// }
// const element = (<div className='test'> {getName(user)}</div>);

// ReactDOM.render(
//   <Clock/>,
//   document.getElementById('root')
// );



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ul>
//       <Table Data={[1,2,3,4,5,6,7]} />
//     </ul>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 使用ref聚焦
// class Foo extends React.Component{
//   constructor(props){
//     super(props)
//     this.handleFocus = this.handleFocus.bind(this)
//     //创造一个 textInput DOM 元素的 ref
//     this.textInp = React.createRef();
//   }
//   handleFocus(){
//     this.textInp.focus()
//     this.textInp.className = "FancyBorder-black"
//     console.log(this.textInp)
//     console.log(this.textInp.current)
//   }
//   render(){
//     return(
//       <div>
//         <input type='text' ref={el => this.textInp = el} />
//         <button onClick={this.handleFocus}>test</button>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <Foo/>,
//   document.getElementById('root')
// )

// 对父组件暴露DOM子节点
// function Foo(props) {
//   return <div>
//             <input type="text" ref = {props.inputEle}/>
//           </div>
// }

// class Fn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handle = this.handle.bind(this);
//   }
//   render() {
//     return <div>
//     <Foo inputEle = {el => {this.eleInput = el; console.log(el)}}/>
//       <button onClick = {this.handle}>聚焦</button>
//       </div>
//   }
//   handle() {
//     this.eleInput.focus();
//   }
// }
// ReactDOM.render(
//   <Fn/>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// const name = 'gsy';
// const element = <h1>Hello {name}</h1>;
// function getName(user){
//   if(user){
//   return <h1>Hello,{user.firstName +''+user.lastName}</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
// const user = {
//   firstName:'g',
//   lastName:'syy'
// }
// 建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱
// const element = (<div className='test'> {getName(user)}</div>);
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
