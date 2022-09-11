---
outline: deep
---

# Méthodes physiques

## Les dosages par étalonnage

### Principe

Un dosage par étalonnage consiste à déterminer la concentration $[X]_S$ d'une espèce chimique $X$ en solution en comparant une grandeur physique (conductivité, absorbance, tension électrique, etc.) de la solution avec la même grandeur physique mesurée pour des solutions étalons, de concentration $[X]$ connues

On peut alors tracer une courbe d'étalonnage à partir des mesures, de la grandeur physique mesurée en fonction de la concentration.

![courbe d'étalonnage](/images/cours/courbe-dosage-etalonnage.png "Courbe d'étalonnage")

Pour déterminer la concentration $[X]_S$ :

- on mesurer la grandeur physique pour la solution de concentration $[X]_S$
- on détermine la concentration $[X]_S$ :
  - graphiquement en lisant directement la courbe d'étalonnage
  - par le calcul à partir de l'équation de la courbe d'étalonnage

Il n'y a pas de réaction chimique lors d'un dosage par étalonnage. Ainsi l'espèce chimique $X$ dont on mesure la concentration $[X]$ n'est pas modifiée par le dosage. Le dosage par étalonnage n'est donc pas une méthode destructive.

### Dosage par spectrophotométrie UV-Visible

#### Principe du dosage

Lorsqu'une lumière UV-Visible traverse une solution, une partie de la lumière est absorbée par les espèces chimiques en solution. L’absorbance notée $A$, est une grandeur sans unité. Elle caractérise la capacité d’une solution colorée à absorber des radiations monochromatiques du spectre du visible. Plus l’absorbance est grande, plus la quantité de lumière absorbée est importante.

::: danger Important
Dans un spectrophotomètre, la largeur de la cuve et la longueur d’onde étant fixées, on peut écrire pour une espèce chimique donnée de concentration $[X]$, la loi de Beer-Lambert :

$$
A=k\times[X]
$$

$A$ sans unité, $k$ en $L·mol^{-1}$ (ou $L·g^{-1}$), $[X]$ en $mol·L^{-1}$ (ou $g·L^{-1}$)
:::

<div class="iframe-4-3">
<iframe src="https://phet.colorado.edu/sims/html/beers-law-lab/latest/beers-law-lab_fr.html"
        allowfullscreen>
</iframe>
</div>

::: warning Attention
Pour avoir une meilleure précision sur le dosage on doit régler la longueur d’onde du spectrophotomètre sur la longueur d’onde d’absorption maximale de l’espèce chimique analysée.
:::

#### Courbe d'étalonnage en spectrophotométrie

- Courbe d’étalonnage : $A = f([X])$
- Le coefficient directeur de la droite correspond au coefficient de proportionnalité $k$ dans la loi de Beer-Lambert.

#### Lien entre couleur perçue et longueurs d’onde absorbées

![cercle-chromatique](/images/cours/cercle-chromatique.png "Cercle chromatique")

Une espèce incolore n’absorbe aucune radiation du spectre visible.

Lorsqu’une espèce chimique n’absorbe que dans un seul domaine de longueurs d’onde du visible, sa couleur est la couleur complémentaire de celle des radiations absorbées.

__Exemple :__ les ions cuivre (II) absorbent dans le $\textcolor{red}{rouge}$ et apparaissent $\textcolor{cyan}{cyan}$.

Lorsqu’une espèce chimique absorbe dans plusieurs domaines de longueurs d’onde, sa couleur résulte de la synthèse additive des couleurs complémentaires des radiations absorbées.

__Exemple :__ les ions chrome (III) qui absorbent dans le $\textcolor{purple}{violet}$ et dans l’$\textcolor{orange}{orange}$, donnent des solutions $\definecolor{light-blue}{rgb}{0,1,0.6} \textcolor{light-blue}{bleu-vert}$.

### Dosage par conductimétrie

La conductivité notée $σ$ d’une solution caractérise la capacité de la solution à conduire le courant électrique. Elle s’exprime en siemens par mètre ($S·m^{-1}$).

::: tip Rappel
en solution, ce sont les ions qui conduisent le courant électrique ; seuls les ions (particules chargées) ont une influence sur la valeur de la conductivité de la solution.
:::

::: danger Important
La loi de Kohlrausch énonce que dans une solution diluée, la conductivité électrique $σ_i$ d’un électrolyte $X_i$ (un soluté ionique) est proportionnelle à sa concentration $[X_i]$. La constante de proportionnalité $λ$, est la conductivité ionique molaire, spécifique de l’électrolyte.

$$
σ_i=λ_i\times[X_i]
$$

- $σ_i$ en $S·m^{-1}$)
- $λ_i$ en $S·m^2·mol^{-1}$)
- $[X_i]$ en $mol·m^{-3}$).

