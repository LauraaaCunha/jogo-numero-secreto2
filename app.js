let listaDeNumerosSorteados = []; //criou uma lista vazia
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";*/

/*let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 10";*/

//evitar repetição de código:
function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}


function exibirMensagemInicial(){
//chamando a função:
exibirTextoNaTela('h1', 'Jogo do número AAA');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');}
exibirMensagemInicial();


//reconhecer botoes - criei uma função na linha 27 html, onclick
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número é menor que o chute');
        } else{
            exibirTextoNaTela('p', 'o numero é maior que o chute');
        }
    //para ir contando as tentativas
        tentativas++;
        limparCampo()
    }

}

//criar o numero aleatorio alem de nao deixa o numero repetir
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
}


    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        //includes verifica se o elemento está na lista, retornando true ou false
        // se o numero ja foi sorteafo retornamos um novo numero aleatorio
        return gerarNumeroAleatorio();
        //caso else é em que o elemento não está na lista
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        //push adiciona na lista que tava vazia, passamos o (numeroEscolhido) porque é o que eu quero add na lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

 //esse return ta sendo retornado la em cima na função numeroSecreto

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*Crie uma lista vazia, com o nome listaGenerica.*/
let listaGenerica = [];

/*Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 
'JavaScript','C','C++', 'Kotlin' e 'Python'.*/
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

/*Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.*/
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

/*Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.*/

/*Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.*/


/*Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
 */
nomes = ['na', 'pa', 'la'];
console.log(nomes[2]);
