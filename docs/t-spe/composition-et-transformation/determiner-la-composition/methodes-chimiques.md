---
titleTemplate: "Déterminer la composition d’un système chimique"
---

# Méthodes chimiques

Les méthodes chimiques, notamment les titrages, sont basées sur des réactions chimiques qui permettent de déterminer la quantité de matière d'une espèce chimique dans un système. L'espèce chimique dont on souhaite déterminer la quantité de matière est donc consommée. Les méthodes chimiques sont des méthodes destructives.

## Principe du titrage

### La réaction support du titrage

::: danger Important

Au cours d’un dosage par titrage, une réaction chimique a lieu entre deux espèces chimiques :

- Une espèce chimique dont on souhaite déterminer la concentration : le réactif titré (A)
- Une espèce chimique de concentration connue : le réactif titrant (B)

$$
\ce{aA + bB -> cC + dD}
$$

Cette réaction est appelée réaction support du titrage. Elle doit être __rapide, totale et unique__.
:::

Exemple : Le titrage de $\ce{H3O+}$ par $\ce{HO-}$ a comme réaction support du titrage $\ce{H3O+_{(aq)} + OH-_{(aq)} -> 2H2O_{(l)}}$

### L’équivalence du titrage

Lors d’un titrage, on introduit progressivement une solution contenant le réactif titrant B dans un volume $V_A$ contenant le réactif titré A.

::: danger Important
A l’équivalence, la quantité de matière du réactif titré $n_i(A)$ initialement présente dans le volume $V_A$, et la quantité de matière de réactif titrant $n_E(B)$ versée, sont dans les proportions stœchiométriques de la réaction support du titrage.

Les deux réactifs sont donc limitant à l'équivalence. D’où  

$$
\frac{n_i(A)}{a}=\frac{n_E(B)}{b}
$$
:::

::: info Remarque
Avant l’équivalence, le réactif limitant est le réactif titrant ; après l’équivalence, le réactif limitant est le réactif titré.
:::

Voici un exemple d'évolution des quantités de matière pour la réaction $\ce{A + B -> C + D}$

![Evolution des quantités de matière](/images/cours/evolution-quantites-matiere-titrage.png "Exemple d'évolution des quantités de matière lors d'un titrage")

Si l'on peut repérer l'équivalence, on peut alors déterminer la quantité de matière initiale du réactif titré $n_i(A)$ ou sa concentration initiale $[A]_i$. Il faut pour cela pourvoir repérer le volume de réactif titrant $V_E$ versé à l'équivalence. En effet connaissant $V_E$ et $[B]$, on peut calculer $n_E(B)$ et donc $n_i(A)$. Si l'on connaît en plus le volume initialement présent $V_A$, on peut calculer la concentration initiale $[A]_i$.

$$
\begin{aligned}
n_i(A) &= n_E(B) \times \frac{a}{b} \\
n_i(A) &= [B] \times V_E \times \frac{a}{b} \\
[ A ]_i \times V_A &= [B] \times V_E \times \frac{a}{b} \\
[ A ]_i &= [B] \times \frac{V_E}{V_A} \times \frac{a}{b} \\
\end{aligned}
$$

__Exercice :__ Soit la réaction support du titrage $\ce{A + B -> C + D}$. On introduit progressivement 25 mL du solution de réactif titrant $\ce{B}$, de concentration $[B]=0,10 mol.L^{-1}$, dans un volume $V_A=10 mL$ contenant le réactif titré $\ce{A}$. L'évolution des quantités de matière est présentée dans le graphique précédent.

1. Déterminer, graphiquement, le volume de réactif titrant $V_E$ versé à l'équivalence.
2. Déterminer, par le calcul, la quantité de matière $n_i(A)$ du réactif titré $\ce{A}$, présente initialement dans le volume $V_A$. Comparer à la valeur initiale $n(A)$, sur le graphique.
3. Déterminer la concentration initiale $[A]_i$ du réactif titré $\ce{A}$, présente initialement dans le volume $V_A$.

::: details Afficher les réponse

1. On observe que les réactifs A et B sont tous les deux limitant pour $V_E=12 mL$
2. On calcule $n_i(A)$ en utilisant la relation à l'équivalence :
   $$
   \begin{aligned}
    n_i(A) &= [B] \times V_E \\
    &= 0,10 (mol.L^{-1})\times 12 \times 10^{-3} (L) \\
    &= 1,2 \times 10^{-3} mol
    \end{aligned}
   $$
   Sur le graphique, on observe bien que $n_i(A)=1,2 \times 10^{-3} mol$. (_Attention, il est indiqué que l'unité sur l'axe des ordonnées est $10^{-3} mol$_)

3. On calcule $[A]_i$ :
   $$
   \begin{aligned}
    \\ [A]_i &= \frac{n_i(A)}{V_A} \\
    &= \frac{1,2 \times 10^{-3} (mol)}{10 \times 10^{-3} (L)} \\
    &= 1,2 \times 10^{-1} mol.L^{-1}
    \end{aligned}
   $$

