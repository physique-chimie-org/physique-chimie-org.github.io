---
titleTemplate: "Mécanique des fluides"
---

# Statique des fluides

La statique des fluides, ou hydrostatique, est l'étude des fluides immobiles.

## Fluide

Un fluide est un milieu matériel parfaitement déformable. On regroupe sous cette appellation les liquides, les gaz et les plasmas. Les gaz et les plasmas sont très compressibles, tandis que les liquides le sont très peu.

## Pression

### Définition

La pression est une grandeur physique qui traduit les collisions dans un système thermodynamique. Elle est définie classiquement comme l'intensité de la force pressante qu'exerce un fluide par unité de surface.

Dans le système international d'unités (S.I.), la pression est exprimée en pascal (Pa). La pression est homogène à une force par unité de surface, soit $1 \, \text{Pa} = 1 \, \text{N/m}^2$ ou encore $1 \, \text{Pa} = 1 \, \text{kg·m}^{-1}\text{·s}^{-2}$.

### Pression dans un fluide au repos : Loi de l'hydrostatique

::: danger Important
La pression dans un fluide homogène incompressible, au repos, dans un champ de pesanteur uniforme, est donnée par la relation suivante :

$$p = P_0 + \rho \cdot g \cdot h$$

où :

- $P_0$ est la pression à la surface du fluide,
- $\rho$ est la masse volumique du fluide,
- $g$ est l'intensité du champ de pesanteur,
- $h$ est la hauteur de la colonne de fluide au-dessus du point considéré.

Au sein du fluide, on peut établir :

$$ p2 - p1 = \rho \cdot g \cdot (h2 - h1) $$

où $p1$ et $p2$ sont les pressions à deux profondeurs différentes $h1$ et $h2$.
:::

::: warning Attention
Dans les exercices, il est parfois indiqué les altitudes des points considérés, au lieu de leurs profondeurs. Ainsi si $z1$ et $z2$ sont les altitudes de deux points, alors la relation entre les pressions à ces points est donnée par :
$$ p2 - p1 = \rho \cdot g \cdot (z1 - z2) $$
:::

Vous pouvez observer l'influence de différents paramètres sur la pression dans un fluide au repos, dans l’animation suivante de l’Université du Colorado[^1] :

<div class="iframe-4-3">
    <iframe loading="lazy"
        src="https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_fr.html"
        allowfullscreen>
    </iframe>
</div>

[^1]: [https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_fr.html](https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_fr.html)

### Poussée d'Archimède

La pression dans un fluide dépend de la profondeur. La pression est donc plus forte sur la partie inférieure d'un objet immergé que sur sa partie supérieure. Ainsi les forces pressantes sont plus intenses sur la partie inférieure de l'objet que sur sa partie supérieure. La somme vectorielle de ces forces pressantes, exercées par le fluide sur l'objet, est appelée poussée d'Archimède. Elle est dirigée vers le haut et s'exerce au centre de gravité du volume de fluide déplacé par l'objet, appelé centre de poussée.

::: danger Important
Dans un champ de pesanteur uniforme, la poussée d'Archimède, notée $\vec{\Pi}_A$ , exercée par le fluide sur un objet immergé, ou partiellement immergé, est donnée par la relation suivante :

$$\vec{\Pi}_A = - \rho \cdot V \cdot \vec{g}$$

où :

- $\rho$ est la masse volumique du fluide,
- $\vec{g}$ est le champ de pesanteur,
- $V$ est le volume de fluide déplacé par l'objet.
  :::

::: warning Attention
Le volume de fluide déplacé correspond au volume de la partie immergée de l'objet dans le fluide, qui n'est pas nécessairement égal au volume total de l'objet. Par exemple, si un objet flotte à la surface d'un fluide, il est partiellement immergé, le volume de fluide déplacé est ainsi inférieur au volume total de l'objet.
:::

Vous pouvez observer l'influence de différents paramètres sur la poussée d'Archimède, dans l’animation suivante de l’Université du Colorado[^2] :

<div class="iframe-4-3">
    <iframe loading="lazy"
        src="https://phet.colorado.edu/sims/html/buoyancy/latest/buoyancy_fr.html"
        allowfullscreen>
    </iframe>
</div>

[^2]: [https://phet.colorado.edu/sims/html/buoyancy/latest/buoyancy_fr.html](https://phet.colorado.edu/sims/html/buoyancy/latest/buoyancy_fr.html)
