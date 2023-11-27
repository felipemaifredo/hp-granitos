//Imports
import './styles/productspage.style.css';
import TitleContainer from '../Components/titleContainer/titleContainer';
import { produtsData } from '../Data/ProductsData';
import { useEffect } from 'react';

const ProductsPage = () => {

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });
    
    const createCardProduct = ({img, name, text, index}) => {
        return(
            <div key={index} className='item-container' style={{backgroundImage: `url(${img})`}}>
                <div className='content-container'>
                    <h4 className='text-products'>{name}</h4>
                    <p className='text-products'>{text}</p>
                    <div className='btn-container'>
                        <a href='google.com' rel='nofollow' className='button-style text-products'>Solicitar Orçamento</a>
                    </div>
                </div>
            </div>
        )
    };

    const renderProducts = () => {
        return produtsData.map((product, index) =>
            createCardProduct({ ...product, key: index })
        );
    };

    return (
        <div id="ProductsPage">
            <TitleContainer section="products" title="Granitos" subtitle="Nossos Produtos" />
            <div className='products-container'>
                { renderProducts() }
            </div>   
        </div>
    );
};

export default ProductsPage;