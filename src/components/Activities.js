import { useByitineraryQuery } from '../features/activitiesApi'
import '../styles/Activity.css'

function Activity(props){
    console.log(props)
    let itineraryId = props.itinerary

    let {
        data: activities
    }=useByitineraryQuery(itineraryId)
    

    const cardActivity = (item) =>(
                <div className="act-card" key={item.name}>
                    <img src={item.photo} alt={item.name} className="act-img" />
                    <p className="act-name">{item.name}</p>
                </div>
    )

    return(
        <div className='activity'>
            <h2 className='activity-title'>Activities</h2>
            <div className='activity-container'>
                {activities?.response?.map(cardActivity)}
            </div>
        </div>
        
    )
}

export default Activity

