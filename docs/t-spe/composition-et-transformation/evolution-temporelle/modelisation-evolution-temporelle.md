---
titleTemplate: "Modéliser l’évolution temporelle d’un système chimique"
next: "Chapitre suivant"
---

# Modéliser l’évolution temporelle

## Vitesse volumique

Pour étudier la cinétique d’une transformation, on suit l’évolution temporelle de la concentration d’une espèce $X_{(aq)}$, réactif ou produit.

On appelle vitesse volumique de la transformation la variation de la concentration de $X_{(aq)}$ par unité de volume et par unité de temps. La vitesse volumique est définie par la relation suivante :

$$
v_X(t) = |\dfrac{d[X]}{dt}|
$$

- $v_X(t)$ : vitesse volumique de disparition ou d’apparition de $X_{(aq)}$ ($mol·L^{‑1}·s^{‑1}$)
- $[X]$ : concentration de $X_{(aq)}$ ($mol·L^{‑1}$)
- $t$ : temps ($s$)

La vitesse volumique est une grandeur positive. Au lieu d’utiliser une seule relation utilisant la valeur absolue, on peut utiliser deux relations différentes pour définir la vitesse volumique de disparition ou d’apparition de $X_{(aq)}$ :

- $v_X(t) = -\dfrac{d[X]}{dt}$ si $X_{(aq)}$ est un réactif et donc $[X]$ diminue avec le temps
- $v_X(t) = \dfrac{d[X]}{dt}$ si $X_{(aq)}$ est un produit et donc $[X]$ augmente avec le temps

Expérimentalement, on peut donc approcher la vitesse volumique $v_X(t_i)$ à partir de $n$ mesures de la concentration $[X]$ de l’espèce chimique $X_{(aq)}$ :

$$
v_X(t_i) = \Dfrac{[X]_{i+1} - [X]_{i-1}}{t_{i+1} - t_{i-1}}
$$

Graphiquement on peut mesurer la vitesse volumique en tracant la tangente à la courbe représentant l’évolution temporelle de la concentration de $X_{(aq)}$, à un instant $t_i$, et en calculant le coefficient directeur de la tangente.

## Loi de vitesse d’ordre 1

Une transformation, dont la vitesse volumique ne dépend que de la concentration d’un seul réactif $X_{(aq)}$ est dite d’ordre $α$ si la vitesse volumique de disparition de $X_{(aq)}$ s’écrit :

$$
v_X(t) = k[X]^α
$$

- $k$ : constante de vitesse ($mol·L^{‑1}·s^{‑1}$)
- $α$ : ordre de la transformation

De nombreuses transformations sont d’ordre 1 (α=1). La vitesse volumique de disparition de $X_{(aq)}$ est alors proportionnelle à sa concentration. La courbe représentant l’évolution de $v_X$ en fonction de la concentration $[X]$ correspond alors à une droite passant par l’origine.
