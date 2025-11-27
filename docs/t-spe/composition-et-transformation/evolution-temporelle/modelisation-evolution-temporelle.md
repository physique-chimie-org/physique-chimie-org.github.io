---
titleTemplate: "Modéliser l’évolution temporelle d’un système chimique"
next: false
---

# Modéliser l’évolution temporelle

## Vitesse volumique

Pour étudier la cinétique d’une transformation, on suit l’évolution temporelle de la concentration d’une espèce $X_{(aq)}$, réactif ou produit.

On appelle vitesse volumique de la transformation la variation de la concentration de $X_{(aq)}$ par unité de volume et par unité de temps. La vitesse volumique est définie par la relation suivante :

$$
v(t) = |\dfrac{d[X]}{dt}|
$$

- $v(t)$ : vitesse volumique de disparition ou d’apparition de $X_{(aq)}$ ($mol·L^{‑1}·s^{‑1}$)
- $[X]$ : concentration de $X_{(aq)}$ ($mol·L^{‑1}$)
- $t$ : temps ($s$)

La vitesse volumique est une grandeur positive. Au lieu d’utiliser une seule relation utilisant la valeur absolue, on peut utiliser deux relations différentes pour définir la vitesse volumique de disparition ou d’apparition de $X_{(aq)}$ :

- $v_{disparition}(t) = -\dfrac{d[R]}{dt}$ si $R_{(aq)}$ est un réactif et donc $[R]$ diminue avec le temps
- $v_{apparition}(t) = \dfrac{d[P]}{dt}$ si $P_{(aq)}$ est un produit et donc $[P]$ augmente avec le temps

Expérimentalement, on peut donc approcher la vitesse volumique $v(t_i)$ à partir de $n$ mesures de la concentration $[X]$ de l’espèce chimique $X_{(aq)}$ :

$$
v(t_i) = \frac{[X]_{i+1} - [X]_{i-1}}{t_{i+1} - t_{i-1}}
$$

Graphiquement on peut mesurer la vitesse volumique en tracant la tangente à la courbe représentant l’évolution temporelle de la concentration de $X_{(aq)}$, à un instant $t_i$, et en calculant le coefficient directeur de la tangente.

## Loi de vitesse d’ordre 1

Une transformation, dont la vitesse volumique de disparitition d'un réactif $R_{(aq)}$ ne dépend que de la concentration de ce réactif, est dite d’ordre $α$ et la vitesse volumique de disparition de $R_{(aq)}$ s’écrit :

$$
v_{disparition}(t) = k \cdot [R]^α
$$

- $k$ : constante de vitesse
- $α$ : ordre de la transformation

De nombreuses transformations sont d’ordre 1 (α=1). La vitesse volumique de disparition de $R_{(aq)}$ est alors proportionnelle à sa concentration. La relation précédente devient :

$$
v_{disparition}(t) = k \cdot [R]
$$

La courbe représentant l’évolution de $v_{disparition}$ en fonction de la concentration $[R]$ correspond alors à une droite passant par l’origine.

## Equation différentielle

D'après la définition de la vitesse volumique de disparition, on a :

$$
v_{disparition}(t) = -\dfrac{d[R]}{dt}
$$

D'autre part, pour une transformation d’ordre 1, on a :

$$
v_{disparition}(t) = k \cdot [R]
$$

En combinant ces deux relations, on obtient l’équation différentielle vérifiée par la concentration du réactif $R_{(aq)}$ au cours du temps :

$$
- \dfrac{d[R]}{dt} = k \cdot [R]
$$

ou encore

$$
\dfrac{d[R]}{dt} + k \cdot [R] = 0
$$

Cette équation différentielle est du premier ordre et linéaire. Elle admet pour solution :

$$
[R](t) = [R]_0 \cdot e^{-k \cdot t}
$$

- $[R]_0$ : concentration initiale de $R_{(aq)}$ à l’instant $t=0$ ($mol·L^{‑1}$)
- $k$ : constante de vitesse ($s^{‑1}$)
