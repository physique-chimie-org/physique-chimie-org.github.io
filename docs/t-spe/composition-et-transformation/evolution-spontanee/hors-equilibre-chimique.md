---
order: 3
---

# Évolution spontanée d'un système hors équilibre chimique

## Quotient de réaction Qr

Une grandeur chimique sans dimension, appelée activité de l'espèce $X$, notée $a_X$ permet d'étudier l'évolution d'un mélange réactionnel. On rencontrera trois cas à ce niveau, selon que X est une espèce en solution aqueuse, un solvant ou un solide :

$$
a_{X(aq)} = \frac{[X]}{c°}
$$

où $c°$ désigne la concentration standard fixée à $c°=1\ mol.L^{-1}$.

Par convention : $a_{X(l,solvant)}=1$ et $a_{X(solide)}=1$

::: danger
Le quotient de réaction $Qr$ est une grandeur sans dimension, associée à une transformation non totale, définie à partir des activités des espèces mises en jeu. Compte tenu de ce qui précède, l'expression du quotient de réaction associé à l'équation $a.A_{(aq)}+b.B_{(aq)}⇌c.C_{{(aq)}}+d.D_{{(aq)}}$  est :

$$
Qr=\frac{(\frac{[C]}{c°})^{c} \times (\frac{[D]}{c°})^{d}}{(\frac{[A]}{c°})^{a} \times (\frac{[B]}{c°})^{b}}
$$

Si un solvant ou des espèces solides figurent dans l'équation, ils interviennent dans l'expression de $Qr$ par un coefficient égal à $1$, ce qui ne modifie pas la valeur de $Qr$
:::

**Exercice :**

Ecrire le quotient de réaction des réactions suivantes :

1. $HCOOH_{(aq)} + NH_{3(aq)}  ⇌ HCOO_{(aq)}^- + NH_{4(aq)}^+$
2. $2H_2O_{(l)} ⇌ HO_{(aq)}^- + H_3O_{(aq)}^+$

::: details Afficher les réponse

1. $HCOOH_{(aq)} + NH_{3(aq)}  ⇌ HCOO_{(aq)}^- + NH_{4(aq)}^+$
$$
Qr=\frac{(\frac{[HCOO^-]}{c°}) \times (\frac{[NH_{4}^+]}{c°})}{(\frac{[HCOOH]}{c°}) \times (\frac{[NH_{3}]}{c°})}=\frac{[HCOO^-] \times [NH_{4}^+]}{[HCOOH] \times [NH_{3}]}
$$
2. $2H_2O_{\textcolor{red}{(l)}} ⇌ HO_{(aq)}^- + H_3O_{(aq)}^+$
$$
Qr=\frac{(\frac{[HO^-]}{c°}) \times (\frac{[H_3O^+]}{c°})}{\textcolor{red}{1}}=\frac{[HO^-] \times [H_3O^+]}{c°^2}
$$
:::

## Constante d'équilibre K(T)

::: danger
Lorsque le système chimique a atteint l'état d'équilibre (état final), le quotient réactionnel associé à la transformation non totale $Qr$ d'équilibre est noté $K(T)$.
L'expression de la constante d'équilibre associée à l'équation $a.A_{(aq)}+b.B_{(aq)}  ⇌ c.C_{{(aq)}}+d.D_{{(aq)}}$  est :
$$
K(T)=Qr_{eq}=\frac{(\frac{[C]_{eq}}{c°})^{c} \times (\frac{[D]_{eq}}{c°})^{d}}{(\frac{[A]_{eq}}{c°})^{a} \times (\frac{[B]_{eq}}{c°})^{b}}
$$

Si un solvant ou des espèces solides figurent dans l'équation, ils interviennent dans l'expression de K par un coefficient égal à 1, ce qui ne modifie pas la valeur de $K(T)$.
:::

Remarques : la constante d'équilibre est sans dimension et ne dépend que de la température, d'où sa notation K(T). L'indice *eq* signifie équilibre.
La constante d'équilibre est indépendante de la composition du système. Selon les conditions initiales, une infinité de compositions finales est possible, qui toutes vérifient la valeur de K.

**Exercice :**

Soit la réaction $2H_2O_{(l)} ⇌ HO_{(aq)}^- + H_3O_{(aq)}^+$ de constante d’équilibre $K(T=25°C)=10^{-14}$.

