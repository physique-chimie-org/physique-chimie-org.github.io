import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
  {
    text: "Terminale",
    children: [
      {
        text: "Composition et transformation de la matière",
        children: [
          {
            text: "Transformations acides bases",
            link: "/t-spe/composition-et-transformation/transformations-acides-bases/introduction.md",
          },
          {
            text: "Déterminer la composition d’un système par des méthodes physiques et chimiques",
            link: "/t-spe/composition-et-transformation/determiner-la-composition/README.md",
          },
          {
            text: "Evolution spontanée d'un système chimique",
            link: "/t-spe/composition-et-transformation/evolution-spontanee/introduction.md",
          },
          {
            text: "Force des acides et des bases",
            link: "/t-spe/composition-et-transformation/force-acides-bases/introduction.md",
          },
          {
            text: "Piles et électrolyse",
            link: "/t-spe/composition-et-transformation/piles-et-electrolyse/introduction.md",
          },
          {
            text: "Modéliser l’évolution temporelle d’un système chimique",
            link: "/t-spe/composition-et-transformation/evolution-temporelle/README.md",
          },
          {
            text: "Élaborer des stratégies en synthèse organique",
            link: "/t-spe/composition-et-transformation/strategies-de-synthese/README.md",
          },
        ],
      },
      {
        text: "Mouvements et interactions",
        children: [
          {
            text: "Cinématique",
            link: "/t-spe/mouvements-et-interactions/cinematique/introduction.md",
          },
          {
            text: "Dynamique et mouvement dans un champ uniforme",
            link: "/t-spe/mouvements-et-interactions/champ-uniforme/introduction.md",
          },
          {
            text: "Mouvement dans un champ non uniforme",
            link: "/t-spe/mouvements-et-interactions/champ-non-uniforme/introduction.md",
          },
        ],
      },
      {
        text: "Energie : conversions et transferts",
        children: [
          {
            text: "Décrire un système thermodynamique",
            link: "/t-spe/energie-conversions-et-transferts/decrire-un-systeme-thermodynamique/introduction.md",
          },
          {
            text: "Premier principe de la thermodynamique",
            link: "/t-spe/energie-conversions-et-transferts/premier-principe-de-la-thermodynamique/introduction.md",
          },
          {
            text: "Transferts thermiques",
            link: "/t-spe/energie-conversions-et-transferts/transferts-thermiques/introduction.md",
          },
        ],
      },
      {
        text: "Ondes et signaux",
        children: [
          {
            text: "Lunette astronomique",
            link: "/t-spe/ondes-et-signaux/lunette-astronomique/introduction.md",
          },
          {
            text: "Caractériser les phénomènes ondulatoires",
            link: "/t-spe/ondes-et-signaux/caracteriser-les-phenomenes-ondulatoires/introduction.md",
          },
          {
            text: "Dynamique d'un système électrique",
            link: "/t-spe/ondes-et-signaux/dynamique-dun-systeme-electrique/introduction.md",
          },
        ],
      },
    ],
  },
];
