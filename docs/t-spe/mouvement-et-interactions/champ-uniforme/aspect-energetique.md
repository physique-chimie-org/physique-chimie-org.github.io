---
titleTemplate: "Mouvement dans un champ uniforme"
---

# Aspect énergétique

## Travail d'une force

### Travail d'une force de norme constante

::: danger Important
Le travail $W(\overrightarrow{F})_{A \rightarrow B}$ d'une force $\overrightarrow{F}$ s'exerçant sur un système lors d'un déplacement de A à B est égal au produit scalaire de la force $\overrightarrow{F}$ par le vecteur déplacement $\overrightarrow{AB}$.

$$
\begin{aligned}
W(\overrightarrow{F})_{A \rightarrow B} &= \overrightarrow{F} \cdot \overrightarrow{AB} \\
&= F \times AB \times \cos(\overrightarrow{F}, \overrightarrow{AB})
\end{aligned}
$$

:::

- W>0, Le travail est moteur : La force agit dans le sens du déplacement
- W<0, Le travail est résistant : La force s’oppose au déplacement
- W=0, Le travail est nul : La force est perpendiculaire au déplacement

### Travail du poids

Le poids $\overrightarrow{P}$ d'un système de masse constante $m$, dans un champ de pesanteur uniforme, est un vecteur de norme, de direction et de sens constants.

Le travail du poids $\overrightarrow{P}$ d'un système de masse $m$ lors d'un déplacement de A à B est égal à l'inverse de la variation de l'énergie potentielle de pesanteur du système.

$$
\begin{aligned}
W(\overrightarrow{P})_{A \rightarrow B} &= \overrightarrow{P} \cdot \overrightarrow{AB} \\
&= P \times AB \times \cos(\overrightarrow{P}, \overrightarrow{AB}) \\
&= m g \times AB \times \cos(\overrightarrow{P}, \overrightarrow{AB}) \\
&= m g \times AB (z_A - z_B) \\
&= - m g \times \Delta z \\
&= - \Delta E_{pp}
\end{aligned}
$$

Dans le champ de pesanteur, le travail du poids d’un objet ne dépend que des altitudes du point de départ et d’arrivée, et non du chemin suivi. Le poids est donc une force conservative.

### Travail d'une force électrique

La force électrique $\overrightarrow{F_e}$ s'exerçant sur une charge $q$ dans un champ électrique uniforme est un vecteur de norme, de direction et de sens constants.

Le travail d'une force électrique $\overrightarrow{F_e}$ s'exerçant sur un système de charge $q$ lors d'un déplacement de A à B est égal au produit de la charge $q$ par la tension électrique $U_{AB}$ entre les points A et B.

$$
\begin{aligned}
W(\overrightarrow{F_e})_{A \rightarrow B} &= \overrightarrow{F_e} \cdot \overrightarrow{AB} \\
&= F_e \times AB \times \cos(\overrightarrow{F_e}, \overrightarrow{AB}) \\
&= q E \times AB \times \cos(\overrightarrow{E}, \overrightarrow{AB}) \\
&= q U_{AB}
\end{aligned}
$$

Dans un champ électrique uniforme, le travail d'une force électrique ne dépend que des potentiels des points de départ et d’arrivée, et non du chemin suivi. La force électrique est donc une force conservative.

### Travail d'une force de frottement

La force de frottement $\overrightarrow{f}$ s'exerçant sur un système est un vecteur de norme constante, mais de direction et de sens qui dépendent du chemin suivi.

Lors d’un mouvement rectiligne de longueur AB, le travail d’une force de frottement $\overrightarrow{f}$ lors d’un déplacement de A à B est donné par la relation suivante :

$$
W(\overrightarrow{f})_{A \rightarrow B} = - f \times AB
$$

Le travail d’une force de frottement est toujours résistant, il est donc toujours négatif. Le travail d’une force de frottement, contrairement au travail du poids et du travail d’une force électrique, dépend du chemin suivi. La force de frottement est donc une force non conservative. En revanche il est simple de le calculer car il est proportionnel à la longueur du déplacement. Ainsi, si le déplacement est connu, par exemple d'une longueur $L$, il est possible de calculer le travail de la force de frottement en multipliant la force de frottement par la longueur du déplacement. On obtient ainsi $W(\overrightarrow{f}) = - f \times L$.

## Conservation de l'énergie mécanique

En physique, l'énergie mécanique d'un système est la somme de l'énergie cinétique et de l'énergie potentielle de ce système.

::: danger Important
Lorsque le **travail des forces non conservatives** s’exerçant sur un système est **négligeable ou nul**, l’énergie mécanique de ce système se conserve.

La variation d’énergie mécanique $\Delta E_m$ d’un système se déplaçant d’un point A à un point B est nulle :

$$
\begin{aligned}
\Delta E_m &= E_m(B) - E_m(A) = 0 \\
&= \Delta E_c + \Delta E_p = 0 \\
&= E_c(B) - E_c(A) + E_p(B) - E_p(A) = 0
\end{aligned}
$$

:::

::: warning Important
L'énergie potentielle $E_p$ n'est pas seulement l'énergie potentielle de pesanteur $E_{pp}$. Elle peut être électrique, élastique, etc. $\Delta E_p$ est donc la variation de toutes les formes d'énergie potentielle.
:::

## Théorème de l'énergie cinétique

::: danger Important
La variation d’énergie cinétique d’un système se déplaçant d’un point A à un point B est égal à la somme du travail des forces s’exerçant sur le système.

$$
\Delta E_c = E_c(B) - E_c(A) = \sum W_{A \rightarrow B}
$$

:::

::: warning Important
Il est important de remarquer que toutes les forces qui s'exercent sur le système sont prises en compte dans le théorème de l'énergie cinétique. Cela inclut donc les forces conservatives et les forces non conservatives.
:::
