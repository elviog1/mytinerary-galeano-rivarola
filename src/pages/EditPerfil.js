import axios from "axios"
import Input from "../components/Input"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Link } from "react-router-dom"
function EditPerfil(){
    const values = [
        {value:"Name", placeholder:"Enter a new "},
        {value:"Country", placeholder:"Enter a new "},
        {value:"Photo", placeholder:"Enter a new "},
    ]
    const id = JSON.parse(localStorage.getItem('user')).id
    console.log(id)
    
    const accion = (e)=>{
        e.preventDefault()
        let inputname = document.getElementById("Name").value 
        let inputcountry = document.getElementById("Country").value 
        let inputphoto = document.getElementById("Photo").value 

        axios.put(`https://my-tinerary-dreamjuan-back.herokuapp.com/auth/${id}`,{
            name:inputname,
            country: inputcountry,
            photo:inputphoto
        })
        .then(function(response){
            console.log(response)
            Toastify({
                text:"Perfil updated succesfully !",
                destination:"https://my-tinerary-dreamjuan-back.herokuapp.com/perfil"
            }).showToast()
        })
        .catch(function(error){
            console.log(error)
            if (error.response.data.message === "name to short") {
                Toastify({
                    text:"Your name is too short, please try again(minimum 4 characters)"
                }).showToast()
            }else{
                Toastify({
                    text:"Invalid request please try again"
                }).showToast()
            }
        })
    }

    return(
        <div className='new-city-container'>
            <h1 className='nc-title'>Edit Perfil</h1>
            <form className='nc-form'>
                <Input data={values} />
                    <button onClick={accion} id="send" type="submit" className="nc-boton">OK</button>
            </form>
        </div>
    )
}

export default EditPerfil