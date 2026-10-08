const nomes = ["lucas", "joao", "eduardo", "vitor", "maria", "ana", "leonardo"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)