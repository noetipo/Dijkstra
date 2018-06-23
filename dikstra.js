let nodos_solucion = [
    {'id': "a", 'distancia_final': 0, 'distancia_temporal': 0},
    {'id': "b", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "c", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "d", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "e", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "f", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "g", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "h", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "i", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "j", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "k", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "l", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "m", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "n", 'distancia_final': null, 'distancia_temporal': null},
    {'id': "o", 'distancia_final': null, 'distancia_temporal': null},
];


let nodos = [
    {
        'id': 'a',
        'nodos': [
            {'id': 'b', 'distancia': 8},
            {'id': 'd', 'distancia': 5},
            {'id': 'e', 'distancia': 4}
        ],
    },

    {
        'id': 'b',
        'nodos': [
            {'id': 'a', 'distancia': 8},
            {'id': 'c', 'distancia': 3},
            {'id': 'e', 'distancia': 12},
            {'id': 'f', 'distancia': 4},
        ],
    },
    {
        'id': 'c',
        'nodos': [

            {'id': 'b', 'distancia': 3},
            {'id': 'f', 'distancia': 9},
            {'id': 'g', 'distancia': 11},
        ],
    },
    {
        'id': 'd',
        'nodos': [

            {'id': 'a', 'distancia': 5},
            {'id': 'e', 'distancia': 9},
            {'id': 'h', 'distancia': 6},
        ],
    },
    {
        'id': 'e',
        'nodos': [
            {'id': 'a', 'distancia': 4},
            {'id': 'b', 'distancia': 12},
            {'id': 'd', 'distancia': 9},
            {'id': 'f', 'distancia': 3},
            {'id': 'i', 'distancia': 8},
            {'id': 'j', 'distancia': 5},
        ],
    },
    {
        'id': 'f',
        'nodos': [
            {'id': 'b', 'distancia': 4},
            {'id': 'c', 'distancia': 9},
            {'id': 'e', 'distancia': 3},
            {'id': 'g', 'distancia': 1},
            {'id': 'k', 'distancia': 8},
        ],
    },
    {
        'id': 'g',
        'nodos': [
            {'id': 'c', 'distancia': 11},
            {'id': 'f', 'distancia': 1},
            {'id': 'k', 'distancia': 8},
            {'id': 'l', 'distancia': 7},
        ],
    },
    {
        'id': 'h',
        'nodos': [
            {'id': 'd', 'distancia': 6},
            {'id': 'i', 'distancia': 2},
            {'id': 'm', 'distancia': 7},

        ],
    },
    {
        'id': 'i',
        'nodos': [
            {'id': 'e', 'distancia': 8},
            {'id': 'h', 'distancia': 2},
            {'id': 'j', 'distancia': 10},
            {'id': 'm', 'distancia': 6},
        ],
    },
    {
        'id': 'j',
        'nodos': [
            {'id': 'e', 'distancia': 5},
            {'id': 'i', 'distancia': 10},
            {'id': 'k', 'distancia': 6},
            {'id': 'n', 'distancia': 9},
        ],
    },
    {
        'id': 'k',
        'nodos': [
            {'id': 'f', 'distancia': 8},
            {'id': 'g', 'distancia': 8},
            {'id': 'j', 'distancia': 6},
            {'id': 'l', 'distancia': 5},
            {'id': 'o', 'distancia': 7},
        ],
    },
    {
        'id': 'l',
        'nodos': [
            {'id': 'g', 'distancia': 7},
            {'id': 'k', 'distancia': 5},
            {'id': 'o', 'distancia': 6},
        ],
    },
    {
        'id': 'm',
        'nodos': [
            {'id': 'h', 'distancia': 7},
            {'id': 'i', 'distancia': 6},
            {'id': 'n', 'distancia': 2},
        ],
    },
    {
        'id': 'g',
        'nodos': [
            {'id': 'c', 'distancia': 11},
            {'id': 'f', 'distancia': 1},
            {'id': 'k', 'distancia': 8},
            {'id': 'l', 'distancia': 7},
        ],
    },
    {
        'id': 'n',
        'nodos': [
            {'id': 'j', 'distancia': 9},
            {'id': 'm', 'distancia': 2},
            {'id': 'o', 'distancia': 12},
        ],
    },
    {
        'id': 'o',
        'nodos': [
            {'id': 'k', 'distancia': 7},
            {'id': 'l', 'distancia': 6},
            {'id': 'n', 'distancia': 12},
        ],
    },
];


function recuperar_nodo(id) {
    for (let n of nodos_solucion) {
        // console.log(n);
        if (n.id === id) {
            return n
        }
    }
}

function nodo_menor() {
    let nodo_minimo = {};
    let valor_minimo = 5000000000;
    for (let n of nodos_solucion) {
        if (n.distancia_final === null && n.id !== 'a') {
            if (n.distancia_temporal !== null) {
                if (n.distancia_temporal < valor_minimo) {
                    valor_minimo = n.distancia_temporal;
                    nodo_minimo = n;
                }
            }
        }
    }

    return nodo_minimo;
}

function buscar_coneccion(id) {
    for (let n of nodos) {
        if (n.id === id) {
            return n;
        }
    }
}

function print_solucion(nodos) {
    for (let a of nodos) {
        console.log(a);
    }

}

function buscar_camino_corto() {
    let nodo_inicial = nodos[0];
    let nodo_final = nodos_solucion[nodos_solucion.length - 1];
    let nodo_referencia = nodo_final;
    let camino = [];
    while (nodo_referencia.id !== nodo_inicial.id) {
        let nodo_temporal = buscar_coneccion(nodo_referencia.id);
        for (let sub_nodo of nodo_temporal.nodos) {
            let nodo_comparacion = recuperar_nodo(sub_nodo.id);
            if (nodo_comparacion.distancia_final === nodo_referencia.distancia_final - sub_nodo.distancia) {
                nodo_referencia = nodo_comparacion;
                camino.push(nodo_referencia);
            }
        }
    }  // console.log(n);
    print_solucion(camino)

}

function main() {
    let nodo_inicial = nodos[0];
    let nodo_referencia = nodo_inicial;
    let nodo_t = nodos_solucion[0];
    let cont = 0;
    while (cont !== 14) {
        for (let sub_nodo of nodo_referencia.nodos) {
            let diccionario = recuperar_nodo(sub_nodo.id);
            if (diccionario.distancia_temporal === null || (sub_nodo.distancia + nodo_t.distancia_final < diccionario.distancia_temporal && nodo_t.distancia_final !== null)) {
                diccionario.distancia_temporal = sub_nodo.distancia + nodo_t.distancia_final;
            }
        }
        nodo_t = nodo_menor();
        nodo_t.distancia_final = nodo_t.distancia_temporal;
        nodo_referencia = buscar_coneccion(nodo_t.id);
        cont = cont + 1;
    }

    //print_solucion(nodos_solucion);
    buscar_camino_corto();

}

main();