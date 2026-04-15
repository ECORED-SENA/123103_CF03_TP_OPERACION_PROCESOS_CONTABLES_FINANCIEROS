export default {
  global: {
    Name: 'Programación y gestión operativa de la producción',
    Description:
      'Este componente brinda al aprendiz bases para organizar operaciones con criterios técnicos, mediante análisis de demanda, capacidad, recursos, tiempos, rutas, cronogramas, órdenes y seguimiento. Su aplicación en procesos contables y financieros fortalece el control, el análisis de costos, la verificación del uso de recursos y el seguimiento de resultados, apoyando decisiones con información organizada, oportuna, verificable y trazable, institucional, pertinente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos para la planeación de la producción ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Capacidad productiva y recursos disponibles ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Información de demanda y pronósticos de producción ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Parámetros técnicos de los procesos productivos  ',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programación y secuenciación de la producción ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos de programación de la producción ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Secuencias y rutas de producción  ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructura de cronogramas de producción ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación operativa y documentación de la producción ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plan de producción documentado ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Asignación de recursos: materiales, mano de obra y máquinas  ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Seguimiento, control y actualización de la producción',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de información y comunicación en la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Sistemas de información para la gestión de producción',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimientos de comunicación de órdenes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de monitoreo y seguimiento de órdenes',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Control y actualización de la ejecución productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Registros de producción ejecutada',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Actualización del estado de órdenes de producción',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Capacidad productiva',
      significado:
        'posibilidad real que tiene una operación para producir una cantidad determinada de bienes o servicios en un tiempo definido.',
    },
    {
      termino: 'Cronograma',
      significado:
        'representación temporal de las actividades, operaciones o tareas programadas dentro de un periodo.',
    },
    {
      termino: 'Demanda',
      significado:
        'cantidad de bienes o servicios que se requiere atender en un periodo determinado.',
    },
    {
      termino: 'Estado de la orden',
      significado:
        'situación en la que se encuentra una orden durante su ciclo de ejecución, por ejemplo liberada, en proceso, detenida o cerrada.',
    },
    {
      termino: 'Incidencia',
      significado:
        'novedad, problema o evento que afecta la ejecución normal de una orden de producción.',
    },
    {
      termino: 'Orden de trabajo',
      significado:
        'documento que formaliza la ejecución de una actividad productiva, indicando qué hacer, cuánto, cuándo y con qué recursos.',
    },
    {
      termino: 'Pronóstico',
      significado:
        'estimación técnica de la demanda futura, elaborada a partir de datos históricos, tendencias o condiciones del entorno.',
    },
    {
      termino: 'Ruta de producción',
      significado:
        'recorrido que sigue un producto u orden por los diferentes centros de trabajo hasta su terminación.',
    },
    {
      termino: 'Secuenciación',
      significado:
        'orden en que deben ejecutarse las operaciones o actividades dentro del proceso productivo.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de seguir el recorrido de una orden, producto o información a lo largo del proceso productivo.',
    },
  ],
  referencias: [
    {
      referencia: 'ByDesign, B. d. (2025, noviembre). Help portal. SAP. ',
      link:
        'https://help.sap.com/docs/SAP_BUSINESS_BYDESIGN/2754875d2d2a403f95e58a41a9c7d6de/2cc8cd4c722d101484e1917e19a9e2cd.html',
    },
    {
      referencia:
        'Caballero, R. (s.f.). Estudio de tiempos. Facultad de Ingeniería Industrial, Universidad Tecnológica de Panamá.',
      link: '',
    },
    {
      referencia: 'Caballero, R. (s.f.). Estudio de tiempos. ',
      link:
        'https://www.academia.utp.ac.pa/sites/default/files/docente/541/l11_estudio_de_tiempos.pdf',
    },
    {
      referencia:
        'Chapman, S. N. (2006). Planificación y control de la producción. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Gómez, N. A. (2021). Diseño de un sistema de monitoreo de un prototipo de máquina industrial, para la presentación de datos en tiempo real con recursos de la nube de IBM en Colombia. Universidad Nacional Abierta y a Distancia.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, S. C. (2014). Control de calidad en la producción industrial.',
      link: '',
    },
    {
      referencia:
        'Hanke, J. E. (2010). Pronósticos en los negocios. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Heizer, J., & Render, B. (2009). Principios de administración de operaciones. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Hormigo, I. G. (2011). Sistema de información empresarial. Universidad Oberta de Catalunya.',
      link: '',
    },
    {
      referencia:
        'Jacobs, F. R. (2014). Administración de operaciones: producción y cadena de suministro. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Jacobs, F. R., & Chase, R. B. (2022). Administración de operaciones (16.ª ed.). McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Jacobs, F. R., & Chase, R. B. (2022). Administración de operaciones, producción y cadenas de suministro. McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Kanawaty, G. (1996). Introducción al estudio del trabajo (4.ª ed.). Oficina Internacional del Trabajo.',
      link: '',
    },
    {
      referencia:
        'Kanawaty, G. (1998). Introducción al estudio del trabajo. Limusa.',
      link: '',
    },
    {
      referencia:
        'Martins, J. (2026). Diagrama de Gantt: qué es y cómo crear uno con ejemplos. Asana. ',
      link: 'https://asana.com/es/resources/gantt-chart-basics',
    },
    {
      referencia:
        'Orozco-Crespo, E., & Sablón-Cossío, N. (2020). Secuenciación de operaciones por simulación en la empresa Puntadas, S.G',
      link: 'https://www.scielo.sa.cr/pdf/tem/v34n1/0379-3982-tem-34-01-55.pdf',
    },
    {
      referencia:
        'Parra, D. B., et al. (2020). Análisis de tiempos y movimientos en el proceso productivo.',
      link: '',
    },
    {
      referencia: 'Pisa, C. F. (2013). Gestión de la producción. ',
      link: '',
    },
    {
      referencia:
        'Render, B., Stair, R. M., & Hanna, M. E. (2012). Métodos cuantitativos para los negocios. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. E. (2010). Planificación, programación y control de la producción. Universidad de Carabobo.',
      link: '',
    },
    {
      referencia:
        'Sipper, D., & Bulfin, R. L. (1998). Planeación y control de la producción. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Universidad de Valencia. (s.f.). La empresa y los sistemas de información. ',
      link:
        'https://www.uv.es/nmarina/imp2/Teoria/Tema%201%20-%20La%20Empresa%20y%20los%20SI.pdf',
    },
    {
      referencia:
        'Vargas Encalada, E. E. (2019). Sistemas de información como herramienta para reorganizar procesos de manufactura. Revista Venezolana de Gerencia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
