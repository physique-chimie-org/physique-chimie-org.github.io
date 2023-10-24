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
                        link: "/t-spe/composition-et-transformation/transformations-acides-bases/index.md",
                    },

                    {
                        text: "Déterminer la composition d’un système par des méthodes physiques et chimiques",
                        link: "/t-spe/composition-et-transformation/determiner-la-composition/index.md",
                    },

                    {
                        text: "Évolution spontanée d'un système chimique",
                        link: "/t-spe/composition-et-transformation/evolution-spontanee/index.md",
                    },
                    {
                        text: "Modéliser l’évolution temporelle d’un système chimique",
                        link: "/t-spe/composition-et-transformation/evolution-temporelle/index.md",
                    },
                    /*
                    {
                      text: "Force des acides et des bases",
                      link: "/t-spe/composition-et-transformation/force-acides-bases/index.md",
                    },
                    {
                      text: "Piles et électrolyse",
                      link: "/t-spe/composition-et-transformation/piles-et-electrolyse/index.md",
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
                        link: "/t-spe/mouvement-et-interactions/cinematique/index.md",
                    },
                    {
                        text: "Mouvement dans un champ non uniforme",
                        link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/index.md",
                    },
                    /*
                    {
                      text: "Dynamique et mouvement dans un champ uniforme",
                      link: "/t-spe/mouvements-et-interactions/champ-uniforme/index.md",
                    },
                    */
                ],
            },
            {
                text: "Energie : conversions et transferts",
                items: [
                    {
                        text: "Transferts macroscopiques d’énergie",
                        link: "/t-spe/energie-conversions-et-transferts/thermodynamique/index.md",
                    },
                    /*
                    {
                      text: "Premier principe de la thermodynamique",
                      link: "/t-spe/energie-conversions-et-transferts/premier-principe-de-la-thermodynamique/index.md",
                    },
                    {
                      text: "Transferts thermiques",
                      link: "/t-spe/energie-conversions-et-transferts/transferts-thermiques/index.md",
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
                      link: "/t-spe/ondes-et-signaux/lunette-astronomique/index.md",
                    },
                    {
                      text: "Caractériser les phénomènes ondulatoires",
                      link: "/t-spe/ondes-et-signaux/caracteriser-les-phenomenes-ondulatoires/index.md",
                    },
                    {
                      text: "Dynamique d'un système électrique",
                      link: "/t-spe/ondes-et-signaux/dynamique-dun-systeme-electrique/index.md",
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
                        link: "/seconde/composition-et-transformation/noyau-et-cortege/index.md",
                    },
                    {
                        text: "Identification des espèces chimique",
                        link: "/seconde/composition-et-transformation/identification/index.md",
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
                        link: "/seconde/ondes-et-signaux/emission-perception-son/index.md",
                    },
                ],
            },
        ],
    },
];
