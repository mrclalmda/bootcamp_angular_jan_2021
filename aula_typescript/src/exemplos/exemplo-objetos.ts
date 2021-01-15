export function filtraAlunoPorNota(turma:Array<any>,nota:number){
    return turma.filter((item)=>item.nota===nota);
}

export interface Aluno {
    nome:string;
    nota:number;
}

export interface Professor{
    nome?:string;
    materia?:string;
    eLegal:Function
}

export interface Turma {
    professor?: Professor
    alunos?: ALunos;
}

export type ALunos = Array<Aluno>;

export function imprimeTurma(turma:Turma) {
    console.log('Turma é composta por');
    console.log('Professor ' +turma.professor?.nome);     
    console.log(turma.professor?.eLegal);
}

export function mostraAluno(){
    const aluno1:Aluno ={ 
        nome:'Alvaro', nota:8
    };

    const aluno2 = {...aluno1, nota:9, endereco: 'Av'};

    aluno2.nome = 'Mario';

    console.log(aluno2);
    console.log(aluno1);

}

export function imprimeNomeAluno(aluno:Aluno){
    const {nome: nomedoAluno,nota} = aluno;

    console.log('o nome do aluno é '+nomedoAluno);
    console.log(`O nome do aluno é ${nomedoAluno}`);
    
    
}

export function retornaAluno(nome:string,nota:number): Aluno{
    
    const textoAprovado = nota >= 7 ? 'Aluno aprovado' : 'Aluno reprovado'; 
    
    const lAprovado = nota >= 7 || nome === 'Alvaro';

    return {
        nome,
        nota,
    }
    
}

export function estaProvado (nota?: number){
//    const notaAvaliada = nota!== undefined&&nota!==undefined ? nota:100;
    const notaAvaliada = nota ?? 100
    const textoNota = notaAvaliada > 7 ? 'Esta aprovado':'Esta reprovado';
    console.log(notaAvaliada,textoNota);
    
}
