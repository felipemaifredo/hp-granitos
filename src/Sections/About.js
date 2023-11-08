//Imports
import './styles/About.style.css';

//Assets
import imgAbout from '../Assets/imgAbout.png';

const About = () => {
    return(
        <section id="About">
            <div className='content-about-container'>
                <h2 className='texts-about'>Serviços</h2>
                <h3 className='texts-about'>Projetos em Granito</h3>
                <p className='texts-about'>Quando se fala em acabamentos, bom gosto e estilo são dois elementos que valorizam qualquer projeto de arquitetura Quando se fala em acabamentos, bom gosto e estilo são dois elementos que valorizam qualquer projeto de arquitetura Quando se fala em cabamentos, bom gosto e estilo são dois elementos que valorizam qualquer projeto de arquitetura </p>
                <a className='texts-about button-style' href='www.google.com' rel='nofollow'> Saiba Mais </a>
            </div>
            <div className='img-container-about'>
                <img src={imgAbout} alt='aaaaaaaaaa' />
            </div>
        </section>
    );
};

export default About;