import React, {Component} from "react";
import "./styles.css";
// import Clock from './Clock'
import Clock from './ClockHooks'

export default class App extends Component{

  constructor(props){
    super(props)
    console.log("Constructor")
    this.state = {
      clockIds: [1]
    }
    //this.state = {someNumber: 5 }
  }

  handleTheDelete(id){
    const newIds = this.state.clockIds.filter(i => i !== id)
    this.setState({clockIds: newIds})

  }
  
  renderClocks(){
    return this.state.clockIds.map(i => {
      return <Clock id={i} handleTheDelete={this.handleTheDelete.bind(this)} key={i}/>
    })
  }


// 
  //ComponentDidMount id called right after it is done mounting & after render

  // componentDidMount(){
  //   console.log("didMount")
  //   this.setState(prevState => {
  //       return {
  //         someNumber:prevState.someNumber + 1
  //       }
  //   })
  // }

  // // componentDidUpdate(){
  // //   console.log("didUpdate")
    
  // // }

  // componentDidUpdate(prevProps, prevState, state){
  //   console.log("didUpdate")
  // //   this.setState(prevState => {
  // //     return {
  // //       someNumber:prevState.someNumber + 1
  // //     }
  // // })
  // }

  render() {
    console.log("render")
  return (
      <div className="App">
        <h1>The time is: </h1>
        {this.renderClocks()}
          {/* <Clock /> */}
        {/* <h2>{this.state.someNumber}</h2> */}
      </div>
    );
  }
}
