---
titleTemplate: "Mouvement dans un champ uniforme"
---

# Vocabulaire et outils

## Centre de masse d'un système

Un système est un ensemble de points matériels. Le centre de masse d'un système est le point matériel qui se comporte comme si toute la masse du système était concentrée en ce point. Le mouvement d'un système peut être étudié en considérant le mouvement du centre de masse du système.

## Le champ électrique

En physique, le champ électrique $\vec{E}$ est le champ vectoriel créé par des particules électriquement chargées. Si une autre charge se trouve dans ce champ, elle subira l'action de la force électrique $\vec{F_e}$ exercée à distance par la particule : le champ électrique est en quelque sorte le "médiateur" de cette action à distance.

$$
\vec{F_e} = q \vec{E}
$$

Entre deux plaques planes et parallèles d'un condensateur plan, le champ électrique est uniforme. Il est dirigé de la plaque chargée positivement vers la plaque chargée négativement. Sa valeur dépend de la tension $U$ entre les deux plaques et de la distance $d$ entre les deux plaques.

$$
E = \frac{U}{d}
$$

## Le champ de pesanteur

En physique, le champ de pesanteur $\vec{g}$ est le champ, attractif, vectoriel créé par un corps possédant une masse. Si un autre corps, possédant une masse, se trouve dans ce champ, il subira l'action de la force de pesanteur $\vec{F}$ exercée à distance par le corps : le champ de pesanteur est en quelque sorte le "médiateur" de cette action à distance.

$$
\vec{F} = m \vec{g}
$$

Le champ de pesanteur dépend de la masse du corps qui a créé le champ, mais aussi de la distance à ce corps. En effet, plus on s'éloigne d'un corps, plus le champ de pesanteur qu'il crée est faible.

$$
\vec{g} = \frac{G M}{r^2} \vec{u}
$$

avec $G$ la constante de gravitation universelle, $M$ la masse du corps qui crée le champ, $r$ la distance à ce corps et $\vec{u}$ le vecteur unitaire dirigé vers le centre de masse du corps qui crée le champ.

A proximité de la surface de la Terre, à une altitude $h$ de la surface de la Terre, donc à une distance $R_T + h$ du centre de masse de la Terre, la relation précédente devient :

$$
\vec{g} = \frac{G M_T}{(R_T + h)^2} \vec{u}
$$

avec $R_T$ le rayon de la Terre.

Si $h$ est petit devant $R_T$, et donc négligeable, on peut faire l'approximation suivante :

$$
\vec{g} = \frac{G M_T}{R_T^2} \vec{u}
$$

La norme du champ de pesanteur à la surface de la Terre, notée $g$, est alors constante et vaut : $g = 9,81 \rm{m.s^{-2}}$. De plus, si l'on peut faire l'approximation que le vecteur $\vec{u}$ est vertical et dirigé vers le bas, alors le champ de pesanteur est vertical et dirigé vers le bas. La norme, la direction et le sens du champ de pesanteur étant constants, le champ de pesanteur est uniforme.


## Référentiel galiléen

En physique, un référentiel galiléen (nommé ainsi en hommage à Galilée), se définit comme un référentiel dans lequel le principe d'inertie (première loi de Newton) est vérifié, c'est-à-dire que tout corps ponctuel libre (i. e. sur lequel ne s’exerce aucune force ou sur lequel la résultante des forces est nulle) est en mouvement de translation rectiligne uniforme, ou au repos (qui est un cas particulier de mouvement rectiligne uniforme).

Tout référentiel en mouvement de translation rectiligne et uniforme par rapport à un référentiel galiléen est lui-même galiléen : il existe donc une infinité de référentiels galiléens.

::: info Remarque
En réalité, il n'existe par de référentiel galiléen parfait, car la Terre tourne sur elle-même et autour du Soleil, le Soleil tourne autour du centre de la Galaxie, etc. Cependant on peut les considérer comme galiéléen pendant une durée limitée. Par exemple, la Terre tourne sur elle-même et donc le référentiel terrestre n’est pas rigoureusement galiléen. Mais, pour des expériences qui n'excèdent pas quelques minutes, les effets de la rotation terrestre peuvent être négligés.
:::