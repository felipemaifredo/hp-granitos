const SOrc = 'Solicitar Orçamento';
const VTod = 'Ver Todos';

const RQuo = 'Resquest a Quote';
const SAll = 'See All';

const SPre = 'Solicitar presupuesto';
const VTue = 'Vier Tuedos';

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
    };

    let textsAbout = document.querySelectorAll('.texts-about');
    if (textsAbout) {
      textsAbout[0].innerText = 'Serviços';
      textsAbout[1].innerText = 'Projetos em Granito';
      textsAbout[2].innerText = 'Quando se fala em acabamentos, bom gosto e estilo são dois elementos que valorizam qualquer projeto de arquitetura Quando se fala em acabamentos, bom gosto e estilo são dois elementos que valorizam qualquer projeto de arquitetura Quando se fala em cabamentos, bom gosto e estilo são dois elementos que valorizam qualquer projeto de arquitetura';
      textsAbout[3].innerText = 'Saiba Mais';
    };

    let textsProducts = document.querySelectorAll('.text-products');
    if (textsProducts) {
      textsProducts[0].innerText = 'Nossos Produtos';
      textsProducts[1].innerText = 'Granitos';

      textsProducts[2].innerText = 'Nome e tals 1';
      textsProducts[3].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[4].innerText = SOrc;

      textsProducts[5].innerText = 'Nome e tals 2';
      textsProducts[6].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[7].innerText = SOrc;

      textsProducts[8].innerText = 'Nome e tals 3';
      textsProducts[9].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[10].innerText = SOrc;

      textsProducts[11].innerText = 'Nome e tals 4';
      textsProducts[12].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[13].innerText = SOrc;

      textsProducts[14].innerText = 'Nome e tals 5';
      textsProducts[15].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';

      textsProducts[17].innerText = VTod;
    };

    let textsProjects = document.querySelectorAll('.text-projects');
    if (textsProjects) {
      textsProjects[0].innerText = 'Nossos Projetos';
      textsProjects[1].innerText = 'Em Granito';
    };

    let textsContact = document.querySelectorAll('.text-contacts');
    if (textsProjects) {
      textsContact[0].innerText = 'Fale Conosco';
      textsContact[1].innerText = 'Contato';
    };
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
    };

    let textsPresentation = document.querySelectorAll('.texts-presentation');
    if (textsPresentation) {
      textsPresentation[0].innerText = 'Export Granites';
      textsPresentation[1].innerText = 'Buy your granite project safely and at a fair price.';
      textsPresentation[2].innerText = 'And have your home the way you always dreamed.';
      textsPresentation[3].innerText = 'I want my project in Granite';
    };

    let textsAbout = document.querySelectorAll('.texts-about');
    if (textsAbout) {
      textsAbout[0].innerText = 'Services';
      textsAbout[1].innerText = 'Granite Projects';
      textsAbout[2].innerText = 'When talking about finishes, good taste and style are two elements that value any architectural project When talking about finishes, good taste and style are two elements that add value to any architectural project When talking about wiring, good taste and style are two elements that enhance any architectural project';
      textsAbout[3].innerText = 'Know More';
    };

    let textsProducts = document.querySelectorAll('.text-products');
    if (textsProducts) {
      textsProducts[0].innerText = 'Our Products';
      textsProducts[1].innerText = 'Granites';

      textsProducts[2].innerText = 'Name and tals 1';
      textsProducts[3].innerText = 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texto';
      textsProducts[4].innerText = RQuo;

      textsProducts[5].innerText = 'Name and tals 2';
      textsProducts[6].innerText = 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texto';
      textsProducts[7].innerText = RQuo;

      textsProducts[8].innerText = 'Name and tals 3';
      textsProducts[9].innerText = 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texto';
      textsProducts[10].innerText = RQuo;

      textsProducts[11].innerText = 'Name and tals 4';
      textsProducts[12].innerText = 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texto';
      textsProducts[13].innerText = RQuo;

      textsProducts[14].innerText = 'Name and tals 5';
      textsProducts[15].innerText = 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texto';
      textsProducts[16].innerText = RQuo;

      textsProducts[17].innerText = SAll;
    };

    let textsProjects = document.querySelectorAll('.text-projects');
    if (textsProjects) {
      textsProjects[0].innerText = 'Our Projects';
      textsProjects[1].innerText = 'In Granite';
    };

    let textsContact = document.querySelectorAll('.text-contacts');
    if (textsProjects) {
      textsContact[0].innerText = 'Get in Touch';
      textsContact[1].innerText = 'Contact';
    };
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
    };

    let textsPresentation = document.querySelectorAll('.texts-presentation');
    if (textsPresentation) {
      textsPresentation[0].innerText = 'Granitos de Exportación';
      textsPresentation[1].innerText = 'Compra tu proyecto de granito de forma segura y a un precio justo.';
      textsPresentation[2].innerText = 'Y ten tu hogar como siempre soñaste.';
      textsPresentation[3].innerText = 'Quiero mi proyecto en Granito';
    };

    let textsAbout = document.querySelectorAll('.texts-about');
    if (textsAbout) {
      textsAbout[0].innerText = 'Servicios';
      textsAbout[1].innerText = 'Proyectos de Granito';
      textsAbout[2].innerText = 'Cuando se habla de acabados, el buen gusto y el estilo son dos elementos que valoran cualquier proyecto arquitectónico. Cuando se habla de acabados, el buen gusto y el estilo son dos elementos que agregan valor a cualquier proyecto arquitectónico. Cuando se habla de cableado, el buen gusto y el estilo son dos elementos que realzan cualquier proyecto arquitectonico';
      textsAbout[3].innerText = 'Sepa mas';
    };

    let textsProducts = document.querySelectorAll('.text-products');
    if (textsProducts) {
      textsProducts[0].innerText = 'Nuestros productos';
      textsProducts[1].innerText = 'Granitos';

      textsProducts[2].innerText = 'Nombre y tals 1';
      textsProducts[3].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[4].innerText = SPre;

      textsProducts[5].innerText = 'Nombre y tals 2';
      textsProducts[6].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[7].innerText = SPre;

      textsProducts[8].innerText = 'Nombre y tals 3';
      textsProducts[9].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[10].innerText = SPre;

      textsProducts[11].innerText = 'Nombre y tals 4';
      textsProducts[12].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[13].innerText = SPre;

      textsProducts[14].innerText = 'Nombre y tals 5';
      textsProducts[15].innerText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';
      textsProducts[16].innerText = SPre;

      textsProducts[17].innerText = VTue;
    };

    let textsProjects = document.querySelectorAll('.text-projects');
    if (textsProjects) {
      textsProjects[0].innerText = 'Nuestros Proyectos';
      textsProjects[1].innerText = 'En granito';
    };

    let textsContact = document.querySelectorAll('.text-contacts');
    if (textsProjects) {
      textsContact[0].innerText = 'Ponerse en contacto';
      textsContact[1].innerText = 'Contacto';
    };
};