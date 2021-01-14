export function filtraAlunoPorNota(turma:Array<any>,nota:number){
    return turma.filter((item)=>item.nota===nota);
}

export interface Aluno {
    nome:string;
    nota:number;
}

export type ALunos = Array<Aluno>;