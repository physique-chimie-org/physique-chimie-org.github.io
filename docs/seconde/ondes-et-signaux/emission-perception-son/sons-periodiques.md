---
titleTemplate: "Émission et perception des sons"
---

# Les sons périodiques

Lorsqu’un émetteur vibre, il génère un signal sonore qui se propage. À l’aide d’un microphone, on peut transformer ce signal sonore en signal électrique. Ce signal converti est alors visualisable sur un oscilloscope ou sur un ordinateur, sous la forme d’un graphique en fonction du temps. L’amplitude du signal électrique observé, représente les compressions et dilations du milieu matériel. Il est proportionnelle à l’amplitude de la vibration de l’émetteur.

![animation onde sonore périodique](/images/cours/signal-periodique.gif "Son périodique")

Si la vibration de l’émetteur est régulière, le signal sonore est régulier ainsi que le signal électrique et on observe sur le signal un « motif » qui se répète. On parle alors de signal **périodique**.

::: danger Définition
Un signal est dit **périodique** si un motif se répète de façon identique au bout d'un intervalle de temps régulier.
:::

## Période et fréquence

La période d’un signal périodique se lit sur un graphique qui représente le signal lorsque le temps est en abscisse.

::: danger Définition
La **période** T est la durée du plus court « motif » qui se répète de façon identique. La période s’exprime en seconde (s).
:::

![période](/images/cours/motif-periode.png "Motif et lecture de la période T sur un graphique")

::: warning Attention
Dans la réalité, les motifs ne sont généralement pas aussi nets, et la période ne coincide pas avec les graduations. Cela engendre des erreurs de lecture de la période.

Dans ce cas, pour mesurer la période avec une plus grande précision il faut :

- mesurer la durée $\Delta t$ de plusieurs motifs, donc plusieurs périodes $T$ (exemple : Si l’on mesure la durée de $10$ motifs, on aura $10$ périodes $T$ et donc $\Delta t = 10\times T$)
- diviser la durée $\Delta t$ mesurée, par le nombre de périodes $T$ pour trouver la valeur d’une seule période $T$ (suite de l’exemple : $T = \frac{\Delta t}{10}$)
  :::

**Question :** Quelle est la période $T$ du signal représenté ci-dessus ?

::: details Afficher la réponse
La période est :

$$
\begin{align}
T &= 0,025(s)-0,005(s) \\
T &= 0,020 s
\end{align}
$$

:::

:: danger Définition
La **fréquence** f du son représente le nombre de périodes de ce signal par seconde. Elle s’exprime en hertz (Hz).
:::

::: danger Important
La fréquence et la période sont liées par les deux relations suivantes :

$$
\begin{align}
f &= \frac{1}{T} &(1) \\
T &= \frac{1}{f} &(2)
\end{align}
$$

:::

**Question :** Quelle est la fréquence $f$ du signal représenté ci-dessus ?

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
