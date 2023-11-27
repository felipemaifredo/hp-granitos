//Imports
import './styles/projects.style.css';
import { useState } from 'react';
import { projectsData } from '../Data/ProjectsData';
import { Link } from 'react-router-dom';
import TitleContainer from '../Components/titleContainer/titleContainer';

//Assets
import { IoIosStar } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Projects = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState({
        name: '',
        img2: '',
        longDescrip: '',
      });

    function createCardProject({img1, img2, name, clientName, clientImg, location, rate, shortDescrip, longDescrip, key, destaque}) {
        if (destaque) {
            return (
                <div className='container-project' key={key} style={{backgroundImage: `url(${img1})`}}>
                    <div className='content-project'>
                        <div className='client-content'>
                            <div className='img-client'>
                                <img src={clientImg} alt='Imagem de cliente' />
                            </div>
                            <div className='nalo-client'>
                                <p className='client-name text-projects'>{clientName}</p>
                                <p className='client-location text-projects'>{location}</p>
                            </div>
                            <div className='rate-client'>
                                <IoIosStar /> 
                                <p>{rate}</p>
                            </div>
                        </div>
                        <div className='project-content'>
                            <p className='title-project text-projects'>{name}</p>
                            <p className='shortdescrip-project text-projects'>{shortDescrip}</p>
                        </div>
                        <div className='btn-box'>
                            <button className='button-style text-projects' onClick={() => renderModal({img2, name, longDescrip})}> Ler Mais </button>
                        </div>
                    </div>
                </div>
            );
        }
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
            <TitleContainer section="projects" title="em Granito" subtitle="Nossos Projetos" />
            <div className='projects-container'>
                { renderProjects() }
            </div>  
            <div className={modalActive ? 'modal-container modal-container-activate' : 'modal-container'}>
                <button className='close-modal' onClick={() => closeModal()}> <IoCloseCircleOutline /> </button>
                <img src={modalData.img2} alt='Imagem de alguma coisa'/>
                <div className='content-modal'>
                    <p className='title-modal text-projects'> {modalData.name} </p>
                    <p className='text-modal text-projects'> {modalData.longDescrip} </p>
                </div>
            </div>
            <Link to={'/projetos'} className='button-style text-projects'> Ver Todos </Link>
        </section>
    );
};

export default Projects;