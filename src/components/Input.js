import '../styles/NewCity.css'
import {Link as LinkRouter} from 'react-router-dom'

function Input(props){
    const allInput = props.data


    const FormItem =(item) =>(
                <label className='nc-label' htmlFor={item.value}>{item.value}
                     <input className='nc-input' type='text' id={item.value} placeholder='Enter a new value here'></input>
                </label>
    )

    return(
        <>
           {allInput.map(FormItem)}
        </>
    )
}

export default Input