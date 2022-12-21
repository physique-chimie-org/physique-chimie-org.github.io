---
titleTemplate: "Transferts macroscopiques d’énergie"
---

# Transfert thermique par conduction

## Conductivité thermique

La conductivité thermique d’un matériau, notée $λ$, caractérise le transfert thermique par conduction qui s’effectue dans le sens des températures décroissantes. Son unité est le $W.m^{-1}.K^{-1}$.

## Résistance thermique

La résistance thermique d’une paroi est un indicateur de sa capacité à empêcher le passage de la chaleur. Plus la résistance thermique d’une paroi est élevée, moins elle est perméable à la chaleur et plus elle est efficace pour maintenir une température constante à l’intérieur d’un bâtiment par exemple.

Elle est définie par la relation suivante :

$$
R_{th}=\frac{e}{λ.S}
$$

- $R_{th}$  : Résistance thermique de la paroi en $K.W^{-1}$
- $e$ :  Epaisseur du matériau en mètre (m)
- $λ$ :  Conductivité thermique du matériau en $W.m^{-1}.K^{-1}$
- $S$ : Aire de la surface d’échange en $m^2$

::: info Remarque 1
La résistance thermique de plusieurs parois accolées est la somme des résistances thermiques de chaque paroi.
:::
::: info Remarque 2
On peut noter $h=\frac{λ}{e}$ appelé coefficient de Newton, en $W.m^{-2}.K^{-1}$.
:::

## Flux thermique à travers une paroi

Le flux thermique par conduction est le transfert de chaleur à travers une paroi solide en raison de la différence de température entre les deux côtés de la paroi. Le transfert de chaleur se produit à travers la paroi, sans mouvement de particules, d’une source chaude vers une source froide.

Lorsqu’une paroi solide est chaude d’un côté et froide de l’autre, les atomes ou les molécules qui se trouvent du côté chaud ont plus d’énergie que ceux qui se trouvent du côté froid. Lorsque ces atomes ou ces molécules vibrent, ils peuvent transmettre leur énergie à d’autres atomes ou molécules qui sont à proximité, ce qui peut contribuer à réchauffer la paroi du côté froid.

Le flux thermique dépend de plusieurs facteurs, notamment la conductivité thermique de la paroi solide, la différence de température entre les deux côtés de la paroi, la surface et l’épaisseur de la paroi. Plus la conductivité thermique de la paroi est élevée, plus le flux thermique sera important. De même, plus la différence de température est grande, plus la surface de la paroi est grande et plus l’épaisseur est faible, plus le flux thermique sera important.

Il est définit par la relation suivante :

$$
\begin{align}
ϕ &= h \times S \times (T_2-T_1) \\
&=\frac{λ\times S \times (T_2-T_1)}{e} \\
&=\frac{T_2-T_1}{R_{th}}
\end{align}
$$

- $ϕ$ : Flux thermique à travers la paroi en Watts ($W$)
- $e$ : Epaisseur du matériau en mètre ($m$)
- $λ$ : Conductivité thermique du matériau en $W.m^{-1}.K^{-1}$
- $S$ : Aire de la surface d’échange en $m^2$
- $R_{th}$ : Résistance thermique de la paroi en $K.W^{-1}$
- $T_1$ et $T_2$ Températures de part et d’autre de la paroi en K ou en °C
