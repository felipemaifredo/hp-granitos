//Imports
import './styles/projects.style.css';
import { useState } from 'react';
//Assets
import img1 from '../Assets/imgAbout.png';
import { IoIosStar } from "react-icons/io";

const Projects = () => {

    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState({
        name: '',
        img2: '',
        longDescrip: '',
      });

    const projectsData = [
        { 
            img1: img1,
            img2: img1,
            name: 'Nome e tals 1',
            clientName: 'Felipe Maifredo',
            clientImg: img1,
            location: 'Vitória - ES',
            rate: '5',
            shortDescrip: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto',
            longDescrip: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto'  
        },
        { 
            img1: img1,
            img2: img1,
            name: 'Nome e tals 2',
            clientName: 'Felipe Maifredo',
            clientImg: img1,
            location: 'Vitória - ES',
            rate: '5',
            shortDescrip: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto',
            longDescrip: 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto'  
        },
      
    ];

    function createCardProject({img1, img2, name, clientName,clientImg, location, rate, shortDescrip, longDescrip, key}) {
        return (
            <div className='container-project' key={key} style={{backgroundImage: `url(${img1})`}}>
                <div className='content-project'>
                    <div className='client-content'>
                        <div className='img-client'>
                            <img src={clientImg} alt='Imagem de cliente' />
                        </div>
                        <div className='nalo-client'>
                            <p className='client-name'>{clientName}</p>
                            <p className='client-location'>{location}</p>
                        </div>
                        <div className='rate-client'>
                            <IoIosStar /> 
                            <p>{rate}</p>
                        </div>
                    </div>
                    <div className='project-content'>
                        <p className='title-project'>{name}</p>
                        <p className='shortdescrip-project'>{shortDescrip}</p>
                    </div>
                    <div className='btn-box'>
                        <button className='button-style' onClick={() => renderModal({img2, name, longDescrip})}> Ler Mais </button>
                    </div>
                </div>
            </div>
        );
    };

    function renderModal({img2, name, longDescrip}) {
        setModalData({
            name: name,
            img2: img2,
            longDescrip: longDescrip,
        });
        setModalActive(true);
    };

    function closeModal() {
        setModalActive(false);
        setModalData({
            name: '',
            img2: '',
            longDescrip: '',
        });
    };

    function renderProjects() {
        return projectsData.map((product, index) =>
            createCardProject({ ...product, key: index })
        );
    };

    return (
        <section id="projects">
             <div className='title-container'>
                <h2 className='text-products'>Nossos Projetos</h2>
                <h3 className='text-products'>em Granito</h3>
            </div>
            <div className='projects-container'>
                { renderProjects() }
            </div>  
            <div className={modalActive ? 'modal-container modal-container-activate' : 'modal-container'}>
                <button className='close-modal' onClick={() => closeModal()}> X </button>
                <img src={modalData.img2} alt='Imagem de alguma coisa'/>
                <div className='content-modal'>
                    <p>{modalData.name}</p>
                    <p>{modalData.longDescrip}</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;