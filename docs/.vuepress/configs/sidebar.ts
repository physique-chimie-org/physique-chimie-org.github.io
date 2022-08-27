import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  "/t-spe/": [
    {
      text: "Composition et transformation de la matière",
      collapsible: true,
      children: [
        {
          text: "Evolution spontanée d'un système chimique",
          collapsible: true,
          children: [
            "/t-spe/composition-et-transformation/evolution-spontanee/introduction",
            "/t-spe/composition-et-transformation/evolution-spontanee/equilibre-chimique",
            "/t-spe/composition-et-transformation/evolution-spontanee/hors-equilibre-chimique",
          ],
        },
        {
          text: "Acides et bases",
          collapsible: true,
          children: [
            "/t-spe/composition-et-transformation/acides-et-bases/introduction",
            "/t-spe/composition-et-transformation/acides-et-bases/les-acides-et-les-bases",
            "/t-spe/composition-et-transformation/acides-et-bases/force-des-acides-et-des-bases",
          ],
        },
        {
          text: "Piles et électrolyse",
          collapsible: true,
          children: [
            "/t-spe/composition-et-transformation/piles-et-electrolyse/introduction",
            "/t-spe/composition-et-transformation/piles-et-electrolyse/piles",
            "/t-spe/composition-et-transformation/piles-et-electrolyse/electrolyse",
          ],
        },
        {
          text: "Déterminer la composition d'un système chimique",
          collapsible: true,
          children: [
            "/t-spe/composition-et-transformation/determiner-la-composition/introduction",
            "/t-spe/composition-et-transformation/determiner-la-composition/methodes-chimiques",
            "/t-spe/composition-et-transformation/determiner-la-composition/methodes-physiques",
          ],
        },
        {
          text: "Modéliser l'évolution temporelle d'un systeme chimique",
          collapsible: true,
          children: [
            "/t-spe/composition-et-transformation/evolution-temporelle/introduction",
            "/t-spe/composition-et-transformation/evolution-temporelle/cinetique-chimique",
            "/t-spe/composition-et-transformation/evolution-temporelle/evolution-dun-systeme-chimique",
          ],
        },
      ],
    },
    {
      text: "Mouvements et interactions",
      collapsible: true,
      children: [
        {
          text: "Cinématique",
          collapsible: true,
          children: [
            "/t-spe/mouvement-et-interactions/cinematique/introduction",
            "/t-spe/mouvement-et-interactions/cinematique/vecteur-position",
            "/t-spe/mouvement-et-interactions/cinematique/vecteur-vitesse",
            "/t-spe/mouvement-et-interactions/cinematique/vecteur-acceleration",
            "/t-spe/mouvement-et-interactions/cinematique/mouvements-particuliers",
          ],
        },
        {
          text: "Dynamique et mouvement dans un champ uniforme",
          collapsible: true,
          children: [
            "/t-spe/mouvement-et-interactions/champ-uniforme/introduction",
            "/t-spe/mouvement-et-interactions/champ-uniforme/vocabulaire-et-outils",
            "/t-spe/mouvement-et-interactions/champ-uniforme/deuxieme-loi-de-newton",
            "/t-spe/mouvement-et-interactions/champ-uniforme/aspect-energetique",
            "/t-spe/mouvement-et-interactions/champ-uniforme/methode-de-resolution-de-probleme",
          ],
        },
        {
          text: "Dynamique et mouvement dans un champ uniforme",
          collapsible: true,
          children: [
            "/t-spe/mouvement-et-interactions/champ-non-uniforme/introduction",
            "/t-spe/mouvement-et-interactions/champ-non-uniforme/vocabulaire-et-outils",
            "/t-spe/mouvement-et-interactions/champ-non-uniforme/lois-de-kepler",
            "/t-spe/mouvement-et-interactions/champ-non-uniforme/satellite-en-orbite-circulaire",
          ],
        },
      ],
    },
    {
      text: "Energie : conversions et transferts",
      collapsible: true,
      children: [
        {
          text: "Décrire un système thermodynamique",
          collapsible: true,
          children: [
            "/t-spe/energie-conversions-et-transferts/decrire-un-systeme-thermodynamique/introduction",
            "/t-spe/energie-conversions-et-transferts/decrire-un-systeme-thermodynamique/systeme-thermodynamique",
            "/t-spe/energie-conversions-et-transferts/decrire-un-systeme-thermodynamique/modele-du-gaz-parfait",
          ],
        },
        {
          text: "Premier principe de la thermodynamique",
          collapsible: true,
          children: [
            "/t-spe/energie-conversions-et-transferts/premier-principe-de-la-thermodynamique/introduction",
            "/t-spe/energie-conversions-et-transferts/premier-principe-de-la-thermodynamique/energie-dun-systeme-thermodynamique",
            "/t-spe/energie-conversions-et-transferts/premier-principe-de-la-thermodynamique/premier-principe",
          ],
        },
        {
          text: "Transferts thermiques",
          collapsible: true,
          children: [
            "/t-spe/energie-conversions-et-transferts/transferts-thermiques/introduction",
            "/t-spe/energie-conversions-et-transferts/transferts-thermiques/proprietes-des-transferts-thermiques",
            "/t-spe/energie-conversions-et-transferts/transferts-thermiques/evolution-de-la-temperature-dun-systeme-au-contact-dun-thermostat",
            "/t-spe/energie-conversions-et-transferts/transferts-thermiques/bilan-radiatif-de-la-terre",
          ],
        },
      ],
    },
    {
      text: "Ondes et signaux",
      collapsible: true,
      children: [
        {
          text: "Caractériser les phénomènes ondulatoires",
          collapsible: true,
          children: [
            "/t-spe/ondes-et-signaux/phenomenes-ondulatoires/introduction",
            "/t-spe/ondes-et-signaux/phenomenes-ondulatoires/intensite-et-niveau-sonore",
            "/t-spe/ondes-et-signaux/phenomenes-ondulatoires/diffraction",
            "/t-spe/ondes-et-signaux/phenomenes-ondulatoires/interferences-de-deux-ondes",
            "/t-spe/ondes-et-signaux/phenomenes-ondulatoires/effet-doppler",
          ],
        },
        {
          text: "Lunette astronomique",
          collapsible: true,
          children: [
            "/t-spe/ondes-et-signaux/lunette-astronomique/introduction",
            "/t-spe/ondes-et-signaux/lunette-astronomique/constitution",
            "/t-spe/ondes-et-signaux/lunette-astronomique/construction-des-images",
            "/t-spe/ondes-et-signaux/lunette-astronomique/grossissement",
          ],
        },
        {
          text: "Dynamique d'un système électrique",
          collapsible: true,
          children: [
            "/t-spe/ondes-et-signaux/dynamique-dun-systeme-electrique/introduction",
            "/t-spe/ondes-et-signaux/dynamique-dun-systeme-electrique/condensateur",
            "/t-spe/ondes-et-signaux/dynamique-dun-systeme-electrique/circuit-rc-serie",
          ],
        },
      ],
    },
  ],
};
