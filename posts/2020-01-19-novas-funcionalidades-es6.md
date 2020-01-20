---
title: 'JavaScript Moderno: funcionalidades do ES6'
description: ' Hoje eu irei falar um pouco das principais funcionalidades que vieram com o ES6.'
date: '2020-01-19 20:00:26'
image: /assets/img/funcionalidades-es6.png
category: js
background: '#F0D91D'
---

A partir da versão ES6, o Javascript vem trazendo diversas funcionalidades novas que, além de ajudar nossa vida como desenvolvedor, também torna a linguagem mais robusta. Hoje eu irei falar um pouco das principais funcionalidades que vieram nessa versão.

## Classe

No meu ponto de vista, esse recurso é apenas uma forma mais amigável de criar nossas abstrações e nada mais que isso. Para quem já desenvolve com JavaScript, não vejo muita utilidade, mas para quem está transitando de outra linguagem, pode facilitar a adaptação ao JS.

Veja um exemplo de classe:

```javaScript
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    const felipe = new Pessoa('Felipe', 24)

    console.log(felipe) // Pessoa { nome: 'Felipe', idade: 24 }

```

Também podemos utilizar herança usando o extends:

```javaScript
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    class Desenvolvedor extends Pessoa {
        bio() {
            console.log(`${this.nome} é um desenvolvedor`)
        }
    }

    const felipe = new Desenvolvedor('Felipe', 24)

    felipe.bio() // Felipe é um desenvolvedor

```

## Const e Let

São novas maneiras de declarar variáveis. Com o const, criamos uma variável de somente leitura, ou seja, o valor dela é fixo, porém não significa que é imutável.

```javaScript
    const pessoa = {
        nome: 'Felipe',
        idade: 24
    }

    pessoa.nome = 'Paulo'
    console.log(pessoa) // { nome: 'Paulo', idade: 24 }

    pessoa = 2
    console.log(pessoa) // erro

```

Como eu disse, o valor não é imutável, você pode alterar as propriedades de um objeto, como no exemplo acima, mas você não pode reatribuir como tentamos fazer na sequência.

Já o let é uma variável de escopo, ou seja, seu valor não pode ser lido fora dele:

```javaScript

    function multiplicacao(valor1, valor2) {
        let valor3 = valor1 * valor2
        console.log(valor3) // 4
    }

    multiplicacao(2,2)
    console.log(valor3) // valor3 is not defined

```

## Arrow functions

É uma nova forma, menos verbosa, de criar funções no JavaScript. Além disso, utilizando arrow function, você não perde o escopo atual do this, ou seja, não é necessário fazer bind.

Exemplo de arrow function:

```javaScript
    const multiplicacao = (valor1, valor2) => {
        return valor1 * valor2
    }

```

E caso a função tenha apenas um retorno, podemos remover as chaves e a palavra return, deixando a sintaxe mais curta:

```javaScript
    const multiplicacao = (valor1, valor2) => valor1 * valor2

```

E conseguimos diminuir ainda mais se função tiver apenas um paramêtro, nesse caso, podemos omitir os parentesês também.

```javaScript
    const multiplicacao = valor => valor * 2

```

## Valor padrão para parâmetro

O ES6 trouxe uma forma mais simples de setar valor default para parâmetro:

```javaScript
    const sum = (x, y = 10) => {
        return x + y
    }

    sum(10,5) // Resultado: 15
    sum(10) // Resultado: 20
```

## Template literals

Trocando aspas duplas ou simples por crase, podemos inserir variáveis dentro de strings. Para isso, além da crase, também é necessário envolver a variável dentro de um ${}. Confira abaixo:

Como era antes:

```javaScript
    var nome = 'Código'
    var sobrenome = 'Nuvem'
    console.log('Seu nome é ' + nome + ' e seu sobrenome é ' + sobrenome)

```

Agora com template literals:

```javaScript
    var nome = 'Código'
    var sobrenome = 'Nuvem'
    console.log(`Seu nome é ${nome} e seu sobrenome é ${sobrenome}`)
    
```

## Desestruturação 

Uma forma mais fácil de declarar variáveis com valores oriundos de objetos e vetores:

Exemplo com vetor:

```javaScript
    const idade = [10,12,18]

    const [pedro, paulo, maria] = idade

    console.log(pedro) // 10
    console.log(paulo) // 12
    console.log(maria) // 18
```

Exemplo com objeto:

```javaScript
    const usuario = {nome: 'Felipe', apelido: 'Tubba'}

    const {nome, apelido} = usuario

    console.log(nome) // 'Felipe'
    console.log(apelido) // 'Tubba'
```

Se quiser se aprofundar mais no assunto, da uma conferida na documentação:
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao" target="_blank">Atribuição via desestruturação</a>

## Operadores rest e spread

Também temos dois novos operadores: o rest e o spread. O primeiro extrai o resto de um objeto ou vetor, enquanto o segundo copia o conteúdo deles e passa para outra estrutura de dados:

Pegando o resto com o rest:

```javaScript
    const usuarios = ['pedro', 'paulo', 'maria', 'clara', 'carlos']

    let [a, b, ...c] = usuarios

    console.log(a) // 'pedro'
    console.log(b) // 'paulo'
    console.log(c) // ['maria', 'clara', 'carlos']
```

Copiando valores com o spread:

```javaScript
    const homens = ['pedro', 'paulo']
    const mulheres = ['maria', 'clara']
    const juntos = [...homens, ...mulheres]

    console.log(juntos) // [ 'pedro', 'paulo', 'maria', 'clara' ]
```

## Módulos

É a featura que eu mais gosto! Com ela, nós podemos importar e exportar variáveis, funções e classes de um arquivo para outro, possibilitando um código muito mais organizado e de fácil manutenção.

Para exportar, usamos a palavra exports antes do que queremos exportar:

```javaScript
    // dogs.js

    export const dog = {
        raca: 'labrador',
        nome: 'rex'
    }

    export const cat = {
        raca: 'gato',
        nome: 'fulano'
    }

```

E para importar, usamos a estrutura abaixo:

```javaScript
    // animais.js

    import { dog } from 'dogs'

    console.log(dog.nome) // rex

```

Perceba que eu usei desestruturação no import para importar apenas o objeto dog. Nesse caso, se eu tentasse dar um console.log no objeto cat, eu receberia uma mensagem de erro.

Para não utilizar desestruturação, podemos utilizar o default, que vai dizer qual é o export padrão, caso eu não especifique nenhum.

```javaScript
    // multiplicacao.js

    export default function multiplicacao(valor1, valor2) {
        return valor1 * valor 2
    }

```

Como o default é a função "multiplicacao", então não é necessário especificá-la no momento do import. Veja o exemplo:

```javaScript
    // resultado.js

    import multiplicacao from 'multiplicacao'

    multiplicacao(5, 10)

```

Ainda é possível mesclar os dois ou utilizar outras formas de import, mas para o artigo não ficar maior do que já está, recomendo a leitura da <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import" target="_blank">documentação</a>.

## Conclusão:

Bom, acredito que seja isso. Dessa vez o artigo ficou bem grande e deu bastante trabalho de escrever, então se puder dar aquela força compartilhando o conteúdo, eu ficarei muito feliz hahaha ;D. Também fica aqui a minha promessa de criar uma série de vídeos sobre cada uma dessas funcionalidades, então não esqueça de seguir meu canal no YouTube ;D

Um abraço!


