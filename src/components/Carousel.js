import '../styles/Carousel.css'
import React from 'react'

function Carousel(props) {

  //  const range = props.range // cuantas imagenes queremos imprimir  
    //const start = 0
   // const end = start + range 
    const items = props.data //props hace referencia al valor de los atributos del componente
    // DATA es el atributo, PROPS el valor, ITEMS se lo utiliza pra un []

    const rangeStart = props.rangeStart
    const rangeEnd = props.rangeEnd



    const itemCarousel = (item) =>( 
                <div className='Carousel-card'>
                    <img src={item.url} alt={item.country} className='Carousel-img'/>
                    <p className='Carousel-text'>{item.country}</p>
                </div>
    )
  return (
        <>
            <div className='Carousel-slide'>
                {// con slice le decimos q queremos cortar un array a partir de "start" hasta "end"
                items.slice(rangeStart,rangeEnd).map(itemCarousel)  // map imprime lo q hay en el array del slice
                } 
             </div>
        </>
  )
}

export default  Carousel