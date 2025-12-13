---
titleTemplate: "Transferts macroscopiques d’énergie"
next: false
---

# Modélisation de l’évolution temporelle de la température d’un système en contact avec un thermostat

## Énoncé du problème

Soit un système fermé (sans échange de matière avec l’extérieur), incompressible ($W=0$), de masse $m$ et de capacité thermique massique $c$, initialement à la température $\theta(t=0)=\theta_0$.

On suppose que la température du système est homogène à tout instant $t$.

On suppose que ce système échange de la chaleur avec un milieu thermostaté à température constante $\theta_{th}$ par un transfert thermique conducto-convectif caractérisé par un coefficient d’échange thermique surfacique $h$ et une surface d’échange $S$.

## Définitions

### Transfert thermique $Q$

$$
Q=C\cdot \Delta \theta = m \cdot c \cdot \Delta \theta \qquad (1)
$$

voir le cours sur la [capacité thermique](./energie-interne.md#capacite-thermique) pour plus de détails.

### Flux thermique moyen

$$
ϕ_{moy}=\frac{Q}{Δt}
$$

voir le cours sur le [flux thermique](./transfert-thermique.md#le-flux-thermique) pour plus de détails.

D'après $(1)$, on obtient :

$$
ϕ_{moy} = \frac{m \cdot c \cdot \Delta \theta}{Δt} \qquad (2)
$$

### Flux thermique instantané

Lorsque $\Delta t$ tend vers zéro, le flux thermique moyen devient le flux thermique instantané :

$$
\begin{align}
    ϕ(t) &= \lim_{\Delta t \to 0} ϕ_{moy} \\
    &= \lim_{\Delta t \to 0} \frac{m \cdot c \cdot \Delta \theta}{\Delta t} \\
    &= m \cdot c \cdot \frac{d\theta(t)}{dt} \qquad (3)
\end{align}
$$

### Loi phénoménologique de Newton

$$
ϕ(t) = h \cdot S \cdot (\theta(t) - \theta_{th}) \qquad (4)
$$

voir le cours sur le [flux thermique conducto-convectif](./transfert-thermique.md#flux-thermique-conducto-convectif) pour plus de détails.

## Équation différentielle

En combinant les équations $(3)$ et $(4)$, on obtient l’équation différentielle suivante :

$$
m \cdot c \cdot \frac{d\theta(t)}{dt} = - h \cdot S \cdot (\theta(t) - \theta_{th})
$$

On peut réécrire cette équation différentielle sous la forme standard :

$$
\frac{d\theta(t)}{dt} + \frac{h \cdot S}{m \cdot c} \cdot \theta(t) = \frac{h \cdot S}{m \cdot c} \cdot \theta_{th} \qquad (5)
$$

Ou encore :

$$
\frac{d\theta(t)}{dt} + \frac{1}{\tau} \cdot \theta(t) = \frac{1}{\tau} \cdot \theta_{th} \qquad (6)
$$

Avec $\tau = \frac{m \cdot c}{h \cdot S}$ le temps caractéristique.

## Solution de l’équation différentielle

Cette équation différentielle $(5)$ admet pour solution :

$$
\theta(t) = \theta_{th} + (\theta_0 - \theta_{th}) \cdot e^{-\frac{h \cdot S}{m \cdot c} \cdot t}
$$

Ou d'après $(6)$ :

$$
\theta(t) = \theta_{th} + (\theta_0 - \theta_{th}) \cdot e^{-\frac{t}{\tau}}
$$

Avec $\tau = \frac{m \cdot c}{h \cdot S}$ le temps caractéristique.

Cette solution montre que la température du système évolue de manière exponentielle vers la température du milieu extérieur $\theta_{th}$ avec un temps caractéristique $\tau$ qui dépend des propriétés thermiques du système et des conditions d’échange thermique avec l’extérieur.

## Identifier les paramètres sur un graphique

On peut identifier les paramètres la courbe de la température $\theta(t)$ en fonction du temps $t$ :

1. $\theta_0$ correspond à la valeur de la température à l’instant initial $t=0$.
2. $\theta_{th}$ correspond à la température finale lorsque $t$ tend vers l’infini. Il s'agit de l'asymptote horizontale de la courbe.
3. Le temps caractéristique $\tau$ :

   $$
   \begin{align}
   \text{À } t = \tau, \quad \theta(\tau) &= \theta_{th} + (\theta_0 - \theta_{th}) \cdot e^{-\frac{\tau}{\tau}} \\
   \Rightarrow \theta(\tau) &= \theta_{th} + (\theta_0 - \theta_{th}) \cdot e^{-1} \\
   \Rightarrow \theta(\tau) &\approx \theta_{th} + (\theta_0 - \theta_{th}) \cdot 0.37 \\
   \Rightarrow \frac{\theta(\tau) - \theta_{th}}{\theta_0 - \theta_{th}} &\approx 0.37 \\
   \end{align}
   $$

   Graphiquement, $\tau$ correspond au temps nécessaire pour que la température du système atteigne environ 37 % de la différence entre la température initiale et la température finale ou 63 % de la différence entre la température finale et la température initiale.
