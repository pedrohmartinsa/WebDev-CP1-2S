import './styles.css'
import { Link } from "react-router-dom"
function Nav() {
    return ( 
        <header className="header">
            <nav>
                <Link to="" className='link' id='home'>Home</Link>
                <Link to="/sobre" className='link' id='sobre'>Sobre</Link>
                <Link to="/contato" className='link' id='contato'>Contato</Link>
            </nav>
        </header>
     );
}

export default Nav;