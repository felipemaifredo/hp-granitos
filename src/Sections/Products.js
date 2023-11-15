//Imports
import './styles/products.style.css';

//Assets
import img5 from '../Assets/5.png';
import img6 from '../Assets/6.png';
import img7 from '../Assets/7.png';
import img8 from '../Assets/8.png';
import img9 from '../Assets/9.png';

const Produts = () => {

    const createCardProduct = ({img, name, text, index}) => {
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

    const produtsData = [
        { img: img5, name: 'Nome e tals 1', text: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto' },
        { img: img6, name: 'Nome e tals 2', text: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto' },
        { img: img7, name: 'Nome e tals 3', text: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto' },
        { img: img8, name: 'Nome e tals 4', text: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto' },
        { img: img9, name: 'Nome e tals 5', text: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto' },
    ];

    const renderProducts = () => {
        return produtsData.map((product, index) =>
            createCardProduct({ ...product, key: index })
        );
    };

    return (
        <section id="products">
            <div className='title-container'>
                <h2 className='text-products'>Nossos Produtos</h2>
                <h3 className='text-products'>Granitos</h3>
            </div>
            <div className='products-container'>
                { renderProducts() }
            </div>   
            <a href='google.com' rel='nofollow' className='button-style text-products'>Ver Todos</a>
        </section>
    );
};

export default Produts;