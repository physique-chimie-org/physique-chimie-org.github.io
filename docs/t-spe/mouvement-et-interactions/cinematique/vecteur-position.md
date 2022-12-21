---
titleTemplate: "Cinématique"
---

# Vecteur position

## Définition

Dans le référentiel d’étude, associé au repère $(O; \vec{i}; \vec{j}; \vec{k})$, un point matériel occupe à la date $t$ une position $M(t)$ dans l’espace. On appelle vecteur position le vecteur $\vec{OM}(t)$.

$$
\vec{OM}(t) = x(t)·\vec{i} + y(t)·\vec{j} + z(t)·\vec{k}
$$

On note de façon synthétique ses coordonées dans le repère $(O; \vec{i}; \vec{j}; \vec{k})$ :
$$
\vec{OM}=
\begin{Bmatrix}
x(t) \\
y(t) \\
z(t)
\end{Bmatrix}
$$

On définit les équations horaires comme les expressions des coordonnées du vecteur position en fonction du temps, soit $x(t)$, $y(t)$ et $z(t)$.

La trajectoire est définie par l’ensemble des positions occupées par le point matériel au cours du temps. L’équation de la trajectoire est obtenue en éliminant le temps dans les équations horaires, soit $x(y, z)$, $y(x, z)$ et $z(x, y)$.

::: info Remarque
On étudie généralement des mouvements plans. Dans ce cas une des trois coordonées est nulle.
:::

## Formalisme mathématique en physique

En physique, on utilise de nombreuses variables, la plus fréquente étant le temps $t$. Il est donc indispensable de préciser la variable utilisée, notamment lors de la détermination d’une dérivée. La notation mathématique «$’$» est à éviter !

Une dérivée traduit la variation infinitésimale d’une grandeur $f$ notée $df$, par rapport à la variation infinitésimale d’une grandeur $x$ notée $dx$, c’est-à-dire le rapport $\frac{df}{dx}$. Le «$d$» utilisé est une notation, on ne peut pas simplifier le rapport par «$d$».

### Notations utilisées

|                  | Maths    | Physique            |
| ---------------- | -------- | ------------------- |
| Fonctions        | $f(x)$   | $f(x)$              |
| variable         | x        | x                   |
| Dérivées         | $f’(x)$  | $\frac{df}{dx}$     |
| Dérivées seconde | $f’’(x)$ | $\frac{d^2f}{dx^2}$ |

### Exemples

|                  | Equation horaire    | Equation horaire    | Trajectoire         |
| ---------------- | ------------------- | ------------------- | ------------------- |
| Fonctions        | $x(t)$              | $y(t)$              | $y(x)$              |
| variable         | $t$                 | $t$                 | $x$                 |
| Dérivées         | $\frac{dx}{dt}$     | $\frac{dy}{dt}$     | $\frac{dy}{dx}$     |
| Dérivées seconde | $\frac{d^2x}{dt^2}$ | $\frac{d^2y}{dt^2}$ | $\frac{d^2y}{dx^2}$ |
