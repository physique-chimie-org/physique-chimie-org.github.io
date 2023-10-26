---
titleTemplate: "Mouvement dans un champ uniforme"
next: false
---

# Aspect énergétique

## Travail d'une force

### Travail d'une force de norme constante

Le travail $W(\vec{F})_{A \rightarrow B}$ d'une force $\vec{F}$ s'exerçant sur un système lors d'un déplacement de A à B est égal au produit scalaire de la force $\vec{F}$ par le vecteur déplacement $\vec{AB}$.

$$
\begin{aligned}
W(\vec{F})_{A \rightarrow B} &= \vec{F} \cdot \vec{AB} \\
&= F \times AB \times \cos(\vec{F}, \vec{AB})
\end{aligned}
$$

- W>0, Le travail est moteur : La force agit dans le sens du déplacement
- W<0, Le travail est résistant : La force s’oppose au déplacement
- W=0, Le travail est nul : La force est perpendiculaire au déplacement

### Travail du poids

Le poids $\vec{P}$ d'un système de masse constante $m$, dans un champ de pesanteur uniforme, est un vecteur de norme, de direction et de sens constants.

Le travail du poids $\vec{P}$ d'un système de masse $m$ lors d'un déplacement de A à B est égal à l'inverse de la variation de l'énergie potentielle de pesanteur du système.

$$
\begin{aligned}
W(\vec{P})_{A \rightarrow B} &= \vec{P} \cdot \vec{AB} \\
&= P \times AB \times \cos(\vec{P}, \vec{AB}) \\
&= m g \times AB \times \cos(\vec{P}, \vec{AB}) \\
&= m g \times AB (z_A - z_B) \\
&= - m g \times \Delta z \\
&= - \Delta E_{pp}
\end{aligned}
$$

Dans le champ de pesanteur, le travail du poids d’un objet ne dépend que des altitudes du point de départ et d’arrivée, et non du chemin suivi. Le poids est donc une force conservative.

### Travail d'une force électrique

La force électrique $\vec{F_e}$ s'exerçant sur une charge $q$ dans un champ électrique uniforme est un vecteur de norme, de direction et de sens constants.

Le travail d'une force électrique $\vec{F_e}$ s'exerçant sur un système de charge $q$ lors d'un déplacement de A à B est égal au produit de la charge $q$ par la tension électrique $U_{AB}$ entre les points A et B.

$$
\begin{aligned}
W(\vec{F_e})_{A \rightarrow B} &= \vec{F_e} \cdot \vec{AB} \\
&= F_e \times AB \times \cos(\vec{F_e}, \vec{AB}) \\
&= q E \times AB \times \cos(\vec{E}, \vec{AB}) \\
&= q U_{AB}
\end{aligned}
$$

Dans un champ électrique uniforme, le travail d'une force électrique ne dépend que des potentiels des points de départ et d’arrivée, et non du chemin suivi. La force électrique est donc une force conservative.

### Travail d'une force de frottement

La force de frottement $\vec{f}$ s'exerçant sur un système est un vecteur de norme constante, mais de direction et de sens qui dépendent du chemin suivi.

Lors d’un mouvement rectiligne de longueur AB, le travail d’une force de frottement $\vec{f}$ lors d’un déplacement de A à B est donné par la relation suivante :

$$
W(\vec{f})_{A \rightarrow B} = - f \times AB
$$

Le travail d’une force de frottement est toujours résistant, il est donc toujours négatif. Le travail d’une force de frottement, contrairement au travail du poids et du travail d’une force électrique, dépend du chemin suivi. La force de frottement est donc une force non conservative. En revanche il est simple de le calculer car il est proportionnel à la longueur du déplacement. Ainsi, si le déplacement est connu, par exemple d'une longueur $L$, il est possible de calculer le travail de la force de frottement en multipliant la force de frottement par la longueur du déplacement. On obtient ainsi $W(\vec{f}) = - f \times L$.


## Conservation de l'énergie mécanique

En physique, l'énergie mécanique d'un système est la somme de l'énergie cinétique et de l'énergie potentielle de ce système. Lorsque les forces non conservatives s’exerçant sur un système sont négligeables ou nulles, l’énergie mécanique de ce système se conserve. Il y a une conversion entre les formes cinétique et potentielle de l’énergie mécanique.

La variation d’énergie mécanique ΔE_m au cours d’un déplacement est nulle :

$$
\Delta E_m = \Delta E_c + \Delta E_p = 0
$$

::: warning Important
L'énergie potentielle n'est pas seulement l'énergie potentielle de pesanteur. Elle peut être électrique, élastique, etc. $\Delta E_p$ est donc la variation de toutes les formes d'énergie potentielle.
:::

## Théorème de l'énergie cinétique

La variation d’énergie cinétique d’un système se déplaçant d’un point A à un point B est égal à la somme du travail des forces s’exerçant sur le système.

$$
\Delta E_c = \sum W_{A \rightarrow B}
$$

::: warning Important
Il est important de remarquer que toutes les forces qui s'exercent sur le système sont prises en compte dans le théorème de l'énergie cinétique. Cela inclut donc les forces conservatives et les forces non conservatives.
:::