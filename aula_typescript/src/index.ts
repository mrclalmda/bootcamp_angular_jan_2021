import { buscaAlunoPorNota, listaDeAlunos, montaTurma, somaNotas, tirarPontoTurma } from "./exemplos/arrays";
import { exemploIfLoop, exemploTipos } from "./exemplos/primitivos";
import {filtraAlunoPorNota} from "./exemplos/exemplo-objetos";


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

const turma = [
    {nome:'Alvaro',nota:10},
    {nome:'Mario',nota:8},
    {nome:'Gabriel',nota:8, escrever:()=>{console.log('Escrevendo');
    }},
];

console.log(filtraAlunoPorNota(turma,8));
