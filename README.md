======================
Algoritmo de Dijkstra.
======================

Algoritmo de Dijkstra. También llamado algoritmo de caminos mínimos, es un algoritmo para la determinación del
camino más corto dado un vértice origen al resto de vértices en un grafo con pesos en cada arista.
La idea subyacente en este algoritmo consiste en ir explorando todos los caminos más cortos que parten del 
vértice origen y que llevan a todos los demás vértices; cuando se obtiene el camino más corto desde el 
vértice origen hasta el resto de los vértices que componen el grafo, el algoritmo se detiene. Se trata
de una especialización de la búsqueda de costo uniforme y, como tal, no funciona en grafos con aristas 
de coste negativo al elegir siempre el nodo con distancia menor, pueden quedar excluidos de la búsqueda
nodos que en próximas iteraciones bajarían el costo general del camino al pasar por una arista con costo negativo.

Problema planteado sale a partir del siguiente grafo.

.. image:: imagen.png

Lenguaje
========
* Javascript.


Creditos
========

* Dikstra_.

.. _Dikstra: https://www.youtube.com/watch?v=4I7W5WUQQQI

Autor
=====
* Noe <noe.tipo@gmail.com> https://github.com/noetipo
