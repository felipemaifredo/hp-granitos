//Imports
 import './styles/Presentation.style.css';

 //Assets
 import Logo1 from '../Assets/Logos/2.png';
 import Logo2 from '../Assets/Logos/3.png';
import video from '../Assets/video1.gif';

const Presentation = () => {
    return (
        <section id="Presentation">
            <div className='info-container'>
                <div className='logo-container'>
                    <div className='images-box'>
                        <img src={Logo1} alt='Imagem 1' className='logo1' />
                        <img src={Logo2} alt='Imagem 1' className='logo2' />
                    </div>
                    <p className='texts-presentation'>Granitos Export</p>
                </div>
                <div className='info-box'>
                    <h1>
                        <span className='title-h1 texts-presentation'>Compre seu projeto de granito com segurança e com preço justo.</span>
                        <span className='subtitle-h1 texts-presentation'>E tenha sua casa do jeito que sempre sonhou.</span>
                    </h1>
                </div>
                <div className='btn-box'>
                    <a href='google.com' className='texts-presentation' rel='nofollow'>Quero Meu projeto em Granito</a>
                </div>
            </div>
            <div className='video-container'>
               <img src={video} alt='video' />
            </div>
        </section>
    );
};

export default Presentation;