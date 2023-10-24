---
titleTemplate: "Evolution spontanée d’un système chimique"
next: false
---

# Force des acides et des bases

## Constante d’acidité

Un acide $AH_{(aq)}$ réagit avec l’eau $H_2O_{(l)}$ selon la réaction d’équation :

$$
AH_{(aq)}+H_2O_{(l)}⇄A^-_{(aq)}+H_3O^+_{(aq)}
$$

Si cette réaction est totale, alors cet acide est dit fort. On utilise alors le symbole → pour l’équation de la réaction. Si cette réaction est équilibrée, c’est un acide faible.

Si cette réaction est équilibrée, on peut alors définir une constante d’équilibre $K$. Dans ce cas précis correspondant à la réaction de l’acide avec l’eau, cette constante est appelée constante d’acidité $K_A$.

::: danger Important
Un couple acide faible/base faible $AH_{(aq)}/A^-_{(aq)}$ est donc caractérisé par sa constante d’acidité $K_A$, correspondant à la réaction de l’acide avec l’eau et ne dépendant que de la température :

$$
K_A=\frac{[A^-]_{eq}​⋅[H_3O^+]_{eq}}{c∘⋅[AH]_{eq}}
$$

:::

Pour le couple de l’eau $H_2O_{(l)}/HO^-_{ (aq) }$ cette constante d’acidité est appelée **produit ionique de l’eau** noté $K_e$, et correspond à la réaction de l’autoprotolyse de l’eau $\ce{H2O_{ (l) } + H2O_{ (l) }⇄H3O+_{ (aq) } + HO-_{ (aq) }}$ :

$$
K_e=\frac{[HO^-]_{eq}​⋅[H_3O^+]_{eq}}{c∘²}
$$

Pour une température donnée, le produit ionique de l’eau a la même valeur pour toutes les solutions aqueuses. À 25 °C, $K_e=1,0\times 10^{-14}$.

::: warning Attention aux confusions
Soit la réaction suivante $AH_{ (aq) } + HO^-_{ (aq) } ⇄ A^-_{ (aq) }+H_2O_{ (l) }$

La constante d’équilibre $K$ de cette réaction est $K=\frac{[A^-]_{eq}⋅c∘}{[AH]_{eq}⋅[HO^-]_{eq}}$.

La constante d’acidité du couple $AH_{(aq)}/A^-_{(aq)}$ reste $K_A=\frac{[A^-]_{eq}​⋅[H_3O^+]_{eq}}{c∘⋅[AH]_{eq}}$.

La constante d’acidité du couple $H_2O_{(l)}/HO^-_{ (aq) }$ reste $K_e=\frac{[HO^-]_{eq}​⋅[H_3O^+]_{eq}}{c∘²}$.
:::

## Échelle des pKA

Le pKA d’un couple acide-base est défini par :

$$
pKA=-log(KA)
$$

on en déduit :

$$
K_A=10^{-pKA}
$$

Plus le pKA du couple est grand (ou plus la constante d’acidité est petite), moins l’acide se dissocie dans l’eau.

En effet, plus $[AH]_{ eq }$ est grand par rapport à $[A^-]_{ eq }$​, plus la constante $K_A$ est petite. Ainsi, plus le pKA d’un couple est grand, plus l’acide du couple est faible et la base conjugée forte. Inversement, plus le pkA d’une couple est faible, plus l’acide du couple est fort et la base conjugée faible.

On peut alors définir une échelle des pkA, permettant de comparer la force des acides et des bases.

![Échelle des pKA](/images/cours/echelle-pkA.png "pKA de quelques couples acide-base courants ")

## Diagramme de prédominance

A partir de la relation de la constante d’acidité, on peut écrire une relation liant le pH et le pkA d’un couple acide base.

$$
\begin{align}
K_A &=\frac{[A^-]_{eq}​⋅[H_3O^+]_{eq}}{c∘⋅[AH]_{eq}} \\
-log(K_A) &=-log(\frac{[A^-]_{eq}​⋅[H_3O^+]_{eq}}{c∘⋅[AH]_{eq}}) \\
pkA &= -log(\frac{[A^-]_{eq}}{[AH]_{eq}}) -log(\frac{[H_3O^+]_{eq}}{c∘}) \\
pkA &= -log(\frac{[A^-]_{eq}}{[AH]_{eq}}) + pH \\
pkA - pH &= -log(\frac{[A^-]_{eq}}{[AH]_{eq}}) \\
pH-pkA &= log(\frac{[A^-]_{eq}}{[AH]_{eq}}) \quad (1)
\end{align}
$$

