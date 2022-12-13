---
titleTemplate: "Transferts macroscopiques d'énergie"
---

# Transfert thermique par conduction

## Conductivité thermique

La conductivité thermique d’un matériau, notée $λ$, caractérise le transfert thermique par conduction qui s’effectue dans le sens des températures décroissantes. Son unité est le $W.m^{-1}.K^{-1}$.

## Résistance thermique

La résistance thermique d’une paroi traduit sa capacité à s’opposer au passage de la chaleur.

Elle est définie par :

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

Le flux thermique traversant une paroi par conduction est donné par :
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
- $R_{th}$ : Résistance thermique de la paroi en $K.W^{-1}$
- $T_1$ et $T_2$ Températures de part et d’autre de la paroi en K ou en °C
