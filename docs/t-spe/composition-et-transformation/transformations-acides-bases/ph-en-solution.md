---
titleTemplate: "Transformations acides-bases"
next: 'Chapitre suivant'
---

# Le pH en solution aqueuse

Toutes les espèces chimiques acides en solution aqueuse réagissent totalement ou en partie avec l'eau. En effet, en solution aqueuse, l'eau est l'espèce chimique majoritaire et est une espèce amphotère, à la fois acide et base. Ainsi pour acide quelconque $AH$, il existe une réaction qui se produit avec l'eau en tant que base de la forme :

$$
AH_{(aq)}+H_2O_{(l)}⇌A^-_{(aq)}+H_3O^+_{(aq)}
$$

La mesure de la concentration molaire en ions oxonium $H_3O^+$ nous aide donc à étudier n'importe quelle réaction acide-base en solution aqueuse.

## Définition du pH

Le pH est une grandeur sans unité, comprise entre 1 et 14, liée à la concentration molaire en ions oxonium $H_3 O^+$  en solution aqueuse. Le pH quantifie l'acidité d'une solution aqueuse.

::: danger Important
Le pH d'une solution aqueuse est défini par la relation :

$$
pH=-log(\frac{[H_3O^+]}{c^0})
$$
avec $[H_3O^+]$ en $mol·L^{-1}$ et $c^0=1,0 mol·L^{-1}$ la concentration standard.

On en déduit :
$$
[H_3O^+]=10^{-pH} \times c^0
$$
:::

::: info
Le concentration standard $c^0$ en $mol·L^{-1}$ permet à la relation d'être homogène.
:::

Par souci de simplification, on calculera généralement :
$$
pH=-log([H_3O^+])
$$
On en déduit :
$$
[H_3O^+]=10^{-pH}
$$

- Le pH d'une solution est d'autant plus faible, est donc d'autant plus acide, que la concentration en ion oxonium $H_3O^+$ est élevée.
- Le pH d'une solution est d'autant plus élevé, est donc d'autant plus basique, que la concentration en ion oxonium $H_3O^+$ est faible.

__Application :__

1. On mesure $[H_3O^+]=1,0×10^{-3} mol·L^{-1}$. Quelle est la valeur du pH ?
2. Le pH d'une solution aqueuse est de 9,5. Quelle est la concentration en ions $H_3O^+$ ?

::: details Afficher les réponses

1. Le pH est égal à $pH = -log(1,0×10^{-3})=3$.
2. La concentration en ions $H_3O^+$ est égale à $[H_3O^+]=10^{-9,5} = 3,2×10^{-10} mol·L^{-1}$.

:::

Vous pouvez observer les quantités d'ion oxonium $H_3O^+$ en fonction du pH, et vice-versa, dans l'animation suivante de l'Université du Colorado[^1] (voir _micro_ et _my solution_ dans l'animation) :

<div class="iframe-4-3">
    <iframe loading="lazy"
            src="https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_fr.html"
            allowfullscreen>
    </iframe>
</div>

## Mesure du pH

Le pH d’une solution peut se mesurer :

- À l’aide du papier pH, l’incertitude de la mesure est de l’ordre d’une unité
- À l’aide d’un pH-mètre étalonné, l’incertitude de la mesure est de l’ordre de 0,1 unité

La mesure du pH permet de classer les solutions en 3 catégories :

- Acide : pH < 7
- Neutre : pH = 7
- Basique : pH > 7

![Echelle de pH et quelques solutions associées](/images/cours/echelle-pH.png "Echelle de pH et quelques solutions associées. [Source<IconExternalLink/>](https://www.smpga.fr/leau-chez-moi/qualite-controlee/ph-de-leau/)")

[^1]: [https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_fr.html](https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_fr.html)
