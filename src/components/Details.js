import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function Details() {
  const id = useParams()
  const[items, setItems] = useState({})
  useEffect(()=>{
  axios.get("http://localhost:4000/cities/" + id)
      .then(response => console.log(response)/*setItems(response.data),*/
      // console.log(items),
      )
    }, [])
  
    console.log(id);
    // console.log(item);

  return (
    <div>
        <h1>hoalassssssssssdl</h1>
    </div>
  )
}
