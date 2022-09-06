import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import InputDetails from './InputDetails';
import api_url from '../api';

export default function Details() {
  const {id} = useParams();
  const[items, setItems] = useState({})
  useEffect(()=>{
  axios.get(api_url+`/cities/${id}`)
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
