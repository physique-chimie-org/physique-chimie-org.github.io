# Vecteur vitesse

## Vitesse moyenne

Dans un référentiel donné, le vecteur vitesse moyenne $\vec{v_{moy}}$, en un point $M$ à la date $t$, est définit comme la variation du vecteur position $\Delta \vec{OM}$ par rapport au temps écoulé $\Delta t$, soit $\vec{v_{moy}} = \frac{\Delta\vec{OM}}{\Delta t}$.

Pour déterminer le vecteur vitesse moyenne en un point $m_i$, utilise la méthode des points adjacents, soit :
$$
\begin{align}
\vec{v_{i,moy}} &= \frac{\vec{OM_{i+1}} - \vec{OM_{i-1}}}{t_{i+1} - t_{i-1}} \\
&= \frac{\vec{M_{i-1}M_{i+1}}}{t_{i+1} - t_{i-1}}
\end{align}
$$

::: info Remarque
On remarque que $\vec{v_{i,moy}}$ est un vecteur de même direction que $\vec{M_{i-1}M_{i+1}}$. La norme de $\vec{v_{i,moy}}$, notée $v_{i,moy}$, est égale à $v_{i,moy}=\frac{M_{i-1}M_{i+1}}{t_{i+1} - t_{i-1}}$ et s'exprime dans le Système International en $m·s^{-1}$.
:::

::: warning Attention
Cette méthode n'est pas valable pour les points extrêmes. En effet, il n'y a pas de point précédent $i-1$ pour le premier point, et pas de point suivant $i+1$ pour le dernier point.
Dans ce cas, on fera l'approximation suivante pour le premier point $M_0$ à la date $t_0$ :
$$
\vec{v_{0,moy}} = \frac{\vec{M_{0}M_{1}}}{t_{1} - t_{0}}
$$
Et pour le dernier point $M_n$ et à la date $t_n$ :
$$
\vec{v_{n,moy}} = \frac{\vec{M_{n-1}M_{n+1}}}{t_{n+1} - t_{n-1}}
$$
:::

## Vitesse instantanée

Dans un référentiel donné, le vecteur vitesse instantanée $\vec{v}$, en un point $M$ à la date $t$, est définit comme la limite du vecteur $\vec{v_{moy}}$, lorsque $\Delta t$ tend vers 0. Il s'agit de la vitesse moyenne pour des points adjacents "aussi proche que possible" dans le temps. On obtient donc :

$$
\begin{align}
\vec{v} &= \lim_{\Delta t \to 0} \vec{v_{moy}} \\
&= \lim_{\Delta t \to 0} \frac{\Delta\vec{OM}}{\Delta t} \\
&= \frac{d\vec{OM}}{dt}
\end{align}
$$

Le vecteur vitesse instantanée $\vec{v}$ est la dérivée du vecteur position $\vec{OM}$ par rapport au temps $t$.

::: info Remarque
Le vecteur vitesse instantanée $\vec{v}$ est un vecteur tangent à la courbe représentant le vecteur position $\vec{OM}$.
:::

On peut noter de façon plus synthétique les coordonnées du vecteur vitesse instantanée $\vec{v}$ dans le repère $(O; \vec{i}; \vec{j}; \vec{k})$ :
$$
\begin{align}
\vec{v} &= v_x(t)·\vec{i} + v_y(t)·\vec{j} + v_z(t)·\vec{k} \\
\vec{v} &= \frac{dx(t)}{dt}·\vec{i} + \frac{dy(t)}{dt}·\vec{j} + \frac{dz(t)}{dt}·\vec{k} \\
\vec{v} &=
\begin{Bmatrix}
v_x(t) = \frac{dx(t)}{dt} \\
v_y(t) = \frac{dy(t)}{dt} \\
v_z(t) = \frac{dz(t)}{dt}
\end{Bmatrix}
\end{align}
$$

La norme du vecteur vitesse instantanée $\vec{v}$ est égale à $v=\sqrt{v_x^2 + v_y^2 + v_z^2}$ et s'exprime dans le Système International en $m·s^{-1}$.
