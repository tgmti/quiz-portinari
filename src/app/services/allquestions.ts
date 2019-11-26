export const questions = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
    id: '9',
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
    id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
    id: '15',
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
    id: '16',
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
    id: '17',
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
    id: '18',
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
    id: '19',
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
    id: '20',
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
    id: '',
    question: `Pergunta
    `,
    topic: 'Lógica Matemática',
    answers: [
      { id: 'A', text: 'resposta', correct: false, },
      { id: 'B', text: 'resposta', correct: false, },
      { id: 'C', text: 'resposta', correct: false, },
      { id: 'D', text: 'resposta', correct: false, },
      { id: 'E', text: 'resposta', correct: false, },
    ],
  },
];

