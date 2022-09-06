import axios from 'axios'
import { useEffect, useState } from 'react'
import Input from '../components/Input'
import EditInput from '../components/InputEdit'
import '../styles/NewCity.css'
import '../styles/EditCity.css'
import api_url from '../api'

export default function EditCity(){

const[items, setItems] = useState([])
useEffect(()=>{
axios.get(api_url+'/cities/')
    .then(response => setItems(response.data.response))
}, [])
const values = [
    {value: 'City'},
    {value: 'Country'},
    {value: 'Image'},  
    {value: 'Population'},  
    {value: 'Fundation'},  
   ]

    return (
        <div className='new-city-container'>
        <form className='nc-form'>
        <label for='select-city' className='select-title'>Select City</label>
        <select id='select-city' className='nc-input'>
           <EditInput data={items}/>
        </select> 
           <Input data={values} />
        </form>
        </div>
)
}