:::

### Montage général

Le montage d'un titrage est le même pour tous les titrages.

![Montage d'un titrage](/images/cours/montage-titrage.png "Montage d'un titrage (savoir légender)")

Un __titrage par suivi__ permet d'exploiter d'exploiter l'évolution d'une grandeur physique au cours du titrage qui présente une brusque varation au passage par l'équivalence.

- On ajoute un indicateur coloré dans la solution titrée s’il s’agit d’un titrage colorimétrique
- On place un pH-mètre dans le bécher contenant la solution titrée s’il s’agit d’un titrage pH-métrique
- On place un conductimètre dans le bécher contenant la solution titrée s’il s’agit d’un titrage conductimétrique.

## Titrage conductimétrique

### Principe du titrage conductimétrique

Lors d’un titrage conductimétrique, on trace une courbe représentant la conductivité $σ$ en fonction du volume de solution titrante versée. L’équivalence est repérée par un changement de pente. On relève généralement la valeur de la conductivité tous les $1,0 mL$ puis $0,5 mL$ autour du du changement de pente. L’abscisse du point d’intersection des deux droites indique le volume équivalent.

![Titrage conductimétrique](/images/cours/methodes-titrage-conductimetrique.png "Méthode de lecture pour un titrage conductimétrique")

### Exploitation de la courbe σ=f(V)

Le changement de pente peut s’expliquer en examinant les conductivités molaires ioniques des espèces chimiques en solution.

La valeur de la conductivité $σ$ peut être calculée à partir des conductivités molaires ioniques $λ_i$ des ions qui composent cette solution (voir tableau ci-dessous donné à titre indicatif), ainsi que de leur concentration $[X]_i$ (loi de Kohlrausch) :

$$
\sigma_{solution}=\sum_i \lambda_i \times [X]_i
$$
 
| Ions | Conductivité molaire ionique ($mS.m^2.mol^{-1}$) |
|:----:|:-----------------------------------------:|
| $\ce{H3O+}$ | 35 |
| $\ce{OH-}$ | 20  |
| $\ce{Na+}$ | 5,0 |
| $\ce{Cl-}$ | 7,6  |

## Titrage pH-métrique

### Principe du titrage pH-métrique

Lors d’un titrage pH-métrique, on trace une courbe représentant le pH en fonction du volume de solution titrante versé. L’équivalence est repérée par une variation brutale de pH que l’on appelle saut de pH. On relève généralement la valeur de pH tous les $1,0 mL$ puis $0,5 mL$ autour du saut de pH versés.

### Exploitation de la courbe pH=f(V)

Pour déterminer le volume équivalent à partir de la courbe pH-métrique on peut utiliser :

- __La méthode des tangentes__:
  Tracer deux tangentes parallèles de part et d'autre du saut de pH, puis de tracer une troisième droite équidistante et parallèle aux deux premières. Le volume équivalent $V_E$ est le volume pour lequel la droite présente un point d'intersection avec la courbe $pH=f(V_{titrant})$.

- __La méthode de la dérivée__:
  A l'aide d'un logiciel, la courbe dérivée de la courbe de titrage $\frac{d(pH)}{d(V)}$. Le volume équivalent $V_E$ est le volume pour lequel on observe un pic sur la courbe dérivée

![Méthodes pour le titrage pH-métrique](/images/cours/methodes-titrage-pH.png "Méthodes de lecture pour un titrage pH-métrique")

## Titrage colorimétrique

### Principe du titrage colorimétrique

Lors d’un titrage colorimétrique, l’équivalence est repérée grâce à un changement de couleur du milieu réactionnel qui est dû à une espèce chimique appelée indicateur colorée de fin de réaction. Cet indicateur de fin de réaction peut être un indicateur coloré acido-basique rajouté en petite quantité dans le milieu réactionnel, un réactif coloré qui disparaît ou un produit coloré qui apparait au cours de la réaction chimique de titrage.

### Choix de l’indicateur coloré acido-basique

Un indicateur coloré acido-basique est un couple acido-basique dont la forme acide et la forme basique n’ont pas la même couleur.

Pour choisir convenablement un indicateur coloré pour un titrage colorimétrique il faut que le pH à l’équivalence soit contenu dans la zone de virage de l’indicateur coloré.

Exemple de quelques indicateurs colorés usuels :  

| Indicateur coloré         | Couleur de la forme acide | Zone de virage | Couleur de la forme basique |
| ------------------------- | ------------------------- | -------------- | --------------------------- |
| Hélianthine               | Rouge                     | 2,4-4,4        | Jaune                       |
| Bleu de bromothymol (BBT) | Jaune                     | 6,0-7,6        | Bleu                        |
| Phénolphtaléine           | Incolore                  | 8,2-9,9        | Rose                        |
