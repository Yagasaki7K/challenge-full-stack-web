### Contextualização
Considere que uma Instituição de Ensino Superior precisa de uma solução para cadastrar e gerenciar matrículas de usuários em turmas online. Para realizar a matrícula, é necessário que o cadastro de aluno tenha sido realizado. O desafio consiste em criar uma aplicação para o cadastro de usuários conforme os critérios de aceitação.

### Lista de bibliotecas de terceiros utilizadas

- Nodemon
- Express-session
- Body-parser

### Decisão da arquitetura utilizada
Está sendo utilizado

Vue - Express - NodeJS

### O que você melhoraria se tivesse mais tempo?
- Algumas funcionalidades na área de professores como sistemas de notas de cada aluno por matéria e semestre, sendo buscadas por dentro
da própria pesquisa do aluno, onde ali junto de todas as outras informações e foto, poderia acessar o boletim do mesmo.

- As materias que o aluno está em recuperação e quais não, quais ele já finalizou e quais estão em sua grade curricular.

- Não é ideal para os professores, mas para a diretoria seria interessante uma área financeira onde poderia verificar se o aluno
está em dia com a mensalidade em relação a faculdade.

- Responsividade do projeto seguindo as necessidades, não foi dado prosseguimento devido a falha no back-end.


### Quais requisitos obrigatórios que não foram entregues
- Banco de dados usando MySQL ou PostgreSQL
- Sistema de login corretamente buscando login e senha pelo banco de dados (a busca é local e pré-definida no index.js)
- Sistema de editar, deletar e pesquisar
- Sistema de cadastro de novos alunos

### Relatório e Documentação (do mais novo ao mais antigo)
25/01
- Foi finalizado toda a parte de front-end e foi dado prosseguimento para a incrementação do back-end.
- Foi transferida a estrutura do projeto para CLI ao invés de CDN para verificação se esse era de fato o problema do projeto, mas em vão.
- Porém, existe um problema em questão de cadastrar um novo aluno para que ele apareça na lista.
- Ao chamar a lista diretamente, através do Vue.data caso tenha algum conteúdo nela, é mostrado adequadamente com cada aluno, 
mas a incrementação automatica usando o formulário não está funcionando e o problema não foi solucionado. (desde do dia 23 em desenvolvimento)

22/01
- Foi finalizado a interface de login (funcionando, mas com validação local através da variável dispónível no index.js)
- Foi adicionado bibliotecas de terceiros como (Express-session e Body-parser)
- Foi finalizada a segunda parte da interface em consulta de alunos junto com o cadastramento, deixando por fim a parte de back-end.

21/01
Como o Vue é um framework simples, foi decidido colocar ele apenas em certas páginas do sistema que fizesse requisições direta com o JSON,
assim, não seria necessário em todas as páginas a sua incrementação, deixando o sistema mais leve. 
Porém, mantivemos o Design Pattern do mesmo para questões de organização e usabilidade futura para outros desenvolvedores.

20/01
- Foi desenvolvido todo o layout do projeto [https://www.behance.net/gallery/111778969/Challenge-Fullstack-by-GrupoA]
O layout foi pensado nas cores claras para melhorar a visualização da interface; na simplicidade para que todos os usuários
possam dominar o sistema sem dificuldade de muitas coisas na tela e apenas o necessário (auxilio para professores mais velhos)
Além de contar com botões e formulários arredondados para ficar mais amigáveis ao olhar, dando prioridade a experiência do usuário.

19/01
- Está sendo desenvolvido o layout de como ficará o projeto, tendo a base como informada no README.md
- A configuração inicial do projeto foi commitada referente a presente data.
- Foi instalado o Express e NodeJS sendo realizada as configurações iniciais.
- Foi inicializado a configuração inicial do VueJS no projeto (challenge-full-stack-web).