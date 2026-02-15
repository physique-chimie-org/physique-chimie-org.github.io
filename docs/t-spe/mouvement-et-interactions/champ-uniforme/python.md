---
titleTemplate: "Mouvement dans un champ uniforme"
---

# Utiliser des outils numériques et le langage de programmation Python pour étudier un mouvement

Pour étudier l'évolution des grandeurs énergétiques d'un système, il est possible d'utiliser des outils numériques et le langage de programmation Python.

## Pointage vidéo

Pour étudier un mouvement et notamment déterminer les vitesses et accélérations, il faut disposer de données expérimentales de position. Ces données peuvent être obtenues à l'aide d'un logiciel de pointage vidéo. Une solution en ligne est disponible à l'adresse suivante : [MecaChrono](https://www.eleves.online/MecaChrono/index.php?A=7&B=0&C=0&D=1&E=132&H=-1767820891&lang=fr).

Cet outil permet de charger une vidéo, de choisir un référentiel, une échelle et de pointer les positions successives d'un objet en mouvement. Une fois le pointage terminé, il est possible de copier les données afin de les exploiter dans un programme en langage Python.

Exemple de données, issues d'un pointage vidéo d'une chute libre d'une balle de tennis dans un champ de pesanteur uniforme :

```python
t = [ 0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.24, 0.28, 0.32, 0.36, 0.4, 0.44, 0.48, 0.52, 0.56, 0.6, 0.64, 0.68]
x = [0.467066, 0.47006, 0.47006, 0.473054, 0.476048, 0.482036, 0.482036, 0.479042, 0.488024, 0.491018, 0.497006, 0.5, 0.5, 0.505988, 0.505988, 0.511976, 0.520958, 0.520958]
y = [2.25449, 2.23353, 2.20359, 2.15868, 2.09281, 2.01497, 1.92515, 1.81737, 1.68263, 1.5479, 1.38323, 1.20359, 0.997006, 0.784431, 0.547904, 0.287425, -0.00898204, -0.302395]

```

## Energie cinétique et énergie potentielle de pesanteur

Une fois les données de position obtenues, il est possible de calculer les énergies cinétiques et potentielle de pesanteur du système. Il est possible l'énergie cinétique à partir de la vitesse et l'énergie potentielle de pesanteur à partir de l'altitude.

### Energie cinétique

Voici un exemple de code permettant de calculer l'énergie cinétique en chaque point, à partir des données de vitesses et de la masse du système. On suppose ici que les vitesses sont stockées dans une liste `v` et que la masse du système est stockée dans une variable `m`.

