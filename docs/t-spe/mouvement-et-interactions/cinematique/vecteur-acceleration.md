---
titleTemplate: "Cinématique"
---

# Vecteur accélération

## Accélération moyenne

Dans un référentiel donné, le vecteur accélération moyenne $\overrightarrow{a_{moy}}$, en un point $M$ à la date $t$, est définit comme la variation du vecteur vitesse $\Delta \overrightarrow{v}$ par rapport au temps écoulé $\Delta t$, soit $\overrightarrow{a_{moy}} = \frac{\Delta\overrightarrow{v_{moy}}}{\Delta t}$.

Pour déterminer le vecteur accélération moyenne en un point $M_i$, utilise la méthode des points adjacents, soit :

$$
\overrightarrow{a_{i,moy}} = \frac{\overrightarrow{v_{i+1}} - \overrightarrow{v_{i-1}}}{t_{i+1} - t_{i-1}}
$$

::: info Remarque
On remarque que $\overrightarrow{a_{i,moy}}$ est un vecteur de même direction que $\overrightarrow{v_{i+1}} - \overrightarrow{v_{i-1}}$. La norme de $\overrightarrow{a_{i,moy}}$, notée $a_{i,moy}$, est égale à $a_{i,moy}=\frac{||\overrightarrow{v_{i+1}} - \overrightarrow{v_{i-1}}||}{t_{i+1} - t_{i-1}}$ et s’exprime dans le Système International en $m·s^{-2}$.
:::

::: warning Attention
$||\overrightarrow{v_{i+1}} - \overrightarrow{v_{i-1}}||$ n'est pas égal à $||\overrightarrow{v_{i+1}}|| - ||\overrightarrow{v_{i-1}}||$. En effet, la norme d'une différence de vecteurs n'est pas égale à la différence des normes des vecteurs.

Si les vecteurs $\overrightarrow{v_{i+1}}$ et $\overrightarrow{v_{i-1}}$ sont colinéaires, alors on a bien $||\overrightarrow{v_{i+1}} - \overrightarrow{v_{i-1}}|| = ||\overrightarrow{v_{i+1}}|| - ||\overrightarrow{v_{i-1}}||$. Mais c'est un cas particulier !
:::

## Accélération instantanée

Dans un référentiel donné, le vecteur accélération instantanée $\overrightarrow{a}$, en un point $M$ à la date $t$, est définit comme la limite du vecteur $\overrightarrow{a_{moy}}$, lorsque $\Delta t$ tend vers 0. Il s’agit de la accélération moyenne pour des points adjacents "aussi proche que possible" dans le temps. On obtient donc :

$$
\begin{align}
\overrightarrow{a} &= \lim_{\Delta t \to 0} \overrightarrow{a_{moy}} \\
&= \lim_{\Delta t \to 0} \frac{\Delta\overrightarrow{v}}{\Delta t} \\
&= \frac{d\overrightarrow{v}}{dt} \\
&= \frac{d^2\overrightarrow{OM}}{dt^2}
\end{align}
$$

Le vecteur accélération instantanée $\overrightarrow{a}$ est la dérivée du vecteur vitesse $\overrightarrow{v}$ par rapport au temps $t$.

::: warning Attention
L’accélération est souvent perçue comme une augmentation de la valeur de la vitesse. Cependant, en physique il y a accélération même lorsque la vitesse diminue. De plus l’accélération est une grandeur vectorielle, décrivant la variation du vecteur vitesse. Ainsi il y a également accélération lorsque le vecteur vitesse change de direction, même si la valeur de la vitesse (norme du vecteur vitesse) ne change pas.
:::

On définit le vecteur accélération instantanée $\overrightarrow{a}$ dans le repère $(O; \overrightarrow{i}; \overrightarrow{j}; \overrightarrow{k})$, tel que :

$$
\begin{align}
\overrightarrow{a} &= a_x(t)·\overrightarrow{i} + a_y(t)·\overrightarrow{j} + a_z(t)·\overrightarrow{k} \\
\overrightarrow{a} &= \frac{dv_x(t)}{dt}·\overrightarrow{i} + \frac{dv_y(t)}{dt}·\overrightarrow{j} + \frac{dv_z(t)}{dt}·\overrightarrow{k} \\
\overrightarrow{a} &= \frac{d^2x(t)}{dt^2}·\overrightarrow{i} + \frac{d^2y(t)}{dt^2}·\overrightarrow{j} + \frac{d^2z(t)}{dt^2}·\overrightarrow{k}
\end{align}
$$

Ou de note de façon synthétique :

$$
\\
\overrightarrow{a}
\left|
  \begin{matrix}
a_x(t) = \frac{dv_x(t)}{dt}=\frac{d^2x(t)}{dt^2} \\
a_y(t) = \frac{dv_y(t)}{dt}=\frac{d^2y(t)}{dt^2} \\
a_z(t) = \frac{dv_z(t)}{dt}=\frac{d^2z(t)}{dt^2}
\end{matrix}
\right.
$$

La norme du vecteur accélération instantanée $\overrightarrow{a}$ est égale à $a=\sqrt{a_x^2 + a_y^2 + a_z^2}$ et s’exprime dans le Système International en $m·s^{-2}$.
