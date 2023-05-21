import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import Logo from './assets/espaciokazu.png'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <div className='Logo'>
                    <img src={Logo} className='LogoEdit' alt='LogoKazu'/>
                </div>
            </Link>
            <div className='Categories'>
                <NavLink to ={`/category/Conjuntos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Conjuntos</NavLink>
                <NavLink to ={`/category/Boxers`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Boxers</NavLink>
                <NavLink to ={`/category/Saphirus`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Saphirus</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar