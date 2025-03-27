import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0, isDis:false }
    }

    incrementData() {
        if (this.state.counter >= 5) {
            this.setState({ msg: "sorry >5", isDis :true })
    
        }else{
            this.setState({counter:this.state.counter + 1, msg: ''})
    
        }
    }

    decrementData() {
        if (this.state.counter <= 0) {
            this.setState({ msg: "sorry < 0",isDis:false })
            
        }else{
            this.setState({counter:this.state.counter - 1, msg: ''})
        }
    }
    autoincData(){
        setInterval(() => this.state.counter +1,2000)
    }
    autodcData(){
        setInterval(() => this.state.counter -1,2000)
    }

    render() {
        return (<>
            <h1>Counter</h1>
            value is {this.state.counter}
            <br />
            <input type="button" value="+" onClick={this.incrementData.bind(this)} disabled={this.state.isDis} />
            <input type="button" value="-" onClick={this.decrementData.bind(this)}disabled={this.state.isDis} />
            <input type="button" value="X" onClick={()=>this.setState({counter:0})}/>
            <p style={{color: 'red'}}>{this.state.msg}</p>
        </>)
    }

}
export default Counter;