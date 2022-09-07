---
outline: "deep"
---

# Méthodes physiques

## Les dosages par étalonnage

### Principe

Un dosage par étalonnage consiste à déterminer la concentration d'une espèce chimique en solution en comparant une grandeur physique (conductance, absorbance, tension électrique, etc.) de la solution avec la même grandeur physique mesurée pour des solutions étalons.

### Dosage par spectrophotométrie UV-Visible

Un spectre UV-Visible représente en général l’absorbance de l’espèce en fonction de la longueur d’onde du rayonnement.

#### Principe du dosage

::: danger Important
L’absorbance notée $A$, est une grandeur sans unité. Elle caractérise la capacité d’une solution colorée à absorber des radiations monochromatiques du spectre du visible. Dans un spectrophotomètre, la largeur de la cuve et la longueur d’onde étant fixées, l’absorbance obéit à la loi de Beer-Lambert :

$$
A=k×[X]
$$

$A$ sans unité, $k$ en $L·mol^{-1}$ (ou $L·g^{-1}$), $[X]$ en $mol·L^{-1}$ (ou $g·L^{-1}$)
:::

<div class="iframe-4-3">
<iframe src="https://phet.colorado.edu/sims/html/beers-law-lab/latest/beers-law-lab_en.html"
        allowfullscreen>
</iframe>
</div>

::: warning Attention
Pour avoir une meilleure précision sur le dosage on doit régler la longueur d’onde du spectrophotomètre sur la longueur d’onde d’absorption maximale de l’espèce chimique analysée.
:::

Courbe d’étalonnage : $A = f([X])$

__courbe à ajouter__

Le coefficient directeur de la droite correspond au coefficient de proportionnalité $k$ dans la loi de Beer-Lambert.

#### Lien entre couleur perçue et longueurs d’onde absorbées

Une espèce incolore n’absorbe aucune radiation du spectre visible.

Lorsqu’une espèce chimique n’absorbe que dans un seul domaine de longueurs d’onde du visible, sa couleur est la couleur complémentaire de celle des radiations absorbées.

__Exemple :__ les ions cuivre (II) absorbent dans le rouge et apparaissent cyan.

Lorsqu’une espèce chimique absorbe dans plusieurs domaines de longueurs d’onde, sa couleur résulte de la synthèse additive des couleurs complémentaires des radiations absorbées.

__Exemple :__ les ions chrome (III) qui absorbent dans le violet et dans l’orangé, donnent des solutions vertes.

### Dosage par conductimétrie

La conductivité notée $σ$ d’une solution caractérise la capacité de la solution à conduire le courant électrique. Elle s’exprime en siemens par mètre ($S·m^{-1}$).

Rappel : en solution, ce sont les ions qui conduisent le courant électrique ; seuls les ions (particules chargées) ont une influence sur la valeur de la conductivité de la solution.

::: danger Important
La loi de Kohlrausch énonce que dans une solution diluée, la conductivité électrique $σ_i$ d’un électrolyte $X_i$ (un soluté ionique) est proportionnelle à sa concentration $[X_i]$. La constante de proportionnalité $λ$, est la conductivité ionique molaire, spécifique de l’électrolyte.

$$
σ_i=λ_i×[X_i]
$$

- $σ_i$ en $S·m^{-1}$)
- $λ_i$ en $S·m^2·mol^{-1}$)
- $[X_i] en $mol·m{-3}$).
:::

::: danger Important
La conductivité totale $σ$ d’une solution est la somme de toutes les conductivités $σ_i$ de tous les ions présents.

$$
σ=\sumσ_i = \sum(λ_i×[X_i])
$$
:::

::: danger Important
La conductivité d’une solution ne contenant qu’un seul soluté ionique $X$ donnant des ions monovalents est proportionnelle à sa concentration $[X]$ et vérifie la loi de Kohlrausch :

$$
σ=k×[X]
$$

Cela permet de faire un dosage par étalonnage d’une solution contenant ce seul soluté.
:::

Courbe d’étalonnage : σ = f(C)

__courbe à ajouter__

Le coefficient directeur de la droite correspond au coefficient de proportionnalité $k$ dans la loi de Kohlrausch.

## Spectroscopie Infrarouge (IR)

Les composés organiques absorbent des radiations dans le domaine de l’UV-visible, mais aussi dans le domaine de l’infrarouge IR. L’absorption suit encore la loi de Beer-Lambert.

### Présentation d’un spectre IR

__En Ordonnées :__ transmittance $T$ (intensité lumineuse transmise par l’échantillon) : une transmittance de 1 (100%) signifie qu’il n’y a pas d’absorption. De ce fait, les bandes d’absorption d’un spectre IR pointent vers le bas.

__En Abscisses :__ nombre d’ondes $σ$ ($σ = 1/λ$), orienté de droite à gauche généralement en $cm^{-1}$.

### Types de vibration

Les vibrations des liaisons d’une molécule sont à l’origine de son spectre infrarouge (IR). 
Ainsi un spectre infrarouge renseigne sur la nature des liaisons présentes dans une molécule et sur ses groupes caractéristiques. 

### Bandes d’absorption caractéristiques

Les bandes d’absorption associées à chacune des liaisons rencontrées correspondent à un domaine de nombre d’ondes σ :
