import React from 'react'
const scaleNames = {
    c: '摄氏度',
    f: '华氏度'
  };
// 华氏度转换为摄氏度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// 摄氏度转换为华氏度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// 判断输入的温度是否有效，如果输入非数字返回空
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class calculator extends React.Component{
    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange(temperature){
        this.setState({scale:'c',temperature})
    }
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <Tinput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} ></Tinput>
                <Tinput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} ></Tinput>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
            
        )
    }
}
class Tinput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        // const temperature = this.props.temperature
        return (
            <fieldset>
                <legend>输入 {scaleNames[this.props.scale]}:</legend>
                <input value={this.props.temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>水可以烧开</p>;
    }
    return <p>水烧不开</p>;
}
export default calculator