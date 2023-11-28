//Imports
import './styles/contact.style.css';
import { useState } from 'react';
import TitleContainer from '../Components/titleContainer/titleContainer';
import SendEmail from '../Components/SendEmail';

//Assets
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { RiMapPinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
    const [textBTN, setTextBTN] = useState('Enviar')
    const [formData, setFormData] = useState({
        name: '',
        whatsOrEmail: '',
        subject: '',
    });

    const inputsData = [
        { name: 'name', placeholder: 'Nome' },
        { name: 'whatsOrEmail', placeholder: 'Whatsapp ou Email' },
        { name: 'subject', placeholder: 'Assunto' },
    ];

    const adreesData = [
        { img: <FaWhatsapp />, name: 'Whatsapp', text: '(28) 99951-9306' },
        { img: <AiOutlineMail />, name: 'Email', text: 'Contato@hpgranitos.com.br' },
        { img: <RiMapPinFill />, name: 'Endereço', text: 'Rua rua rua rua rua rua, 01 - Bairro Bairro - Cidade Cidade / ES' },

    ];

    const createAdress = ({img, name, text, key}) => {
        return (
            <div className='adress-box' key={key}>
                <span> {img} </span>
                <div className='data-adress'>
                    <p className='title-adress'> {name} </p>
                    <p className='adress'> {text} </p>
                </div>
            </div>
        )
    }

    const renderAdress = () => {
        return adreesData.map((adress, index) => createAdress({ ...adress, key: index }));
    };

    const createInputs = ({name, placeholder, key}) => {
        return(
            <input className='input-contact' key={key} name={name} placeholder={placeholder} value={formData[name]} onChange={(e) => setFormData({ ...formData, [name]: e.target.value })} />
        )
    };

    const renderInputs = () => {
        return inputsData.map((input, index) =>
            createInputs({ ...input, key: index })
        );
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if ( !formData.name || !formData.whatsOrEmail || !formData.subject ) {
            changeTextButton('Preencha todos os campos');
            return
        } else {
            let responseEmail = SendEmail(formData);
            changeTextButton('Enviando...')
            
            if (responseEmail === '200') {
                changeTextButton('Enviado!')
            } else {
                changeTextButton('Não foi!')
                return
            };
        };

        setTimeout(() => {
            clearForm();
        }, 5000);
    };

    const clearForm = () => {
        setFormData({
          name: '',
          whatsOrEmail: '',
          subject: ''
        });
    };

    const changeTextButton = (text) => {
        setTextBTN(text);
        setTimeout( () => {
            setTextBTN('Enviar');
        }, 5000);
    };

    return(
        <section id="contact">
            <TitleContainer section="contacts" title="Contato" subtitle="Fale Conosco" />
            <div className='contact-container'>
                <div className='adrees-container'>
                    { renderAdress() }
                </div>
                <form id='form-contact' onSubmit={ sendEmail } >
                    { renderInputs() }
                    <button type="submit" className='button-style'> {textBTN} </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;