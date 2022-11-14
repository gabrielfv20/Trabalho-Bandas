import bandas from "../bandas";

var base_bandas = bandas;
var mudouAlgo = false;

export function listarBandas() {
    console.debug(`${base_bandas.length} bandas listados`);
    base_bandas.sort((a, b) => a?.nome.localeCompare(b?.nome));
    return base_bandas;
}

export function selecionarBandas({ id }) {
    const bandaselecionado = base_bandas.find(bandas => bandas.id === id);
    console.debug(`bandas ${bandaselecionado} selecionado pela chave ${id}`);
}

export function inserirBandas({ novoBandas }) {
    console.debug(`bandas ${novoBandas} cadastrado`);
    const novaChave = Math.floor(Math.random() * 1000000);
    novoBandas.id = novaChave;
    base_bandas.push(novoBandas);
    mudouAlgo = true;
}

export function alterarBanda({ bandas }) {
    console.info(`Não implementado`);
}

export function excluirBanda({ id }) {
    console.debug(`Banda ${id} excluído`);
    base_bandas = base_bandas.filter(function(value, index, arr) {
        return value?.id !== id;
    });
    mudouAlgo = true;
    console.debug(`bandas após exclusão ${base_bandas}`);
}