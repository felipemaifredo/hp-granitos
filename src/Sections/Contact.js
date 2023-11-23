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

    const createInputs = ({name, placeholder, key}) => {
        return(
            <input key={key} name={name} placeholder={placeholder} value={formData[name]} onChange={(e) => setFormData({ ...formData, [name]: e.target.value })} />
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

                </div>
                <form id='form-contact' onSubmit={ sendEmail } >
                    { renderInputs() }
                    <button type="submit"> {textBTN} </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;