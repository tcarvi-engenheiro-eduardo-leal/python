import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1a1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c69'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '846'),
            routes: [
              {
                path: '/docs/analise-dados-com-python/classificacao-dados-quantitativos',
                component: ComponentCreator('/docs/analise-dados-com-python/classificacao-dados-quantitativos', '645'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/descricoes-dos-conjuntos-de-dados',
                component: ComponentCreator('/docs/analise-dados-com-python/descricoes-dos-conjuntos-de-dados', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/distribuicao-de-frequencias',
                component: ComponentCreator('/docs/analise-dados-com-python/distribuicao-de-frequencias', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/distruibuicao-frequenciais',
                component: ComponentCreator('/docs/analise-dados-com-python/distruibuicao-frequenciais', '813'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/leadtime',
                component: ComponentCreator('/docs/analise-dados-com-python/leadtime', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/medidas-de-dispersao',
                component: ComponentCreator('/docs/analise-dados-com-python/medidas-de-dispersao', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/medidas-de-tendencia-central',
                component: ComponentCreator('/docs/analise-dados-com-python/medidas-de-tendencia-central', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/medidas-separatrizes',
                component: ComponentCreator('/docs/analise-dados-com-python/medidas-separatrizes', '226'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/referencias',
                component: ComponentCreator('/docs/analise-dados-com-python/referencias', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analise-dados-com-python/tipos-de-dados',
                component: ComponentCreator('/docs/analise-dados-com-python/tipos-de-dados', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/análise-de-dados-com-python',
                component: ComponentCreator('/docs/category/análise-de-dados-com-python', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/certificações',
                component: ComponentCreator('/docs/category/certificações', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/codificando',
                component: ComponentCreator('/docs/category/codificando', '94c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/data-types',
                component: ComponentCreator('/docs/category/data-types', '0fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/instalação-e-execução',
                component: ComponentCreator('/docs/category/instalação-e-execução', 'b25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/numpy',
                component: ComponentCreator('/docs/category/numpy', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/plotagem',
                component: ComponentCreator('/docs/category/plotagem', '6b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/certificates/dict',
                component: ComponentCreator('/docs/certificates/dict', '522'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/certificates/Introduction-PCEP–CertifiedEntry-LevelPythonProgrammer',
                component: ComponentCreator('/docs/certificates/Introduction-PCEP–CertifiedEntry-LevelPythonProgrammer', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/certificates/list',
                component: ComponentCreator('/docs/certificates/list', '648'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/certificates/Section1-PCEP–CertifiedEntry-LevelPythonProgrammer copy',
                component: ComponentCreator('/docs/certificates/Section1-PCEP–CertifiedEntry-LevelPythonProgrammer copy', '242'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/certificates/Section2-PCEP–CertifiedEntry-LevelPythonProgrammer',
                component: ComponentCreator('/docs/certificates/Section2-PCEP–CertifiedEntry-LevelPythonProgrammer', 'c99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/certificates/Section3-PCEP–CertifiedEntry-LevelPythonProgrammer copy 3',
                component: ComponentCreator('/docs/certificates/Section3-PCEP–CertifiedEntry-LevelPythonProgrammer copy 3', '6da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/certificates/Section4-PCEP–CertifiedEntry-LevelPythonProgrammer copy 2',
                component: ComponentCreator('/docs/certificates/Section4-PCEP–CertifiedEntry-LevelPythonProgrammer copy 2', '893'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/bitwise _operations_on_ints',
                component: ComponentCreator('/docs/coding/bitwise _operations_on_ints', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/classe_e_metodo_abstrato',
                component: ComponentCreator('/docs/coding/classe_e_metodo_abstrato', 'a6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/comparacao_de_instancias',
                component: ComponentCreator('/docs/coding/comparacao_de_instancias', '1d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/heranca_em_classes',
                component: ComponentCreator('/docs/coding/heranca_em_classes', '386'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/loops',
                component: ComponentCreator('/docs/coding/loops', '813'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/operations_on_numbers',
                component: ComponentCreator('/docs/coding/operations_on_numbers', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/ordenacao',
                component: ComponentCreator('/docs/coding/ordenacao', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/polimorfism',
                component: ComponentCreator('/docs/coding/polimorfism', '915'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/print_de_classes',
                component: ComponentCreator('/docs/coding/print_de_classes', '68a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coding/unpacking',
                component: ComponentCreator('/docs/coding/unpacking', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/bool',
                component: ComponentCreator('/docs/data-types/bool', '201'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/bytearray',
                component: ComponentCreator('/docs/data-types/bytearray', '422'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/bytes',
                component: ComponentCreator('/docs/data-types/bytes', 'a9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/classes',
                component: ComponentCreator('/docs/data-types/classes', '83c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/complex',
                component: ComponentCreator('/docs/data-types/complex', '980'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/decimal_decimal',
                component: ComponentCreator('/docs/data-types/decimal_decimal', 'b82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/dict-defaultdict',
                component: ComponentCreator('/docs/data-types/dict-defaultdict', '9c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/Exceptions',
                component: ComponentCreator('/docs/data-types/Exceptions', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/float',
                component: ComponentCreator('/docs/data-types/float', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/fractions_fraction',
                component: ComponentCreator('/docs/data-types/fractions_fraction', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/Generator-type',
                component: ComponentCreator('/docs/data-types/Generator-type', '009'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/Instances',
                component: ComponentCreator('/docs/data-types/Instances', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/int',
                component: ComponentCreator('/docs/data-types/int', '9a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/Iterator-type',
                component: ComponentCreator('/docs/data-types/Iterator-type', 'd62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/list',
                component: ComponentCreator('/docs/data-types/list', '328'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/operations_on_dict_defafaultdict',
                component: ComponentCreator('/docs/data-types/operations_on_dict_defafaultdict', 'c60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/operations_on_lists',
                component: ComponentCreator('/docs/data-types/operations_on_lists', 'ebb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/operations_on_ranges',
                component: ComponentCreator('/docs/data-types/operations_on_ranges', '26a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/operations_on_sets_and_frozensets',
                component: ComponentCreator('/docs/data-types/operations_on_sets_and_frozensets', 'f77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/operations_on_tuples',
                component: ComponentCreator('/docs/data-types/operations_on_tuples', '748'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/range',
                component: ComponentCreator('/docs/data-types/range', '22f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/set-frozenset',
                component: ComponentCreator('/docs/data-types/set-frozenset', '695'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/str',
                component: ComponentCreator('/docs/data-types/str', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/tuple',
                component: ComponentCreator('/docs/data-types/tuple', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-types/type-annotation-type',
                component: ComponentCreator('/docs/data-types/type-annotation-type', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/execution',
                component: ComponentCreator('/docs/instalacao_e_execucao/execution', '01b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/execution-with-modules_and_classes',
                component: ComponentCreator('/docs/instalacao_e_execucao/execution-with-modules_and_classes', '646'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/execution-with-modules_without_classes',
                component: ComponentCreator('/docs/instalacao_e_execucao/execution-with-modules_without_classes', '29c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/instalacao-de-requirements-txt',
                component: ComponentCreator('/docs/instalacao_e_execucao/instalacao-de-requirements-txt', 'a23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/install-blender-bpy',
                component: ComponentCreator('/docs/instalacao_e_execucao/install-blender-bpy', '94f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/install-python',
                component: ComponentCreator('/docs/instalacao_e_execucao/install-python', 'bb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/python-environment-variables',
                component: ComponentCreator('/docs/instalacao_e_execucao/python-environment-variables', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/style_code',
                component: ComponentCreator('/docs/instalacao_e_execucao/style_code', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalacao_e_execucao/verificacao-instalacao-python',
                component: ComponentCreator('/docs/instalacao_e_execucao/verificacao-instalacao-python', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/numpy/general_view',
                component: ComponentCreator('/docs/numpy/general_view', 'f25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/numpy/referencias',
                component: ComponentCreator('/docs/numpy/referencias', '5ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plotagem/bar',
                component: ComponentCreator('/docs/plotagem/bar', '561'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/python/general-view',
                component: ComponentCreator('/docs/python/general-view', 'b8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/python/referencias_internas_built_in',
                component: ComponentCreator('/docs/python/referencias_internas_built_in', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
