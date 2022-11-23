import bandas from "../bandas";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export async function  inserirBanda({ novaBanda }) {
    console.debug(`bandas ${novaBanda} cadastrado`);
    const salvarBanda = await AsyncStorage.mergeItem("id", JSON.stringify(novaBanda));
    novaBanda.id = salvarBanda;
    base_bandas.push(novaBanda);
    houveAlteracao = true;
}

export function alterarBanda({ banda }) {
    base_bandas.get(banda);
    const bandaAtualizada = banda;
    base_bandas.push(bandaAtualizada)
    console.debug(`banda ${banda} alterada!`);
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