1. Si le système est à l’équilibre et $[H_3O^+]_{eq}=1,0 \times 10^{-3}  mol.L^{-1}$, que vaut $[HO^-]_{eq}$ ?

2. Si $[H_3O^+]=1,0 \times 10^{-5}  mol.L^{-1}$ et $[HO^-]=1,0 \times 10^{-5}  mol.L^{-1}$, le système est-il à l’équilibre ?

::: details Afficher les réponses

1. Tout d'abord on peut écrire la formule de la constante d'équilibre :
$$
K(T=25°C)=\frac{(\frac{[HO^-]_{eq}}{c°}) \times (\frac{[H_3O^+]_{eq}}{c°})}{1}=10^{-14}
$$
On en déduit :
$$
[HO^-]_{eq}= \frac{10^{-14}}{[H_3O^+]_{eq}}=\frac{10^{-14} \times c°^2}{1,0 \times 10^{-3}}=1,0 \times 10^{-11}  mol.L^{-1}
$$

2. Le système n'est pas à l'équilibre, car :
$$
Qr=\frac{(\frac{1,0 \times 10^{-5}}{1}) \times (\frac{1,0 \times 10^{-5}}{1})}{1}=10^{-10}≠K(T=25°C)
$$
:::

::: info
Pour une transformation non totale, on définit donc :

- le quotient de réaction $Qr$ dans un état d’avancement quelconque hors état d’équilibre du système chimique et qui peut prendre une valeur quelconque.
- La constante d’équilibre $K(T)=Qr_{eq}$ à l’état d’équilibre du système chimique dont la valeur, à température donnée, est fixée.
:::

## Critère d'évolution spontanée

Une transformation non totale peut se produire dans le sens direct ou dans le sens indirect. La comparaison du quotient de réaction $Qr$ avec la constante d'équilibre $K(T)$ permet de prévoir le sens d'évolution d'un système chimique, compte tenu de sa composition dans un état quelconque.

::: danger
Pour une transformation chimique dont l'équation est écrite dans un sens donné :
$$
a.A_{(aq)}+b.B_{(aq)}  ⇌ c.C_{{(aq)}}+d.D_{{(aq)}}
$$

1. si Qr < K(T), le système est hors équilibre et évolue spontanément dans le sens direct :

    - les réactifs A et B sont consommés et les produits C et D sont formés
    - Qr augmente

2. Si Qr > K(T), le système est hors équilibre et évolue spontanément dans le sens indirect :

    - les produits C et D sont consommés et les réactifs A et B sont formés
    - Qr diminue

3. Si Qr = K(T), le système n'évolue pas à l'échelle macroscopique :
le système est à l'état d'équilibre.

Le système chimique atteint l'état final (d'équilibre) lorsque Qr atteint la valeur K.

:::
**Exercice :**
Soit la réaction $HCOOH_{(aq)} + H_2O_{(l)}  ⇌ HCOO_{(aq)}^- + H_3O_{4(aq)}^+$, de constante d’équilibre $K(T=25°C)=1,8×10^{-4}$.

*Données :*

- $[HCOOH]=2,0×10^{-2}  mol.L^{-1}$
- $[HCOO^-]=[H_3O^+]=1,0×10^{-3}  mol.L^{-1}$

Le système est-il à l’équilibre ? Sinon, dans quel sens évolue-t-il ?

::: details Afficher les réponses
Il faut calculer $Qr$ et le comparer à $K$

$$
Qr=\frac{(\frac{[HCOO^-]}{c°}) \times (\frac{[H_3O^+]}{c°})}{(\frac{[HCOOH]}{c°}) \times 1}
\\
=\frac{(\frac{1,0×10^{-3}}{1}) \times (\frac{1,0×10^{-3}}{1})}{(\frac{2,0×10^{-2}}{1}) \times 1}
\\
= 5,0 \times 10^{-5} < 1,8×10^{-4}
$$

$Qr < K$, le système n'est donc pas à l'équilibre et évolue dans le sens direct (→). Il y a consommation de $HCOOH_{(aq)}$ et $H_2O_{(l)}$ et formation de $HCOO_{(aq)}^-$ et $H_3O{(aq)}^+$. $Qr$ augmente.
:::
