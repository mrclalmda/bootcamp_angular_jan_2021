export function exemploTipos(){
    const numero:number = 5;
    const nome:string = 'Marcelo';
    const ehHumano:boolean = false;

    console.log('o numero é '+numero.toString());
    console.log('O nome é ' + nome);
    console.log('Ele é humano? '+ehHumano); 
    
}

export function exemploIfLoop(){
    let contador = 0;

    while (contador <= 5) {
        let nome = 'Marcelo';
    
        if (contador === 2 ) {
            console.log('chegou ao dois');
            
        } else{
            console.log('nao chegou');
            
        }

        console.log('Contador '+ contador);
        
        contador++;
    }
} 