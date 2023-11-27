export const changeTextsProductsBR = () => {
    document.title = 'HP Stone | Granitos Export';
    document.documentElement.lang = 'pt-br';

    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'Sobre';
      TextsMenu[2].innerText = 'Materiais';
      TextsMenu[3].innerText = 'Nosso Projetos';
      TextsMenu[4].innerText = 'Contato';
    };
};

export const changeTextsProductsEN = () => {
    document.title = 'HP Stone | Export Granites';
    document.documentElement.lang = 'en';

    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'About';
      TextsMenu[2].innerText = 'Materials';
      TextsMenu[3].innerText = 'Our Projects';
      TextsMenu[4].innerText = 'Contact';
    };
};

export const changeTextsProductsSP = () => {
    document.title = 'HP Stone | Granitos de Exportación';
    document.documentElement.lang = 'es';

    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'Acerca';
      TextsMenu[2].innerText = 'Materiales';
      TextsMenu[3].innerText = 'Nuestros proyectos';
      TextsMenu[4].innerText = 'Contacto';
    };
};