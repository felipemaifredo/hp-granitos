//Imports
import './styles/projectsspage.style.css';
import TitleContainer from '../Components/titleContainer/titleContainer';
import { useState, useEffect } from 'react';
import { projectsData } from '../Data/ProjectsData';

//Assets
import { IoIosStar } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const ProjectsPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState({
        name: '',
        img2: '',
        longDescrip: '',
    });

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });

    function createCardProject({img1, img2, name, clientName, clientImg, location, rate, shortDescrip, longDescrip, key}) {
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
        <div id="ProjectsPage">
           <TitleContainer section="projects" title="em Granito" subtitle="Nossos Projetos" />
           <div className='projects-container'>
                { renderProjects() }
            </div>  
            <div className={modalActive ? 'modal-container modal-container-activate' : 'modal-container'}>
                <button className='close-modal' onClick={() => closeModal()}> <IoCloseCircleOutline /> </button>
                <img src={modalData.img2} alt='Imagem de alguma coisa'/>
                <div className='content-modal'>
                    <p className='title-modal'> {modalData.name} </p>
                    <p className='text-modal'> {modalData.longDescrip} </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;