//Imports
import './navbar.style.css';
import { Link, useLocation } from 'react-router-dom';

//Components
import ChangeIdiom from '../ChangeIdiom/ChangeIdiom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleLinkClick = (e) => {
        e.preventDefault();
        let element = e.target.getAttribute('href');
        let toSection = document.querySelector(element).offsetTop;
    
        window.scroll({
            top: toSection,
            behavior: "smooth",
        });
    };

    const MenusList = [
        { title: 'Quem Somos', link: '#about' },
        { title: 'Materiais', link: '#products' },
        { title: 'Nossos Projetos', link: '#projects' },
        { title: 'Contato', link: '#contact' },
    ];

    function createMenuList({title, link, key}) {
        return( 
            isHome ? (
                <li key={key} className='navbar-item' > <a className='navbar-link texts-nav' href={link} onClick={handleLinkClick} > {title} </a> </li>
            ) : (
                <li key={key} className='navbar-item' > <Link className='navbar-link texts-nav' to={'/'} > {title} </Link> </li>   
            )
        );
    };

    function renderMenuList() {
        return MenusList.map((menu, index) =>
        createMenuList({ ...menu, key: index })
    );
    }
    
    return(
        <nav id="navbar">
            <ul className='navbar-container'>
                { !isHome && (
                    <li className='navbar-item' > <Link className='navbar-link texts-nav' to={'/'} > Home </Link> </li>   
                )}
                { renderMenuList() }
            </ul>
            <ChangeIdiom />
        </nav>
    );
};

export default Navbar;