import React, {Component} from 'react'


//clock is always changing so the time should be saved in the state 
export default class Clock extends Component{

    constructor(props){
      super(props)
      this.state = { date: new Date()}
    }

    componentDidMount(){
      this.interval = setInterval(() => {
        this.setState({date: new Date()})
      }, 1000)
    }

    handleDelete(e){
      this.props.handleTheDelete(this.props.id)
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }

    render(){
      return(
        <div>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
          <button onClick={this.handleDelete.bind(this)}> X </button>
        </div>
      )
    }
}