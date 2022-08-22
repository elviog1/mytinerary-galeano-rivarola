function ArrowButton(props){
    if(!props.icon){
        throw new console.error("Coloque un string para la propiedad icon");
    }
    if(!props.click){
        throw new console.error("Coloque una function para la propiedad click");
    }

    return(
        <button className="Arrow-button" onClick={props.click}>
            <img src={props.img} className='Arrow-img'></img>
        </button>
    )
}

export default ArrowButton