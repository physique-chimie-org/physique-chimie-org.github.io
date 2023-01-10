---
titleTemplate: "Mouvement dans un champ non uniforme"
next: "Chapitre suivant"
---

# Mouvement circulaire uniforme

## Système et référentiel

Système : le satellite de masse m, et de centre de masse S.
Référentiel : centré sur l'astre attracteur de masse M, supposé Galiléen.
Repère : L'étude du mouvement du centre de masse d'un satellite autour d'une astre peut se faire dans le repère de Frenet $(M,\vec{n}, \vec{\tau})$ associé au satellite.

## Accélération dans le repère de Frenet

Dans ce référentiel, le vecteur accélération peut s'exprimé ainsi :

$$
\begin{align}
\vec{a} &=a_n \times \vec{n} + a_{\tau} \times \vec{\tau} \\
&=\frac{v^2}{a} \times \vec{n} + \frac{dv}{dt} \times \vec{\tau}
\end{align}
$$

On le noter de façon synthétique :
$$
\vec{a}=
\begin{Bmatrix}
a_n = \dfrac{v^2}{a} \\
a_{\tau} = \dfrac{dv}{dt}
\end{Bmatrix}
$$

::: warning Attention
Le paramètre $a$ dans $\dfrac{v^2}{a}$ correspond au demi grand-axe de l'ellipse et non à l'accélération !
:::

Dans le cadre d'un mouvement circulaire, le demi grand-axe $a$ est égale au rayon du cercle $R$. L'accélération devient :
$$
\vec{a}=
\begin{Bmatrix}
a_n = \dfrac{v^2}{R} \\
a_{\tau} = \dfrac{dv}{dt}
\end{Bmatrix}
$$

## Bilan des forces extérieures appliquées au système

Si le satellite n'est soumis qu'à la force d'attraction de l'astre :

$$
\vec{F_{astre/S}}= G \times \frac{m\times M}{R^2} \times \vec{n}
$$

## Application de la 2nde loi de Newton

$$
\begin{align}
\sum{\vec{F_{ext}}} &=m\times \vec{a} \\
G \times \frac{m\times M}{R^2} \times \vec{n} &=m\times \vec{a} \\
G \times \frac{M}{R^2} \times \vec{n} &=\vec{a} \\
\end{align}
$$

Dans le repère de Frenet, on a alors :

$$
\vec{a}=
\begin{Bmatrix}
a_n = G \times \frac{M}{R^2} \\
a_{\tau} = 0
\end{Bmatrix}
$$

Or on a vu précédement que :

$$
\vec{a}=
\begin{Bmatrix}
a_n = \dfrac{v^2}{R} \\
a_{\tau} = \dfrac{dv}{dt}
\end{Bmatrix}
$$

On en déduit alors deux expressions :

$$
\begin{align}
\dfrac{v^2}{R} &= G \times \frac{M}{R^2} \rightarrow v = \sqrt{\frac{G\times M}{R}} \\
\dfrac{dv}{dt} &= 0 \rightarrow v = \text{constante}
\end{align}
$$

::: danger A retenir
Lorsqu'un satellite à une trajectoire circulaire, sa vitesse est constante, son mouvement est donc circulaire uniforme.
:::

## Période de révolution

D'après la partie précédente, $v = \sqrt{\dfrac{G\times M}{R}}$. La distance parcourue pendant une révolution est le périmètre de l'orbite circulaire de rayon R : $d=2\pi R$.

$$
\begin{align}
T &= \dfrac{d}{v} \\
&= \dfrac{2\pi R}{\sqrt{\dfrac{G\times M}{R}}} \\
&= 2\pi R\times \sqrt{\dfrac{R}{G\times M}} \\
&= 2\pi\times  \sqrt{\dfrac{R^2 \times R}{G\times M}} \\
&= 2\pi\times  \sqrt{\dfrac{R^3}{G\times M}} \\
\end{align}
$$

## 3ème loi de Kepler dans le cadre d'un mouvement circulaire uniforme

$$
\begin{align}
T^2 = \dfrac{4\pi ^2 \times R^3}{G\times M} \\
\dfrac{T^2}{R^3} = \dfrac{4\pi ^2 \times R^3}{R^3 \times G\times M} \\
\dfrac{T^2}{R^3} = \dfrac{4\pi ^2}{G\times M}
\end{align}
$$