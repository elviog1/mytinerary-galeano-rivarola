import {Link as LinkRouter} from 'react-router-dom'

const pages = [
    {name: 'Home', to:'/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New City', to:'/newcity'},
]

const link = (page) => <LinkRouter to={page.to}>{page.name}</LinkRouter>

function Header() {
    return (
        <div>
             {pages.map(link)}
        </div>
    )
}

export default Header