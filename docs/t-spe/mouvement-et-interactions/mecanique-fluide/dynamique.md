---
titleTemplate: "Mécanique des fluides"
next: false
---

# Dynamique des fluides

La dynamique des fluides, ou hydrodynamique, est l'étude des fluides en mouvement.

## Propriétés des fluides et écoulement

Un fluide, contrairement à un solide, est un milieu déformable et l'étude de son mouvement est complexe ; on étudie ainsi son **écoulement**.

Lors de cet écoulement les particules suivent des trajectoires appelées **lignes de courant** et **tubes de courant** (ensemble de lignes de courant). Pour pouvoir établir des relations mathématiques permettant de décrire l'écoulement, nous allons faire appel aux hypothèses suivantes :

- Le fluide est **incompressible**, c'est-à-dire que sa masse volumique $\rho$ est constante sous l'effet de la pression appliquée.
- Le fluide est **parfait**, c'est-à-dire non-visqueux et donc que les forces de frottement sont négligeables.
- Le fluide est en **régime permanent**, c'est-à-dire que toutes les propriétés du fluide (vitesse, pression, etc.) sont constantes dans le temps en chaque point de la ligne de courant.

### Débit volumique

::: danger Important
Le débit volumique, noté $D_v$, est défini comme le volume de fluide qui traverse une section $S$ donnée par unité de temps. Pour un fluide **incompressible**, il est donné par la relation suivante :

$$D_v = S \cdot v$$

où :

- $S$ est la section traversée,
- $v$ est la vitesse d'écoulement du fluide.
  :::

::: danger Important
Le débit volumique $D_v$ d'un fluide **incompressible**, **parfait** et en **régime permanent**, se conserve le long d'une ligne de courant.

$$D_v = S \cdot v = \text{constante}$$
:::

Ainsi, si le fluide s'écoule à travers une section $S_1$ avec une vitesse $v_1$ et à travers une section $S_2$ avec une vitesse $v_2$, alors on peut établir la relation suivante :

$$S_1 \cdot v_1 = S_2 \cdot v_2$$

On peut ainsi observer que si la section d'écoulement diminue, alors la vitesse d'écoulement augmente, et inversement.

## Relation de Bernoulli

La première formulation de la relation de Bernoulli apparaît dans _Hydrodynamica - De viribus et motibus fluidorum commentarii_ de Daniel Bernoulli (première édition en 1738). C'est une relation fondamentale en dynamique des fluides qui exprime la conservation de l'énergie dans un fluide soumis uniquement aux forces de pression et de pesanteur, le long d'une ligne de courant.

::: danger Relation de Bernoulli

Un fluide **incompressible**, **parfait** et en **régime permanent**, soumis uniquement aux forces de pression et de pesanteur le long d'une ligne de courant, vérifie la relation de Bernoulli suivante :

$$\frac{1}{2} \cdot \rho \cdot v^2 + \rho \cdot g \cdot z + P = \text{constante}$$

où :

- $\rho$ est la masse volumique du fluide,
- $v$ est la vitesse d'écoulement du fluide en un point d'étude de la ligne de courant,
- $g$ est l'intensité du champ de pesanteur,
- $z$ est l'altitude au point d'étude de la ligne de courant,
- $P$ est la pression du fluide au point d'étude de la ligne de courant.

:::

Ainsi, si l'on considère deux points d'une ligne de courant, notés 1 et 2, alors on peut établir la relation suivante :

$$\frac{1}{2} \cdot \rho \cdot v_1^2 + \rho \cdot g \cdot z_1 + P_1 = \frac{1}{2} \cdot \rho \cdot v_2^2 + \rho \cdot g \cdot z_2 + P_2$$

::: info Remarque
On peut exprimer la relation de Bernoulli de différentes manières, en fonction des termes que l'on souhaite mettre en avant. Par exemple, il est possible de l'exprimer ainsi :

$$\frac{1}{2} \cdot v^2 + g \cdot z + \frac{P}{\rho} = \text{constante}$$
:::

D'après cette relation, on peut par exemple observer qu'à une altitude donnée, une augmentation de la vitesse du fluide entraîne une diminution de la pression, et inversement.

Lorsque $v=0$, on retrouve la relation liant la pression et l'altitude dans un fluide au repos, que nous avons vu en [**statique des fluides**](statique.md#pression-dans-un-fluide-au-repos).

### Relation de Bernoulli dans le cas d'une vidange : Relation de Torricelli

Dans le cas d'une vidange, c'est-à-dire lorsque le fluide s'écoule d'un réservoir vers l'extérieur, la relation de Bernoulli peut être simplifiée. En effet, si l'on considère que le fluide s'écoule à partir d'un point situé à une altitude $z_1$, à la surface du réservoir à la pression $P_1$, par une section $S_1$ et que le point de sortie du fluide est situé plus bas à une altitude $z_2$ par une section $S_2 \ll S_1$, alors on peut faire les hypothèses suivantes :

- D'après la conservation du débit, si $S_2 \ll S_1$, alors la vitesse $v_1 \ll v_2$,
- La pression à la surface du fluide dans le réservoir est égale à la pression atmosphérique, soit $P_1 = P_0$,
- La pression à la sortie du fluide est également égale à la pression atmosphérique, soit $P_2 = P_0$.

Relation de Bernoulli entre les points 1 et 2 :

$$
\begin{align}
    \frac{1}{2} \cdot \rho \cdot v_2^2 + \rho \cdot g \cdot z_2 + P_2 &= \frac{1}{2} \cdot \rho \cdot v_1^2 + \rho \cdot g \cdot z_1 + P_1 \\
    \frac{1}{2} \cdot \rho \cdot v_2^2 + \rho \cdot g \cdot z_2 + \textcolor{red}{P_0} &= \frac{1}{2} \cdot \rho \cdot v_1^2 + \rho \cdot g \cdot z_1 + \textcolor{red}{P_0} \\
    \frac{1}{2} \cdot \textcolor{red}{\rho} \cdot (v_2^2 - v_1^2) &= \textcolor{red}{\rho} \cdot g \cdot (z_2 - z_1) \\
    \textcolor{red}{v_2^2 - v_1^2} &= 2 \cdot g \cdot (z_2 - z_1) \\
    v_2^2 &= 2 \cdot g \cdot (z_1 - z_2) \\
\end{align}
$$

On en déduit le relation de Torricelli :

$$v_2 = \sqrt{2 \cdot g \cdot (z_1 - z_2)}$$

### Application de la relation de Bernoulli : L'effet Venturi

L'effet Venturi est un phénomène physique qui se produit lorsqu'un fluide s'écoule horizontalement à travers une section rétrécie d'un conduit. Selon la relation de Bernoulli, lorsque le fluide traverse cette section rétrécie, sa vitesse augmente et sa pression diminue.
