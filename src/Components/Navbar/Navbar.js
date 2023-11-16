//Imports
import './navbar.style.css';

//Components
import ChangeIdiom from '../ChangeIdiom/ChangeIdiom';

const Navbar = () => {
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
            <li key={key} className='navbar-item' > <a className='navbar-link texts-nav' href={link} onClick={handleLinkClick} > {title} </a> </li>
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
                { renderMenuList() }
            </ul>
            <ChangeIdiom />
        </nav>
    );
};

export default Navbar;