::: info Remarque
Les données de vitesses peuvent être calculées par la méthode des points adjacents comme vu dans la partie [Vecteur vitesse moyenne](../cinematique/python#vecteur-vitesse-moyenne) du cours [Utiliser des outils numériques et le langage de programmation Python pour étudier un mouvement](../cinematique/python) du chapitre [Cinématique](../cinematique/).
:::

```python:line-numbers
# Initialisation de la liste des énergies cinétiques
Ec = []

for i in range(1, len(t)-1): # [!code warning]
    # Calcul de l'énergie cinétique à la date i
    Ec_i = 0.5 * m * v[i-1] ** 2
    # Ajout dans la liste correspondante
    Ec.append(Ec_i)
```

::: warning Attention ligne 4
Il est important de noter que les coordonnées des vecteurs vitesse étant calculées par la méthode des points adjacents, il n'est pas possible de calculer la vitesse à la première et dernière date. Il n'est donc pas possible de calculer l'énergie cinétique à la première et dernière date. Ainsi la vitesse `v[0]` correspond à la vitesse à la deuxième date, c'est-à-dire `t[1]`. Pour cette raison, les énergies cinétiques sont calculées de la date `1` à `len(t)-1` et pour une date `i`, la vitesse correspondante est `v[i-1]`.
:::

### Energie potentielle de pesanteur

Voici un exemple de code permettant de calculer l'énergie potentielle de pesanteur en chaque point, à partir des données d'altitudes. On suppose ici que les altitudes sont stockées dans une liste `y`, que l'origine des énergies potentielles de pesanteur est stockée dans la variable `yEp0` et que la masse du système est stockée dans une variable `m`.

```python:line-numbers
# Initialisation de la liste des énergies potentielles de pesanteur
Epp = []

for i in range(0, len(t)):
    # Calcul de l'énergie potentielle de pesanteur à la date i
    Epp_i = m * 9.81 * (y[i] - yEp0)
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

for i in range(1, len(t)-1): # [!code warning]
    # Calcul de l'énergie mécanique à la date i
    Em_i = Ec[i-1] + Ep[i] # [!code warning]
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

Il est possible de déterminer en même temps les énergies cinétiques, potentielles et mécaniques. Voici un exemple de code permettant de calculer ces énergies en chaque point, à partir des données de position, de masse et de temps. On suppose ici que les données de position sont stockées dans les listes `x` et `y`, que l'origine des énergies potentielles de pesanteur est stockée dans la variable `yEp0`, que la masse du système est stockée dans une variable `m`, que les données de temps sont stockées dans une liste `t` et que les vitesses sont stockées dans une liste `v`. Les vitesses ont été obtenues par la méthode des points adjacents.

```python:line-numbers
# Initialisation des listes d'énergies
Ec = []
Ep = []
Em = []

for i in range(1, len(t)-1):
    # Calcul de l'énergie cinétique à la date i
    Ec_i = 0.5 * m * v[i-1] ** 2
    # Calcul de l'énergie potentielle à la date i
    Ep_i = m * 9.81 * (y[i] - yEp0)
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
    Ep_i = m * 9.81 * (y[i] - yEp0)
    # Calcul de l'énergie mécanique à la date i
    Em_i = Ec_i + Ep_i
    # Ajout dans les listes correspondantes
    Ec.append(Ec_i)
    Ep.append(Ep_i)
    Em.append(Em_i)
```

:::

Il est ensuite possible d'utiliser les listes `t`, `Ec`, `Ep`, `Em` à l'aide de la bibliothèque `matplotlib` pour tracer des graphiques représentant les énergies en fonction du temps.

Voir un exemple d'exploitation : [Energie - python](https://console.basthon.fr/?kernel=python&script=eJydVdtu2zAMfQ-QfyDShzrXyXe7QB-Kwts6DNuA9S0IBtdRWxW27NlKFv_NXvsd-bFR9CVtka3bAkQ-OqQOSZFORFbkpYIsVkWaq1TcLIpaI4grKFI1HAwHCs5hCWwGbMEcWgO9mhatnl4JWmS0yGgTY5ORaKdZyeiS0SVjs5DRC1bDwU4HQ0fPZ15z2mfsJbCZ28j5HmskncBibbQD8kPmWA0XsCY7JzSZ2ZwIOz33sDA3DIIXyDRDv_GzWOgGB4TZ1jpba2G5jhPOAIFtuzYBZrvEmG7gBRqw0ApMAiaGnoG5CC3XdDUITN8mxgssz9bAxdz10w5si4hWjy3CPm0_cBzbpHSo0ubyfcdCzTk2iQUhXoVDG5tZduiudDdP4EoKJeJUVLESuYQ1rwA3Ch9rDkmel-tcyv0j7SvY8kTxTYlAoEvFh4Mt9QjFtnUH2udwcJuXIEBIKGN5xw1ML-XSUOO5OT4bDgA_J3AZp8kmJfHn0TZdsC4W7H9CGsM6VhxEc3y7-yYwmrFbiqm5gjkgmJurMbwBQ3Wcarj2RN2cqDtr_dqJJynq8DIvM_6X2TWhdJKTiQVTCo5oPJlgmzr1i4d8o_CcxIs_XH6SlyWvilyiAfdduYu4KLhck2ZfUU_WB7LniHql0af7R8nLO6HjREnbvqjoQNaCE_xh0JXqizjNbx64Ai4hud9gyfhbUeI0aFecNtfX3h9P81LcCckpWB8DilxxqQRPdb28UqgWp0qoDQrfChmnKFRHBUOteomN-MdBQrkuFiQCp0mJ75tj_YkSahD2AiaQ4dfYUuPn2yXDiZhMwPqj-JM6jqkXpK51Q3yptTzOGo0c1nZsuA7K2f4xieXv0s5ImLKfUpj_GKUo6SZE64y7lHuyOJBZT2b9MF28fXt1-f7iXQRfPl99uv46HODfw0L_VeBbZJ7hJc6iZDaajrBT8Q1Pz0dRgv0ajY85Fs8dC3IEOOaaPXfNnmjuiDRG1zwrKjCq3lC3hqi9XONDb0r5nS6s3VX3-Q9j_AsQmOjd)
