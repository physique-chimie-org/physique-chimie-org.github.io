# Vecteur accélération

## Accélération moyenne

Dans un référentiel donné, le vecteur accélération moyenne $\vec{a_{moy}}$, en un point $M$ à la date $t$, est définit comme la variation du vecteur vitesse $\Delta \vec{v}$ par rapport au temps écoulé $\Delta t$, soit $\vec{a_{moy}} = \frac{\Delta\vec{v_{moy}}}{\Delta t}$.

Pour déterminer le vecteur accélération moyenne en un point $M_i$, utilise la méthode des points adjacents, soit :
$$
\vec{a_{i,moy}} = \frac{\vec{v_{i+1}} - \vec{v_{i-1}}}{t_{i+1} - t_{i-1}}
$$

::: info Remarque
On remarque que $\vec{a_{i,moy}}$ est un vecteur de même direction que $\vec{v_{i+1}} - \vec{v_{i-1}}$. La norme de $\vec{a_{i,moy}}$, notée $a_{i,moy}$, est égale à $a_{i,moy}=\frac{||\vec{v_{i+1}} - \vec{v_{i-1}}||}{t_{i+1} - t_{i-1}}$ et s'exprime dans le Système International en $m·s^{-2}$.
:::

## Accélération instantanée

Dans un référentiel donné, le vecteur accélération instantanée $\vec{a}$, en un point $M$ à la date $t$, est définit comme la limite du vecteur $\vec{a_{moy}}$, lorsque $\Delta t$ tend vers 0. Il s'agit de la accélération moyenne pour des points adjacents "aussi proche que possible" dans le temps. On obtient donc :

$$
\begin{align}
\vec{a} &= \lim_{\Delta t \to 0} \vec{a_{moy}} \\
&= \lim_{\Delta t \to 0} \frac{\Delta\vec{v}}{\Delta t} \\
&= \frac{d\vec{v}}{dt} \\
&= \frac{d^2\vec{OM}}{d^2t}
\end{align}
$$

Le vecteur accélération instantanée $\vec{a}$ est la dérivée du vecteur vitesse $\vec{v}$ par rapport au temps $t$.

::: warning Attention
L'accélération est souvent perçue comme une augmentation de la valeur de la vitesse. Cependant, en physique il y a accélération même lorsque la vitesse diminue. De plus l'accélération est une grandeur vectorielle, décrivant la variation du vecteur vitesse. Ainsi il y a également accélération lorsque le vecteur vitesse change de direction, même si la valeur de la vitesse (norme du vecteur vitesse) ne change pas.
:::

On peut noter de façon plus synthétique les coordonnées du vecteur accélération instantanée $\vec{a}$ dans le repère $(O; \vec{i}; \vec{j}; \vec{k})$ :
$$
\begin{align}
\vec{a} &= a_x(t)·\vec{i} + a_y(t)·\vec{j} + a_z(t)·\vec{k} \\
\vec{a} &= \frac{dv_x(t)}{dt}·\vec{i} + \frac{dv_y(t)}{dt}·\vec{j} + \frac{dv_z(t)}{dt}·\vec{k} \\
\vec{a} &= \frac{d^2x(t)}{d^2t}·\vec{i} + \frac{d^2y(t)}{d^2t}·\vec{j} + \frac{dz(t)}{d^2t}·\vec{k} \\
\vec{a} &=
\begin{Bmatrix}
a_x(t) = \frac{dv_x(t)}{dt}=\frac{d^2x(t)}{d^2t} \\
a_y(t) = \frac{dv_y(t)}{dt}=\frac{d^2y(t)}{d^2t} \\
a_z(t) = \frac{dv_z(t)}{dt}=\frac{d^2z(t)}{d^2t}
\end{Bmatrix}
\end{align}
$$

La norme du vecteur accélération instantanée $\vec{a}$ est égale à $a=\sqrt{a_x^2 + a_y^2 + a_z^2}$ et s'exprime dans le Système International en $m·s^{-2}$.
