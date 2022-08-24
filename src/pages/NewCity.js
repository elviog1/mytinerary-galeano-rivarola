import '../styles/NewCity.css'
export default function NewCity(){
    return(
        <div className='new-city-container'>
             <h1 className='nc-title'>New City</h1>
             <form className='nc-form'>
                <label className='nc-label' for='city'>City
                     <input className='nc-input' type='text' id='city' placeholder='Enter a new city here'></input>
                </label>
                <label className='nc-label' for='country'>Country
                     <input className='nc-input' type='text' id='country' placeholder='Enter the country here'></input>
                </label>
                <label className='nc-label' for='img'>Image
                     <input className='nc-input' type='text' id='img' placeholder='Enter the image here'></input>
                </label>
             </form>
        </div>
    )
}
