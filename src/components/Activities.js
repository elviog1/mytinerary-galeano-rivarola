import '../styles/Activity.css'
function Activity(props){
    const allCard = props.data

    const cardActivity = (item) =>(
                <div className="act-card">
                    <h2 className="act-photo">{item.photo}</h2>
                    <p className="act-name">{item.name}</p>
                </div>
    )

    return(
        <div className='activity'>
            <h2 className='activity-title'>Activities</h2>
            <div className='activity-container'>
                {allCard.map(cardActivity)}
            </div>
        </div>
        
    )
}

export default Activity

