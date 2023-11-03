//Imports
import './navbar.style.css';

//Components
import ChangeIdiom from '../ChangeIdiom/ChangeIdiom';

const Navbar = () => {
    return(
        <nav id="navbar">
            <ul className='navbar-container'>
                <li className='navbar-item' > <a className='navbar-link texts-nav' href='#'> Quem Somos </a> </li>
                <li className='navbar-item' > <a className='navbar-link texts-nav' href='#'> Materias </a> </li>
                <li className='navbar-item' > <a className='navbar-link texts-nav' href='#'> Nossos Projetos </a> </li>
                <li className='navbar-item' > <a className='navbar-link texts-nav' href='#'> Contato </a> </li>
            </ul>
            <ChangeIdiom />
        </nav>
    );
};

export default Navbar;