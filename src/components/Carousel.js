import '../styles/Carousel.css'
import { useEffect,useState } from 'react'
import ArrowButton from './ArrowButton'
import { Link as LinkRouter } from 'react-router-dom'



function Carousel(props) {

    const range = props.range
    const limitSlides = props.slides * range
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(start + range)
    const [intervalId,setIntervalId] = useState()
    const interval = props.interval * 1000
    const items = props.data 

    useEffect(() => {
      let id = setInterval(function () {
        next()
      },interval)
      setIntervalId(id)
      return () => clearInterval(intervalId);
    },[start])

    const itemCarousel = (item) =>( 
              <LinkRouter key={item.name} to={'/cities/' + item._id}>
                <div className='Carousel-card'>
                    <img src={item.image} alt={item.name} className='Carousel-img'/>
                    <p className='Carousel-text'>{item.country}</p>
                </div>
              </LinkRouter>
    )


      function prev (){
        if (start >= range){
          setStart(start-range)
          setEnd(end-range)
        }else{
          setStart(limitSlides - range)
          setEnd(limitSlides)
        }
      }


      function next (){
        if(start<limitSlides-range){
          setStart(start+range)
          setEnd(end+range)
        }else{
          setStart(0)
          setEnd(range)
        }
      }

  return (
        <>
            <div className='Carousel-slide'>
              <ArrowButton click={prev} img={'/img/flechaIzq.png'}/>
                {// con slice le decimos q queremos cortar un array a partir de "start" hasta "end"
                items.slice(start,end).map(itemCarousel)  // map imprime lo q hay en el array del slice
                } 
              <ArrowButton click={next} img={'/img/flechaDer.png'}/>
             </div>
        </>
  )
}

export default  Carousel