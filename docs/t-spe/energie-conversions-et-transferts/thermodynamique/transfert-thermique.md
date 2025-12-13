---
titleTemplate: "Transferts macroscopiques d’énergie"
---

# Transfert thermique

## Conductivité thermique

La conductivité thermique d’un matériau, notée $λ$, caractérise le transfert thermique par conduction qui s’effectue dans le sens des températures décroissantes. Son unité est le $W.m^{-1}.K^{-1}$.

## Résistance thermique

La résistance thermique d’une paroi est un indicateur de sa capacité à empêcher le passage de la chaleur. Plus la résistance thermique d’une paroi est élevée, moins elle est perméable à la chaleur et plus elle est efficace pour maintenir une température constante à l’intérieur d’un bâtiment par exemple.

Elle est définie par la relation suivante :

$$
R_{th}=\frac{e}{λ.S}
$$

- $R_{th}$ : Résistance thermique de la paroi en $K.W^{-1}$
- $e$ : Epaisseur du matériau en mètre (m)
- $λ$ : Conductivité thermique du matériau en $W.m^{-1}.K^{-1}$
- $S$ : Aire de la surface d’échange en $m^2$

::: info Remarque
La résistance thermique de plusieurs parois accolées est la somme des résistances thermiques de chaque paroi.
:::

## Flux thermique conducto-convectif

Lorsque le matériau solide (ex : mur) est en contact avec un fluide (ex : air), il apparaît un phénomène de convection au voisinage de la surface du solide. Le transfert thermique par conduction à travers la paroi solide est alors associé à un transfert thermique par convection entre la surface du solide et le fluide.

Cet échange conducto-convectif est décrit par la loi de Newton :

$$
ϕ = h \times S \times (\theta_2-\theta_1)
$$

- $ϕ$ : Flux thermique conducto-convectif ($W$)
- $h$ : Coefficient d’échange thermique surfacique en $W.m^{-2}.K^{-1}$
- $\theta_1$ et $\theta_2$ : Températures de part et d’autre de la paroi en $K$

Le flux thermique est d'autant plus important que le coefficient d’échange thermique surfacique $h$ est grand, que la surface d'échange $S$ est grande, et que la différence de température entre les deux côtés de la paroi est élevée.

On peut également exprimer le flux thermique en fonction de la résistance thermique $R_{th}$ :

$$
ϕ = \frac{\theta_2-\theta_1}{R_{th}}
$$

- $ϕ$ : Flux thermique conducto-convectif ($W$)
- $R_{th} = \frac{1}{h\cdot S}$ : Résistance thermique $K.W^{-1}$
- $\theta_1$ et $\theta_2$ : Températures de part et d’autre de la paroi en $K$
