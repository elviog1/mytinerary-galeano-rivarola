function ArrowButton(props){
    if(!props.icon){
        throw new console.error("Coloque un string para la propiedad icon");
    }
    if(!props.click){
        throw new console.error("Coloque una function para la propiedad click");
    }

    return(
        <button className="Arrow-button" onClick={props.click}>
            {props.icon}
        </button>
    )
}

export default ArrowButton