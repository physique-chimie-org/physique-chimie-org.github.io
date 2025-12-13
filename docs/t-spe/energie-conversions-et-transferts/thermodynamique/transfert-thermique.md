---
titleTemplate: "Transferts macroscopiques d’énergie"
---

# Transfert thermique

## Différents modes de transferts thermiques

Il existe trois modes de transfert thermique :

- Le transfert thermique par conduction se fait de proche en proche. Il n’y a pas de déplacement de matière. C’est le seul mode de transfert dans les solides.

  Exemple 1 : Une barre métallique chauffée par une flamme

- Le transfert thermique par convection se fait par des mouvements de matière (courant de convection) au sein d’un fluide (gaz ou liquide).
  Exemple 2 : Un vêtement limite les courants de convection.

- Tout corps émet un rayonnement électromagnétique dont les caractéristiques dépendent de sa température. Ce rayonnement se propage même dans le vide.

  Exemple 3 : La chaleur des braises se propage par rayonnement. La moitié de la chaleur dissipée par le corps humain l’est par rayonnement.

![Modes de transfert thermique](/images/cours/mode-transfert-thermique.png "Modes de transfert thermique")

## Le flux thermique

Un transfert thermique peut se faire plus ou moins rapidement. Le flux thermique permet d’estimer la vitesse à laquelle l’énergie est échangée :

$$
ϕ_{moy}=\frac{Q}{Δt}
$$

- $ϕ_{moy}$ : Flux thermique en Watt (W)
- Q : Energie échangée sous forme de chaleur en Joules (J)
- Δt : Durée du transfert thermique en secondes (s)

::: info Remarque
Comme $Q$, le signe de $ϕ_{moy}$ dépend du sens du transfert thermique. Il est positif lorsque le système reçoit de l'énergie et négatif lorsqu’il en perd.
:::

## Transfert thermique conductif et conducto-convectif

### Conductivité thermique

La conductivité thermique d’un matériau, notée $λ$, caractérise le transfert thermique par conduction qui s’effectue dans le sens des températures décroissantes. Son unité est le $W.m^{-1}.K^{-1}$.

### Résistance thermique

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

### Flux thermique conducto-convectif

Lorsque le matériau solide (ex : mur) est en contact avec un fluide (ex : air), il apparaît un phénomène de convection au voisinage de la surface du solide. Le transfert thermique par conduction à travers la paroi solide est alors associé à un transfert thermique par convection entre la surface du solide et le fluide.

Cet échange conducto-convectif est décrit par la loi phénoménologique de Newton :

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
