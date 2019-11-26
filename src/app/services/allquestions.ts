export const allQuestions = [
  {
    id: 'LM0101',
    question: `Carlos e Marli são os pais de Valéria. A família quer viajar nas férias de julho. Carlos conseguiu tirar suas férias na fábrica do dia 2 ao dia 28. Marli obteve licença no escritório de 5 a 30. As férias de Valéria na escola vão de 1 a 25. Durante quantos dias a família poderá viajar sem faltar às suas obrigações?`,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: '22', correct: false, },
      { id: 'B', text: '21', correct: true, },
      { id: 'C', text: '20', correct: false, },
      { id: 'D', text: '19', correct: false, },
      { id: 'E', text: '25', correct: false, },
    ],
  },
  {
    id: 'LM0102',
    question: `Considere a seguinte sequência de cálculos:

    11² = 121
    111² = 12 321
    1 111² = 1234 321
    11 111² = 123 454 321

    A soma dos algarismos do número que se obtém calculando 111 111 111² é:`,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'divisível por 5.', correct: false, },
      { id: 'B', text: 'um número primo', correct: false, },
      { id: 'C', text: 'menor que 70.', correct: false, },
      { id: 'D', text: 'um quadrado perfeito.', correct: true, },
      { id: 'E', text: 'maior que 100.', correct: false, },
    ],
  },
  {
    id: 'LM0103',
    question: `Se hoje for uma segunda ou uma quarta-feira, Pedro terá aula de futebol ou natação. Quando Pedro tem aula de futebol ou natação, Jane o leva até a escolinha esportiva. Ao levar Pedro até a escolinha, Jane deixa de fazer o almoço e, se Jane não faz o almoço, Carlos não almoça em casa. Considerando-se a sequência de implicações lógicas acima apresentadas textualmente, se Carlos almoçou em casa hoje, então hoje:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'Pedro não teve aula de natação e não é segunda-feira.', correct: true, },
      { id: 'B', text: 'não é segunda, Pedro não teve aulas, e Jane não fez o almoço.', correct: false, },
      { id: 'C', text: 'Carlos levou Pedro até a escolinha para Jane fazer o almoço.', correct: false, },
      { id: 'D', text: 'não é segunda, nem quartas, mas Pedro teve aula de apenas uma das modalidades esportivas.', correct: false, },
      { id: 'E', text: 'é terça, ou quinta ou sexta-feira, ou Jane não fez o almoço.', correct: false, },
    ],
  },
  {
    id: 'LM0104',
    question: `Considere a seguinte proposição: “Se chove ou neva, então o chão ﬁca molhado”. Sendo assim, pode-se aﬁrmar que:`,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'Se o chão está molhado, então choveu e nevou.', correct: false, },
      { id: 'B', text: 'Se o chão está seco, então choveu ou nevou.', correct: false, },
      { id: 'C', text: 'Se o chão está seco, então não choveu e não nevou.', correct: true, },
      { id: 'D', text: 'Se o chão está seco, então não choveu ou não nevou.', correct: false, },
      { id: 'E', text: 'Se o chão está molhado, então choveu ou nevou.', correct: false, },
    ],
  },
  {
    id: 'LM0105',
    question: `Se p é uma proposição verdadeira, então:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'p v q é verdadeira, qualquer que seja q.', correct: true, },
      { id: 'B', text: 'p ^ q é verdadeira só se q for falsa.', correct: false, },
      { id: 'C', text: 'Nenhuma das alternativas está correta.', correct: false, },
      { id: 'D', text: 'p ^ q é verdadeira, qualquer que seja q.', correct: false, },
      { id: 'E', text: 'p → q é falsa, qualquer que seja q.', correct: false, },
    ],
  },
  {
    id: 'LM0201',
    question: `Sabendo que A = {1, 2, 3, 4}, B = {4, 5, 6} e C = {1, 6, 7, 8, 9}, podemos afirmar que o conjunto (A ∩ B) ∪ C é:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: '{1, 4, 6, 7}', correct: false, },
      { id: 'B', text: '{4}', correct: false, },
      { id: 'C', text: '{1, 4, 6, 7, 8, 9}', correct: true, },
      { id: 'D', text: '{1, 4}', correct: false, },
      { id: 'E', text: '{1, 4, 5, 6}', correct: false, },
    ],
  },
  {
    id: 'LM0202',
    question: `Seja A = { 1, {2}, {1,2} }. Considere as afirmações:
    (I) 1 ∈ A
    (II) 2 ∈ A
    (III)  Ø ⊂ A
    (IV) {1,2} ⊂ A

    Estão CORRETAS as afirmações:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'III e II.', correct: false, },
      { id: 'B', text: 'I e II.', correct: false, },
      { id: 'C', text: 'II e IV.', correct: false, },
      { id: 'D', text: 'I e III.', correct: true, },
      { id: 'E', text: 'III e IV.', correct: false, },
    ],
  },
  {
    id: 'LM0203',
    question: `Uma rede de computadores é formada por seis computadores. Cada computador é conectado diretamente a, pelo menos, um dos outros computadores. Sobre está situação podemos afirmar que:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'existem sempre três computadores na rede que estão diretamente conectados ao mesmo número de outros computadores.', correct: false, },
      { id: 'B', text: 'há pelo menos três computadores na rede que estão diretamente conectados ao mesmo número de outros computadores.', correct: false, },
      { id: 'C', text: 'pelo menos dois computadores na rede que estão diretamente conectados ao mesmo número de outros computadores.', correct: true, },
      { id: 'D', text: 'não existem dois computadores na rede que estão diretamente conectados ao mesmo número de outros computadores.', correct: false, },
      { id: 'E', text: 'pelo menos seis computadores na rede que estão diretamente conectados ao mesmo número de outros computadores.    ', correct: false, },
    ],
  },
  {
    id: 'LM0204',
    question: `Determine o valor lógico (V ou F) de cada uma das sentenças.

    I) 3   >       e     2  + 2 = 4

    II) 32 = 6    ou  pi é um número racional.

    III) -2 >  -3 ,  se e somente se,  Aracaju é a capital da Bahia.

    IV) Se  25 é um número primo então  25 é par.

    V) É falso que 3 + 4 =4  e  2 + 2= 5.

    Assinale a alternativa que corresponde ao valor lógico de cada uma das sentenças acima:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'V, V, F, V e V.', correct: false, },
      { id: 'B', text: 'V, F, V, V e V.', correct: false, },
      { id: 'C', text: 'F, F, F, V e V.', correct: false, },
      { id: 'D', text: 'F, F, F, V e F.', correct: false, },
      { id: 'E', text: 'V, F, F, V e V.', correct: true, },
    ],
  },
  {
    id: 'LM0205',
    question: `Os 20 candidatos aprovados em um concurso do Tribunal de Justiça serão colocados em 10 gabinetes de desembargadores. Se cada gabinete receber pelo menos um dos candidatos aprovados e cada um deles só puder ser lotado em um único gabinete, pode-se afirmar que:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'nenhum gabinete receberá mais de dois candidatos aprovados.', correct: false, },
      { id: 'B', text: 'cada gabinete receberá dois candidatos aprovados.', correct: false, },
      { id: 'C', text: 'haverá gabinetes que receberão cada um, apenas um dos candidatos aprovados.', correct: false, },
      { id: 'D', text: 'pelo menos um dos gabinetes receberá dois dos candidatos aprovados.', correct: false, },
      { id: 'E', text: 'pelo menos um dos gabinetes receberá dois ou mais candidatos aprovados.', correct: true, },
    ],
  },
  {
    id: 'LM0301',
    question: `Numa pesquisa de mercado, verificou-se que 15 pessoas utilizam pelo menos um dos produtos A ou B. Sabendo que 10 destas pessoas não usam o produto B e que 2 destas pessoas não usam o produto A, qual é o número de pessoas que utilizam os produtos A e B?
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: '4', correct: false, },
      { id: 'B', text: '3', correct: true, },
      { id: 'C', text: '2', correct: false, },
      { id: 'D', text: '5', correct: false, },
      { id: 'E', text: '6', correct: false, },
    ],
  },
  {
    id: 'LM0302',
    question: `Duas grandezas x e y são tais que “se x = 3 então y = 7”. Pode-se concluir que:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'se x = 5 então y = 5', correct: false, },
      { id: 'B', text: 'se x = 7 então y = 3', correct: false, },
      { id: 'C', text: 'se x = 3 então y = 3', correct: false, },
      { id: 'D', text: 'se y = 7 então x = 7', correct: false, },
      { id: 'E', text: 'se y != 7 então x != 3', correct: true, },
    ],
  },
  {
    id: 'LM0303',
    question: `Assinale a proposição composta logicamente verdadeira:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: '(2 = 3) ou (2 . 3 = 5)', correct: false, },
      { id: 'B', text: '(2 = 2) =>  (2 . 3 = 5)', correct: false, },
      { id: 'C', text: '(2 = 3) e (2 . 3 = 5)', correct: false, },
      { id: 'D', text: '(2 = 3) =>  (2 . 3 = 5)', correct: true, },
      { id: 'E', text: '(2 = 3) e (~ ( 2= 2))', correct: false, },
    ],
  },
  {
    id: 'LM0304',
    question: `Numa classe de 30 alunos, 16 gostam de Matemática e 20 gostam de Lógica. O número de alunos desta classe que gostam de Matemática e Lógica é:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'exatamente 18.', correct: false, },
      { id: 'B', text: 'no máximo 6.', correct: false, },
      { id: 'C', text: 'exatamente 10.', correct: false, },
      { id: 'D', text: 'no mínimo 6.', correct: true, },
      { id: 'E', text: 'exatamente 16.', correct: false, },
    ],
  },
  {
    id: 'LM0305',
    question: `Um grupo de estudantes decidiu viajar de ônibus para participar de um encontro nacional. Ao fazerem uma pesquisa de preços, os estudantes receberam de uma empresa a seguinte proposta, na qual o preço de cada passagem depende do total de passageiros: cada passageiro pagará R$ 90,00 mais o valor de R$ 5,00 por lugar que eventualmente ficar vago no ônibus. Sabendo que o ônibus tem 52 lugares, é CORRETO afirmar:

    ( ) Se viajarem 30 passageiros, cada um deles pagará R$ 110,00.

    ( ) Se o total de passageiros for x, o preço (em reais) de cada passagem será calculado pela expressão 90 + 5(52 – x).

    ( ) Se viajarem 40 pessoas, a empresa deverá receber um total de R$ 6.000,00, referente ao pagamento das passagens.

    ( ) Se viajarem x pessoas, o valor total (em reais) que a empresa deverá receber, referente ao pagamento das passagens, é calculado pela expressão 300x – 5x2.

    ( ) O valor total máximo que a empresa poderá receber pelo pagamento das passagens ocorrerá quando o total de passageiros for igual a 35.

    Com base nas afirmativas acima, marque a opção CORRETA:

    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'V, V, V, F, F.', correct: false, },
      { id: 'B', text: 'F, V, V, F, V.', correct: true, },
      { id: 'C', text: 'F, V, V, V, V.', correct: false, },
      { id: 'D', text: 'V, V, V, F, V.', correct: false, },
      { id: 'E', text: 'V, V, V, F, V.', correct: false, },
    ],
  },
  {
    id: 'LM0401',
    question: `
Zeus é um aficionado em matemática, pois quando lhe perguntaram sobre sua idade, ele respondeu: “Para saber a minha idade você deve decifrar o criptograma aritmético seguinte, que corresponde de modo codificado, à adição de dois números naturais. Decifrado o criptograma, a minha idade é igual à soma dos algarismos que correspondem às letras da palavra FISCO.”

   F O S S O
 + F O S S O
   C I S C O

Considerando que letras distintas correspondem a algarismos distintos, quantos anos tem Zeus?
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: '28', correct: false, },
      { id: 'B', text: '30', correct: false, },
      { id: 'C', text: '25', correct: false, },
      { id: 'D', text: '22', correct: true, },
      { id: 'E', text: '24', correct: false, },
    ],
  },
  {
    id: 'LM0402',
    question: `Ache o menor número primo que divide 311 + 513.
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: '11', correct: false, },
      { id: 'B', text: '5', correct: false, },
      { id: 'C', text: '13', correct: false, },
      { id: 'D', text: '3', correct: false, },
      { id: 'E', text: '2', correct: true, },
    ],
  },
  {
    id: 'LM0403',
    question: `Um jantar reúne 13 pessoas de uma mesma família. Das afirmações a seguir, referentes às pessoas reunidas, a única necessariamente verdadeira é:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'pelo menos duas delas fazem aniversário no mesmo mês.', correct: true, },
      { id: 'B', text: 'pelo menos uma delas nasceu num dia par.', correct: false, },
      { id: 'C', text: 'pelo menos duas delas são do sexo feminino.', correct: false, },
      { id: 'D', text: 'pelo menos uma delas nasceu em janeiro ou fevereiro.', correct: false, },
      { id: 'E', text: 'pelo menos uma delas tem altura superior a 1,90m.', correct: false, },
    ],
  },
  {
    id: 'LM0404',
    question: `Durante a Segunda Guerra Mundial, para decifrarem as mensagens secretas, foi utilizada a técnica de decomposição em fatores primos. Um número N é dado pela expressão 2x 5y 72  na qual x, y e z são números inteiros não negativos. Sabe-se que N é múltiplo de 10 e não é múltiplo de 7. O número de divisores de N, diferentes de N, é:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'x . y . z', correct: false, },
      { id: 'B', text: '(x + 1) . (y + 1) . z', correct: false, },
      { id: 'C', text: 'x . y . z - 1', correct: false, },
      { id: 'D', text: '(x + 1) . (y + 1) . (z + 1) -1', correct: true, },
      { id: 'E', text: '(x +1) . (y + 1)', correct: false, },
    ],
  },
  {
    id: 'LM0405',
    question: `Qual o número de linhas da tabela–verdade das seguintes fórmulas?

    I) (((p v q ) → ~p )  ® ( q ^ p))

    II) (x ^ (w →(( p ^ q) v (s ↔ t))

    III) (p ^ (p → ((p ^ p) v ( p → p) )))

    Marque a alternativa que corresponde ao número de linhas da I, II e III fórmulas respectivamente:
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: '4, 64 e 2.', correct: true, },
      { id: 'B', text: '8, 64 e 4.', correct: false, },
      { id: 'C', text: '4, 8 e 2.', correct: false, },
      { id: 'D', text: '2, 4 e 8.', correct: false, },
      { id: 'E', text: '4, 12 e 2.', correct: false, },
    ],
  },
  {
    id: 'IA010',
    question: `Pergunta
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'resposta', correct: false, },
      { id: 'B', text: 'resposta', correct: false, },
      { id: 'C', text: 'resposta', correct: false, },
      { id: 'D', text: 'resposta', correct: false, },
      { id: 'E', text: 'resposta', correct: false, },
    ],
  },
  {
    id: 'IA0101',
    question: `Sobre o chamado inverno da IA, é correto afirmar que:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'resposta', correct: false, },
      { id: 'B', text: 'resposta', correct: false, },
      { id: 'C', text: 'o inverno da ocorreu em decorrência do descrédito em empresas que não entregavam aquilo que prometiam em termos de IA.', correct: true, },
      { id: 'D', text: 'resposta', correct: false, },
      { id: 'E', text: 'resposta', correct: false, },
    ],
  },
  {
    id: 'IA0102',
    question: `Considere que em uma determinada base de dados de e-mails há um grande volume de e-mails que precisam ser classificados em spam ou não spam. Esse processo é feito a partir de um conjunto de cálculos de probabilidade gerados e aplicados por meio da utilização do:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'Teorema de Bayes.', correct: true },
      { id: 'B', text: 'resposta', correct: false, },
      { id: 'C', text: 'resposta', correct: false, },
      { id: 'D', text: 'resposta', correct: false, },
      { id: 'E', text: 'resposta', correct: false, },
    ],
  },
  {
    id: 'IA0103',
    question: `As redes sociais utilizam de forma intensiva recursos de IA para os mais diversos propósitos. O processamento de linguagem natural, por exemplo, é utilizado para:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'identificação do sentimento das pessoas em relação a um determinado conteúdo.', correct: true },
      { id: 'B', text: 'resposta', correct: false, },
      { id: 'C', text: 'resposta', correct: false, },
      { id: 'D', text: 'resposta', correct: false, },
      { id: 'E', text: 'resposta', correct: false, },
    ],
  },
  {
    id: 'IA0104',
    question: `A partir da união de duas importantes áreas da ciência, os computadores passaram a poder utilizar o conhecimento, inclusive para tomar decisões e aprender. Essas duas importantes áreas são:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'Cibernética e Engenharia de Computadores.', correct: false },
      { id: 'B', text: 'Neurociência e Engenharia de Computadores.', correct: false },
      { id: 'C', text: 'Matemática e Filosofia.', correct: false },
      { id: 'D', text: 'Linguística e Inteligência Artificial.', correct: false },
      { id: 'E', text: 'Inteligência Artificial e Psicologia.  ', correct: false },
    ],
  },
  {
    id: 'IA0105',
    question: `Considere as seguintes afirmações:

  I. Fundamental para que as máquinas possam se comunicar e, principalmente, serem compreendidas pelos seres humanos.

  II. As informações armazenadas devem possibilitar a capacidade de resposta a questionamentos, além da obtenção de conclusões.

  III. Permite que as máquinas possam se adaptar a novas circunstâncias.

  As afirmações referem-se, respectivamente, às seguintes capacidades necessárias, de acordo com o teste de Turing:
  `,
  topic: 'Inteligência Artificial',
  answers: [
    { id: 'A', text: 'I. Processamento de linguagem natural, II. raciocínio automatizado e III. aprendizado de máquina.', correct: true },
    { id: 'B', text: 'resposta', correct: false, },
    { id: 'C', text: 'resposta', correct: false, },
    { id: 'D', text: 'resposta', correct: false, },
    { id: 'E', text: 'resposta', correct: false, },
    ],
  },
  {
    id: 'IA0201',
    question: `A arquitetura de um agente determina, dentre outras características, a forma como os agentes se comunicam entre si e desempenham suas funções. Sobre as diversas arquiteturas dos agentes, marque a alternativa CORRETA:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'Nos casos em que os agentes possuem facilitadores (representantes), os gerentes da arquitetura escravo-mestre se comunicam com esses facilitadores e não com os agentes subordinados.', correct: false },
      { id: 'B', text: 'Dentre os diversos tipos de arquitetura, não há nenhum que contenha apenas um agente;', correct: false },
      { id: 'C', text: 'Na arquitetura de troca de mensagens os agentes podem se comunicar diretamente, porém devem utilizar protocolos específicos para essa finalidade.', correct: false },
      { id: 'D', text: 'A arquitetura de mecanismos de mercado é um dos exemplos de classificação baseada na forma pela qual os agentes cooperam entre si.', correct: false },
      { id: 'E', text: 'A arquitetura do quadro-negro, uma das arquiteturas focadas na cooperação, é caracterizada pela intensa comunicação direta que ocorre entre os agentes.', correct: false },
    ]
  },
  {
    id: 'IA0202',
    question: `A alternativa INCORRETA em relação às características dos algoritmos de busca é:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'O algoritmo de busca em largura deve garantir que nenhum dos nós seja visitado mais de uma vez. V', correct: false },
      { id: 'B', text: 'O algoritmo de busca em profundidade pode não chegar a uma solução para o problema devido à limitação de memória decorrente da grande profundidade da árvore. V', correct: false },
      { id: 'C', text: 'A busca pode ser interrompida pelo algoritmo de busca em profundidade caso chegue a um nó que não tem mais filhos. ~', correct: false },
      { id: 'D', text: 'Mesmo encontrando uma solução para o problema, o algoritmo de busca de custo uniforme continua procurando até que encontre a solução que realmente seja a de menor custo. V ', correct: false },
      { id: 'E', text: 'A principal vantagem do algoritmo de busca em profundidade limitada sobre o algoritmo de busca em profundidade está no fato de que o primeiro sempre encontra uma solução para o problema. F', correct: false },
    ]
  },
  {
    id: 'IA0203',
    question: `Assim como ocorre com os problemas de busca, os problemas de planejamento podem ser resolvidos por meio de uma série de algoritmos. Cada um desses algoritmos possui vantagens, desvantagens, além de limitações que podem ser mais ou menos significativas de acordo com o problema que precisa ser resolvido. Sobre os algoritmos de planejamento, é CORRETO o que se afirma na alternativa:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'Assim como ocorre com os algoritmos de progressão, os algoritmos de regressão consideram todas as ações possíveis de serem executadas a partir de um determinado estado.', correct: false },
      { id: 'B', text: 'Os algoritmos de regressão são mais utilizados que os algoritmos que os algoritmos de progressão em virtude do tratamento que os primeiros dão aos estados.', correct: false },
      { id: 'C', text: 'Algoritmos de busca em espaços de estados para frente não são adequados para problemas com fator de ramificação muito alto.', correct: false },
      { id: 'D', text: 'As heurísticas utilizadas pelos algoritmos de planejamento são sempre as mesmas, afinal, seu propósito é sempre o mesmo.', correct: false },
      { id: 'E', text: 'A principal vantagem da decomposição dos problemas é a grande abrangência que ela possui sobre quase todos os tipos de problemas.', correct: false },
    ]
  },
  {
    id: 'IA0204',
    question: `A vertente da Inteligência Artificial dedica a estudar o comportamento humano e as ações realizadas pelos humanos para solucionar problemas é o:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'projeto da máquina de Turing.', correct: false },
      { id: 'B', text: 'processo filosófico.', correct: false },
      { id: 'C', text: 'projeto de aprendizado psicológico.', correct: false },
      { id: 'D', text: 'projeto de simulação cognitiva.', correct: false },
      { id: 'E', text: 'projeto de inteligência artificial.', correct: false },
    ]
  },
  {
    id: 'IA0205',
    question: `O planejamento consiste na definição de planos de ação para o alcance de objetivos, e pode ser aplicado para solucionar uma série de problemas. Em relação ao planejamento em IA, é CORRETO afirmar que:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'no planejamento clássico é impossível saber quais serão os efeitos causados por uma determinada ação executada pelo planejador.', correct: false },
      { id: 'B', text: 'o planejador é uma estrutura utilizada no contexto dos algoritmos de planejamento, enquanto o escalonador é utilizado por algoritmos de busca.', correct: false },
      { id: 'C', text: 'os algoritmos de planejamento focam na resolução de problemas por meio da deliberação.', correct: false },
      { id: 'D', text: 'o planejamento clássico considera a solução de problemas em ambientes dinâmicos.', correct: false },
      { id: 'E', text: 'a principal diferença entre os algoritmos de planejamento e os algoritmos de busca é que os algoritmos de planejamento não partem de um estado inicial em busca de um estado objetivo.', correct: false },
    ]
  },
  {
    id: 'IA0301',
    question: `As topologias e arquiteturas das Redes Neurais definem questões estruturais em relação a essas redes, assim como os tipos de dados que essas redes podem processar e os problemas que elas podem resolver. No contexto da estrutura das Redes Neurais, é CORRETO afirmar que:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'independentemente da topologia de rede escolhida, as redes Multi Layer Percetron sempre possuem três camadas.', correct: false },
      { id: 'B', text: 'as Redes Neurais possuem um número de camadas intermediárias limitado e independente da topologia de rede escolhida.', correct: false },
      { id: 'C', text: 'o número de neurônios presentes em cada camada da rede é independente da topologia da rede.', correct: false },
      { id: 'D', text: 'há uma dependência entre o problema que se pretende resolver e a topologia de rede escolhida.', correct: false },
      { id: 'E', text: 'as redes Multi Layer Percetron são padronizadas, o que as exime da necessidade de serem submetidas a treinamento.', correct: false },
    ]
  },
  {
    id: 'IA0302',
    question: `Os métodos bioinspirados têm como principal característica o fato de que são baseados em padrões complexos encontrados na natureza. Esses padrões são estudados e utilizados para auxiliar na resolução de problemas, desenvolvimento de novas tecnologias ou evolução de tecnologias e sistemas já existentes. As alternativas a seguir contêm apenas exemplos de algoritmos bioinspirados, com exceção da alternativa:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'Sistemas nebulosos, química artificial e algoritmos de enxames.', correct: false },
      { id: 'B', text: 'Redes neurais, algoritmos genéticos e sistemas imunológicos artificiais.', correct: false },
      { id: 'C', text: 'Sistemas nebulosos, algoritmos de enxame e redes neurais.', correct: false },
      { id: 'D', text: 'Redes neurais, algoritmos genéticos e química artificial.', correct: false },
      { id: 'E', text: 'Algoritmos de enxames, algoritmos de matilhas e redes neurais.', correct: false },
    ]
  },
  {
    id: 'IA0303',
    question: `Quando falamos em métodos bioinspirados, os Algoritmos Genéticos (AG) certamente são alguns dos que mais se destacam. Esses algoritmos são baseados em processos relacionados com organismos biológicos e, geralmente, são utilizados para resolver problemas de alta complexidade. Sobre os AG, é correto afirmar que:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'devido à sua robustez, os AG sempre encontram uma solução ótima para os problemas.', correct: false },
      { id: 'B', text: 'os critérios para a definição das populações devem ser bem estruturados, uma vez que a população não pode ser alterada após o início do processo de busca.', correct: false },
      { id: 'C', text: 'os Algoritmos Genéticos atuam com um único elemento candidato, manipulado de forma iterativa na busca pelo resultado desejado.', correct: false },
      { id: 'D', text: 'mesmo os AG que atuam sobre populações podem manipular um único grupo de membros de cada vez, a fim de reduzir o consumo de recursos computacionais.', correct: false },
      { id: 'E', text: 'o espaço de busca pode ser explorado por vários grupos de membros, formados pelos indivíduos mais adequados.', correct: false },
    ]
  },
  {
    id: 'IA0304',
    question: `As Redes Neurais Artificiais podem ser utilizadas para resolver problemas nas mais diversas áreas. Sobre as formas como elas são aplicadas, é correto o que se afirma na alternativa:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'A melhoria na experiência de atendimento a clientes do setor financeiro é um dos poucos problemas que as RN ainda não puderam resolver nessa área. F', correct: false },
      { id: 'B', text: 'Embora haja ferramentas capazes de criar medicamentos, e até elementos químicos, de forma automática, é necessário que algumas informações sejam introduzidas no sistema por seres humanos.', correct: false },
      { id: 'C', text: 'Apesar do grande número de conteúdos produzidos de forma automática por ferramentas utilizadas na área de Marketing, quando se trata de expressar opiniões, ainda é mandatória a presença de um ser humano. F', correct: false },
      { id: 'D', text: 'Ferramentas como o ReLeaSE possuem alto nível de complexidade e solucionam problemas altamente complexos. Por essa razão, não requerem uma época de treinamento. F', correct: false },
      { id: 'E', text: 'A automação de processos no setor energético visa reduzir os elevados custos com pessoal, substituindo as pessoas por robôs na realização de tarefas repetitivas. F', correct: false },
    ]
  },
  {
    id: 'IA0305',
    question: `A Lógica Nebulosa (LN) é uma técnica que permite construir sistemas que lidem com informações imprecisas ou subjetivas. Diferentemente da lógica clássica, a lógica nebulosa oferece flexibilidade na definição e na avaliação de conceitos, tendo suas origens nos sistemas multivalorados e em funções de pertinência. A alternativa correta em relação à LN é:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'Assim como ocorre com a lógica clássica, na LN os elementos devem pertencer ou não a um conjunto, de forma dicotômica.', correct: false },
      { id: 'B', text: 'Uma função de pertinência deve ser utilizada para determinar se um elemento pertence ou não a um conjunto.', correct: false },
      { id: 'C', text: 'A principal semelhança entre as Lógica Nebulosa e tradicional é a representação dos problemas de forma numérica.', correct: false },
      { id: 'D', text: 'Os problemas que a LN se propõe a resolver têm predominância de subjetividade, incerteza e falta de linearidade.', correct: false },
      { id: 'E', text: 'Nas versões nebulosas do algoritmo K-means, cada registro deve pertencer a um único grupo ou classe.', correct: false },
    ]
  },
  {
    id: 'IA0401',
    question: `Uma das afirmações a seguir não diz respeito a características da Lógica Difusa. Essa alternativa é:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'A Lógica Difusa determina que um valor pertence a um conjunto ou não pertence.', correct: false },
      { id: 'B', text: 'As funções de pertinência são usadas para determinar associações de pertinência.', correct: false },
      { id: 'C', text: 'A Lógica Difusa permite que afirmações do tipo “talvez” ou “quase” sejam aceitas para classificar dados ou gerar conclusões.', correct: false },
      { id: 'D', text: 'Problemas com alto nível de imprecisão e subjetividade podem ser resolvidos a partir de sistemas baseados na Lógica Difusa.', correct: false },
      { id: 'E', text: 'A Lógica Difusa admite graus de pertinência dos elementos aos conjuntos.', correct: false },
    ]
  },

  {
    id: 'IA0402',
    question: `Sobre a modelagem dos algoritmos genéticos (AG), é correto afirmar que:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'um operador de mutação permite o cruzamento entre pares de regras para geração de novas regras.', correct: false },
      { id: 'B', text: 'cada cromossoma representa um atributo do banco de dados.', correct: false },
      { id: 'C', text: 'tanto o crossover lógico quanto a mutação lógica podem ser aplicados a atributos categóricos e quantitativos.', correct: false },
      { id: 'D', text: 'os indivíduos mais fortes, ou que melhor representam uma regra, são aqueles cuja confiança e abrangência são as maiores.', correct: false },
      { id: 'E', text: 'o operador de crossover deve ser aplicado a um único ponto de uma regra, sob o risco de gerar anomalias.', correct: false },
    ]
  },
  {
    id: 'IA0403',
    question: `Sobre o aprendizado de máquina (machine learning), assinale a alternativa:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'O aprendizado de máquina se refere à capacidade que os agentes possuem de aprenderem com o ambiente, com os dados e com os problemas que precisam resolver.', correct: false },
      { id: 'B', text: 'As árvores de decisão implementam apenas conceitos de redes neurais artificiais (RNA), sem qualquer relação com o aprendizado de máquina.', correct: false },
      { id: 'C', text: 'Os problemas seguem padrões, portanto, seria perfeitamente possível que os algoritmos fossem programados com todas as soluções possíveis para cada problema.', correct: false },
      { id: 'D', text: 'Os agentes não possuem conhecimento prévio sobre o problema e sobre o ambiente. Por isso é necessário que se realize a fase de treinamento.', correct: false },
      { id: 'E', text: 'Apesar da evolução dos recursos de processamento e dos algoritmos de processamento de dados, o aprendizado de máquina é deficiente em termos de indução de regras.', correct: false },
    ]
  },
  {
    id: 'IA0404',
    question: `Sobre o algoritmo Wang-Mendel é CORRETO o que se afirma na alternativa:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'As previsões realizadas pelo Wang-Mendel dependem de um número n de valores passados de x;', correct: true },
      { id: 'B', text: 'resposta', correct: false },
      { id: 'C', text: 'resposta', correct: false },
      { id: 'D', text: 'resposta', correct: false },
      { id: 'E', text: 'resposta', correct: false },
    ]
  },
  {
    id: 'IA0405',
    question: `A aprendizagem passiva e a aprendizagem ativa são duas abordagens do aprendizado por reforço. Na aprendizagem passiva, a política do agente é fixa e a tarefa de aprendizagem consiste em aprender as utilidades dos estados. Já na aprendizagem ativa, o agente deve aprender também o que fazer. Sobre a aprendizagem passiva, é o correto o que se afirma na alternativa:
    `,
    topic: 'Inteligência Artificial',
    answers: [
      { id: 'A', text: 'As experiências executadas pelo agente no ambiente utilizam políticas variadas a fim de determinar qual delas é a melhor.', correct: false },
      { id: 'B', text: 'A utilidade é o resultado da média dos valores das recompensas esperadas em cada estado, a partir da execução da política .', correct: false },
      { id: 'C', text: 'As percepções que o agente obtém a partir das recompensas são restritas ao resultado final e não ao estado atual em que se encontra.', correct: false },
      { id: 'D', text: 'A meta de um agente de aprendizagem passiva é determinar qual a melhor política a ser seguida.', correct: false },
      { id: 'E', text: 'Cada percepção que o agente tem sobre um determinado estado está vinculada à recompensa recebida.', correct: false },
    ]
  },

];

