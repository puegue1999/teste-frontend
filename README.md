# Esse é um teste feito para a Artemis Corporation

## Formas de compilação usando o teminal:

> Execute: npm install

> Execute: ng serve

## Elementos no código:

### Header

> Aqui foi feita apenas a colocação simples da logo e um card para destacá-la;

### Form

> No form é mostrado as horas que poderão ser filtradas e se quiser exibir apenas as unidades fechadas;

> Apenas uma hora pode ser escolhida por vez;

### Legend

> Aqui mostra a legenda das imagens mostradas em cada unidade para a facilidade de visualização do usuário;

### List

> A listagem das unidades filtradas ou não pelo usuário.

> Fiz uma limitação para mostrar apenas quatro elementos por vez quando estiver em desktop e apenas um item por vez quando estiver no mobile.

> Exite também um método de paginação simples para o usuário usar;

### Footer

> Assim como a header, foi feito algo simples, apenas a chamada da imagem e um card no fundo;

## Maiores desafios:

> A API que foi dada acabou sendo um grande desafio de ser usada por vários motivos:
>> A lista que era trazida possuía diferentes estruturas e graças a isso vários erros ocorreram até eu perceber isso;
>> A filtragem precisava ser efeita a partir de uma string e transformar as horas de texto para inteiro para só assim filtrar foi um desafio que custou certo tempo;
>> Mesmo tentando contornar a listagem diferente para cada elemento, algumas vezes ainda ocorria alguns bugs, pois alguns elementos se distanciavam do padrão já pré-estabelecido;

## Sobre a falta de um back-end:

> Como a API dada custou muito tempo, sobrou pouco tempo hábil para criar um back-end decente, além que precisaria ter que ajustá-lo na api já dada e das criações de tela para a adição e remoção das unidades. O que foi preferivel focar no front-end com o que já possuía e mostrar um projeto entregável.