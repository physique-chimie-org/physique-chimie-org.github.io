import { DefaultTheme } from "vitepress/theme";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "Terminale",
    activeMatch: "/t-spe/",
    items: [
      {
        text: "Composition et transformation de la matière",
        items: [
          {
            text: "Transformations acides bases",
            link: "/t-spe/composition-et-transformation/transformations-acides-bases/introduction.md",
          },

          {
            text: "Déterminer la composition d’un système par des méthodes physiques et chimiques",
            link: "/t-spe/composition-et-transformation/determiner-la-composition/introduction.md",
          },

          {
            text: "Évolution spontanée d'un système chimique",
            link: "/t-spe/composition-et-transformation/evolution-spontanee/introduction.md",
          },
          {
            text: "Modéliser l’évolution temporelle d’un système chimique",
            link: "/t-spe/composition-et-transformation/evolution-temporelle/introduction.md",
          },
          /*
          {
            text: "Force des acides et des bases",
            link: "/t-spe/composition-et-transformation/force-acides-bases/introduction.md",
          },
          {
            text: "Piles et électrolyse",
            link: "/t-spe/composition-et-transformation/piles-et-electrolyse/introduction.md",
          },
          {
            text: "Élaborer des stratégies en synthèse organique",
            link: "/t-spe/composition-et-transformation/strategies-de-synthese/README.md",
          },
          */
        ],
      },
      {
        text: "Mouvements et interactions",
        items: [
          {
            text: "Cinématique",
            link: "/t-spe/mouvement-et-interactions/cinematique/introduction.md",
          },
          {
            text: "Mouvement dans un champ non uniforme",
            link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/introduction.md",
          },
          /*
          {
            text: "Dynamique et mouvement dans un champ uniforme",
            link: "/t-spe/mouvements-et-interactions/champ-uniforme/introduction.md",
          },
          */
        ],
      },
      {
        text: "Energie : conversions et transferts",
        items: [
          {
            text: "Transferts macroscopiques d’énergie",
            link: "/t-spe/energie-conversions-et-transferts/thermodynamique/introduction.md",
          },
          /*
          {
            text: "Premier principe de la thermodynamique",
            link: "/t-spe/energie-conversions-et-transferts/premier-principe-de-la-thermodynamique/introduction.md",
          },
          {
            text: "Transferts thermiques",
            link: "/t-spe/energie-conversions-et-transferts/transferts-thermiques/introduction.md",
          },
          */
        ],
      },
      {
        text: "Ondes et signaux",
        items: [
          /*
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
          */
        ],
      },
    ],
  },
  {
    text: "Seconde",
    activeMatch: "/seconde/",
    items: [
      {
        text: "Composition et transformation de la matière",
        items: [
          {
            text: "Le noyau de l'atome et son cortège électronique",
            link: "/seconde/composition-et-transformation/noyau-et-cortege/introduction.md",
          },
          {
            text: "Identification des espèces chimique",
            link: "/seconde/composition-et-transformation/identification/introduction.md",
          },
        ],
      },

      {
        text: "Mouvements et interactions",
        items: [],
      },
      {
        text: "Ondes et signaux",
        items: [
          {
            text: "Émission et perception des sons",
            link: "/seconde/ondes-et-signaux/emission-perception-son/introduction.md",
          },
        ],
      },
    ],
  },
];
