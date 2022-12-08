import { DefaultTheme } from "vitepress/theme"

export const sidebar: DefaultTheme.SidebarMulti = {
  "/t-spe/": [
    {
      text: "Transformations acides bases",
      collapsible: true,
      items: [
        {
          text: "Introduction",
          link: "/t-spe/composition-et-transformation/transformations-acides-bases/introduction",
        },
        {
          text: "Les acides et les bases",
          link: "/t-spe/composition-et-transformation/transformations-acides-bases/les-acides-et-les-bases",
        },
        {
          text: "Le pH en solution",
          link: "/t-spe/composition-et-transformation/transformations-acides-bases/ph-en-solution",
        },
      ],
    },
    {
      text: "Déterminer la composition d'un système par des méthodes physiques et chimiques",
      collapsible: true,
      items: [
        {
          text: "Introduction",
          link: "/t-spe/composition-et-transformation/determiner-la-composition/introduction",
        },
        {
          text: "Méthodes physiques",
          link: "/t-spe/composition-et-transformation/determiner-la-composition/methodes-physiques",
        },
        {
          text: "Méthodes chimiques",
          link: "/t-spe/composition-et-transformation/determiner-la-composition/methodes-chimiques",
        },
      ],
    },
    {
      text: "Évolution spontanée d'un système chimique",
      collapsible: true,
      items: [
        {
          text: "Introduction",
          link: "/t-spe/composition-et-transformation/evolution-spontanee/introduction",
        },
        {
          text: "Équilibre chimique",
          link: "/t-spe/composition-et-transformation/evolution-spontanee/equilibre-chimique",
        },
        {
          text: "Évolution spontanée d'un système hors équilibre chimique",
          link: "/t-spe/composition-et-transformation/evolution-spontanee/hors-equilibre-chimique",
        },
      ],
    },
  ],
  "/seconde/": [
    {
      text: "Émission et perception des sons",
      collapsible: true,
      items: [
        {
          text: "Introduction",
          link: "/seconde/ondes-et-signaux/emission-perception-son/introduction",
        },
        {
          text: "Les sons et leurs propagation",
          link: "/seconde/ondes-et-signaux/emission-perception-son/son-et-propagation",
        },
        {
          text: "Les sons périodiques",
          link: "/seconde/ondes-et-signaux/emission-perception-son/sons-periodiques",
        },
        {
          text: "Les sons et l'oreille",
          link: "/seconde/ondes-et-signaux/emission-perception-son/sons-et-oreille",
        },
      ],
    },
    {
      text: "Le noyau de l'atome et son cortège électronique",
      collapsible: true,
      items: [
        {
          text: "Introduction",
          link: "/seconde/composition-et-transformation/noyau-et-cortege/introduction.md",
        },
        {
          text: "Le modèle de l'atome",
          link: "/seconde/composition-et-transformation/noyau-et-cortege/modele.md",
        },
        {
          text: "Le noyau",
          link: "/seconde/composition-et-transformation/noyau-et-cortege/noyau.md",
        },
        {
          text: "Le cortège électronique",
          link: "/seconde/composition-et-transformation/noyau-et-cortege/cortege.md",
        },
      ],
    },
  ],
};
