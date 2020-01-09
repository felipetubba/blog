---
title: 'JavaScript: Entenda a diferença entre .forEach() e .map()'
description: 'O .map(), assim como o .forEach(), é um iterador de array que não altera o array original, mas a grande diferença é deles é que...'
date: '2020-01-09 03:15:26'
image: /assets/img/peru-cover.png
category: js
background: '#F0D91D'
---

## Introdução
 
Uma das coisas que não entrava na minha cabeça de jeito nenhum era a diferença entre .forEach() e .map(). Não importava quantos vídeos eu assistia ou quantos artigos eu lia, eu não via nenhuma diferença entre esses dois. Eu quase desisti, sério. Esse problema se perpetuou até eu bater de frente com um código recheado desses dois e aí não teve jeito, era entender ou entender.
 
Pensando que essa pode ser uma dúvida de muitos programadores, principalmente os iniciantes,eu resolvi escrever esse artigo. Quem sabe você não sofra tanto quanto eu, depois dessa pequena ajudinha.
 
Bora lá!
 
## .forEach()
 
.forEach() é um iterador de array que executa uma função de callback para cada item do array. No caso abaixo, para cada item do array ele vai executar uma função que concatena "Bem vindo, " ao nome de cada cliente e imprime cada um desses resultados no console.
 
```javaScript
var clientes = ["Paulo", "Pedro", "João"]
 
clientes.forEach(function(cliente) {
  console.log(`Bem vindo, ${cliente}`)
});
 
console.log(clientes)
 
//Retorno será:
 
//Bem vindo, Paulo
//Bem vindo, Pedro
//Bem vindo, João
//[ 'Paulo', 'Pedro', 'João' ]
```
Perceba que ele apenas retornou os resultados, mas não alterou o array original e nem criou um array novo com os dados manipulados. Para salvar esses novos dados, nós teríamos que criar um array vazio e utilizar um método de adição como o .push() para fazer isso.
 
 
## .map()
 
Já o .map(), assim como o .forEach(), também é um iterador de array que não altera o array original, mas a grande diferença é que ele cria um array novo com os dados manipulados sem que a gente precise dizer. Ou seja, não é necessário ter um array vazio, muito menos utilizar um método de adição, porque ele já faz isso automaticamente.
 
```javaScript
var clientes = ["Paulo", "Pedro", "João"]
 
var bemVindo = clientes.map( cliente => `${cliente} Sobrenome`) 
 
console.log(clientes)
console.log(bemVindo)
 
// Retorno será:
 
// [ 'Paulo', 'Pedro', 'João' ]
// [ 'Paulo Sobrenome', 'Pedro Sobrenome', 'João Sobrenome' ]
```
 
Como podemos ver, o .map() gerou um novo array a partir das interações que ele teve com o array antigo.
 
 
## conclusão

Se você precisa não precisa salvar os dados, talvez o .forEach() seja a melhor opção. Já se você precisa criar um novo array, o .map() é mais adequado.

Bom, acho que é isso. Espero que eu tenha conseguido contribuir de alguma forma com este meu primeiro artigo. E se você tiver algo a acrescentar ou achar que faltou alguma coisa, pode deixar nos comentários que eu terei o prazer de ler cada mensagem.
 
Ah, e não se esqueça de visitar meu canal no YouTube e minhas redes sociais.
 
Um abraço e até a próxima! ;)


