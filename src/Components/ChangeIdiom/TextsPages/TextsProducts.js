const SOrc = 'Solicitar Orçamento';
const RQuo = 'Resquest a Quote';
const SPre = 'Solicitar presupuesto';

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

    let TextsProducts = document.querySelectorAll('.text-products');
    if (TextsProducts) {
      TextsProducts[0].innerText = 'Nossos Produtos';
      TextsProducts[1].innerText = 'Granitos';
      
      TextsProducts[2].innerText = 'Nome e Tals';
      TextsProducts[3].innerText = 'texto texto texto texto';
      TextsProducts[4].innerText = SOrc;
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

    let TextsProducts = document.querySelectorAll('.text-products');
    if (TextsMenu) {
      TextsProducts[0].innerText = 'Our Products';
      TextsProducts[1].innerText = 'Granites';

      TextsProducts[2].innerText = 'Name and Tals';
      TextsProducts[3].innerText = 'text text text text';
      TextsProducts[4].innerText = RQuo;
      
    };
};

export const changeTextsProductsSP = () => {
    document.title = 'HP Stone | Granitos de Exportación';
    document.documentElement.lang = 'es';

    let TextsMenu = document.querySelectorAll('.texts-nav');
    if (TextsMenu) {
      TextsMenu[1].innerText = 'Acerca';
      TextsMenu[2].innerText = 'Materiales';
      TextsMenu[3].innerText = 'Nuestros Proyectos';
      TextsMenu[4].innerText = 'Contacto';
    };

    let TextsProducts = document.querySelectorAll('.text-products');
    if (TextsMenu) {
      TextsProducts[0].innerText = 'Nuestros Productos';
      TextsProducts[1].innerText = 'Granitos';

      TextsProducts[2].innerText = 'Name and Tals';
      TextsProducts[3].innerText = 'texti texti texti texti';
      TextsProducts[4].innerText = SPre;
    };
};