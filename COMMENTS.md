### Contextualização
Considere que uma Instituição de Ensino Superior precisa de uma solução para cadastrar e gerenciar matrículas de usuários em turmas online. Para realizar a matrícula, é necessário que o cadastro de aluno tenha sido realizado. O desafio consiste em criar uma aplicação para o cadastro de usuários conforme os critérios de aceitação.

### Lista de bibliotecas de terceiros utilizadas

- Nodemon
- Express-session
- Body-parser

### Decisão da arquitetura utilizada
Está sendo utilizado

Vue - Express - NodeJS - JSON

### Por quê utilizar JSON ao invés de um banco de dados para analisar os alunos?
Primeiro por questões de manuseabilidade, fica muito mais fácil alimentar um JSON do que um banco de dados.
E dependendo de outros projetos que poderia ser incrementado pela própria faculdade, facilitaria muito em questão
de consumir isso sendo uma API. Buscar nomes de todos os alunos em um relatório semestral por exemplo para saber
o indíce de evolução de matrícula na faculdade e outras coisas como taxa de notas por sala, é uma das coisas que
poderiam facilitar muito ao invés de passar ao banco de dados.

Como é um sistema fechado (somente quem tem acesso é um professor ou alguém da direção), não seria necessário se
preocupar em "esconder" os conteúdos sensíveis dessa API, já que eles seriam os "Admins" do sistema.

### O que você melhoraria se tivesse mais tempo?
- Algumas funcionalidades na área de professores como sistemas de notas de cada aluno por matéria e semestre, sendo buscadas por dentro
da própria pesquisa do aluno, onde ali junto de todas as outras informações e foto, poderia acessar o boletim do mesmo.

- As materias que o aluno está em recuperação e quais não, quais ele já finalizou e quais estão em sua grade curricular.

- Não é ideal para os professores, mas para a diretoria seria interessante uma área financeira onde poderia verificar se o aluno
está em dia com a mensalidade em relação a faculdade.


### Quais requisitos obrigatórios que não foram entregues
- Banco de dados usando MySQL ou PostgreSQL
- Sistema de login corretamente buscando login e senha pelo banco de dados

### Relatório e Documentação (do mais novo ao mais antigo)
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