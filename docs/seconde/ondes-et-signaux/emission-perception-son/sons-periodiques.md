# Les sons périodiques

Lorsqu'un émetteur vibre, il génère un signal sonore qui se propage. À l’aide d’un microphone, on peut transformer ce signal sonore en signal électrique. Ce signal converti est alors visualisable sur un oscilloscope ou sur un ordinateur, sous la forme d’un graphique en fonction du temps. Si la vibration de l'émetteur est régulière, le signal sonore est régulier ainsi que le signal électrique. On parle alors de signal périodique.

![animation onde sonore périodique](/images/cours/signal-periodique.gif "Son périodique")

L'amplitude du signal électrique observé, représente les compressions et dilations du milieu matériel. Il est proportionnelle à l'amplitude de la vibration de l'émetteur.

On observe sur le signal un « motif » qui se répète.

## Période et fréquence

La période d’un signal périodique se lit sur un graphique qui représente le signal lorsque le temps est en abscisse.

C’est la durée du plus court « motif » qui se répète identique à lui-même. La période s’exprime en seconde (s).

![période](/images/cours/motif-periode.png "Motif et lecture de la période T sur un graphique")

::: warning Attention
Dans la réalité, les motifs ne sont généralement pas aussi nets, et la période ne coincide pas avec les graduations. Cela engendre des erreurs de lecture de la période.

Dans ce cas, pour mesurer la période avec une plus grande précision il faut :

- mesurer la durée $\Delta t$ de plusieurs motifs, donc plusieurs périodes $T$ (exemple : Si l'on mesure la durée de $10$ motifs, on aura $10$ périodes $T$ et donc $\Delta t = 10\times T$)
- diviser la durée $\Delta t$ mesurée, par le nombre de périodes $T$ pour trouver la valeur d'une seule période $T$ (suite de l'exemple : $T = \frac{\Delta t}{10}$)
:::

__Question :__ Quelle est la période $T$ du signal représenté ci-dessus ?

::: details Afficher la réponse
La période est :
$$
\begin{align}
T &= 0,025(s)-0,005(s) \\
T &= 0,020 s
\end{align}
$$
:::

La fréquence f du son représente le nombre de périodes de ce signal par seconde. Elle s’exprime en hertz (Hz).

::: danger Important
La fréquence et la période sont liées par les deux relations suivantes :

$$
\begin{align}
f &= \frac{1}{T} &(1) \\
T &= \frac{1}{f} &(2)
\end{align}
$$

:::

__Question :__ Quelle est la fréquence $f$ du signal représenté ci-dessus ?

::: details Afficher la réponse
On utilise la relation $f = \frac{1}{T}$ en vérifiant bien que $T$ est en seconde !
$$
\begin{align}
f &= \frac{1}{T} \\
&= \frac{1}{0,020(s)} \\
&= 50 Hz
\end{align}
$$
:::

## Hauteur d'un son et timbre

Un son de fréquence élevée donne un son aigu, une fréquence basse donne un son grave. C’est la fréquence qui définit la hauteur d’un son.

En musique, des sons de même hauteur représentent la même note (par exemple un La3 si la fréquence est de 440 Hz). Pourtant, même si deux instruments jouent la même note, ils sont différentiables et identifiables à l’oreille. Leur timbre est différent.

Le timbre d’un son (et par extension, le timbre d’un instrument de musique) est l’ensemble des caractéristiques du signal permettant de distinguer ce son d’un autre son de même hauteur. Graphiquement le timbre est lié à la forme du signal.
