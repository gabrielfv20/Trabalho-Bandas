import bandas from "../bandas";

var base_bandas = bandas;
var houveAlteracao = false;

export function listarBandas() {
    console.debug(`${base_bandas.length} bandas listados`);
    base_bandas.sort((a, b) => a?.nome.localeCompare(b?.nome));
    return base_bandas;
}

export function selecionarBanda({ id }) {
    const bandaselecionado = base_bandas.find(bandas => bandas.id === id);
    console.debug(`bandas ${bandaselecionado} selecionado pela chave ${id}`);
}

export function inserirBanda({ novaBanda }) {
    console.debug(`bandas ${novaBanda} cadastrado`);
    const novoId = Math.floor(Math.random() * 100000);
    novaBanda.id = novoId;
    base_bandas.push(novaBanda);
    houveAlteracao = true;
}

export function alterarBanda({ banda }) {
    const alterarBanda = base_bandas.find(banda => banda.id === id);
    base_bandas.push(banda);
    houveAlteracao = true;
}

export function excluirBanda({ id }) {
    console.debug(`Banda ${id} excluído`);
    base_bandas = base_bandas.filter(function(value, index, arr) {
        return value?.id !== id;
    });
    mudouAlgo = true;
    console.debug(`bandas após exclusão ${base_bandas}`);
}