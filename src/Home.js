import React from "react";
import Header from "./Header";
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(<>
           <Header />
            <h1>Home Component</h1>
        </>)
    }
}
export default Home;
