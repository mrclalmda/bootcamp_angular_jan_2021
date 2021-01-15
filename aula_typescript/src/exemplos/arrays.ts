const alunos = ['Alvaro', 'Mario', 'Gabriel', 112];

export function listaDeAlunos(){
/*    for (let contador = 0 ; contador <alunos.length; contador++){
        const element = alunos[contador];
        console.log(element);
        
    }

    for (const elemento of alunos) {
        console.log(elemento);
        
    }

    alunos.forEach((itemdoArray) => {
        console.log(itemdoArray);
        
    });
*/

meuForEach(alunos,mostraAluno);

}


function mostraAluno(item:any) {
//    console.log(item);
    
}

function meuForEach(colecao: Array<any>, callback: Function){
    for(const elemento of colecao){
        callback(elemento);
    }
}

export function somaNotas(notas: Array<number>) {
/*    let soma = 0;
    for (const nota of notas) {
        soma = soma + nota;
    }
    return soma;
*/
     notas.reduce( function(soma,nota){
         return soma + nota
        });
}

class Aluno {
    constructor(private nome:string, public nota:number){}
}

export function montaTurma(){
    return[
        new Aluno ('Alvaro',10),
        new Aluno ('Mario', 8),
        new Aluno ('Gabriel', 8),
    ];
}

export function filtraAlunoPorNota (turma:Array<Aluno>,nota:number){
    /*let turmaFiltrada:any = [];

    for (const aluno of turma) {
        if (callback(aluno) {
            turmaFiltrada.push(aluno);
        }
    }

    return turmaFiltrada;*/

    return turma.filter((aluno) => aluno.nota ===nota);
}

export function buscaAlunoPorNota(turma:Array<Aluno>, nota:number){
    return turma.find((aluno)=>aluno.nota===nota);
}

export function tirarPontoTurma (turma:Array<Aluno>, pontoNegativo:number){
    let turmaNegativa:Array<Aluno> = [];

    turmaNegativa = turma.map((aluno)=> {
        aluno.nota -= pontoNegativo;
        return aluno;
    });

    return turmaNegativa;
}

export function mostraArray() {
    const cliente1 = ['Alvaro', 'Gabriel'];
    const cliente2 = [...cliente1];

    const [primeiro,outroItem,maisUM] = cliente1; 

    cliente2.push('Ricardo');

    console.log(cliente2);
    console.log(cliente1); 
    console.log(primeiro,outroItem,maisUM);
    
}

