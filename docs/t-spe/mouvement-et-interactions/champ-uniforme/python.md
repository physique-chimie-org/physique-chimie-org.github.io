---
titleTemplate: "Mouvement dans un champ uniforme"
---

# Utiliser des outils numériques et le langage de programmation Python pour étudier un mouvement

Pour étudier l'évolution des grandeurs énergétiques d'un système, il est possible d'utiliser des outils numériques et le langage de programmation Python.

## Pointage vidéo

Pour étudier un mouvement et notamment déterminer les vitesses et accélérations, il faut disposer de données expérimentales de position. Ces données peuvent être obtenues à l'aide d'un logiciel de pointage vidéo. Une solution en ligne est disponible à l'adresse suivante : [MecaChrono](https://www.eleves.online/MecaChrono/index.php?A=7&B=0&C=0&D=1&E=132&H=-1767820891&lang=fr).

Cet outil permet de charger une vidéo, de choisir un référentiel, une échelle et de pointer les positions successives d'un objet en mouvement. Une fois le pointage terminé, il est possible de copier les données afin de les exploiter dans un programme en langage Python.

Exemple de données :

```python
t = [0.2, 0.24, 0.28, 0.32, 0.36, 0.399999, 0.439999, 0.479998, 0.519997, 0.559997, 0.599997, 0.639997, 0.679997, 0.719997, 0.759997, 0.799997, 0.839997, 0.879997]
x = [0.414198, 0.574228, 0.687191, 0.856636, 0.99784, 1.1767, 1.33673, 1.4591, 1.61914, 1.76975, 1.92978, 2.06157, 2.20278, 2.36281, 2.48519, 2.61698, 2.76759, 2.92762]
y = [2.34398, 2.55108, 2.77701, 2.94645, 3.10648, 3.26651, 3.40772, 3.53009, 3.65247, 3.7466, 3.83133, 3.85957, 3.91605, 3.97253, 4.00077, 4.01019, 4.00077, 3.99136]
```

## Energie cinétique et énergie potentielle de pesanteur

Une fois les données de position obtenues, il est possible de calculer les énergies cinétiques et potentielle de pesanteur du système. Il est possible l'énergie cinétique à partir de la vitesse et l'énergie potentielle de pesanteur à partir de l'altitude.

### Energie cinétique

Voici un exemple de code permettant de calculer l'énergie cinétique en chaque point, à partir des données de vitesses et de la masse du système. On suppose ici que les vitesses sont stockées dans une liste `v` et que la masse du système est stockée dans une variable `m`.

