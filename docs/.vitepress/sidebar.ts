import { DefaultTheme } from "vitepress/theme";

export const sidebar: DefaultTheme.SidebarMulti = {
    "/t-spe/": [
        {
            text: "Transformations acides bases",
            collapsed: false,
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
            text: "Déterminer la composition d’un système par des méthodes physiques et chimiques",
            collapsed: false,
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
            text: "Évolution spontanée d’un système chimique",
            collapsed: false,
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
                    text: "Évolution spontanée d’un système hors équilibre chimique",
                    link: "/t-spe/composition-et-transformation/evolution-spontanee/hors-equilibre-chimique",
                },
                {
                    text: "Force des acides et des bases",
                    link: "/t-spe/composition-et-transformation/evolution-spontanee/force-acides-bases",
                },
            ],
        },
        {
            text: "Modéliser l’évolution temporelle d’un système chimique",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/introduction",
                },
                {
                    text: "Évolution temporelle",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/evolution-temporelle",
                },
                {
                    text: "Suivi de l’évolution temporelle",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/suivi-evolution-temporelle",
                },
                {
                    text: "Modélisation de l’évolution temporelle",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/modelisation-evolution-temporelle",
                },
            ],
        },
        {
            text: "Cinématique",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/mouvement-et-interactions/cinematique/introduction.md",
                },
                {
                    text: "Référentiel",
                    link: "/t-spe/mouvement-et-interactions/cinematique/referentiel.md",
                },
                {
                    text: "Vecteur position",
                    link: "/t-spe/mouvement-et-interactions/cinematique/vecteur-position.md",
                },
                {
                    text: "Vecteur vitesse",
                    link: "/t-spe/mouvement-et-interactions/cinematique/vecteur-vitesse.md",
                },
                {
                    text: "Vecteur accélération",
                    link: "/t-spe/mouvement-et-interactions/cinematique/vecteur-acceleration.md",
                },
                {
                    text: "Numérique et programmation",
                    link: "/t-spe/mouvement-et-interactions/cinematique/python.md",
                },
            ],
        },
        {
            text: "Mouvement dans un champ non uniforme",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/introduction.md",
                },
                {
                    text: "Lois de Kepler",
                    link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/lois-de-kepler.md",
                },
                {
                    text: "Mouvement circulaire uniforme",
                    link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/circulaire-uniforme.md",
                },
            ],
        },
        {
            text: "Transferts macroscopiques d’énergie",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/introduction.md",
                },
                {
                    text: "Système thermodynamique",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/systeme-thermodynamique.md",
                },
                {
                    text: "Energie interne",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/energie-interne.md",
                },
                {
                    text: "Transmission de la chaleur",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/transmission-chaleur.md",
                },
                {
                    text: "Transferts thermique par conduction",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/transfert-thermique.md",
                },
                {
                    text: "Bilan d’énergie",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/bilan-energie.md",
                },
            ],
        },
    ],
    "/seconde/": [
        {
            text: "Émission et perception des sons",
            collapsed: false,
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
                    text: "Les sons et l’oreille",
                    link: "/seconde/ondes-et-signaux/emission-perception-son/sons-et-oreille",
                },
            ],
        },
        {
            text: "Le noyau de l’atome et son cortège électronique",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/seconde/composition-et-transformation/noyau-et-cortege/introduction.md",
                },
                {
                    text: "Le modèle de l’atome",
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
                {
                    text: "Le périodique des éléments",
                    link: "/seconde/composition-et-transformation/noyau-et-cortege/tableau-periodique.md",
                },
            ],
        },
        {
            text: "Identification des espèces chimiques",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/seconde/composition-et-transformation/identification/introduction.md",
                },
                {
                    text: "Corps purs et mélanges",
                    link: "/seconde/composition-et-transformation/identification/corps-purs-et-melanges.md",
                },
                {
                    text: "Propriétés des espèces chimiques",
                    link: "/seconde/composition-et-transformation/identification/proprietes.md",
                },
                {
                    text: "Méthodes d’identification",
                    link: "/seconde/composition-et-transformation/identification/methodes-identification.md",
                },
            ],
        },
    ],
};
