import { useState } from 'react'
import '../styles/NewCity.css'


function Input(props){
    const allInput = props.data

    const FormItem =(item, setItem) =>(

                <label className='nc-label' htmlFor={item.value}>{item.value}
                     <input req className='nc-input' required type='text' name={item.value}id={item.value} placeholder='Enter a new value here'></input>
                </label>
    )

    

    const accion = () =>{
        const postURL = "http://localhost:4000/cities/"
        fetch(postURL)
    }
    return(
        <>
           {allInput.map(FormItem)}
           <button onClick={accion} id="enviar" type="submit" className="nc-boton">Add city</button>
        </>
    )
}

export default Input