Une autre méthode :

$$
\begin{align}
K_A &=\frac{[A^-]_{eq}​⋅[H_3O^+]_{eq}}{[AH]_{eq}⋅c∘} \\
10^{-pkA} &=\frac{[A^-]_{eq}}{[AH]_{eq}}\times 10^{-pH} \\
10^{-pkA}\times 10^{+pH} &= \frac{[A^-]_{eq}}{[AH]_{eq}} \\
10^{pH-pkA} &= \frac{[A^-]_{eq}}{[AH]_{eq}} \quad (2)
\end{align}
$$

::: info Remarque
Il est possible de passer de la relation $(1)$ à la relation $(2)$ directement et vice-versa :

$$
\begin{align}
pH-pkA &= log(\frac{[A^-]_{eq}}{[AH]_{eq}}) \quad (1) \\
10^{pH-pkA} &= 10^{log(\frac{[A^-]_{eq}}{[AH]_{eq}})} \\
10^{pH-pkA} &= \frac{[A^-]_{eq}}{[AH]_{eq}} \quad (2)
\end{align}


$$

:::

On remarque alors que :

- Si $pH = pKA$ alors $[A^-]_{eq} = [AH]_{eq}$
- Si $pH > pKA$ alors $[A^-]_{eq} > [AH]_{eq}$. On dit que $A^-$ prédomine dans la solution.
- Si $pH < pKA$ alors $[A^-]_{eq} < [AH]_{eq}$. On dit que $AH$ prédomine dans la solution.

On résume ces informations par un diagramme de prédominance :

![diagramme de prédominance](/images/cours/diagramme-predominance.png "diagramme de prédominance d’un couple acide base quelconque")

::: warning Attention
Il est important de noter que l’acide peut prédominer en pH basique (>7) et que la base peut prédominer à pH acide (<7). En effet cela dépend du pkA.

Par exemple pour le couple $CH_3COOH/CH_3COO^-$, le pka à 25°C est $pkA = 4,8$. Ainsi à $pH = 6$, pH acide car < 7, c’est la base $CH_3COO^-$ qui prédomine car $pH > pkA$.
:::

En réalité il est peu approprié de parler de "prédominance" lorsque le pH est compris entre $pkA - 1$ et $pkA + 1$. En effet, dans cette zone le rapport $\frac{[AH]_{eq}}{[A^-]_{eq}}$ est compris entre $10^{-1}$ et $10^1$.

Lorsque que l’acide et la base d’un couple sont de couleurs différentes, la solution n’est alors ni de la couleur de l’acide ni de la couleur de la base; c’est un mélange des deux.

C’est le cas des indicateurs colorés acide base. Cette zone où le pH est compris entre $pkA - 1$ et $pkA + 1$ est appelée **zone de virage**.

Dans le cadre d’un titrage colorimétrique acide base, il faut choisir un indicateur coloré acide base dont la zone de virage est aux alentour du pH à l’équivalence. En d’autres termes, le pkA du couple acide base $HInd/Ind^-$ de l’indicateur coloré doit être aux alentour du pH à l’équivalence.

## Les espèces amphotères

Les espèces chimiques amphotères appartiennent à plusieurs couples acide base. C’est le cas de l’eau par exemple ou encore des acides α-aminé.

Pour les acides α-aminés, le groupe carboxyle possède des propriétés acides et le groupe amine des propriétés basiques. Il est alors possible de définir deux pkA. Ainsi, un acide α-aminé peut exister sous trois formes et son diagramme de prédominance sera :

![diagramme de prédominance acide α-aminé](/images/cours/diagramme-predominance-diacide.png "diagramme de prédominance d’un acide α-aminé")

Le raisonnement est identique pour toutes les espèces chimiques amphotères, comme l’eau par exemple.
