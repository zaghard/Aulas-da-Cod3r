const escola = "Coder"

console.log(escola.charAt(4)) //função lista as letra ao numero entre (), começando por 0.
console.log(escola.charAt(0)) //Quando numero exede a lista o programa nao mostra nada.
console.log(escola.charCodeAt(3))//lista a posicao da letra e mostra com base a tabela unicode.
console.log(escola.indexOf("c"))// para saber se existe uma determinada letra aa palavra.
console.log(escola.substring(1))//imprime apartir da posição do numero.
console.log(escola.substring(0, 3))// imprime somento o primeiro e o ultimo numero nao o inclui.
console.log('Escola '.concat(escola.concat("!")))// concatenação
console.log("Escola "+escola + "!")//concatenação
console.log(escola.replace(/\w/g, 'e'))//para substituir todas as letras do texto.
console.log(escola.replace(3, 'e'))//para substituir as letras do texto.
console.log("Ana,Maria,Pedro".split(',') )//Utilizada para quebra uma string em um Array.


