function Activity(props){
    const allCard = props.data

    const cardActivity = (item) =>{
        <div className="act-card">
            <h2>{item.photo}</h2>
            <p>{item.name}</p>
        </div>
    }

    return(
        <>
        {allCard.map(cardActivity)}
    </>
    )
}