La conductivité totale $σ$ d’une solution est la somme de toutes les conductivités $σ_i$ de tous les ions présents.

$$
\begin{align}
σ_{solution} &= σ_1 + σ_2 + ... + σ_n \\
&= \sum_i σ_i \\
&= \sum_i λ_i\times[X_i]
\end{align}
$$
:::

::: warning Attention
Les unités peuvent être source d'erreur en conductivité. En effet, les volumes sont souvent exprimés en $m^3$.

On peut retenir :

- $1 mol·L^{-1} = 10^3 mol·m^{-3}$ et $1 mol·m^{-3} = 10^{-3} mol·L^{-1}$
- $1 L = 10^{-3} m^3$ et $1 m^3 = 10^{3} L$
:::

::: danger Important
La conductivité d’une solution ne contenant qu’un seul soluté ionique $X$ donnant des ions monovalents est proportionnelle à sa concentration $[X]$ et vérifie la loi de Kohlrausch :

$$
σ=k\times[X]
$$

Cela permet de faire un dosage par étalonnage d’une solution contenant ce seul soluté.
:::

__Exemple :__ Soit une solution de $KCl$ de concentration apportée $C_{KCl}$. On suppose le soluté complètement dissous. On a alors $[K^+]=[Cl^-]=C_{KCl}$

On peut alors écrire :

$$
\begin{align}
σ_{solution} &= σ_{K^+} + σ_{Cl^-} \\
&= λ_{K^+}\times[Cl^-] + λ_{Cl^-}\times[K^+] \\
&= λ_{K^+}\times C_{KCl} + λ_{Cl^-}\times C_{KCl} \\
&= (λ_{K^+} + λ_{Cl^-})\times C_{KCl} \\
&= k \times C_{KCl}
\end{align}
$$

#### Courbe d'étalonnage en conductimétrie

- Courbe d’étalonnage : $σ=f([X])$
- Le coefficient directeur de la droite correspond au coefficient de proportionnalité $k$ dans la loi de Kohlrausch.

## Spectroscopie Infrarouge (IR)

Les composés organiques absorbent des radiations dans le domaine de l’UV-visible, mais aussi dans le domaine de l’infrarouge IR. L’absorption suit encore la loi de Beer-Lambert.

### Présentation d’un spectre IR

![Spectre IR du 2-methyl-propan-1-ol](/images/cours/spectre-IR.png "Spectre IR du 2-methyl-propan-1-ol. [Source<IconExternalLink />](https://sdbs.db.aist.go.jp/sdbs/cgi-bin/direct_frame_top.cgi)")

__En Ordonnées :__ transmittance $T$ (intensité lumineuse transmise par l’échantillon) : une transmittance de 1 (100%) signifie qu’il n’y a pas d’absorption. De ce fait, les bandes d’absorption d’un spectre IR pointent vers le bas.

__En Abscisses :__ nombre d’ondes $σ$ ($σ = 1/λ$), orienté de droite à gauche généralement en $cm^{-1}$.

### Types de vibration

Les vibrations des liaisons d’une molécule sont à l’origine de son spectre infrarouge (IR). 
Ainsi un spectre infrarouge renseigne sur la nature des liaisons présentes dans une molécule et sur ses groupes caractéristiques. 

### Bandes d’absorption caractéristiques

Les bandes d’absorption associées à chacune des liaisons rencontrées correspondent à un domaine de nombre d’ondes σ.
Pour les consulter et s'entrainer à identifier des molécules, vous pouvez utiliser le site [http://chimie.ostralo.net/spectreIR/](http://chimie.ostralo.net/spectreIR/).
