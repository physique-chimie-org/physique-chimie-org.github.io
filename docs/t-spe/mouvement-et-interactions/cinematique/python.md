---
titleTemplate: "Cinématique"
next: false
---

# Utiliser des outils numériques et le langage de programmation Python pour étudier un mouvement

Pour étudier un mouvement, il est possible d'utiliser des outils numériques et le langage de programmation Python. Ces outils permettent de tracer des graphiques, de calculer des vitesses et accélérations, de déterminer des équations horaires et des équations de trajectoires.

## Pointage vidéo

Pour étudier un mouvement et notamment déterminer les vitesses et accélérations, il faut disposer de données expérimentales de position. Ces données peuvent être obtenues à l'aide d'un logiciel de pointage vidéo. Une solution en ligne est disponible à l'adresse suivante : [MecaChrono](https://www.eleves.online/MecaChrono/index.php?A=7&B=0&C=0&D=1&E=132&H=-1767820891&lang=fr).

Cet outil permet de charger une vidéo, de choisir un référentiel, une échelle et de pointer les positions successives d'un objet en mouvement. Une fois le pointage terminé, il est possible de copier les données afin de les exploiter dans un programme en langage Python.

Exemple de données :

```python
t = [0.2, 0.24, 0.28, 0.32, 0.36, 0.399999, 0.439999, 0.479998, 0.519997, 0.559997, 0.599997, 0.639997, 0.679997, 0.719997, 0.759997, 0.799997, 0.839997, 0.879997]
x = [0.414198, 0.574228, 0.687191, 0.856636, 0.99784, 1.1767, 1.33673, 1.4591, 1.61914, 1.76975, 1.92978, 2.06157, 2.20278, 2.36281, 2.48519, 2.61698, 2.76759, 2.92762]
y = [2.34398, 2.55108, 2.77701, 2.94645, 3.10648, 3.26651, 3.40772, 3.53009, 3.65247, 3.7466, 3.83133, 3.85957, 3.91605, 3.97253, 4.00077, 4.01019, 4.00077, 3.99136]
```

## Calcul des vitesses et accélérations à l'aide de Python

Une fois les données de position obtenues, il est possible de calculer les coordonnées des vecteurs vitesses et accélérations. Pour cela, on peut utiliser la méthode des points adjacents. On peut alors déterminer les coordonnées des vecteurs vitesse moyenne et accélération moyenne en chaque point.

$$
\begin{align}
\vec{v_{i,moy}} &= \frac{\vec{OM_{i+1}} - \vec{OM_{i-1}}}{t_{i+1} - t_{i-1}} \\
\vec{a_{i,moy}} &= \frac{\vec{v_{i+1}} - \vec{v_{i-1}}}{t_{i+1} - t_{i-1}}
\end{align}
$$

### Vecteur vitesse moyenne

Voici un exemple de code permettant de calculer les coordonnées des vecteurs vitesse moyenne en chaque point, à partir des données de position et de temps précédentes.

```python:line-numbers
# Initialisation des listes de coordonnées des vecteurs vitesse
vx = []
vy = []
v = []

for i in range(1, len(t)-1): # [!code warning]
    # Calcul des coordonnées du vecteur vitesse à la date i
    vx_i = (x[i+1] - x[i-1]) / (t[i+1] - t[i-1])
    vy_i = (y[i+1] - y[i-1]) / (t[i+1] - t[i-1])
    # Calcul de la norme du vecteur vitesse à la date i
    v_i = (vx_i**2 + vy_i**2)**0.5
    # Ajout dans les listes correspondantes
    vx.append(vx_i)
    vy.append(vy_i)
    v.append(v_i)

```

::: warning Attention - ligne 6
Il est important de noter que les coordonnées des vecteurs vitesse sont calculées à partir des coordonnées des points adjacents. Ainsi il n'est pas possible de calculer la vitesse à la première et dernière date.

C'est pour cette raison que dans la boucle `for`, l'indice `i` va prendre toutes les valeurs de `1`, correspondant à la deuxième date, à `len(t)-1`, correspondant à l'avant-derniere date. Il va donc toujours être possible, pour chaque valeur de `i`, d'aller chercher `x[i+1]` et `x[i-1]` dans la liste `x`, chercher `y[i+1]` et `y[i-1]` dans la liste `y` et chercher `t[i+1]` et `t[i-1]` dans la liste `t`.
:::

### Vecteur accélération moyenne

Une première approche serait de simplement réutiliser la boucle `for` précédente en remplaçant les coordonnées des points par les coordonnées des vecteurs vitesses.

```python:line-numbers
# Initialisation des listes de coordonnées des vecteurs accélération
ax = []
ay = []
a = []

for i in range(1, len(t)-1): # [!code warning]
    # Calcul des coordonnées du vecteur accélération à la date i
    ax_i= (vx[i+1] - vx[i-1]) / (t[i+1] - t[i-1]) # [!code warning]
    ay_i= (vy[i+1] - vy[i-1]) / (t[i+1] - t[i-1]) # [!code warning]
    # Calcul de la norme du vecteur accélération à la date i
    a_i = (ax_i**2 + ay_i**2)**0.5
    # Ajout dans les listes correspondantes
    ax.append(ax_i)
    ay.append(ay_i)
    a.append(a_i)
```