::: info Remarque
Les données de vitesses peuvent être calculées par la méthode des points adjacents comme vu dans la partie [Vecteur vitesse moyenne](../cinematique/python#vecteur-vitesse-moyenne) du cours [Utiliser des outils numériques et le langage de programmation Python pour étudier un mouvement](../cinematique/python) du chapitre [Cinématique](../cinematique).
:::

```python:line-numbers
# Initialisation de la liste des énergies cinétiques
Ec = []

for i in range(1, len(t)-1):  // [!code warning]
    # Calcul de l'énergie cinétique à la date i
    Ec_i = 0.5 * m * v[i-1] ** 2
    # Ajout dans la liste correspondante
    Ec.append(Ec_i)
```

::: warning Attention ligne 4
Il est important de noter que les coordonnées des vecteurs vitesse étant calculées par la méthode des points adjacents, il n'est pas possible de calculer la vitesse à la première et dernière date. Il n'est donc pas possible de calculer l'énergie cinétique à la première et dernière date. Ainsi la vitesse `v[0]` correspond à la vitesse à la deuxième date, c'est-à-dire `t[1]`. Pour cette raison, les énergies cinétiques sont calculées de la date `1` à `len(t)-1` et pour une date `i`, la vitesse correspondante est `v[i-1]`.
:::

### Energie potentielle de pesanteur

Voici un exemple de code permettant de calculer l'énergie potentielle de pesanteur en chaque point, à partir des données d'altitudes. On suppose ici que les altitudes sont stockées dans une liste `y` et que la masse du système est stockée dans une variable `m`.

```python:line-numbers
# Initialisation de la liste des énergies potentielles de pesanteur
Epp = []

for i in range(0, len(t)):
    # Calcul de l'énergie potentielle de pesanteur à la date i
    Epp_i = m * 9.81 * y[i]
    # Ajout dans la liste correspondante
    Epp.append(Epp_i)
```

::: warning Attention
Il est important de noter que les énergies potentielles de pesanteur sont obtenues à partir des altitudes. Il est donc possible de calculer l'énergie potentielle de pesanteur en tout point, y compris à la première et dernière date.
:::

::: info Remarque
Si l'énergie potentielle de pesanteur n'est pas la seule énergie potentielle à prendre en compte, on pourra calculer l'énergie potentielle totale à partir de l'énergie potentielle de pesanteur et des autres énergies potentielles. D'autres relations seront alors à prendre en compte.
:::

## Energie mécanique

L'énérgie mécanique d'un système est la somme de l'énergie cinétique et de l'énergie potentielle de ce système. A partir des données d'énergies cinétiques et potentielles, il est donc possible de déterminer l'énergie mécanique. Mais il est également possible d'utiliser l'énergie mécanique pour déterminer l'énergie cinétique ou l'énergie potentielle, à partir des données d'énergie mécanique et d'énergie cinétique ou potentielle.

### Déterminer de l'énergie mécanique

Voici un exemple de code permettant de calculer l'énergie mécanique, à partir des données d'énergies cinétiques et potentielles. On suppose ici que les énergies cinétiques sont stockées dans une liste `Ec` et que les énergies potentielles sont stockées dans une liste `Ep`. L'énergie cinétique a été obtenue à partir des vitesses calculées par la méthode des points adjacents.

```python:line-numbers
# Initialisation de la liste des énergies mécaniques
Em = []

for i in range(1, len(t)-1): // [!code warning]
    # Calcul de l'énergie mécanique à la date i
    Em_i = Ec[i-1] + Ep[i] // [!code warning]
    # Ajout dans la liste correspondante
    Em.append(Em_i)
```

::: warning Attention ligne 4 et 6
Si l'on suppose que l'énergie potentielle a été calculée en tout point, mais que l'énergie cinétique n'a pas été calculée à la première et dernière date, les listes `Ec` et `Ep` n'ont pas la même longueur. `Ec[0]` correspond à l'énergie cinétique à la deuxième date. Or à la deuxième date, l'énergie potentielle est `Ep[1]`. Pour cette raison, les énergies mécaniques sont calculées de la date `1` à `len(t)-1` et pour une date `i`, l'énergie potentielle est `Ep[i]` et l'énergie cinétique est `Ec[i-1]`.
:::

### Déterminer l'énergie cinétique ou l'énergie potentielle

Voici un exemple de code permettant de calculer l'énergie potentielle, à partir des données d'énergie mécanique et d'énergie cinétique. On suppose ici que les énergies mécaniques sont stockées dans une liste `Em` et que les énergies cinétiques sont stockées dans une liste `Ec`. L'énergie cinétique a été obtenue à partir des vitesses calculées par la méthode des points adjacents. De même, on suppose que l'énergie mécanique à la première et dernière date n'a pas été calculée.

```python:line-numbers
# Initialisation de la liste des énergies potentielles
Ep = []

for i in range(1, len(t)-1):
    # Calcul de l'énergie potentielle à la date i
    Ep_i = Em[i-1] - Ec[i-1]
    # Ajout dans la liste correspondante
    Ep.append(Ep_i)
```

## Programme complet

Il est possible de déterminer en même temps les énergies cinétiques, potentielles et mécaniques. Voici un exemple de code permettant de calculer ces énergies en chaque point, à partir des données de position, de masse et de temps. On suppose ici que les données de position sont stockées dans les listes `x` et `y`, que la masse du système est stockée dans une variable `m`, que les données de temps sont stockées dans une liste `t` et que les vitesses sont stockées dans une liste `v`. Les vitesses ont été obtenues par la méthode des points adjacents.

```python:line-numbers
# Initialisation des listes d'énergies
Ec = []
Ep = []
Em = []

for i in range(1, len(t)-1):
    # Calcul de l'énergie cinétique à la date i
    Ec_i = 0.5 * m * v[i-1] ** 2
    # Calcul de l'énergie potentielle à la date i
    Ep_i = m * 9.81 * y[i]
    # Calcul de l'énergie mécanique à la date i
    Em_i = Ec_i + Ep_i
    # Ajout dans les listes correspondantes
    Ec.append(Ec_i)
    Ep.append(Ep_i)
    Em.append(Em_i)
```

::: info Remarque
La plupart du temps dans les exercices, dans un souci de facilité, les énergies pourront être calculées en tout point et toutes les listes auront la même longueur. Il sera donc possible de calculer les énergies cinétiques, potentielles et mécaniques à toutes les dates.

Le code précédent peut donc être simplifié comme suit :

```python:line-numbers
# Initialisation des listes d'énergies
Ec = []
Ep = []
Em = []

for i in range(0, len(t)):
    # Calcul de l'énergie cinétique à la date i
    Ec_i = 0.5 * m * v[i] ** 2
    # Calcul de l'énergie potentielle à la date i
    Ep_i = m * 9.81 * y[i]
    # Calcul de l'énergie mécanique à la date i
    Em_i = Ec_i + Ep_i
    # Ajout dans les listes correspondantes
    Ec.append(Ec_i)
    Ep.append(Ep_i)
    Em.append(Em_i)
```

:::

Il est ensuite possible de visualiser les énergies cinétiques, potentielles et mécaniques à l'aide de la bibliothèque `matplotlib`.
