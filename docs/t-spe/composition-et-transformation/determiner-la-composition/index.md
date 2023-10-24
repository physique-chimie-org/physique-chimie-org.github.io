---
titleTemplate: "Déterminer la composition d’un système chimique"
prev: false
---

# Introduction

## Table des matières

1. [Méthodes physiques](methodes-physiques.md)
2. [Méthodes chimiques](methodes-chimiques.md)

## Rappels

::: tip Vu en première

- Absorbance :

  Lorsqu’une solution est traversée par de la lumière blanche. Certaines radiations sont absorbées et d’autres sont transmises. La couleur perçue d’une solution est complémentaire des radiations absorbées qui traversent la solution. Des couleurs complémentaires sont diamètralement opposées sur le cercle chromatique.

  Pour une longueur d’onde $λ$ donnée, l’absorbance $A_λ$ d’une espèce chimique $X$ en solution diluée est proportionnelle à la concentration $[X]$ en quantité de matière de cette espèce chimique, à l’épaisseur $l$ de solution traversée et à $ϵ_λ$, le coefficient d’extinction molaire (qui dépend de la nature de l’espèce chimique) : c’est la loi de Beer-Lambert :

  $$
  A_{\lambda} = \epsilon_{\lambda} \times l \times [X]
  $$

- Titrage :

  le titrage colorimétrique permet de déterminer l’équivalence par un changement de couleur du milieu réactionnel

  - la réaction de titrage doit être **totale** (le réactif limitant est entièrement consommé) ;
  - la réaction doit être **rapide** ;
  - la réaction doit être **unique**.

- Équivalence :

  À l’équivalence, les quantités de matière des réactifs (titrant et titré) sont introduites dans les proportions stœchiométriques. Pour une réaction de titrage $aA+bB→cC+dD$, on a :

  $$
  \frac{n_0(A)}{a}=\frac{n_0(B)}{b}
  $$

  Le volume équivalent correspond au volume de la solution titrante ajoutée dans le bécher pour atteindre le point d’équivalence

- Spectroscopie IR

  On peut identifier les différents types de liaisons présentes dans une molécule grâce à la spectroscopie infrarouge (IR). La présence d’une liaison dans la molécule se manifeste par la présence d’une bande d’absorption caractéristique, que l’on reconnaît par son allure et son nombre d’onde. Chaque liaison dans la molécule va vibrer dans une plage de nombres d’onde référencée dans des tables.

:::

## Objectifs

- Connaître et exploiter la loi de Beer-Lambert, la loi de Kohlrausch pour déterminer une concentration ou une quantité de matière.
- Citer les domaines de validité de ces relations.
- Mesurer une conductance, conductivité ou une absorbance et tracer une courbe d’étalonnage pour déterminer une concentration.
- Savoir exploiter, à partir de données tabulées, un spectre d’absorption infrarouge ou UV-visible pour identifier un groupe caractéristique ou une espèce chimique.
- Savoir réaliser une solution de concentration donnée en soluté apporté à partir d’une solution de titre massique et de densité fournis.
- Réaliser un titrage avec suivi pH-métrique ou suivi conductimétrique
- Savoir exploiter un titrage pour déterminer une quantité de matière, une concentration ou une masse.
- Dans le cas d’un titrage avec suivi conductimétrique, justifier qualitativement l’évolution de la pente de la courbe à l’aide de données sur les conductivités ioniques molaires.
- Capacité numérique : Savoir représenter, à l’aide d’un langage de programmation, l’évolution des quantités de matière des espèces en fonction du volume de solution titrante versé.
