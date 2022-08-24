import CardCity from "../components/CardCity"


export default function Cities(){
    const items =[
        {url: "/img/Athens.jpg", city: "Athens", country:'Greece'},
        {url: "/img/BuenosAires.jpg", city: "Buenos Aires", country:'Argentina'},
        {url: "/img/Havana.jpg", city: "Havana", country:'Cuba'},
        {url: "/img/LasVegas.jpg", city: "Las Vegas", country:'United States Of America'},
        {url: "/img/Lima.jpg", city: "Lima", country:'Peru'},
        {url: "/img/London.jpg", city: "London", country:'England'},
        {url: "/img/LosAngeles.jpg", city: "Los Angeles", country:'United States Of America'},
        {url: "/img/Paris.jpg", city: "Paris", country:'France'},
        {url: "/img/RioDeJaneiro.jpg", city: "Rio de Janeiro", country:'Brazil'},
        {url: "/img/Rome.jpg", city: "Rome", country:'Italy'},
        {url: "/img/Sydney.jpg", city: "Sydney", country:'Australia'},
        {url: "/img/Tokyo.jpg", city: "Tokyo", country:'Japan'},
]


    return(

            <div className="card-containter">
               <CardCity data={items} />
            </div>

    )
}