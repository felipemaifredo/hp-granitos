//Configs
const linkToFetch = 'https://formsubmit.co/felipemaifredo@gmail.com';

const SendEmail = (formData) => {
    try {
        fetch(linkToFetch, {
            method: 'post',
            headers: { 'Accept': 'aplication/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              _captcha: 'false',
              _subject: 'Novo Contato no Site!',
              Nome: formData.name,
              EmailWhatsapp: formData.whatsOrEmail,
              Assunto: formData.subject
            })
        });
        return '200';
    } catch (error) {
        return `Fail: ${error}`;
    };
};

export default SendEmail;