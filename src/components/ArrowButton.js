function ArrowButton(props){
    if(!props.img){
        throw new console.error("Coloque una imagen para la propiedad img");
    }
    if(!props.click){
        throw new console.error("Coloque una function para la propiedad click");
    }

    return(
        <button className="Arrow-button" onClick={props.click}>
            <img alt="arrow" src={props.img} className='Arrow-img'></img>
        </button>
    )
}

export default ArrowButton