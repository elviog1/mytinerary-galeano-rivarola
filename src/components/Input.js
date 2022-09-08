
import '../styles/NewCity.css'


function Input(props){
    const allInput = props.data

    const FormItem =(item) =>(
                <label key={item.value} className='nc-label' for={item.value}>{item.value}
                     <input req className='nc-input' required type='text' name={item.value}id={item.value} placeholder= {item.placeholder +item.value} ></input>
                </label>
    )

    return(
        <>
           {allInput.map(FormItem)}
           
        </>
    )
}

export default Input