import Carousel from "./Carousel";


function CountryCarousel (){
    const items =[
        {url: "/img/Athens.jpg", country: "Athens"},
        {url: "/img/BuenosAires.jpg", country: "Buenos Aires"},
        {url: "/img/Havana.jpg", country: "Havana"},
        {url: "/img/LasVegas.jpg", country: "Las Vegas"},
        {url: "/img/Lima.jpg", country: "Lima"},
        {url: "/img/London.jpg", country: "London"},
        {url: "/img/LosAngeles.jpg", country: "Los Angeles"},
        {url: "/img/Paris.jpg", country: "Paris"},
        {url: "/img/RioDeJaneiro.jpg", country: "Rio de Janeiro"},
        {url: "/img/Rome.jpg", country: "Rome"},
        {url: "/img/Sydney.jpg", country: "Sydney"},
        {url: "/img/Tokyo.jpg", country: "Tokyo"},
]
    return (
        <>
            <h1 className='Carousel-title'>Popular MYtineraries</h1>
            <Carousel data={items} range={4} slides={3} interval={5}/>
            {/* <Carousel data={items} rangeStart={4} rangeEnd={8}/>
            <Carousel data={items} rangeStart={8} rangeEnd={12}/>  */}
        </>
    )
}


export default CountryCarousel