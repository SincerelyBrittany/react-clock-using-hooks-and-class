import React, {useState, useEffect} from 'react'

export default function Clock(props) {

  const [date, setDate] = useState(new Date())

  //use effect is a method that takes a function that will run every time we update state props 
    useEffect(()=>{
      const interval = setInterval(() => {
        setDate(new Date())
      })
      return () => {
        clearInterval(interval)
      }
    })

      const handleDelete = (e) => {
        props.handleTheDelete(props.id)
      }


      return(
        <div>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
          <button onClick={handleDelete}> X </button>
        </div>
      )

}