import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import InputDetails from './InputDetails';

export default function Details() {
  const {id} = useParams();
  const[items, setItems] = useState({})
  useEffect(()=>{
  axios.get(`http://localhost:4000/cities/${id}`)
      .then(response =>setItems(response.data.response),
      console.log(items),
      )
    }, [])
  
    console.log(id);
    // console.log(item);

  return (
  <>
  <InputDetails data={items}/>
  </>
  )
}
