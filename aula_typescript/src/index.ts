// import { buscaAlunoPorNota, listaDeAlunos, montaTurma, mostraArray, somaNotas, tirarPontoTurma } from "./exemplos/arrays";
// import { exemploIfLoop, exemploTipos } from "./exemplos/primitivos";
// import {estaProvado, filtraAlunoPorNota, imprimeNomeAluno, imprimeTurma, mostraAluno, retornaAluno, Turma} from "./exemplos/exemplo-objetos";
import { mediaPreco, nomeMaisBarato, filtraPorCod, filtraPorNome } from "./exemplos/exercicio";

//exemploIfLoop();
//exemploTipos(); 

//listaDeAlunos();

//const notas = [5,10,7];

//const somaDasNotas = somaNotas(notas);

//console.log('A soma é'+somaDasNotas);
//const turma = montaTurma();

//const novaTurma = filtraAlunoPorNota(turma,8);
//console.log(novaTurma);
 
//console.log(buscaAlunoPorNota(turma,10));

//console.log(tirarPontoTurma(turma,3));

/*const turma = [
    {nome:'Alvaro',nota:10},
    {nome:'Mario',nota:8},
    {nome:'Gabriel',nota:8, escrever:()=>{console.log('Escrevendo');
    }},
0];*/

//console.log(filtraAlunoPorNota(turma,8));

/*const turma: Turma ={
    professor:{
        nome: 'Alvaro',
        materia: 'Informatica',
        
    },
};*/
//mostraArray();
//mostraAluno();

// const alunoNovo = retornaAluno('Lucas',8);
//console.log(alunoNovo);
//estaProvado(10);
//estaProvado(0);

const api = {
    numeroPedido: '0001',
    cliente: 'Alvaro',
    items: [
      { produto: '0001', descricao: 'XBOX', preco: 5000 },
      { produto: '0002', descricao: 'PS5', preco: 5500 },
      { produto: '0003', descricao: 'PC', preco: 10000 },
      { produto: '0004', descricao: 'SWITCH', preco: 1000 },
      { produto: '0005', descricao: 'ATARI', preco: 500 },
    ],
};

const media = mediaPreco(api);
console.log(media);

const ele = nomeMaisBarato(api);
//console.log(ele);
const filtroCod = filtraPorCod(api.items,'0001');
console.log(filtroCod);

const filtraNome = filtraPorNome(api.items,'SWITCH');
console.log(filtraNome);



