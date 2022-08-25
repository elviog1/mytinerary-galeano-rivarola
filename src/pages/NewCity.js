import '../styles/NewCity.css'
import Input from '../components/Input'

export default function NewCity(){
    const items = [
     {value: 'City'},
     {value: 'Country'},
     {value: 'Image'},  
    ]
    
    
     return(
        <div className='new-city-container'>
             <h1 className='nc-title'>New City</h1>
             <form className='nc-form'>
             <Input data={items} />
                <button id="enviar" type="button" className="nc-boton">Add city</button>
             </form>
        </div>
    )
}
