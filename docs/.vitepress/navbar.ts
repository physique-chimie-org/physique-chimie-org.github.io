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
                        link: "/t-spe/composition-et-transformation/transformations-acides-bases/",
                    },

                    {
                        text: "Déterminer la composition d’un système par des méthodes physiques et chimiques",
                        link: "/t-spe/composition-et-transformation/determiner-la-composition/",
                    },

                    {
                        text: "Évolution spontanée d'un système chimique",
                        link: "/t-spe/composition-et-transformation/evolution-spontanee/",
                    },
                    {
                        text: "Modéliser l’évolution temporelle d’un système chimique",
                        link: "/t-spe/composition-et-transformation/evolution-temporelle/",
                    },
                    /*
                    {
                      text: "Force des acides et des bases",
                      link: "/t-spe/composition-et-transformation/force-acides-bases/",
                    },
                    {
                      text: "Piles et électrolyse",
                      link: "/t-spe/composition-et-transformation/piles-et-electrolyse/",
                    },
                    {
                      text: "Élaborer des stratégies en synthèse organique",
                      link: "/t-spe/composition-et-transformation/strategies-de-synthese/README",
                    },
                    */
                ],
            },
            {
                text: "Mouvements et interactions",
                items: [
                    {
                        text: "Cinématique",
                        link: "/t-spe/mouvement-et-interactions/cinematique/",
                    },
                    {
                        text: "Mouvement dans un champ non uniforme",
                        link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/",
                    },
                    /*
                    {
                      text: "Dynamique et mouvement dans un champ uniforme",
                      link: "/t-spe/mouvements-et-interactions/champ-uniforme/",
                    },
                    */
                ],
            },
            {
                text: "Energie : conversions et transferts",
                items: [
                    {
                        text: "Transferts macroscopiques d’énergie",
                        link: "/t-spe/energie-conversions-et-transferts/thermodynamique/",
                    },
                    /*
                    {
                      text: "Premier principe de la thermodynamique",
                      link: "/t-spe/energie-conversions-et-transferts/premier-principe-de-la-thermodynamique/",
                    },
                    {
                      text: "Transferts thermiques",
                      link: "/t-spe/energie-conversions-et-transferts/transferts-thermiques/",
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
                      link: "/t-spe/ondes-et-signaux/lunette-astronomique/",
                    },
                    {
                      text: "Caractériser les phénomènes ondulatoires",
                      link: "/t-spe/ondes-et-signaux/caracteriser-les-phenomenes-ondulatoires/",
                    },
                    {
                      text: "Dynamique d'un système électrique",
                      link: "/t-spe/ondes-et-signaux/dynamique-dun-systeme-electrique/",
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
                        link: "/seconde/composition-et-transformation/noyau-et-cortege/",
                    },
                    {
                        text: "Identification des espèces chimique",
                        link: "/seconde/composition-et-transformation/identification/",
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
                        link: "/seconde/ondes-et-signaux/emission-perception-son/",
                    },
                ],
            },
        ],
    },
];
