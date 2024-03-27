import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
        </nav>
    )
}