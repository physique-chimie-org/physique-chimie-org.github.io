---
titleTemplate: "Transferts macroscopiques d’énergie"
---

# Bilan d’énergie

L’énergie totale d’un système est la somme son énergie mécanique et de son énergie interne : $E=E_M+U$

Lorsque l’énergie mécanique de système est constante, une variation d’énergie s’exprime :

$$
ΔE=ΔE_M+ΔU=ΔU=W+Q
$$

- W : Travail échangé
- Q : Chaleur échangée

Pour effectuer un bilan d’énergie, il faut :

- Définir le système étudié.
- Relever la nature des transferts énergétiques (Travail et/ou transfert thermique)
- Déterminer le sens des transferts d’énergie en attribuant une valeur positive si le système reçoit de l’énergie et négative s’il cède de l’énergie.
- Dtérminer si le système est à l’équilibre thermique ou non.

::: info Remarque
Un système est dit isolé s’il n’effectue aucun transfert d’énergie avec le milieu extérieur.
:::

**Exemple :** Un système constitué d’un radiateur électrique, noté {radiateur}, reçoit un travail électrique $W_e$ et cède de la chaleur $Q$ à l’air intérieur d’une pièce.

$$
\Delta U_{radiateur}  = W_e + Q_{air, int}
$$

$W_e$ est positif et $Q_{air int}$ négatif.

Lors de la mise sous tension du radiateur, sa température augmente, puis elle atteint une température constante. Lorsque le radiateur est à l’équilibre thermique, $\Delta U_{radiateur}=0$. On a :

$$
\begin{align}
\Delta U_{radiateur} &= 0 \\
W_e + Q_{air, int} &= 0 \\
Q_{air int} &= - W_e
\end{align}
$$

On peut voir ici, que l’énergie électrique nécessaire pour maintenir le radiateur à une température constante est égale à l’énergie thermique perdue par l’air du radiateur vers l’air intérieur.

Si on considère maintenant le système {pièce} qui contient l’air intérieur de la pièce. Ce système reçoit de la chaleur $Q_{radiateur}$ et cède de la chaleur $Q_{air, ext}$ à l’air extérieur.

$$
\Delta U_{pièce}  = Q_{radiateur} + Q_{air, ext}
$$

$Q_{radiateur}$ est positif et $Q_{air, ext}$ négatif.

Dans cet exemple, $- Q_{air, int} = Q_{radiateur}$. En effet, quand $Q_{air, int}$ a été définit, il l’a été par rapport au système {radiateur} et il est donc négatif. Or $Q_{radiateur}$ est définit par rapport au système {pièce} et il est donc positif.

Lorsque le radiateur a suffisemment chauffé, que la pièce à atteint une température constante, égale à celle du radiateur, la pièce a atteint l’équilibre thermique. Donc $\Delta U_{pièce}=0$.

On peut alors, par exemple, calculer l’énergie électrique nécessaire pour maintenir la pièce à une température constante.

$$
\begin{align}
\Delta U_{pièce} &= 0 \\
Q_{radiateur} + Q_{air, ext} &= 0 \\
Q_{radiateur} &= - Q_{air, ext} \\
- Q_{air, int} &= - Q_{air, ext} \\
W_e &= - Q_{air, ext}
\end{align}
$$

On peut voir ici, que l’énergie électrique nécessaire pour maintenir la pièce à une température constante est égale à l’énergie thermique perdue par l’air de la pièce vers l’air extérieur.
