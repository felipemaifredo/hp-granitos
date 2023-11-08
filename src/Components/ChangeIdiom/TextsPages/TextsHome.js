export const changeTextsHomeBR = () => {
    document.title = 'HP Stone | Granitos Export';
    document.documentElement.lang = 'pt-br';

    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[0].innerText = 'Sobre';
      TextsMenu[1].innerText = 'Materiais';
      TextsMenu[2].innerText = 'Nosso Projetos';
      TextsMenu[3].innerText = 'Contato';
    };

    let textsPresentation = document.querySelectorAll('.texts-presentation');
    if (textsPresentation) {
      textsPresentation[0].innerText = 'Granitos Export';
      textsPresentation[1].innerText = 'Compre seu projeto de granito com segurança e com preço justo.';
      textsPresentation[2].innerText = 'E tenha sua casa do jeito que sempre sonhou.';
      textsPresentation[3].innerText = 'Quero Meu projeto em Granito';
    }

  };
  
  export const changeTextsHomeUS = () => {
    document.title = 'HP Stone | Export Granites';
    document.documentElement.lang = 'en';

    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[0].innerText = 'About';
      TextsMenu[1].innerText = 'Materials';
      TextsMenu[2].innerText = 'Our Projects';
      TextsMenu[3].innerText = 'Contact';
    }

    let textsPresentation = document.querySelectorAll('.texts-presentation');
    if (textsPresentation) {
      textsPresentation[0].innerText = 'Export Granites';
      textsPresentation[1].innerText = 'Buy your granite project safely and at a fair price.';
      textsPresentation[2].innerText = 'And have your home the way you always dreamed.';
      textsPresentation[3].innerText = 'I want my project in Granite';
    }

  };

  export const changeTextsHomeSP = () => {
    document.title = 'HP Stone | Granitos de Exportación';
    document.documentElement.lang = 'es';

    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[0].innerText = 'Acerca';
      TextsMenu[1].innerText = 'Materiales';
      TextsMenu[2].innerText = 'Nuestros proyectos';
      TextsMenu[3].innerText = 'Contacto';
    }

    let textsPresentation = document.querySelectorAll('.texts-presentation');
    if (textsPresentation) {
      textsPresentation[0].innerText = 'Granitos de Exportación';
      textsPresentation[1].innerText = 'Compra tu proyecto de granito de forma segura y a un precio justo.';
      textsPresentation[2].innerText = 'Y ten tu hogar como siempre soñaste.';
      textsPresentation[3].innerText = 'Quiero mi proyecto en Granito';

    }
  }