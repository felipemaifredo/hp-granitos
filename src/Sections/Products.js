//Imports
import './styles/products.style.css';
import { produtsData } from '../Data/ProductsData';
import { Link } from 'react-router-dom';
import TitleContainer from '../Components/titleContainer/titleContainer';

const Produts = () => {

    const createCardProduct = ({img, name, text, index, destaque}) => {
        if (destaque) {
            return (
                <div key={index} className='item-container' style={{backgroundImage: `url(${img})`}}>
                    <div className='content-container'>
                        <h4 className='text-products'>{name}</h4>
                        <p className='text-products'>{text}</p>
                        <div className='btn-container'>
                            <a href='google.com' rel='nofollow' className='button-style text-products'>Solicitar Orçamento</a>
                        </div>
                    </div>
                </div>
            );
        }; 
    };

    const renderProducts = () => {
        return produtsData.map((product, index) =>
            createCardProduct({ ...product, key: index })
        );
    };

    return (
        <section id="products">
            <TitleContainer section="products" title="Granitos" subtitle="Nossos Produtos" />
            <div className='products-container'>
                { renderProducts() }
            </div>   
            <Link to={'/produtos'} className='button-style text-products'>Ver Todos</Link>
        </section>
    );
};

export default Produts;