::: warning Attention - ligne 6, 8 et 9
Il est important de noter que les coordonnées des vecteurs accélération sont calculées à partir des coordonnées des vecteurs vitesse adjacents. La vitesses aux premières et dernières dates n'étant pas calculée, il n'est pas possible de calculer l'accélération aux deux premières et deux dernières dates. Ainsi l'indice `i` dans la boucle `for` ne peut pas aller de `1` à `len(t)-1` comme pour le calcul des vitesses. Il faut donc décaler l'indice `i` qui va donc prendre toutes les valeurs de `2`, correspondant à la troisème date, à `len(t)-2`, correspondant à l'avant-avant-dernière date.

De plus les listes `vx` et `vy`, ne contennant pas les coordonnées des vecteurs vitesse à la première et dernière dates, ne font pas la même taille que la liste `t`. Par exemple les coordonées de la première vitesse sont `vx[0]` et `vy[0]` mais elles correspondent à la deuxième date `t[1]`. On observe que les indices sont décalées entre les listes `vx`, `vy` et `t`.

Ainsi lorsque l'on veut calculer l'accélération à la date d'indice `i`, il faut aller chercher les dates d'indice `i+1` et `i-1` dans la liste `t` mais les coordonnées des vecteurs vitesse d'indice `i` et `i-2` dans la liste `vx` et `vy`.
:::

Le code précédent, corrigé, devient :

```python:line-numbers
# Initialisation des listes de coordonnées des vecteurs accélération
ax = []
ay = []
a = []

for i in range(1, len(t)-1): # [!code --]
for i in range(2, len(t)-2): # [!code ++]
    # Calcul des coordonnées du vecteur accélération à la date i
    ax_i = (vx[i+1] - vx[i-1]) / (t[i+1] - t[i-1]) # [!code --]
    ax_i = (vx[i] - vx[i-2]) / (t[i+1] - t[i-1]) # [!code ++]
    ay_i = (vy[i+1] - vy[i-1]) / (t[i+1] - t[i-1]) # [!code --]
    ay_i = (vy[i] - vy[i-2]) / (t[i+1] - t[i-1]) # [!code ++]
    # Calcul de la norme du vecteur accélération à la date i
    a_i = (ax_i**2 + ay_i**2)**0.5
    # Ajout dans les listes correspondantes
    ax.append(ax_i)
    ay.append(ay_i)
    a.append(a_i)
```

### Code complet

```python:line-numbers
t = [0.2, 0.24, 0.28, 0.32, 0.36, 0.399999, 0.439999, 0.479998, 0.519997, 0.559997, 0.599997, 0.639997, 0.679997, 0.719997, 0.759997, 0.799997, 0.839997, 0.879997]
x = [0.414198, 0.574228, 0.687191, 0.856636, 0.99784, 1.1767, 1.33673, 1.4591, 1.61914, 1.76975, 1.92978, 2.06157, 2.20278, 2.36281, 2.48519, 2.61698, 2.76759, 2.92762]
y = [2.34398, 2.55108, 2.77701, 2.94645, 3.10648, 3.26651, 3.40772, 3.53009, 3.65247, 3.7466, 3.83133, 3.85957, 3.91605, 3.97253, 4.00077, 4.01019, 4.00077, 3.99136]

# Initialisation des listes de coordonnées des vecteurs vitesse
vx = []
vy = []
v = []

for i in range(1, len(t)-1):
    # Calcul des coordonnées du vecteur vitesse à la date i
    vx_i = (x[i+1] - x[i-1]) / (t[i+1] - t[i-1])
    vy_i = (y[i+1] - y[i-1]) / (t[i+1] - t[i-1])
    # Calcul de la norme du vecteur vitesse à la date i
    v_i = (vx_i**2 + vy_i**2)**0.5
    # Ajout dans les listes correspondantes
    vx.append(vx_i)
    vy.append(vy_i)
    v.append(v_i)

# Initialisation des listes de coordonnées des vecteurs accélération
ax = []
ay = []
a = []

for i in range(2, len(t)-2):
    # Calcul des coordonnées du vecteur accélération à la date i
    ax_i = (vx[i] - vx[i-2]) / (t[i+1] - t[i-1])
    ay_i = (vy[i] - vy[i-2]) / (t[i+1] - t[i-1])
    # Calcul de la norme du vecteur accélération à la date i
    a_i = (ax_i**2 + ay_i**2)**0.5
    # Ajout dans les listes correspondantes
    ax.append(ax_i)
    ay.append(ay_i)
    a.append(a_i)
```

Il est ensuite possible de visualiser les vecteurs vitesse et accélération moyenne en chaque point à l'aide de la bibliothèque `matplotlib`.
