import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import InputDetails from './InputDetails';

export default function Details() {
  const {id} = useParams();
  const[items, setItems] = useState({})
  useEffect(()=>{
  axios.get(`http://localhost:4000/cities/${id}`)
      .then(response =>setItems(response.data.response))
    }, [])
  
    
    // console.log(items);

  return (
  <>
    <InputDetails data={items}/>
  </>
  )
}
