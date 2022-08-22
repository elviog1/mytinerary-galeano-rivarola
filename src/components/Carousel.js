import '../styles/Carousel.css'
import { useEffect,useState } from 'react'
import ArrowButton from './ArrowButton'


function Carousel(props) {

    const range = props.range // cuantas imagenes queremos imprimir  
    const limitSlides = props.slides * range
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(start + range)
    const [intervalId,setIntervalId] = useState()
    const interval = props.interval * 1000
    const items = props.data //props hace referencia al valor de los atributos del componente
    // DATA es el atributo, PROPS el valor, ITEMS se lo utiliza pra un []

    // const rangeStart = props.rangeStart
    // const rangeEnd = props.rangeEnd

    useEffect(() => {
      let id = setInterval(function () {
        next()
      },interval)
      setIntervalId(id)
      return () => clearInterval(intervalId);
    },[start])

    const itemCarousel = (item) =>( 
                <div className='Carousel-card'>
                    <img src={item.url} alt={item.country} className='Carousel-img'/>
                    <p className='Carousel-text'>{item.country}</p>
                </div>
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
              <ArrowButton icon={"<"} click={prev} />
                {// con slice le decimos q queremos cortar un array a partir de "start" hasta "end"
                items.slice(start,end).map(itemCarousel)  // map imprime lo q hay en el array del slice
                } 
              <ArrowButton icon={">"} click={next} />
             </div>
        </>
  )
}

export default  Carousel