//imprimeTurma(turma);

/* Dadpum retorno do api crie funcoes para a seguintes situacoes

media de preco do pedido CHECK
nome do produto mais barato
filtro por codigo do produto
busca de produto por nome
*/

export interface Item {
    produto?:string;
    descricao?:string;
    preco?:number;
}

export type Items = Array<Item>

export interface Api{
    numeroPedido?:string;
    cliente?:string;
    items?:Items;
}

export function mediaPreco (api:Api){
    const qntdRegistro = api.items?.length ?? 0
    //console.log(qntdRegistro);

    const totalPedidos = api.items?.reduce((vlAcumulado, vlAtual)=> {
        
        vlAtual.preco = vlAtual.preco ?? 0
        //console.log("vl Acumulado "+vlAcumulado);
        //console.log("vl Atual "+vlAtual.preco);        
        
        return vlAcumulado + vlAtual.preco
    },0) ?? 0
    console.log(totalPedidos);


    return totalPedidos/qntdRegistro    
}

export function nomeMaisBarato(api:Api) {
    let nove:number = 999999

    api.items?.forEach(elemento => {
        
        elemento.preco = elemento.preco ?? 0
        nove = elemento.preco < nove ? elemento.preco : nove
        console.log(nove);
        
    });       
    //console.log(nove );
    
}

export function filtraPorCod(api:Items, produto:string){
    return api.find((api)=>api.produto===produto);    
}

export function filtraPorNome(api:Items, descricao:string){
    return api.find((api)=>api.descricao===descricao);    
}