import CardCity from "../components/CardCity"


export default function Cities(){
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


    return(

            <div>
               <CardCity data={items} />
            </div>

    )
}