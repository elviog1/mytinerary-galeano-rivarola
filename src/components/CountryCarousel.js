import Carousel from "./Carousel";

function CountryCarousel (){
    const items =[
        {url: "./logo.192", country: "Athens"},
        {url: "/logo.192", country: "Buenos Aires"},
        {url: "/logo.192", country: "Havana"},
        {url: "/logo.192", country: "Las Vegas"},
        {url: "", country: "Lima"},
        {url: "", country: "London"},
        {url: "", country: "Los Angeles"},
        {url: "", country: "Paris"},
        {url: "", country: "Rio de Janeiro"},
        {url: "", country: "Rome"},
        {url: "", country: "Sydney"},
        {url: "", country: "Tokyo"},
]
    return (
        <>
            <Carousel data={items} rangeStart={0} rangeEnd={4}/>
            {/* <Carousel data={items} rangeStart={4} rangeEnd={8}/>
            <Carousel data={items} rangeStart={8} rangeEnd={12}/> */}
        </>
    )
}


export default CountryCarousel