import React, {useState, useEffect} from 'react'

export default function Clock(props) {

  const [date, setDate] = useState(new Date())

  //use effect is a method that takes a function that will run every time we update state props 
    useEffect(()=>{
      console.log("in useEffect")
      const interval = setInterval(() => {
        setDate(new Date())
      })
      return () => {
        clearInterval(interval)
      }
    }, [])
    //pass into the use Effect an empty array that will make it so that you only call useEfft on mounting
    //the [] acts like the component Unmount
      const handleDelete = (e) => {
        props.handleTheDelete(props.id)
      }


      return(
        <div>
          <h1>{date.toLocaleTimeString()}</h1>
          <button onClick={handleDelete}> X </button>
        </div>
      )

}