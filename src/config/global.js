export default {
  global: {
    componenteFormativo: 'Última milla',
    descripcionCurso:
      'En el presente componente formativo se estudiará la trazabilidad transaccional de los objetos postales en el último tramo de llegada hasta el sitio final de entrega, el cual se relaciona con la recepción, almacenamiento, redistribución y entrega final, y cuyo objetivo es satisfacer  la entrega de productos con oportunidad y eficiencia, generando reducción de costos y optimización de mano de obra.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestionar el proceso de última milla',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Especificaciones de mercancías y objetos postales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Pedidos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Equipos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Procesos de distribución',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Disposición de carga de acuerdo con el plan de ruta',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Normativa de movilización de cargas',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Aplicación de <em>software</em>',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Información documentada de última milla',
            hash: 't_1_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Nacional de Infraestructura. (1993). Ley 105 de 1993.',
      link: 'https://www.ani.gov.co/sites/default/files/ley_105.pdf',
    },
    {
      referencia: 'Función Pública. (1996). Ley 336 de 1996.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=346',
    },
    {
      referencia: 'Ministerio de Transporte. (2004). Resolución 4100 de 2004.',
      link: 'http://web.mintransporte.gov.co/jspui/handle/001/4012',
    },
  ],
  glosario: [
    {
      termino: 'Centro integrado de mercancías',
      significado:
        'Lugar donde se realizan diferentes actividades de logística, distribución y transporte, solo se gestiona la distribución de mercancías.',
    },
    {
      termino: 'Centro logístico',
      significado:
        'Llamado también centro de distribución, espacio donde se almacenan objetos postales, mercancías y se prepara la distribución.',
    },
    {
      termino: 'Cliente final',
      significado:
        'Es el destinatario o comprador quien recibe el envío del objeto postal o la mercancía.',
    },
    {
      termino: 'Flota de reparto',
      significado:
        'Conjunto de vehículos destinados al transporte de los objetos postales y al transporte de mercancías.',
    },
    {
      termino: '<em>Picking</em>',
      significado: 'Preparación de pedidos para su distribución.',
    },
    {
      termino: 'Ruta de reparto',
      significado:
        'Recorrido que se establece para realizar las entregas de forma adecuada y óptima.',
    },
    {
      termino: '<em>Software</em> logístico',
      significado:
        'Herramienta ofimática, programa o soluciones digitales que utilizan las empresas de logística en la gestión de la operación.',
    },
    {
      termino: 'Última milla',
      significado:
        'Recorrido del transporte para la entrega de pedidos en el destino final.',
    },
  ],
  complementario: [
    {
      texto: 'Gestionar el proceso de última milla”',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IzJ0FcP3Cy8',
    },
    {
      texto: 'Pedidos',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BE8XH9LkymY',
    },
    {
      texto: 'Pedidos',
      tipo: 'Blog',
      link: 'https://www.ewebtrans.com/blog/es/sabes-que-es-la-ultima-milla/',
    },
    {
      texto: 'Equipos',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pcyYZjcsd-o',
    },
    {
      texto: 'Procesos de distribución',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8eFhnpvaRB0',
    },
    {
      texto: 'Disposición de carga de acuerdo con el plan de ruta',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A73wlrqsNw0',
    },
    {
      texto: 'Normativa de movilización de cargas',
      tipo: 'Blog',
      link:
        'https://zonalogistica.com/herramientas/normatividad-vigente-en-transporte-terrestre-de-carga/',
    },
    {
      texto: 'Aplicación de <em>software</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8YmUODEfmRI',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Cesar Augusto Cano Echeverri',
        cargo: 'Experto temático',
        centro: 'Comercio y Servicios Regional Risaralda',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario la Granja Regional Tolima',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
