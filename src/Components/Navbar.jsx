import { Link } from "react-router-dom";
import '../Styles/nav.css'
import logo from '../assets/logo.png'
import PropTypes from 'prop-types'

function NavBar ({ onClick }) {
    return (
        <div className="navBar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="right">
                <Link to={'/'}>Home</Link>
                <Link to={'/store'}>Store</Link>
                <Cart onClick={onClick} />
            </div>
        </div>
    )
}

function Cart ({ onClick }) {
    return (
        <button onClick={onClick} >
        </button>
    )
}

NavBar.propTypes = {
    onClick: PropTypes.func
}

Cart.propTypes = {
    onClick: PropTypes.func,
    list: PropTypes.array
}

export { NavBar, Cart }