import '../styles/SignIn.css'

export default function (){
    return(
        <div className='signin-container'>
        <form className="signin-form">
        <h1>Sign Up</h1>
        <label for='mail' className="signin-field">mail
                <input required type="text" className="signin-input" id="mail" placeholder="" ></input>
            </label>
            <label for='password' className="signin-field">password
                <input required type="text" className="signin-input" id="password" placeholder="" ></input>
            </label>
            <button id="send" type="submit" className="nc-boton">Sign Up</button>
        </form>
        <form className="signin-form">
        <h1>Register</h1>
            <label for='name' className="signin-field">name
                <input required type="text" className="signin-input" id="name" placeholder="" ></input>
            </label>
            <label for='mail' className="signin-field">mail
                <input required type="text" className="signin-input" id="mail" placeholder="" ></input>
            </label>
            <label for='password' className="signin-field">password
                <input required type="text" className="signin-input" id="password" placeholder="" ></input>
            </label>
            <label for='photo' className="signin-field">photo
                <input required type="text" className="signin-input" id="photo" placeholder="" ></input>
            </label>
            <label for='country' className="signin-field">country
                <input required type="text" className="signin-input" id="country" placeholder="" ></input>
            </label>
            <button id="send" type="submit" className="nc-boton">Register</button>
        </form>
        </div>
    )
}