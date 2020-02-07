export function loadLists() {
  return [
    {
      id: 'column-01',
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 'card-1',
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
        {
          id: 'card-2',
          content:
            'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
        {
          id: 'card-3',
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
        {
          id: 'card-4',
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
        {
          id: 'card-5',
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
      ],
    },
    {
      id: 'column-02',
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 'card-6',
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
      ],
    },
    {
      id: 'column-03',
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 'card-7',
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
        {
          id: 'card-8',
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        },
        {
          id: 'card-9',
          content: 'Ajustes na biblioteca unform',
          labels: [],
        },
      ],
    },
    {
      id: 'column-04',
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 'card-10',
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 'card-12',
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 'card-13',
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        },
      ],
    },
  ];
}
