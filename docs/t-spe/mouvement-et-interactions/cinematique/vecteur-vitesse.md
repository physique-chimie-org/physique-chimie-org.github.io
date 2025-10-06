---
titleTemplate: "Cinématique"
---

# Vecteur vitesse

## Vitesse moyenne

Dans un référentiel donné, le vecteur vitesse moyenne $\overrightarrow{v_{moy}}$, en un point $M$ à la date $t$, est définit comme la variation du vecteur position $\Delta \overrightarrow{OM}$ par rapport au temps écoulé $\Delta t$, soit $\overrightarrow{v_{moy}} = \frac{\Delta\overrightarrow{OM}}{\Delta t}$.

Pour déterminer le vecteur vitesse moyenne en un point $M_i$, utilise la méthode des points adjacents, soit :

$$
\begin{align}
\overrightarrow{v_{i,moy}} &= \frac{\overrightarrow{OM_{i+1}} - \overrightarrow{OM_{i-1}}}{t_{i+1} - t_{i-1}} \\
&= \frac{\overrightarrow{M_{i-1}M_{i+1}}}{t_{i+1} - t_{i-1}}
\end{align}
$$

::: info Remarque
On remarque que $\overrightarrow{v_{i,moy}}$ est un vecteur de même direction que $\overrightarrow{M_{i-1}M_{i+1}}$. La norme de $\overrightarrow{v_{i,moy}}$, notée $v_{i,moy}$, est égale à $v_{i,moy}=\frac{M_{i-1}M_{i+1}}{t_{i+1} - t_{i-1}}$ et s’exprime dans le Système International en $m·s^{-1}$.
:::

::: warning Attention
Cette méthode n’est pas valable pour les points extrêmes. En effet, il n’y a pas de point précédent $i-1$ pour le premier point, et pas de point suivant $i+1$ pour le dernier point.
Dans ce cas, on fera l’approximation suivante pour le premier point $M_0$ à la date $t_0$ :

$$
\overrightarrow{v_{0,moy}} = \frac{\overrightarrow{M_{0}M_{1}}}{t_{1} - t_{0}}
$$

Et pour le dernier point $M_n$ et à la date $t_n$ :

$$
\overrightarrow{v_{n,moy}} = \frac{\overrightarrow{M_{n-1}M_{n}}}{t_{n} - t_{n-1}}
$$

:::

## Vitesse instantanée

Dans un référentiel donné, le vecteur vitesse instantanée $\overrightarrow{v}$, en un point $M$ à la date $t$, est définit comme la limite du vecteur $\overrightarrow{v_{moy}}$, lorsque $\Delta t$ tend vers 0. Il s’agit de la vitesse moyenne pour des points adjacents "aussi proche que possible" dans le temps. On obtient donc :

$$
\begin{align}
\overrightarrow{v} &= \lim_{\Delta t \to 0} \overrightarrow{v_{moy}} \\
&= \lim_{\Delta t \to 0} \frac{\Delta\overrightarrow{OM}}{\Delta t} \\
&= \frac{d\overrightarrow{OM}}{dt}
\end{align}
$$

Le vecteur vitesse instantanée $\overrightarrow{v}$ est la dérivée du vecteur position $\overrightarrow{OM}$ par rapport au temps $t$.

::: info Remarque
Le vecteur vitesse instantanée $\overrightarrow{v}$ est un vecteur tangent à la courbe représentant le vecteur position $\overrightarrow{OM}$.
:::

On définit le vecteur vitesse instantanée $\overrightarrow{v}$ dans le repère $(O; \overrightarrow{i}; \overrightarrow{j}; \overrightarrow{k})$, tel que :

$$
\begin{align}
\overrightarrow{v} &= v_x(t)·\overrightarrow{i} + v_y(t)·\overrightarrow{j} + v_z(t)·\overrightarrow{k} \\
\overrightarrow{v} &= \frac{dx(t)}{dt}·\overrightarrow{i} + \frac{dy(t)}{dt}·\overrightarrow{j} + \frac{dz(t)}{dt}·\overrightarrow{k} \\
\end{align}
$$

Ou de façon synthétique :

$$
\overrightarrow{v}
\left|
  \begin{matrix}
v_x(t) = \frac{dx(t)}{dt} \\
v_y(t) = \frac{dy(t)}{dt} \\
v_z(t) = \frac{dz(t)}{dt}
\end{matrix}
\right.
$$

La norme du vecteur vitesse instantanée $\overrightarrow{v}$ est égale à $v=\sqrt{v_x^2 + v_y^2 + v_z^2}$ et s’exprime dans le Système International en $m·s^{-1}$.
